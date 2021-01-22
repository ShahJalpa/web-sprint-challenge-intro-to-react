// Write your Character component here
//<----- import react ----->
import React from 'react';
//<----- import styled ----->
import styled from 'styled-components';

const Character = (props) => {
    const {charId, charName, charStatus, charSpecies, charType, charGender, charImage, charCreated} = props;

    return (
        <h2>{charName}</h2>
    )
}

export default Character