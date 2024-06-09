import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  title?: string;
  balance?: string;
  children?: React.ReactNode;
  isLoading: boolean;
};

export function StakingCard({ title, balance, children, isLoading }: Props) {
  return (
    <Card>
      <CardHeader>
        {title && <CardTitle>{title}</CardTitle>}
        <CardDescription>
          {isLoading ? <Skeleton className="h-4 w-[200px]" /> : balance}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 col-auto auto-cols-auto">
          {isLoading ? <Skeleton className="h-8 w-full" /> : children}
        </div>
      </CardContent>
    </Card>
  );
}
