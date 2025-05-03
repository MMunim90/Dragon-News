import { FaRegEye, FaBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router';
import { addBookmark } from '../utils';
import { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { MdDeleteForever } from "react-icons/md";

const NewsCard = ({ news, deletable, handleDelete }) => {
  // console.log(news)
  const {user} = use(AuthContext)
  const {
    id,
    title,
    author,
    thumbnail_url,
    details,
    total_view,
    rating,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString();

  const handleBookmarkrd = () => {
       addBookmark(news);
  }

  return (
    <div className="card bg-base-100 shadow-lg mb-4">
      {/* Author and Action Icons */}
      <div className="flex bg-base-200 items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-medium">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        {/* Icons */}
        <div className="flex items-center gap-3 text-gray-500 cursor-pointer">
          {
            user ? <FaBookmark onClick={handleBookmarkrd} className="hover:text-primary transition-colors" /> : ""
          }
          {
            user ? <FaShareAlt className="hover:text-primary transition-colors" /> : ""
          }
        </div>
      </div>

      {/* News Content */}
      <div className="p-4">
        <h2 className="card-title">{title}</h2>
        <figure className="my-4">
          <img
            src={thumbnail_url}
            alt={title}
            className="w-full h-64 object-cover rounded-lg"
          />
        </figure>
        <p className="text-sm text-gray-600">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <Link to={`/news-details/${id}`} className="text-blue-500 cursor-pointer ml-1 hover:underline">
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </p>
      </div>
      <div className="divider"></div>
      {/* Footer: Rating and Views */}
      <div className="flex items-center justify-between px-4 pb-4">
        {/* DaisyUI Star Rating */}
        <div className="flex items-center gap-2">
          <div className="rating rating-sm">
            {[...Array(5)].map((_, index) => (
              <input
                key={index}
                type="radio"
                name={`rating-${news.id}`}
                className={`mask mask-star-2 bg-orange-400`}
                checked={index < rating.number}
                readOnly
              />
            ))}
          </div>
          <span className="ml-1 text-gray-600">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>

      {deletable && <div onClick={() => handleDelete(id)} className='bg-gray-900 rounded-md py-2 px-8 hover:bg-gray-300 group cursor-pointer hover:scale-105 absolute top-4 right-4'><MdDeleteForever size={20} className='text-gray-100 group-hover:text-gray-900'/></div>}
    </div>
  );
};

export default NewsCard;
