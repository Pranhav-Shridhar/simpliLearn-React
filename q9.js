// How do you create an event in React?

// A React event can be created by doing the following:

class Simple extends ReactComponent{
    work() {
        alert("Good Work!");
    }
    render(){
        return(
            <button onClick={this.work}>Do some work!</button>
        )
    }
}