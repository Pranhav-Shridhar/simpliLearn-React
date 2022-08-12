// What is the use of render() in React?

// It is required for each component to have a render() function. This function returns the HTML, which is to be displayed in the component.
// If you need to render more than one element, all of the elements must be inside one parent tag like <div>, <form>.

import React from 'react'

class App extends React.Component{
    render(){
        return(
            <h1>Hello there!</h1>
        )
    }
}

export default App