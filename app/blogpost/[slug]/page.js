// app/blog/[slug]/page.tsx or page.js
"use client";
import React, { useEffect, useState } from "react";

export default function Page({ params }) {
  const { slug } = React.use(params);
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const url = `https://refined-respect-561d0cf6c1.strapiapp.com/api/articles?filters[slug][$eq]=${slug}&populate=*`;
      const response = await fetch(url, { cache: "no-store" });
      const data = await response.json();
      setResult(data);
      console.log("Data fetched for slug:", data);
    }
    fetchData();
  }, [slug]);

  if (!result) {
    return <div>Loading...</div>;
  }

  const article = result.data && result.data[0];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-10">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-2 capitalize">
            {article?.title || slug}
          </h1>
          <p className="text-sm text-gray-500">Published on August 2, 2025</p>
        </header>

        {/* Content */}
        <div className="">

          { 
            article && article.blocks.filter(item => item.__component === "shared.rich-text").map((item,index) => {
              return ( 
               <div key={index}>{item.body}<br></br></div> )
            })
          }

          {/* {article && article.blocks             
            .filter("__component" == "shared.rich-text")
            .map((item, idx) => (
              // <MarkdownHTML key={idx} markdown={item.body} />
              <p key={idx}>{item}</p>
            ))} */}

        </div>

        {/* Footer */}
        <footer className="mt-16 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} My Blog. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
