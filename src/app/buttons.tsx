"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
//icons
import { useEffect, useState } from "react";
import {
	MingcuteDiscordFill,
	MingcuteGithubFill,
	MingcuteMailFill,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { constClassName } from "@/lib/utils";

export default function Buttons() {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const [, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<div className="space-x-2" title="buttons">
			<Button
				asChild
				variant={
					!mounted
						? "default"
						: resolvedTheme === "dark"
							? "default"
							: "outline"
				}
				className={
					"hoverable" + " dark:text-black dark:bg-white bg-black text-white"
				}
				title="button github"
			>
				<Link target="_blank" href="https://github.com/Yvaniak">
					{/*<Github className="mr-2 h-4 w-4" />*/}
					{MingcuteGithubFill({ className: "mr-1" })}
					Github
				</Link>
			</Button>
			<Button
				asChild
				variant={
					!mounted
						? "default"
						: resolvedTheme === "dark"
							? "default"
							: "outline"
				}
				className={`hoverable${constClassName}`}
				title="button email"
			>
				<Link target="_blank" href="mailto:pro@yvaniak.fr">
					{/*<Mail className="mr-2 h-4 w-4" />*/}
					{MingcuteMailFill({ className: "mr-1" })}
					Email
				</Link>
			</Button>
			<Button
				asChild
				variant={
					!mounted
						? "default"
						: resolvedTheme === "dark"
							? "default"
							: "outline"
				}
				className={`hoverable${constClassName}`}
				title="button discord"
			>
				<Link
					target="_blank"
					className="fill-accent-foreground/90 stroke-2 stroke-accent"
					href="https://discordapp.com/users/265535185829756929"
				>
					{MingcuteDiscordFill({ className: "mr-1" })}
					Discord
				</Link>
			</Button>
		</div>
	);
}
