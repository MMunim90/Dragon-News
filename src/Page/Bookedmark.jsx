import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Header from "../components/Header";
import NewsCard from "../components/NewsCard";
import { getBookmark } from "../utils";
import { FaArrowLeftLong } from "react-icons/fa6";

const Bookedmark = () => {
  const [newsCard, setNewsCard] = useState([]);
//   console.log(newsCard)

  useEffect(() => {
    const savedNewsCard = getBookmark();
    setNewsCard(savedNewsCard);
  }, []);

  if(newsCard.length < 1){
    return <p>no data found</p>
}

  return (
    <div>
      <header>
        <Header></Header>
      </header>

      <main className="w-11/12 mx-auto text-center py-10 space-y-10">
        <h1 className="font-bold text-5xl mb-5">All Bookmark News</h1>
        <div className="grid grid-cols-2 gap-8">
          {newsCard.map((news) => (
            <NewsCard key={news.id} news={news}></NewsCard>
          ))}
        </div>
        <Link className="btn text-base-100 bg-secondary py-2 px-8" to="/">
          <FaArrowLeftLong className="inline mr-2" /> Go to home Page
        </Link>
      </main>
    </div>
  );
};

export default Bookedmark;
