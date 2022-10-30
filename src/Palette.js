import React, { Component } from "react";
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component {
    render() {
        const colorBoxes = this.props.colors.map(color => (
            <ColorBox background={color.color} name={color.name} />
        ));
        return (
            <div className="Palette">
                <h1>Pal</h1>
                <div className="Palette-colors">{colorBoxes}</div>
            </div>
        );
    }
}

export default Palette;  