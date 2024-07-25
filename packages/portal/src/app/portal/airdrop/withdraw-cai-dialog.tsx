import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef } from "react";
import serialize from "form-serialize";
import { useSendTransaction } from "@/app/portal/airdrop/hooks/use-send-transaction";
import { ethers } from "ethers";

export function WithdrawCaiDialog({
  walletAddress,
  amount,
  nonce,
}: {
  walletAddress: string;
  amount: string;
  nonce: string;
}) {
  const { sendTransaction, sendTransactionLoading } = useSendTransaction();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Withdraw</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Withdraw from Managed Wallet</DialogTitle>
          <DialogDescription>
            <a
              className="text-blue-600"
              target="_blank"
              href={`https://scan.cuckoo.network/address/${walletAddress}`}
            >
              {walletAddress}
            </a>

            <p>
              $CAI Credits from Cuckoo Network that is available for
              transferring to other wallet addresses.
            </p>
          </DialogDescription>
        </DialogHeader>
        <form ref={formRef} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="address" className="text-right">
              Address
            </Label>
            <Input
              name="address"
              defaultValue=""
              placeholder={"0x4242424242424242424242424242424242424242"}
              className="col-span-3"
            />
          </div>
        </form>
        <DialogFooter>
          <Button
            isLoading={sendTransactionLoading}
            disabled={sendTransactionLoading}
            type="submit"
            onClick={async (e) => {
              e.preventDefault();
              const obj = serialize(formRef.current!, { hash: true });
              const resp = await sendTransaction({
                variables: {
                  transaction: {
                    to: obj.address,
                    value: ethers.utils
                      .parseUnits(amount, "wei")
                      .sub(ethers.utils.parseEther("0.01"))
                      .toString(),
                    nonce: String(nonce),
                  },
                },
              });
              console.log("sendTransaction resp", resp);
              if (!resp?.data?.sendTransaction?.hash) {
              } else {
                window.location.reload();
              }
            }}
          >
            Send
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
