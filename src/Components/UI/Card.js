// import './Card.css'

// function Card(props) {
//     const classes = 'card' + props.className;
//     return <div className = {classes}> {props.children}</div>

// }

// export default Card;

import React from 'react';

import './Card.css';

const Card = (props) => {
//function Card(props) {
    const classes = 'card ' + props.className;
    // phai 'card ' thi moi dung con neu 'card' thi se bi sai!!!
    return <div className = {classes}> {props.children}</div>
};

export default Card;