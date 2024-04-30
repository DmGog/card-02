import React from "react";
import styled from "styled-components";
import photo from "../assets/images/card-img.png"
import {TextContent} from "./TextContent";


type CardPropsType = {
    titleC?: string
    textC?: string
    imgC?: string
}


export const Card = (props: CardPropsType) => {
    return (
        <StyledCard>
            <ImageContainer>
                <Photo src={props.imgC || photo} alt={"картинка"}/>
            </ImageContainer>
            <TextContent titleCard={props.titleC} textContent={props.textC}/>
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
const ImageContainer = styled.div`
    margin: 10px;
    border-radius: 10px;
    overflow: hidden;
    height: 170px;
`
const Photo = styled.img`
    width: 100%;
    object-fit: cover;
`
