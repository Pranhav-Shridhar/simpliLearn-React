// How can you embed two or more components into one?

// We can embed two or more components into one using this method:

class App extends React.Component { 
    render (){ 
        return (
    <div>
    <h1>Hello<h1>
    <Simple/>
    </div>
)
}
}

    class Simple extends React.Component { render ()
        {
    return ( 
        <h1>Simplilearn<h1>
    ) 
}
    }

    ReactDOM.render(
    <App/>, document.getElementById('index')
    )