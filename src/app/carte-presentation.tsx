//ui
//carte
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { constClassName } from "@/lib/utils";
export default function Carte() {
	return (
		<Card className={constClassName}>
			<CardHeader>
				<CardTitle>Ewen Philippot</CardTitle>
			</CardHeader>
			<CardFooter>
				<p>Développeur</p>
			</CardFooter>
		</Card>
	);
}
