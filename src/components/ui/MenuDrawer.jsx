import { FaArrowLeft } from "react-icons/fa6";
import { Button } from "../ui/button";
import Link from "next/link";
import { MENU_ITEMS } from "../../constants/menuItems";

export default function MenuDrawer({isMenuOpen, setIsMenuOpen}) {
  return (
    <div
      className={`fixed h-screen w-64 bg-gray-500 ${isMenuOpen ? 'left-0 top-0' : 'hidden'}`}
    >
      <Button
        aria-label="close"
        role="button"
        onClick={() => setIsMenuOpen(false)}
        variant="default"
        className="m-4 size-12"
      >
        <FaArrowLeft />
      </Button>
      <nav className={`flex flex-col gap-4 p-4`}>
        {MENU_ITEMS.map((item, index) => (
          <Link key={index} href={item.url} onClick={() => setIsMenuOpen(false)}>
            {item.text}
          </Link>
        ))}
      </nav>
    </div>
  );
}
