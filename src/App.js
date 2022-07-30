//Use JS Module syntax to import useState from React
import React, {useState} from 'react'

// involde useState function within App function, pass 1 into useState
// interpolate a JSX variable into the page
// Make function global in order to use declarative rendering
// place counter in multiple places
function App(){
  let [ counter, changeCounter ] = useState(1)
    window.changeCounter = changeCounter
    return (
      <div>
      <h1>{counter}</h1>
      <h2>{counter}</h2>
      <h5>{counter}</h5>
      <h6>{counter}</h6>
      </div>
    )
}

export default App;