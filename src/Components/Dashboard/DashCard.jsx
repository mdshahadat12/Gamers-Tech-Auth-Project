/* eslint-disable react/prop-types */

const DashCard = ({ card }) => {
  const { title, location, description, img } = card || {};
  return (
        <div className="flex">
        <img className="w-[200px] rounded-l-lg" src={img} alt="" />
        <div className="p-5 flex-grow bg-green-300 rounded-r-lg">
          <h1 className="text-lg mt-3 font-semibold">{title}</h1>
          <h3 className="my-5 font-medium w-fit rounded-md">{location}</h3>
          <p>{description.slice(0, 80)}</p>
        </div>
      </div>
  );
};

export default DashCard;
