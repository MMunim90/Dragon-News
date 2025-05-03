import React, { use } from "react";
import Marquee from "react-fast-marquee";

const latestAllNews = fetch("/news.json").then((res) => res.json());

const LatestNews = () => {
  const latestNews = use(latestAllNews);
  //console.log(latestNews)
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-5 py-2">Latest</p>

      <Marquee className="flex gap-5" pauseOnHover={true} speed={50}>
        {latestNews.map((latest) => (
          <p
            key={latest.id}
            className={
              "font-bold mr-10"
            }
          >
            {latest.title}.
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;