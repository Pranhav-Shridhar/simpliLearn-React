// Explain how lists work in React

// We create lists in React as we do in regular JavaScript. Lists display data in an ordered format
// The traversal of lists is done using the map() function

const names = ['Kohli', 'Saif', 'arun', 'Aamir'];

const listOfNames = names.map((name) =>
<li key={name}>
{name}
</li>
)
return (
    <ul>{listItems}</ul>
)