import Link from "next/link";
import { Button } from "../components/ui/button";

export default function ContactMe() {
  return (
    <section className="py-24 text-center">
      <h2 className="pb-12 text-center text-2xl font-bold uppercase tracking-widest text-secondary-light dark:text-secondary-dark">
        Contact Form
      </h2>
      <Link
        href="https://docs.google.com/forms/d/17fecXpY0G64QABPcjp_o8Vsf5DzErFWD6gH-6mJZVGg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>Link to Google Form</Button>
      </Link>
    </section>
  );
}
