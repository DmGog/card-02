import React from "react";
import {Button} from "./Button";
import styled from "styled-components";

type TextContentPropsType = {
    titleCard?: string
    textContent?: string
}

export const TextContent = (props: TextContentPropsType) => {
    return (
        <StyledTextContent>
            <TextWrapper>
                <h1>{props.titleCard || "Headline"}</h1>
                <p>{props.textContent || "Faucibus. Faucibus. Sit sit sapien sit  tempusrisu ut. Sit molestie ornare in venen."}</p>
            </TextWrapper>
            <ButtonWrapper>
                <Button type={"primary"}>See more</Button>
                <Button type={"outline"}>Save</Button>
            </ButtonWrapper>
        </StyledTextContent>
    );
};

const StyledTextContent = styled.div`
    padding: 9px 20px 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        margin-bottom: 20px;
        font-weight: 700;
        font-size: 16px;
        color: #000;
        font-family: Inter, sans-serif;
    }

    p {
        margin-bottom: 20px;
        font-weight: 500;
        font-size: 12px;
        line-height: 167%;
        color: #abb3ba;
        font-family: Inter, sans-serif;
        width: 100%;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        cursor: pointer;

        &:hover {
            overflow: visible;
            display: block;
            -webkit-line-clamp: unset;
            -webkit-box-orient: unset;
        }
    ;
    }
`


const ButtonWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`