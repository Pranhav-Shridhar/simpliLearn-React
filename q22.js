// How do you implement state in React?

import React from 'react';

class App extends React.Component_
constructor(props)(
    super(props);

    this.state = {
        car: "1,000 cc",
        bike: "150 cc"
    }
)

render(){
    return (
        <div>
        <h1>{this.state.car}</h1>
        <h2>{this.state.bike}</h2>
        </div>
    )
}


