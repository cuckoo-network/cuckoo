import { Button } from "@/components/ui/button";
import { DashLayout } from "@/components/ui/dash-layout";
export default function FaucetPage() {
  return (
    <DashLayout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Faucet</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">Coming Soon</h3>
        </div>
      </div>
    </DashLayout>
  );
}
