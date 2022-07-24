import "../styles/globals.css";
import type { AppProps } from "next/app";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #dbdbdb;
  width: 100%;
  min-height: 100%;
`;

const Container = styled.div`
  background-color: #ffffff;
  width: 100%;
  max-width: 500px;
  min-height: 100vh;
  margin: 0px auto;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Container>
        <Component {...pageProps} />
      </Container>
    </Wrapper>
  );
}

export default MyApp;
