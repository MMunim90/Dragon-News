import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Header from "../components/Header";
import NewsCard from "../components/NewsCard";
import { getBookmark, removeBookmark } from "../utils";
import { FaArrowLeftLong } from "react-icons/fa6";
import EmptyState from "./EmptyState";
import Footer from "../components/Footer";

const Bookedmark = () => {
  const [newsCard, setNewsCard] = useState([]);
//   console.log(newsCard)

  useEffect(() => {
    const savedNewsCard = getBookmark();
    setNewsCard(savedNewsCard);
  }, []);

  const handleDelete = id => {
    removeBookmark(id);
    setNewsCard(getBookmark())
  }

  return (
    <div>
      <header>
        <Header></Header>
      </header>

      <main className="w-11/12 mx-auto text-center py-10 space-y-10">
      {newsCard.length < 1 ? <EmptyState></EmptyState> : <h1 className="font-bold text-5xl mb-5">All Bookmark News</h1>}
        <div className="grid grid-cols-2 gap-8">
          {newsCard.map((news) => (
            <NewsCard key={news.id} news={news} deletable={true} handleDelete={handleDelete}></NewsCard>
          ))}
        </div>
        <Link className="btn text-base-100 bg-secondary py-2 px-8" to="/">
          <FaArrowLeftLong className="inline mr-2" /> Go to home Page
        </Link>
      </main>

      <footer className="sticky bottom-0 h-fit">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Bookedmark;
