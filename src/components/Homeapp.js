import React from "react"
import './css/imgcss.css';
import Header from "./Header";
import SamsungTV from "./template/home/Sam";
import MitsubishiAC from "./template/home/Mit";
import ButterflyGrinder from "./template/home/Gri";
import Mixer from "./template/home/Mix";
import Oven from "./template/home/Oven";
import DishWasher from "./template/home/Dish";


const Homeapp = () => {
    return (
        <div className='divcol'>
            <Header />
            <div className="container">
                <SamsungTV />
                <MitsubishiAC />
                <ButterflyGrinder />
                <Mixer />
                <Oven />
                <DishWasher />

            </div>
            </div>
    )
}

export default Homeapp
