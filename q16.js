// What is an arrow function and how is it used in React?

// An arrow function is a short way of writing a function to React.
// It is unnecessary to bind ‘this’ inside the constructor when using an arrow function. This prevents bugs caused by the use of ‘this’ in React callbacks.


//Without arrow function

render(){
    return(
        <MyInput onChange={this.handleChange.bind(this)} />
    )
}

//With arrow function
render(){
    return(
        <MyInput onChange = { (e) => this.handleOnChange(e)} />
    )
}