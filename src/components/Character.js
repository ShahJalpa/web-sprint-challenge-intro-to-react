// Write your Character component here
//<----- import react ----->
import React from 'react';
//<----- import styled ----->
import styled from 'styled-components';

// const StyleCharList = styled.div`
//    display: flex;
//    width: 50%;
//    margin-left: 5%;
// `

const StyleChar = styled.div`
    font-family: cursive;
    display: inline-block;
    width: 50%;
    margin-left: 5%;
    border: solid;
    border-color: gray;
    border-width: thick;
    border-radius: 2em;
    justify-content: center;
    margin-bottom: 20px;
    background-color: khaki;
    @media (max-width: 650px){
        width: 100%;
    }

    h2{
        margin: 0px;
        padding: 0px;
        font-size: 3rem;
        font-style: oblique;
    }

    p{
        font-size:30px;
        margin: 0;
    }
`

const Character = (props) => {
    const {charId, charName, charStatus, charSpecies, charType, charGender, charImage, charCreated} = props;

    return (
       // <StyleCharList>
            <StyleChar>
                <img src={charImage} alt='Rick and Morty Character'></img>
                <h2>{charId} {charName}</h2>
                <p>{charStatus} - {charSpecies}</p>
                <p>{charType}</p>
                <p>{charGender}</p>
                <p>{charCreated}</p>
            </StyleChar>
       // </StyleCharList>
    )
}

export default Character