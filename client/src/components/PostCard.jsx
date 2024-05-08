import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  console.log(post);
  return (
    <div className="group relative w-full border border-teal-500 hover:border-2 h-[340px] overflow-hidden rounded-lg sm:w-[360px] transition-all">
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt="post cover"
          className="h-[265px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20"
        />
      </Link>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-2">{post.title}</p>
        <span className="italic text-sm">{post.category}</span>
        <Link to={`/post/${post.slug}`}>
          <button className="p-2 border border-teal-500 text-teal-500 transition-all duration-300 rounded-md w-full rounded-tl-none hover:bg-teal-500 hover:text-white">
            Read article
          </button>
        </Link>
      </div>
    </div>
  );
}
