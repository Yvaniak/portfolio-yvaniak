"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

//icons
import React from "react";

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
    <div className="space-x-2">
      <Button
        asChild
        variant={
          !mounted
            ? "default"
            : resolvedTheme === "dark"
              ? "default"
              : "outline"
        }
        className={"hoverable" + " dark:text-black dark:bg-white bg-black text-white"}
      >
        <Link target="_blank" href="https://github.com/Yvaniak">
          {/*<Github className="mr-2 h-4 w-4" />*/}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className="mr-2 h-4 w-4"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            >
              <path
                strokeDasharray={32}
                strokeDashoffset={32}
                d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.7s"
                  values="32;0"
                ></animate>
              </path>
              <path
                strokeDasharray={10}
                strokeDashoffset={10}
                d="M9 19c-1.41 0 -2.84 -0.56 -3.69 -1.19c-0.84 -0.63 -1.09 -1.66 -2.31 -2.31"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.8s"
                  dur="0.2s"
                  values="10;0"
                ></animate>
              </path>
            </g>
          </svg>
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
        className={"hoverable" + constClassName}
      >
        <Link target="_blank" href="mailto:pro@yvaniak.fr">
          {/*<Mail className="mr-2 h-4 w-4" />*/}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className="mr-2 h-4 w-4"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            >
              <path
                strokeDasharray={64}
                strokeDashoffset={64}
                d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.6s"
                  values="64;0"
                ></animate>
              </path>
              <path
                strokeDasharray={24}
                strokeDashoffset={24}
                d="M3 6.5l9 5.5l9 -5.5"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.6s"
                  dur="0.2s"
                  values="24;0"
                ></animate>
              </path>
            </g>
          </svg>
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
        className={"hoverable" + constClassName}
      >
        <Link
          target="_blank"
          className="fill-accent-foreground/90 stroke-2 stroke-accent"
          href="https://discord.com/invite/8Xhvt4cm"
        >
          {/*<SiDiscord className="mr-2 h-4 wy-4 wx-4.5 dark:fill-primary/10 stroke-2 dark:fill-accent-foreground dark:stroke-primary-foreground fill-accent-foreground/90 stroke-accent" />*/}
          {/*<SiDiscord />*/}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className="mr-2 h-4 w-4"
          >
            <g fill="currentColor" fillOpacity={0}>
              <circle cx={9} cy={12} r={1.5}>
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="1.3s"
                  dur="0.15s"
                  values="0;1"
                ></animate>
              </circle>
              <circle cx={15} cy={12} r={1.5}>
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="1.45s"
                  dur="0.15s"
                  values="0;1"
                ></animate>
              </circle>
            </g>
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
            >
              <path
                strokeDasharray={32}
                strokeDashoffset={32}
                d="M12 6h2l1 -2c0 0 2.5 0.5 4 1.5c3.53 2.35 3 9.5 3 10.5c-1.33 2.17 -5.5 3.5 -5.5 3.5l-1 -2M12 6h-2l-0.97 -2c0 0 -2.5 0.5 -4 1.5c-3.53 2.35 -3 9.5 -3 10.5c1.33 2.17 5.5 3.5 5.5 3.5l1 -2"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.7s"
                  values="32;0"
                ></animate>
              </path>
              <path
                strokeDasharray={16}
                strokeDashoffset={16}
                d="M5.5 16c5 2.5 8 2.5 13 0"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.8s"
                  dur="0.4s"
                  values="16;0"
                ></animate>
              </path>
            </g>
          </svg>
          Discord
        </Link>
      </Button>
    </div>
  );
}
