import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 30vh;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  border-bottom: 1px solid #aeaeae;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("https://image.shutterstock.com/image-vector/brazil-national-day-banner-brazilian-260nw-2417151645.jpg");
    background-size: cover;
    background-position: center;
    filter: brightness(50%);
    z-index: 1;
  }

  h1 {
    color: #fff;
    font-size: 5em;
    z-index: 2;
    position: relative;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000,
      2px 2px 0 #000;
  }
`
