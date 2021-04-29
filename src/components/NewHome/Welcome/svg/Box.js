import React, { Component } from "react";
import "./Box.css"
//importing the SVGs of the icon s
import { ReactComponent as Box1 } from "./box-1.svg";
import { ReactComponent as Box2 } from "./box-2.svg";
import { ReactComponent as Box3 } from "./box-3.svg";
import { ReactComponent as Box4 } from "./box-4.svg";
import { ReactComponent as Box5 } from "./box-5.svg";


class Box extends Component {
	icons = {
		Box1: <Box1 />,
		Box2: <Box2 />,
		Box3: <Box3 />,
		Box4: <Box4 />,
		Box5: <Box5 />
	};

	send_icon = this.icons[this.props.svg];

	rotate(x) {
		if(x === null || x === undefined) return `rotate(0deg)`;
		return `rotate(${x})`;
	}

	render() {
		return <div className="animate-wobble-background-svg"
			style={{
				top: this.props.top,
				left: this.props.left,
				height: this.props.size,
				width: this.props.size,
				transform:this.rotate(this.props.rotate)
			}}>
			{this.send_icon}
		</div>;
	}
}

export default Box;
