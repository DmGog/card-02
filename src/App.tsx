import React from "react";
import "./App.css";
import {Card} from "./components/Card";
import styled from "styled-components";
import {GlobalStyles} from "./styles/GlobalStyles";


function App() {
    return (
        <StyledSectionCard>
            <GlobalStyles/>
            <Card/>
        </StyledSectionCard>
    );
}

export default App;

const StyledSectionCard = styled.section`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
`