import React from "react";
import Link from "next/link";

const response = await fetch("https://refined-respect-561d0cf6c1.strapiapp.com/api/articles?populate=*");
const result = await response.json();
console.log("data received from the strapi", result);

const Articles = async () => {
  console.log("Data used in the front end", result);

  return (
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-black">BLOG</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {result.data &&
          result.data.map((blog) => {
            return (
              <div
                key={blog.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-100 flex flex-col gap-2"
              >
                <Link href={`/blogpost/${blog.slug}`}>
                 <h2 className="text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
                 <p className="text-gray-600 mb-1">{blog.description}</p>
                 <span className="text-xs text-gray-400 italic">Slug: {blog.slug}</span>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Articles;
