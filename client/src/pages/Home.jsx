import { useState, useEffect } from "react";
import CallToAction from "../components/CallToAction";
import PostCard from "../components/PostCard";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/post/getPosts");
      if (res.status === 200) {
        const data = res.data.posts;
        setPosts(data);
      }
    };
    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto ">
        <h1 className="text-3xl font-bold lg:text-6xl">Welcome to my Blog</h1>
        <p className="text-gray-500 text-xs sm:text-sm text-justify">
          Here you'll find a variety of articles and tutorials on topics such as
          web development, software engineering, and programming languages.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          incidunt reprehenderit at iusto cupiditate deleniti officia aut
          doloribus consectetur maiores facilis, voluptates reiciendis, quia
          corporis provident ipsa accusantium natus quis.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>
      <div className="max-w-6xl mx-auto p-3 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
