import React, { Component } from 'react';
import "./welcome.css";

class Parcel extends Component {


    render() {

        const { box, flap, tape } = this.props;

        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="300"
                height="250"
                viewBox="0 0 79.374999 66.145833"
                version="1.1"
                id="svgparcel">
                <g
                    id="sfdbjjv">
                    <g
                        id="g1230"
                        transform="matrix(1.1436934,0,0,1.0601794,-80.33758,-60.09504)">
                        <rect
                            style={{ fill: box, fillOpacity: "1", stroke: "#00ff92", strokeWidth: "0.100375", strokeOpacity: "0.00408164" }}
                            id="rect59-3"
                            width="69.390343"
                            height="48.008781"
                            x="70.304825"
                            y="70.907364" />
                        <path
                            style={{ fill: flap, stroke: tape, strokeWidth: "0.219724px", strokeLinecap: "butt", strokeLinejoin: "miter", strokeOpacity: "0.976471" }}
                            d="m 91.470241,70.87054 v 47.96359"
                            id="path952" />
                        <rect
                            style={{ fill: flap, fillOpacity: "1", stroke: "#000000", strokeWidth: '0.276135', strokeOpacity: "0" }}
                            id="rect958"
                            width="21.249775"
                            height="16.510815"
                            x="116.92747"
                            y="68.35099"
                            transform="matrix(1,0,-0.54939478,0.83556291,0,0)" />
                        <rect
                            style={{ fill: flap, fillOpacity: "1", stroke: "#000000", strokeWidth: "0.280319", strokeOpacity: "0" }}
                            id="rect958-9"
                            width="21.249775"
                            height="17.015017"
                            x="67.257301"
                            y="70.438255"
                            transform="matrix(1,0,0.58531927,0.8108029,0,0)" />
                        <rect
                            style={{ fill: tape, fillOpacity: "1", stroke: "#000000", strokeWidth: '0.118352', strokeOpacity: "0" }}
                            id="rect958-8"
                            width="21.232687"
                            height="3.0354154"
                            x="116.36083"
                            y="68.047318"
                            transform="matrix(1,0,-0.54368152,0.83929161,0,0)" />
                        <path
                            style={{ fill: tape, stroke: tape, strokeWidth: "0.264198px", strokeLinecap: "butt", strokeLinejoin: 'miter', strokeOpacity: "0.976471" }}
                            d="M 139.64727,71.043557 H 70.302125"
                            id="path952-3" />
                        <rect
                            style={{ fill: tape, fillOpacity: "1", stroke: "#000022", strokeWidth: '0.0653653', strokeOpacity: "0" }}
                            id="rect888-9-1"
                            width="5.0614471"
                            height="48.06459"
                            x="113.16005"
                            y="70.917496" />
                    </g>
                </g>
            </svg>

        )
    }
}

export default Parcel;