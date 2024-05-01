import React from "react";
import "./App.css";
import {Card} from "./components/Card";
import styled from "styled-components";
import {GlobalStyles} from "./styles/GlobalStyles";

const cardInfo = [
    {
        headline: "Рыжий кот",
        text: "Рыжие кошки - это круто! Вот 8 самых удивительных фактов о рыжих кошках. Они являются одними из самых желанных кошек. Именно о них в основном спрашивают люди, желающие взять кошку домой. Рыжие кошки более популярны, чем чистопородные. Мода на цвет или на отличие о других? Потому что рыжие кошки бывают разные. И дело не только в цвете меха.",
        img: "https://avatars.mds.yandex.net/i?id=bc51e1ea90fae704b2259e0ae1d30ed304dadb8f-13013698-images-thumbs&n=13",
    },
    {}
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