import React from 'react';

const Spacer = (props) => {

    const divStyle = {
        padding: props.padding,
        margin: props.margin
      };

    return (
        <div style={divStyle}></div>
    )
}

export default Spacer;