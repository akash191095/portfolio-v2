"use server";
import Link from "next/link";
import "server-only";

export default async function OpenSource() {
  const request = await fetch("https://api.github.com/graphql", {
    method: "POST",

    headers: {
      Authorization: `bearer ${process.env.PERSONAL_GITHUB_API_KEY}`,
    },

    body: JSON.stringify({
      query: `{
      viewer {
        pullRequests(
          first: 100
          orderBy: { field: UPDATED_AT, direction: DESC }
        ) {
          nodes {
            id
            title
            permalink
            state
            createdAt
            repository {
              name
              description
              homepageUrl
            }
            number
          }
        }
      }
    }`,
    }),
  });

  const data = await request.json();
  const prs = data.data.viewer.pullRequests.nodes;

  return (
    <section className="py-24">
      <h2 className="pb-12 text-center text-2xl font-bold uppercase tracking-widest text-secondary-light dark:text-secondary-dark">
        Recent Open Source Contributions
      </h2>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {prs.map((pullRequest: any) => {
        const formattedDate = new Intl.DateTimeFormat(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
          timeZone: "IST",
        }).format(new Date(pullRequest.createdAt));

        return (
          <div key={pullRequest.id} className="mx-auto mb-6 max-w-5xl">
            <h3 className="text-xl font-semibold uppercase text-secondary-light dark:text-secondary-dark">
              <Link
                href={pullRequest.repository.homepageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                {pullRequest.repository.name} : {formattedDate}
              </Link>
            </h3>
            <p className="">{pullRequest.repository.description}</p>
            <p className="hover:text-blue-300">
              <Link
                href={pullRequest.permalink}
                target="_blank"
                rel="noopener noreferrer"
              >
                #{pullRequest.number}({pullRequest.state}): {pullRequest.title}
              </Link>
            </p>
          </div>
        );
      })}
    </section>
  );
}
