import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CardDatails = () => {
  const { id } = useParams();
  const [cardData,setCardData] = useState([]);
  const {img,title,time,venue,location,description}=cardData||{};
    useEffect(()=>{
        fetch("/game.json")
        .then(res=>res.json())
        .then(result=>{
          const findData = result?.find(data=> data.id==id);
          setCardData(findData)
        })
    },[id])
  return (
    <div className="mb-20">
      <div className="grid my-20 grid-cols-6">
        <div className="col-span-2 flex flex-col space-y-4 justify-center items-center">
          <h2 className="text-xl">Time: {time}</h2>
          <h2>Vanue: {venue}</h2>
          <h2>Location: {location}</h2>
          <h1>Organise By: Shahadat {id}</h1>
          <button
            className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Book Now
          </button>
        </div>

        <div className="col-span-4">
          <img className="h-[450px] w-full rounded-xl" src={img} alt="" />
        </div>
      </div>
      {/* <h1 className="text-xl text-center">Details Here!</h1> */}
      <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700">
         {description}
        </p>
      </div>
    </div>
  );
};

export default CardDatails;
