import React from "react";
import "./App.css";
import {Card} from "./components/Card";
import styled from "styled-components";
import {GlobalStyles} from "./styles/GlobalStyles";

const cardInfo = [
    {
        headline: "Рыжий кот",
        text: "Рыжие кошки - это круто! Вот 8 самых удивительных фактов о рыжих кошках. Они являются одними из самых желанных кошек.Рыжие кошки - это круто! Вот 8 самых удивительных фактов о рыжих кошках. Они являются одними из самых желанных кошек.",
        img: "https://avatars.mds.yandex.net/i?id=65825e57e9114dbb49a68b9f1770cf147b1b4fe8-12540799-images-thumbs&n=13",
    },
    {
        headline: "Кот",
        img: "https://avatars.mds.yandex.net/i?id=12d36f70963ae8d686117b69e976949cb8d4c883-10995463-images-thumbs&n=13",
    },
    {},

]


function App() {

    const cards = cardInfo.map((c) => <Card titleC={c.headline} textC={c.text} imgC={c.img}/>)

    return (
        <div className="App">
            <ContainerCard>
                <GlobalStyles/>
                {/*<Card/>*/}
                {cards}
            </ContainerCard>
        </div>
    );
}

export default App;

const ContainerCard = styled.div`
    max-width: 1140px;
    max-height: 100vh;
    margin: 50px auto;
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 20px;
`