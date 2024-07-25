import { AirdropType } from "@/app/portal/airdrop/selectors/select-history-items";
import {
  metamaskWallet,
  useAddress,
  useConnect,
  useSigner,
} from "@thirdweb-dev/react";
import { useUpdateAccount } from "@/app/portal/airdrop/hooks/use-update-account";
import { useCallback } from "react";

const metamaskConfig = metamaskWallet();

export enum AddressType {
  MINER_WALLET_ADDRESS = "MINER_WALLET_ADDRESS",
  STAKER_WALLET_ADDRESS = "STAKER_WALLET_ADDRESS",
}

export function useOnClaimLinkingWallet(
  onClaim: (type: AirdropType, amount?: number) => Promise<void>,
) {
  const connect = useConnect();
  const address = useAddress();
  const signer = useSigner();
  const { linkAccountLoading, updateAccount } = useUpdateAccount();
  const onClaimLinkingWallet = useCallback(
    (addressType: AddressType) => {
      (async () => {
        await connect(metamaskConfig);

        const {
          data: {
            updateAccount: { erc4361Message },
          },
        } = await updateAccount({
          variables: {
            data: {
              type: "ERC4361_GET_MESSAGE",
              address,
            },
          },
        });

        console.log("erc4361Message: ", erc4361Message);

        const signature = await signer!.signMessage(erc4361Message);

        console.log("Signature:", signature);

        const {
          data: { updateAccount: linkResult },
        } = await updateAccount({
          variables: {
            data: {
              type: "ERC4361_VERIFY_SIG",
              address,
              signature,
              erc4361Message,
              addressType,
            },
          },
        });

        console.log("linkResult: ", linkResult);

        await onClaim(AirdropType.STAKE_CAI);
      })();
    },
    [address, connect, updateAccount, onClaim, signer],
  );
  return { linkAccountLoading, onClaimLinkingWallet };
}
