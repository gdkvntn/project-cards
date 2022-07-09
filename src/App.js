import GlobalStyle from "./components/styles/GlobalStyle";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import UnHome from "./components/unauthorized/UnHome";
import Create from "./components/unauthorized/Create";
import Profile from "./components/unauthorized/Profile";
import Home from "./components/authorized/Home";
import Cards from "./components/authorized/Cards";

const AppContainer = styled.div`
  height: 100vh;
  margin: 0 auto;
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <GlobalStyle />
        <Header />

        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/create" element={<Create />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
