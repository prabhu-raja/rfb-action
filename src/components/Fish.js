import React from 'react';
import { formatPrice } from "../helpers";

class Fish extends React.Component {

    handleClick = () => {
        const {name} = this.props.details;
        this.props.addToOrder(name);
    }

    render() {
        const {image, name, desc, status, price} = this.props.details;
        const isAvailable = status === 'available';

        return (
            <li className="menu-fish">
               <img src={image} alt={name} />
               <h3 className="fish-name">
                {name}
                <span className="price">{formatPrice(price)}</span>
               </h3>
               <p>{desc}</p>
               {/* <button disabled={!isAvailable} onClick={this.handleClick}> 
                {isAvailable ? 'Add To Order👉' : 'Sold Out 😔'}
                </button> */}
                <button disabled={!isAvailable} onClick={() => this.props.addToOrder(name)}> 
                {isAvailable ? 'Add To Order👉' : 'Sold Out 😔'}
                </button>
            </li>
        );
    }
}
export default Fish;