//import styled from "styled-components";
import styled, { createGlobalStyle } from "styled-components";

//import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
body {
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor}
}
 `;
export const Itemimg = styled.img`
  margin: 20px;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 5;
  }
`;
export const Item = styled.div`
  p {
    font-weight: bold;

    text-align: center;
    font-family: cursive;
    color: purple;
    font-size: large;
    &.price {
      color: ${(props) => props.theme.mcolor};
    }
  }
`;

export const Title = styled.h2`
  font-family: cursive;
  color: purple;
  text-align: center;
  font-weight: bold;
  font-size: xx-large;
`;
export const Description = styled.p`
  font-family: cursive;
  color: rosybrown;
  text-align: center;
  font-weight: bold;
  font-size: xx-large;
`;
export const Imagestyle = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30;
`;

//export default style;
