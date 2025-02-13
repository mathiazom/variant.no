"use client";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { BlogPage, Post } from "studio/lib/payloads/pages";
import { BLOG_PAGE_QUERY } from "studio/lib/queries/pages";
import { Suspense } from "react";
import { Blog } from "./Blog";

interface BlogPreviewProps {
  initialBlog: QueryResponseInitial<BlogPage>;
  initialPosts: Post[];
  slug: string;
}

export default function BlogPreview({
  initialBlog,
  initialPosts,
  slug,
}: BlogPreviewProps) {
  const { data } = useQuery<BlogPage>(
    BLOG_PAGE_QUERY,
    { slug: slug, id: initialBlog.data._id },
    { initial: initialBlog },
  );

  return (
    <Suspense>
      <Blog blog={data} initialPosts={initialPosts} slug={slug} />
    </Suspense>
  );
}
