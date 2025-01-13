//ui
//carte
import {
  Card,
  CardContent as _CardContent,
  CardDescription as _CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { constClassName } from "@/lib/utils";
export default function Carte() {
  return (
    <Card className={constClassName}>
      <CardHeader>
        <CardTitle>Yvaniak</CardTitle>
      </CardHeader>
      <CardFooter>
        <p>Software developer</p>
      </CardFooter>
    </Card>
  );
}
