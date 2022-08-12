// What are the components in React?

// Components are the building blocks of any React application, and a single app usually consists of multiple components. A component is essentially a piece of the user interface. It splits the user interface into independent, reusable parts that can be processed separately.

// There are two types of components in React:

// Functional Components: These types of components have no state of their own and only contain render methods, and therefore are also called stateless components. They may derive data from other components as props (properties).

function Greeting(props) {

    return <h1>Welcome to {props.name}</h1>;
  
  }

//   Class Components: These types of components can hold and manage their own state and have a separate render method to return JSX on the screen. They are also called Stateful components as they can have a state.

class Greeting extends React.Component {

  render() {

    return <h1>Welcome to {this.props.name}</h1>;

  }

}