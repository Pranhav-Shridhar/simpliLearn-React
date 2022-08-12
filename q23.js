// How do you update the state of a component?

// We can update the state of a component by using the built-in ‘setState()’ method:

class App extends React.Component {
    constructor() {
    super();
    this.state = {
    message: "Welcome to Simplilearn"
    };
    this.buttonPress = this.buttonPress.bind(this);
    }
    buttonPress() {
    this.setState({
    message: "The best place to learn"
    });
}
    render() {
    return (
    <div>
    <h1>{this.state.msg}</h1>
    <button onClick={this.buttonPress}>Click Me!</button>
    </div>
    )
    }
}