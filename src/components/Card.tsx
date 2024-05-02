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
            <ImageWrapper>
                <Photo src={props.imgC || photo} alt={"картинка"}/>
            </ImageWrapper>
            <TextContent titleCard={props.titleC} textContent={props.textC}/>
        </StyledCard>
    );
};

const StyledCard = styled.article`
    max-width: 300px;
    width: 100%;
    //min-height: 350px;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: linear-gradient(#ecc4cf, white);
    transition: 0.2s;
    &:hover {
        transform: scale(1.1);
    }
`
const ImageWrapper = styled.div`
    padding: 10px;
    overflow: hidden;
    filter: grayscale(100%);
    

    &:hover {
        filter: none;
    }

`
const Photo = styled.img`
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
    height: 170px;
`
