import { useEffect, useState } from "react";
import DashCard from "../Components/Dashboard/DashCard";

const Dashboard = () => {
  const [localData, setLocalData] = useState([]);
  useEffect(() => {
    const localitem = JSON.parse(localStorage.getItem("card"));
    setLocalData(localitem);
  }, []);
  return (
    <div data-aos="flip-down">
      <div>
        <h1 className="text-2xl text-center font-bold text-green-500 my-10">
          Your Booking History
        </h1>
        <div className="grid md:grid-cols-2 gap-5">
          {localData ? (
            localData?.map((card) => (
              <DashCard key={card.id} card={card}></DashCard>
            ))
          ) : (
            <p className="text-center text-2xl col-span-2 h-[30vh] w-full my-14 font-semibold text-red-400">
              You Have not Booking yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
