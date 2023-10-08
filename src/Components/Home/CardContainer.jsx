import Card from "./Card";


const CardContainer = () => {
    return (
        <div className="grid grid-cols-3 gap-5 my-10">
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    );
};

export default CardContainer;