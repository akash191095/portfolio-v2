"use client";
import { useTheme } from "next-themes";
import VerticalLinedItem from "../components/VerticalLinedItem";
import { useEffect, useState } from "react";

export default function Exprience() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="py-24">
      <h2 className="pb-12 text-center text-2xl font-bold uppercase tracking-widest text-secondary-light dark:text-secondary-dark">
        Experience
      </h2>
      <VerticalLinedItem
        title="Andisor"
        logo="/icons/andisor.jpeg"
        logoAlt="Andisor"
      >
        <p className="pb-2 font-semibold">
          Front End Developer (Jan 2024 - Present)
        </p>
        <p className="pb-2 text-sm text-gray-600 dark:text-gray-400">
          Melbourne, Australia
        </p>
        <ul className="list-disc">
          <li className="ml-5">
            <p>
              Executed complete UI overhaul modernising website design and
              increasing visual appeal
            </p>
          </li>
          <li className="ml-5">
            <p>Developed dashboard to manage private product collections</p>
          </li>
          <li className="ml-5">
            <p>
              Implemented backend and frontend for profile update feature,
              enabling brands to suggest changes to retailer profile
            </p>
          </li>
          <li className="ml-5">
            <p>
              Implemented custom navigation for brands, enabling brands to
              customise the theme and structure of the navbar
            </p>
          </li>
        </ul>
      </VerticalLinedItem>
      <VerticalLinedItem title="ULA" logo="/icons/ula.png" logoAlt="ULA">
        <p className="pb-2 font-semibold">
          Senior Front End Developer (Jan 2022 - May 2023)
        </p>
        <p className="pb-2 text-sm text-gray-600 dark:text-gray-400">
          Bengaluru, Karnataka
        </p>
        <ul className="list-disc">
          <li className="ml-5">
            <p>
              Migrated gamification service from a third party provider to an
              in-house platform reducing campaign launch time from 5 days to 10
              minutes
            </p>
          </li>
          <li className="ml-5">
            <p>
              Took ownership of a progressive web app to ensure accessibility
              for users with low-end devices and slower networks, broadening
              user reach
            </p>
          </li>
          <li className="ml-5">
            <p>
              Built a dashboard to customise mobile app banners, enabling brands
              to modify size, background colors, and text of banners
            </p>
          </li>
          <li className="ml-5">
            <p>
              Mentored junior developers across teams, providing guidance on
              front-end development best practices and improving team efficiency
            </p>
          </li>
        </ul>
      </VerticalLinedItem>
      <VerticalLinedItem
        title="Mool"
        logo={
          resolvedTheme === "light"
            ? "/icons/mool-light.png"
            : "/icons/mool.png"
        }
        logoAlt="Mool"
      >
        <p className="pb-2 font-semibold">
          Senior Front End Developer (Dec 2020 - Jan 2022)
        </p>
        <p className="pb-2 text-sm text-gray-600 dark:text-gray-400">
          Bengaluru, Karnataka
        </p>
        <ul className="list-disc">
          <li className="ml-5">
            <p>
              Developed a neo-banking app using React Native, enabling essential
              features like account creation and bank transfers
            </p>
          </li>
          <li className="ml-5">
            <p>
              Achieved a user base of over 200,000 within six weeks of launch
            </p>
          </li>
          <li className="ml-5">
            <p>
              Implemented multi-lingual support, adding languages such as Hindi,
              Hinglish, and English, to improve accessibility and user
              engagement
            </p>
          </li>
          <li className="ml-5">
            <p>
              Collaborated closely with the design team to ensure technical
              feasibility of designs
            </p>
          </li>
        </ul>
      </VerticalLinedItem>
      <VerticalLinedItem
        title="The Knotty Tales"
        logo={"/icons/knotty.png"}
        logoAlt="The Knotty Tales"
      >
        <p className="pb-2 font-semibold">
          Full Stack Assistant Manager Of Technology (Dec 2019 - May 2020)
        </p>
        <p className="pb-2 text-sm text-gray-600 dark:text-gray-400">
          Noida, Uttar Pradesh
        </p>
        <ul className="list-disc">
          <li className="ml-5">
            <p>
              Developed a vendor management dashboard, streamlining onboarding
              processes and improving the sales team’s efficiency
            </p>
          </li>
          <li className="ml-5">
            <p>
              Built a partnership program webpage using Gatsby.js, enabling the
              marketing team to effectively promote new partnership launches
            </p>
          </li>
          <li className="ml-5">
            <p>
              Added a React and Gatsby.js powered blog to the website,
              increasing organic traffic and boosting user engagement
            </p>
          </li>
        </ul>
      </VerticalLinedItem>
      <VerticalLinedItem
        title="Freelance"
        logo={"/icons/work.png"}
        logoAlt="Freelance"
      >
        <p className="pb-2 font-semibold">
          Various Freelance Portals (Dec 2017 - Dec 2019)
        </p>
        <ul className="list-disc">
          <li className="ml-5">
            <p>Created a job portal with direct integration to Hubspot apis</p>
          </li>
          <li className="ml-5">
            <p>Created portfolio and contact me page for author</p>
          </li>
          <li className="ml-5">
            <p>
              Worked on a group buying platform website and app using react and
              react native
            </p>
          </li>
          <li className="ml-5">
            <p>Converted website designs to html and css</p>
          </li>
          <li className="ml-5">
            <p>Fixed css bugs</p>
          </li>
          <li className="ml-5">
            <p>Deployed website to azure</p>
          </li>
        </ul>
      </VerticalLinedItem>
    </section>
  );
}
