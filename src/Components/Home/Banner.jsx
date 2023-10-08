import banner from "../../assets/gtech.jpg"

const Banner = () => {
    return (
        <div className='bg-gray-500 text-center my-10 rounded-xl h-[70vh]'>
        <img className="h-[70vh] w-full rounded-xl" src={banner} alt="" />
        </div>
    );
};

export default Banner;