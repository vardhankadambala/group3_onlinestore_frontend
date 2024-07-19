import React from "react"
import Iphone from "./template/tech/Iphone";
import Sony from "./template/tech/Sony1";
import Canon from "./template/tech/canon";
import S23 from "./template/tech/S23";
import Hp from "./template/tech/Hp1";
import Mac from "./template/tech/Mac";
import './css/imgcss.css';
import Header from "./Header";


const Tech = () => {
    return (
        <div className="divcol">
            <Header />
            <div className="container">
                <Iphone />
                <Sony />
                <Canon />
                <S23 />
                <Hp />
                <Mac />
            </div>
            </div>
    )
}

export default Tech
