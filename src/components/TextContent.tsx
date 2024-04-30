import React from "react";
import {Button} from "./Button";
import styled from "styled-components";



export const TextContent = () => {
    return (
        <StyledTextContent>
            <h1>Headline</h1>
            <p>Faucibus. Faucibus. Sit sit sapien sit <br/> tempusrisu ut. Sit molestie ornare in venen.</p>
            <Button type={"primary"}>See more</Button>
            <Button type={"outline"}>Save</Button>
        </StyledTextContent>
    );
};

const StyledTextContent = styled.div`
    padding: 10px 20px 20px 20px;
    h1 {
        margin-bottom: 20px;
        font-weight: 700;
        font-size: 16px;
        color: #000;
    }
    
    p {
        margin-bottom: 20px;
        font-weight: 500;
        font-size: 12px;
        line-height: 167%;
        color: #abb3ba;

    }
`