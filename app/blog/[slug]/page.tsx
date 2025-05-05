"use server";

import Markdown from "markdown-to-jsx";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "@/lib/posts";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/github-dark-dimmed.min.css";

hljs.registerLanguage("javascript", javascript);

function getPostContent(slug: string) {
  const folder = "posts/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("posts");
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const id = slug ? " ⋅ " + slug : "";
  return {
    title: `Akash Agarwal Blog | ${id.replaceAll("_", " ")}`,
  };
}

export default async function PostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = getPostContent(slug);

  return (
    <div className="flex  justify-center">
      <div className="prose w-full py-10 dark:prose-invert dark:prose-pre:bg-pre">
        <main>
          <article>
            <h2>{post.data.title}</h2>
            <p>
              {post.data.date.toString()}: {post.data.meta.description}
            </p>
            <Markdown
              options={{
                overrides: {
                  pre: ({ children, ...props }) => {
                    // Check if the child is a code element as expected
                    if (
                      React.isValidElement(children) &&
                      children.type === "code"
                    ) {
                      const codeProps = children.props as {
                        className?: string;
                        children: string;
                      };
                      const codeString = codeProps.children;
                      // Extract language from className (e.g., "lang-javascript")
                      const language =
                        codeProps.className?.replace("lang-", "") ||
                        "plaintext";

                      try {
                        // Ensure language is supported, fallback to plaintext
                        const supportedLanguage = hljs.getLanguage(language)
                          ? language
                          : "plaintext";
                        const highlightedCode = hljs.highlight(codeString, {
                          language: supportedLanguage,
                        }).value;

                        // Render the <pre> tag with the highlighted code inside a <code> tag
                        return (
                          <pre {...props}>
                            <code
                              className={`hljs ${language}`}
                              dangerouslySetInnerHTML={{
                                __html: highlightedCode,
                              }}
                            />
                          </pre>
                        );
                      } catch (error) {
                        console.error("Syntax highlighting error:", error);
                        // Fallback to rendering unhighlighted code on error
                        return <pre {...props}>{children}</pre>;
                      }
                    }
                    // Fallback for unexpected structure
                    return <pre {...props}>{children}</pre>;
                  },
                },
              }}
            >
              {post.content}
            </Markdown>
          </article>
        </main>
      </div>
    </div>
  );
}
