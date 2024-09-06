import Link from "next/link";

//ui
//buttons
import { buttonVariants } from "@/components/ui/button"
import { Button } from "@/components/ui/button"

//icons
import { Github } from "lucide-react"
import { Mail } from "lucide-react"
import { SiDiscord } from '@icons-pack/react-simple-icons'

export default function Buttons() {
  return (
    <div className="space-x-2">
      <Button asChild className=" variant='outline' en mode blanc */"> 
        <Link href="https://github.com/Yvaniak">
          <Github className="mr-2 h-4 w-4"/>
          Github
        </Link>
      </Button>
      <Button asChild>
        <Link href="mailto:pro@yvaniak.fr">
          <Mail className="mr-2 h-4 w-4"/>
          Email
        </Link>
      </Button>
      <Button asChild>
        <Link className="fill-accent-foreground/90 stroke-2 stroke-accent" href="https://discord.com/invite/8Xhvt4cm">
          <SiDiscord className="mr-2 h-4 wy-4 wx-4.5 fill-primary/10 stroke-2 stroke-primary-foreground"/>
          Discord
        </Link>
      </Button>
    </div>
  );
}
