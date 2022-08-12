// How do you create forms in React?

// We create forms in React by doing the following: 

class NameForm extends React.Component {
    this.state = {value:''};

    handleChange(event) { 
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
    alert('A name was entered: ' + this.state.value); 
    event preventDefault();
    }
    
    render() {
    return (
    <form onSubmit={this.handleSubmit.bind(this)}>
    <label>
    Name:
    <input type="text" value={this.state.value} on Change={this.handleChange.bind(this)} />
    </label>
    <input type="submit" value="Submit" />
    </form>
    )
    }
}

// The above code will yield an input field with the label Name and a submit button. It will also alert the user when the submit button is pressed. 

