/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({data}) => {
  const {id,title,img,description} = data ||{};
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow">
        <img className="rounded-t-lg w-full" src={img} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">
          {title}
        </h5>

        <p className="mb-3 font-normal text-gray-700">
         {description.slice(0,150)}...
        </p>
        <div className="flex justify-center">
          <Link
            to={`/details/${id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Know more
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
