import { HomeIcon, RectangleStackIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ColorModeToggle } from "./ui/color-mode-toggle";

export default function Nav() {
  return (
    <nav className="fixed z-50 w-full bg-gray-100 p-2 dark:bg-gray-800">
      <ul className="flex gap-3">
        <li>
          <Link href="/">
            <Button variant="outline">
              <HomeIcon width={18} className="mr-2" />
              Home
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <Button variant="outline">
              <RectangleStackIcon width={18} className="mr-2" />
              Blog
            </Button>
          </Link>
        </li>
        <li className="ml-auto">
          <ColorModeToggle />
        </li>
      </ul>
    </nav>
  );
}
