import { useEffect, useState } from "react";
import Card from "./Card";


const CardContainer = () => {
    const [cardData,setCardData] = useState([]);
    useEffect(()=>{
        fetch("/game.json")
        .then(res=>res.json())
        .then(result=>setCardData(result))
    },[])
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            {
                cardData?.map(data=><Card key={data.id} data={data}></Card>)
            }
        </div>
    );
};

export default CardContainer;