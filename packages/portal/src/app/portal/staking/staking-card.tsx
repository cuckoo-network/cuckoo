import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = { title: string, balance?: string, children?: React.ReactNode }

export function StakingCard({ title, balance, children }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{balance}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 col-auto auto-cols-auto">{children}</div>
      </CardContent>
    </Card>
  );
}
