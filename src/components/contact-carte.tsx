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
import { constClassName } from "@/lib/utils";

export default function ContactCarte() {
  return (
    <Card className={"scale-50 font-bold" + constClassName}>
      <CardFooter className="p-6 justify-center text-xl ">
        <p>Contact me for your projects !</p>
      </CardFooter>
    </Card>
  );
}
