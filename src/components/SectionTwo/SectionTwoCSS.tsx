import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  min-height: 150vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
`

export const OtherContainer = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    align-items: start;
    width: 100vw;
    height: 100vh;
  }

  div {
    margin: 1em;
  }

  img {
    margin: 0 auto;
    display: block;
    width: 30vw;
    object-fit: contain;
  }
  h1 {
    font-size: 3em;
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 1.3em;
  }
  label {
    color: gray;
  }
`
