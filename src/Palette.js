import React, { Component } from "react";
import ColorBox from './ColorBox';
import './Palette.css';
import { generatePalette } from "./colorHelpers";

class Palette extends Component {
    render() {

        return (
            <div className="Palette">
                <h1>Color Picker</h1>
                <div className="Palette-colors">{colorBoxes}</div>
            </div>
        );
    }
}

export default Palette;  