//ui
//carte
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ContactCarte() {
  return (
    <Card className="scale-50 font-bold">
      <CardFooter className="p-6 justify-center">
        <p>Contact me for your projects !</p>
      </CardFooter>
    </Card>
  );
}
