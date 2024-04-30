import React from "react";
import "./App.css";
import {Card} from "./components/Card";
import styled from "styled-components";
import {GlobalStyles} from "./styles/GlobalStyles";

const cardInfo = [
    {
        headline: "Заголовок",
        text: "Faucibus. Faucibus. Sit sit sapien sit",
        img: "https://avatars.mds.yandex.net/i?id=bc51e1ea90fae704b2259e0ae1d30ed304dadb8f-13013698-images-thumbs&n=13",
    },
    {

    }
]


function App() {

    const cards = cardInfo.map((c) => <Card titleC={c.headline} textC={c.text} imgC={c.img}/>)

    return (
        <StyledSectionCard>
            <GlobalStyles/>
            {/*<Card/>*/}
            {cards}
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