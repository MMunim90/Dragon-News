import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { tags, title, image_url, details, category_id } = news;
//   console.log(news);
  return (
    <div className="space-y-6">
      <img className="w-full h-full object-cover" src={image_url} alt="" />
      <h3 className="text-4xl font-bold">{title}</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {tags &&
          tags.map((tag, index) => (
            <span
              style={{
                padding: "4px 8px",
                background: "#eee",
                borderRadius: "4px",
                fontWeight: "bold",
              }}
              key={index}
            >
              {tag}
            </span>
          ))}
      </div>
      <p>{details}</p>
      <Link to={`/category/${category_id}`} className="btn text-base-100 px-8 py-2 btn-secondary"><FaArrowLeftLong className="inline" />All news in this category</Link>
    </div>
  );
};

export default NewsDetailsCard;
