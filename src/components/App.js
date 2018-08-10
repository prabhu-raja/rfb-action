import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    addFish = objFish => {
        console.log('Adding a Fish🦑', objFish);
        // 1. Take a copy of the existing state
        const bkpFishes = {...this.state.fishes};
        // 2. Add our new fish to that bkpFishes variable
        bkpFishes[`fish${Date.now()}`] = objFish;
        // 3. Set the bkpFishes to state
        this.setState({
            fishes: bkpFishes
        });
    };

    addToOrder = objOrder => {
        // 1. Take a copy of existing state
        const bkpOrder = {...this.state.order};
        // 2. Either add to the order, or update the number in our order
        bkpOrder[objOrder] = bkpOrder[objOrder] + 1 || 1;
        //3. Call setState to update our state object.
        this.setState({
            order: bkpOrder
        });
    }

    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        });
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh 🌊 🐟🦈🦀 Market 6" />
                    <ul className="fishes">
                        {
                            Object.keys(this.state.fishes).map(val => (
                                <Fish 
                                    key={val} 
                                    details={this.state.fishes[val]} 
                                    addToOrder={this.addToOrder}>
                                </Fish>
                            ))
                        }
                    </ul>
                </div>
                <Order />
                <Inventory 
                    addFish={this.addFish} 
                    loadSampleFishes={this.loadSampleFishes}
                />
            </div>
        )
    }
}

export default App;