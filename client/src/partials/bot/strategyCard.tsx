import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

interface StrategyCardProps {
  className: string;
  title: string;
  description: string;
  footer?: string;
  content: string | JSX.Element | null;
}

const StrategyCard = ({className, title, description, content, footer = ""}: StrategyCardProps) => {
  return (
    <Card className={`w-[380px] ${className}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardContent>
          {content}
        </CardContent>
      </CardHeader>
      {
        footer &&
        <CardFooter>
          <p>{footer}</p>
        </CardFooter>
      }
    </Card>
  )
}

export default StrategyCard
