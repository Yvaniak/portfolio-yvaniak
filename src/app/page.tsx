import Buttons from "./buttons";
import Carte from "./carte";
import ContactCarte from "./contact-carte";
import Cercle from "./cercle";
import { ModeToggle } from "./themeButton";

export default function Home() {
  return (
    <>
      <div className="static flex justify-center items-center h-screen select-none">
        <div className="grid grid-cols-1 sm:scale-150">
          <div className="mb-14">
            <Carte />
          </div>
          <div>
            <ContactCarte />
          </div>
          <div>
            <Buttons />
          </div>
        </div>
        <Cercle />
      </div>
      <div className="absolute top-10 right-10 sm:right-14">
        <ModeToggle />
      </div>
    </>
  );
}
