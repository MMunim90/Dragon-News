import { FaRegEye, FaBookmark, FaShareAlt } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    total_view,
    rating,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString();

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
          <FaBookmark className="hover:text-primary transition-colors" />
          <FaShareAlt className="hover:text-primary transition-colors" />
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
              <span className="text-blue-500 cursor-pointer ml-1">
                Read More
              </span>
            </>
          ) : (
            details
          )}
        </p>
      </div>
      <div class="divider"></div>
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
    </div>
  );
};

export default NewsCard;
