import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/HomeLayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";
import Footer from "../components/Footer";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
  // console.log(data, id, news)

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [data, id]);

  return (
    <div>
      <header>
        <Header></Header>
      </header>

      <main className="w-11/12 mx-auto grid grid-cols-12 gap-9 py-10">
        <section className="col-span-9">
          <h3 className="font-bold mb-5">Details</h3>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default NewsDetails;
