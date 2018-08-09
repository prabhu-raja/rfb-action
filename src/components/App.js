import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

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
   

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh 🌊 🐟🦈🦀 Market 6" />
                </div>
                <Order />
                <Inventory addFish={this.addFish} />
            </div>
        )
    }
}

export default App;