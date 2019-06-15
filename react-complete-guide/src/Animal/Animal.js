import React from 'react';

const animal = (props) => {
    return (
        <div>
            <p>I am a { props.animalName }.</p>
            <p>I make the sound "{ props.animalSound }".</p>
        </div>
    );
}

export default animal;
