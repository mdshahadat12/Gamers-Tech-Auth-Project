import { useParams } from "react-router-dom";
import image from "../../assets/side-view-gamer-playing-with-controller.jpg";

const CardDatails = () => {
  const { id } = useParams();
  return (
    <div>
      <div className="grid my-10 grid-cols-6">
        <div className="col-span-2 flex flex-col space-y-4 justify-center items-center">
          <h2 className="text-xl">Time: 02/04/2003</h2>
          <h2>Vanue: Sherpur, Bogura</h2>
          <h1>Organise By: Shahadat {id}</h1>
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Book Now
          </button>
        </div>

        <div className="col-span-4">
          <img className="h-[450px] w-full rounded-xl" src={image} alt="" />
        </div>
      </div>
      {/* <h1 className="text-xl text-center">Details Here!</h1> */}
      <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 font-normal text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
  );
};

export default CardDatails;
