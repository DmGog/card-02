import styled, {css} from "styled-components";

type ButtonPropsType = {
    type?: "primary" | "outline"
}


export const Button = styled.button<ButtonPropsType>`
    border: none;
    cursor: pointer;
    border-radius: 5px;
    width: 86px;
    height: 30px;
    font-weight: 700;
    font-size: 10px;
    line-height: 200%;
    font-family: Inter, sans-serif;
   
    ${props => props.type === "primary" && css<ButtonPropsType>`
        background-color: #4e71fe;
        color: #fff;
        &:hover {
            background-color: #5e7dfa;
            box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
        }
        
        &:active {
            background-color: #7dceec;
        }

    `}

    ${props => props.type === "outline" && css<ButtonPropsType>`

        border: 2px solid #4e71fe;
        background-color: transparent;
        color: #4e71fe;

        &:hover {
            border: 2px solid #5e7dfa;
            color: #5e7dfa;
            background-color: #f5f2f2; 
        }

        &:active {
            border: 2px solid #7dceec;
            //border-image: repeating-linear-gradient(135deg, #132a83, #d32222) 1;
            background-color: #7dceec;
            color: #fff;
        }

    `}
`