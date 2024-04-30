import React from "react";
import styled from "styled-components";
import photo from "../assets/images/card-img.png"
import {TextContent} from "./TextContent";


export const Card = () => {
    return (
        <StyledCard>
            <Photo src={photo} alt={"дюна"}/>
            <TextContent/>
        </StyledCard>
    );
};

const StyledCard = styled.div`
    width: 300px;
    min-height: 350px;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    background: #fff;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Photo = styled.img`
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    min-height: 170px;
    object-fit: cover;
`
