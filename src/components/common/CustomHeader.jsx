import { FaBars } from "react-icons/fa6";
import { Button } from "../ui/button";
import Link from "next/link";
import { MENU_ITEMS } from "../../constants/menuItems";
import MenuDrawer from "../ui/MenuDrawer";

export default function CustomHeader() {
  return (
    <div className={`w-full bg-yellow-300`}>
      <MenuDrawer />
      <header>
        <Button aria-label="menu" role="button" variant="default">
          <FaBars />
        </Button>

        <h1>My-site</h1>
        <nav>
          {MENU_ITEMS.map((item,index) => (
            <Link key={index} href={item.url}>
              {item.text}
            </Link>
          ))}
        </nav>
      </header>
    </div>
  );
}
