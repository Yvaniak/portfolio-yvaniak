"use client"
import Link from "next/link";

//ui
//buttons
import { buttonVariants } from "@/components/ui/button"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

//icons
import { Github } from "lucide-react"
import { Mail } from "lucide-react"
import { SiDiscord } from '@icons-pack/react-simple-icons'

export default function Buttons() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="space-x-2">
      <Button asChild variant={ resolvedTheme=="dark" ? "default" : "outline"} className="hover:bg-accent hover:text-accent-foreground hover:border ring-offset-background focus-visible:outline-none focus-visible:ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"> 
        <Link href="https://github.com/Yvaniak">
          <Github className="mr-2 h-4 w-4"/>
          Github
        </Link>
      </Button>
      <Button asChild variant={ resolvedTheme=="dark" ? "default" : "outline"} className="hover:bg-accent hover:text-accent-foreground hover:border"> 
        <Link href="mailto:pro@yvaniak.fr">
          <Mail className="mr-2 h-4 w-4"/>
          Email
        </Link>
      </Button>
      <Button asChild variant={ resolvedTheme=="dark" ? "default" : "outline"} className="hover:bg-accent hover:text-accent-foreground hover:border"> 
        <Link className="fill-accent-foreground/90 stroke-2 stroke-accent" href="https://discord.com/invite/8Xhvt4cm">
          <SiDiscord className="mr-2 h-4 wy-4 wx-4.5 dark:fill-primary/10 stroke-2 dark:fill-accent-foreground dark:stroke-primary-foreground fill-accent-foreground/90 stroke-accent"/>
          Discord
        </Link>
      </Button>
    </div>
  );
}
