"use client";

import React, { useEffect, useState } from "react";
import SectionContainer from "@/components/common/section-container.component";
import { fetchArticles } from "@/utils/fetch-articles";
import CustomHeader1 from "@/components/common/custom-header-1.component";
import ArticleItem from "./article-item.component";

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  thumbnail?: string;
}

export default function Articles() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  const onArticlesFetched = (items: any[]) => {
    const formattedPosts = items.map((item: any) => ({
      title: item.title || "Untitled",
      link: item.link || "#",
      pubDate: item.pubDate || "No date",
      thumbnail:
        item["content:encoded"]?.match(/<img[^>]+src="([^">]+)"/)?.[1] || null,
    }));
    setPosts(formattedPosts);
  };

  const onArticlesFetchFailed = (err: any) => {
    alert("Failed to fetch Medium articles: " + err);
    console.error(err);
  };

  useEffect(() => {
    fetchArticles(onArticlesFetched, onArticlesFetchFailed);
  }, []);

  return (
    <SectionContainer>
      <CustomHeader1 className="text-start">ARTICLES</CustomHeader1>
      <div className="flex flex-row md:gap-3xl">
        <div className="flex-2 flex flex-col gap-lg md:gap-xl">
          {posts.map((post, index) => (
            <ArticleItem id={post.link} key={index} post={post} />
          ))}
        </div>
        <div className="hidden md:flex flex-1 h-screen p-md bg-container rounded-xl flex-col gap-lg md:gap-xl sticky top-0 overflow-y-auto">
          {posts.map((post, index) => (
            <a
              key={index}
              href={`#${post.link}`}
              className="hover:text-primary"
            >
              {post.title}
            </a>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
