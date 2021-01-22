// Write your Character component here
//<----- import react ----->
import React from 'react';
//<----- import styled ----->
import styled from 'styled-components';

const StyleChar = styled.div`
    h2: {
        font-size: 2px;
    }
`

const Character = (props) => {
    const {charId, charName, charStatus, charSpecies, charType, charGender, charImage, charCreated} = props;

    return (
        <StyleChar>
            <h2>{charId} {charName}</h2>
            <ul>
                <li>{charStatus} - {charSpecies}</li>
                <li>{charType}</li>
                <li>{charGender}</li>
                <li>{charImage}</li>
                <li>{charCreated}</li>
            </ul>
        </StyleChar>
        
    )
}

export default Character