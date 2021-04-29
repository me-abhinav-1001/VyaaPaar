import React from 'react';
import Cart from "./cart";
import Truck from "./truck";
import Parcel from "./Parcel";
import Table from "./table";
import "./welcome.css";

const ParcelAnimation = () => {

    return (
        <div className="fixed-at-bottom-of-div-100-width">
            <Cart />
            <Truck />
            <Parcel box="#CD853F" flap="#D2B48C" tape="#8B4513"/>
            <Table />
        </div>
    )
}


export default ParcelAnimation;