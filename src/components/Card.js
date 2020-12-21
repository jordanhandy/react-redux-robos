import React from 'react';
import ReactDOM from 'react-dom';

// take props as arguments
const Card = (props) => {
    // optional destructuring
    // const { id, name, email } = props
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${props.id}?200x200`} />
            <div>
            {/* use the props */}
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}
export default Card;