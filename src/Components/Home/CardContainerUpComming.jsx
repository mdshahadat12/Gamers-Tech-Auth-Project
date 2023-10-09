import { useEffect, useState } from "react";
import Card from "./Card";


const CardContainerUpComming = () => {
    const [cardData,setCardData] = useState([]);
    useEffect(()=>{
        fetch("/game.json")
        .then(res=>res.json())
        .then(result=>setCardData(result))
    },[])
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            {
                cardData?.slice(2,5).map(data=><Card key={data.id} data={data}></Card>)
            }
        </div>
    );
};

export default CardContainerUpComming;