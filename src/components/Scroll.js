import React from 'react';

// define the Scroll Component
const Scroll = (props) => {
    return (
        // style and return the children of the props in Scroll
        <div style={{overflowY: 'scroll', border: '1px solid black', height:'800px'}}>
            {props.children}
        </div>
    );
};
export default Scroll;