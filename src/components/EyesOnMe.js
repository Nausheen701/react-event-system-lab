// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {
    onFocus = () => console.log('Good!')
    onBlur = () => console.log ('Hey! Eyes on me!')

    render() {
// On that button, add event handlers that listens for the focus and blur events.
// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'
       return (
            <button onFocus={this.onFocus} onBlur={this.onBlur}>Look at me!</button>

//     handleEvent= (event) => {
//     if (event === focus) {
//         console.log('Good!')
//     } else if (event === blur) {
//         console.log ('Hey! Eyes on me!')
//     }
// }
       )
        
    }
}

// <button onClick={this.tickle}>Tickle me!</button>