import React from 'react';
import { formatPrice } from "../helpers";

class Order extends React.Component {
    
    renderOrder = oKey => {
        const fish = this.props.fishes[oKey];
        const count = this.props.order[oKey];
        const isAvailable = fish.status === 'available';
        if(!isAvailable) {
            return (
                <li key={oKey}>
                    Sorry 😔 {fish ? fish.name : 'fish'} is no longer available
                </li>
            );
        }
        return(
            <li key={oKey}>
                {count} lbs {fish.name}
                {formatPrice(count * fish.price)}
            </li>
        )
    };

    render() {
        // const {fishes, order} = this.props;
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';
            if(isAvailable) {
                return prevTotal + (count * fish.price);
            }
            return prevTotal;
        }, 0);

        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <ul className="order">
                    {/* {orderIds.map(oKey => <li>{oKey}</li>)} */}
                    {orderIds.map(this.renderOrder)}
                </ul>
                <div className="total">
                    Total:
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        );
    }
}

export default Order;