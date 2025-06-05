"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

//icons
import React from "react";

import { constClassName } from "@/lib/utils";

import {
	MingcuteDiscordFill,
	MingcuteGithubFill,
	MingcuteMailFill,
	MingcuteArrowRightFill,
} from "@/components/icons";

import {
	Card,
	CardFooter,
	CardHeader,
	CardTitle,
	CardContent as _CardContent,
	CardDescription as _CardDescription,
} from "@/components/ui/card";


export default function Arrow() {
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
		<div className="space-x-2" title="flèche">
			<Card className={constClassName}>
				<CardHeader>
					{MingcuteArrowRightFill( {})}
				</CardHeader>
			</Card>
		</div>
	);
}
