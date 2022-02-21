import React, { Component } from "react";
import ReactDom from "react-dom";

// Function Component
// function Abc() {
//     return <h1>Hello World</h1>
// }

//By Using Arrow Function
const Welcome = () =><h2>Welcome To Jamui</h2>      //Function Components 

ReactDom.render(
    <Welcome/>,
    document.getElementById('root')

);

class Hello extends Component{
    render(){
        return <h2>Shubham Kumar</h2>
    }
}






// Day - 1 Pratices

// function HelloWorld(){
//     return React.createElement(
//         'span', 
//         {}, 
//         React.createElement('div', {},'First Child',
//             React.createElement('div', {}, 'Second Child' )
//         )
//     )
//         // <>
//         //     <h1>Hello World</h1>
//         //     <h2>Hello Jamui</h2>
//         //     <h2>Prachi Singh</h2>
//         // </>
    
// }
// ReactDom.render(
//     <HelloWorld />,
//     document.querySelector('#root')
// );
// ReactDom.render(
//     <h1>Hello World</h1>,
//     document.getElementById('root')
// );
