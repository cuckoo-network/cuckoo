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

        const updateAccountResult = await updateAccount({
          variables: {
            data: {
              type: "ERC4361_GET_MESSAGE",
              address,
            },
          },
        });

        const erc4361Message =  updateAccountResult.data?.updateAccount.erc4361Message;
        if (!erc4361Message) {
          console.error(`failed to get erc4361Message`);
          return;
        }

        console.log("erc4361Message: ", erc4361Message);

        const signature = await signer!.signMessage(erc4361Message);

        console.log("Signature:", signature);

        const updateAccountResult2 = await updateAccount({
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

        console.log("updateAccountResult2: ", updateAccountResult2);

        await onClaim(AirdropType.STAKE_CAI);
      })();
    },
    [address, connect, updateAccount, onClaim, signer],
  );
  return { linkAccountLoading, onClaimLinkingWallet };
}
