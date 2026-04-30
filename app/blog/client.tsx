"use client ";

import PageBase from "@/components/custom/Pagebase";
import { MainLinks } from "@/const/config/pages";
import BlogCard from "@/components/custom/cards/BlogCard";
import { articles } from "@/const/page/blogs";
import ComingSoon from "@/components/custom/ComingSoon";

export default function BlogClient() {
  return (
    <PageBase
      title={MainLinks.Blog.title}
      description={MainLinks.Blog.description}
      showThemeToggle={true}
    >
      {articles.length === 0 ? (
        <ComingSoon />
      ) : (
        <div className="space-y-4">
          {articles.map((article) => (
            <BlogCard
              key={article.url}
              title={article.title}
              description={article.description}
              date={article.date}
              url={article.url}
              author={article.author}
              readingTime={article.readingTime}
              tags={article.tags}
            />
          ))}
        </div>
      )}
    </PageBase>
  );
}
