import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-5 py-2">Latest</p>

      <Marquee className="flex gap-5" pauseOnHover={true} speed={50}>
        <p className="font-bold">
            Programming Hero, a popular online coding education platform based in Bangladesh.
        </p>
        <p className="font-bold">
            Bangladesh Launches National AI Strategy Focusing on Ethical Development and Application.
        </p>
        <p className="font-bold">
            Government Initiatives Promote Digital Transformation in Agriculture Sector.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
