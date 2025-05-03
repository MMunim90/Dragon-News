import React from "react";
import { Link } from "react-router";
import Header from "../components/Header";
import RightAside from "../components/HomeLayout/RightAside";
import { FaArrowLeftLong } from "react-icons/fa6";

const About = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>

      <main className="w-11/12 mx-auto grid grid-cols-12 gap-12 py-10">
        <section className="col-span-9 text-center space-y-8">
          <h1 className="font-bold text-5xl underline mb-5">About Us</h1>
          <p>
            Welcome to The Dragon News—your trusted gateway to the latest, most
            impactful stories from around the world. In an era where information
            travels at lightning speed and the lines between facts and opinions
            often blur, we stand as a beacon of clarity, accuracy, and
            thoughtful journalism. At The Dragon News, we believe that news is
            more than just headlines. It is the lifeblood of a connected
            society—informing, inspiring, and empowering people to understand
            the world around them. Our mission is simple: to deliver
            trustworthy, balanced, and insightful coverage across a wide
            spectrum of topics, ranging from politics, economics, and global
            affairs to science, technology, entertainment, sports, and culture.
            Why "The Dragon News"? The dragon is a symbol of strength, wisdom,
            and vigilance—qualities we strive to embody in every piece of
            content we publish. Like the dragon, we keep a watchful eye on
            unfolding events, ensuring our readers are the first to know about
            significant developments that shape their lives and futures. Our
            team is passionate about cutting through noise and providing news
            that matters, curated and presented with care.
          </p>

          <p>
            Our newsroom is built on a foundation of integrity and
            professionalism. Every report, article, and analysis you read on our
            platform undergoes strict editorial scrutiny to ensure it meets the
            highest standards of factual accuracy and fairness. We are fiercely
            independent—free from political, corporate, or personal agendas—and
            dedicated solely to serving our readers’ right to reliable
            information. But we don’t stop at just reporting. The Dragon News is
            committed to deepening understanding by offering context, expert
            opinions, and thoughtful perspectives. Whether it's a breaking story
            or an in-depth feature, we aim to not only inform but also to
            explain the "why" and "how" behind the news. We encourage critical
            thinking and welcome diverse viewpoints to enrich the conversations
            around today’s most pressing issues. We are also deeply invested in
            the power of digital innovation. In a fast-evolving media landscape,
            we continually harness new technologies and tools to enhance your
            news-reading experience—be it through interactive articles, live
            updates, multimedia storytelling, or mobile-friendly access. Our
            platform is designed to be accessible and engaging, keeping you
            connected anytime, anywhere.
          </p>

          <p>
            The Dragon News values its readers as a vital part of our community.
            We listen to your feedback, appreciate your engagement, and strive
            to grow together as an informed and thoughtful audience. We also
            uphold a strong commitment to ethical journalism, respecting
            privacy, and maintaining transparency in how we gather and share
            news. Looking ahead, we are excited to expand our coverage and
            explore new frontiers in journalism. As global events continue to
            unfold at an unprecedented pace, The Dragon News remains steadfast
            in its pledge to be your reliable source for the news that matters
            most. Thank you for choosing The Dragon News. Together, let’s stay
            informed, stay curious, and stay empowered.
          </p>

          <Link className="btn text-base-100 bg-secondary py-2 px-8" to="/">
            <FaArrowLeftLong className="inline mr-2" /> Go to home Page
          </Link>
        </section>

        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default About;
