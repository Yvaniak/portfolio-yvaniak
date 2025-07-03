//ui
//carte
import { Card, CardFooter } from "@/components/ui/card";
import { constClassName } from "@/lib/utils";

export default function ContactCarte() {
	return (
		<Card className={`scale-50 font-bold${constClassName}`}>
			<CardFooter className="p-6 justify-center text-xl ">
				<p>Contactez-moi pour vos projets</p>
			</CardFooter>
		</Card>
	);
}
