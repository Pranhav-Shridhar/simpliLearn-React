// What is the difference between the ES6 and ES5 standards?
// These are the few instances where ES6 syntax has changed from ES5 syntax:

// 1. Components and Function

// ES5
var MyComponent = React.createClass({ render: function() {
    return(
    <h3>Hello Simplilearn</h3>
    )
    }
)
    // ES6
    class MyComponent extends React.Component { render() {
    return(
    <h3>Hello Simplilearn</h3>
    )
    }
}

// 2. exports vs export 

// 3.require vs import 

//ES5

var React = require('react');

//ES6
import React from 'react';