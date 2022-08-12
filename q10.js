// What are synthetic events in React?

// Synthetic events combine the response of different browser's native events into one API, ensuring that the events are consistent across different browsers.
// The application is consistent regardless of the browser it is running in. Here, preventDefault is a synthetic event.

function ActionLink(){
     function handleClick(e){
        e.preventDefaule();
        console.log('You just clicked a link.');
     }
     return(
        <a href="#" onClick={handleClick}>
        Click_Me
        </a>
     )
}