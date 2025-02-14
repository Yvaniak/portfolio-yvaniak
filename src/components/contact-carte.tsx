//ui
//carte
import {
	Card,
	CardFooter,
	CardContent as _CardContent,
	CardDescription as _CardDescription,
	CardHeader as _CardHeader,
	CardTitle as _CardTitle,
} from "@/components/ui/card";
import { constClassName } from "@/lib/utils";

export default function ContactCarte() {
	return (
		<Card className={`scale-50 font-bold${constClassName}`}>
			<CardFooter className="p-6 justify-center text-xl ">
				<p>Contact me for your projects !</p>
			</CardFooter>
		</Card>
	);
}
