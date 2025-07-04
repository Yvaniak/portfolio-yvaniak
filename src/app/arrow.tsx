"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
//icons
import { useEffect, useState } from "react";
import { MingcuteArrowRightFill } from "@/components/icons";
import { Card, CardHeader } from "@/components/ui/card";
import { constClassName } from "@/lib/utils";

export default function Arrow() {
	useTheme();
	const [, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const [, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<div className="space-x-2" title="flèche">
			<Card className={constClassName}>
				<CardHeader>{MingcuteArrowRightFill()}</CardHeader>

				<header>
					<nav className="p-4">
						<ul className="container flex gap-8">
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/test">Test</Link>
							</li>
						</ul>
					</nav>
				</header>
			</Card>
			{/* <header>
					<nav className="p-4">
						<ul className="container flex gap-8">
							<li>
								<Link href="/test">test</Link>
							</li>
						</ul>
					</nav>
				</header> */}
		</div>
	);
}
