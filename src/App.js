import GlobalStyle from "./components/styles/GlobalStyle";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

const AppContainer = styled.div`
  margin: 0 auto;
  background-image: url(img/fon.webp);
  height: 100vh;
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <GlobalStyle />
        <Header />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
