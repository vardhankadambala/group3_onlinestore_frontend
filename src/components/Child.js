import React from "react"
import './css/imgcss.css';
import Header from "./Header";
import Notebook from "./template/child/Note";
import Bag from "./template/child/Bag"
import GeometryBox from "./template/child/Geo";
import PencilBox from "./template/child/Box";
import PenSet from "./template/child/Pen";
import PencilSet from "./template/child/Pencil";


const Child = () => {
    return (
        <div className='divcol'>
            <Header />
            <div className="container">
                <Notebook />
                <Bag />
                <GeometryBox />
                <PencilBox />
                <PenSet />
                <PencilSet />




               </div>
            </div>
    )
}

export default Child
