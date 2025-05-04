import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ThemedIcon from "../components/ThemedIcon";

export default async function Hero() {
  return (
    <section
      className="relative flex h-screen w-full flex-col items-center justify-center"
      data-testid="hero"
    >
      <h1 className="text-center text-3xl tracking-widest md:text-5xl lg:text-7xl">
        Hello! I am{" "}
        <span className="text-secondary-light dark:text-secondary-dark">
          {`<Akash />`}
        </span>
      </h1>
      <h2 className="text-md mb-3 mt-2 md:text-xl lg:text-2xl">
        A senior front-end developer
      </h2>
      <ul className="flex gap-3 mb-[10vh]">
        <li>
          <Link
            href="https://www.linkedin.com/in/akash-fe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ThemedIcon
              src="/icons/linkedin.svg"
              alt="Linkedin"
              width={24}
              height={24}
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/akash191095"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ThemedIcon
              src="/icons/github.svg"
              alt="Github"
              width={24}
              height={24}
            />
          </Link>
        </li>
      </ul>
      <ChevronDoubleDownIcon className="absolute top-3/4 h-10 w-10 animate-pulse md:h-12 md:w-12" />
    </section>
  );
}
