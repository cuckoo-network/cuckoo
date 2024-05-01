import { DashLayout } from "@/components/ui/dash-layout";
import StepsForm from "@/app/portal/faucet/steps-form";
import {CardDescription, CardTitle} from "@/components/ui/card";

export default function FaucetPage() {
  return (
    <DashLayout>
      <div className="flex flex-col">
        <CardTitle className="text-lg font-semibold md:text-2xl">
          Faucet
        </CardTitle>
        <CardDescription>
          Complete a series of steps below to get CUC.
        </CardDescription>
      </div>

      <StepsForm/>

    </DashLayout>
  );
}
