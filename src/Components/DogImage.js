import React from 'react';

const DogImage = props => {

    return (
        props.image
        ? 
        <div className="text-center mt-5" style={{'height': props.screenHeight * 0.70}}>
            <img className="img-fluid img-thumbnail rounded" src={props.image} alt="Dog"/>
        </div>
        :
        null
    );
};

export default DogImage;