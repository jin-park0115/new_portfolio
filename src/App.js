import styled from "styled-components";
import Header from "./components/Header";
import MainPage from "./page/MainPage";
import "./css/init.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import ProjectPage from "./page/ProjectPage";
import DetailPage from "./page/DetailPage";
import ContactPage from "./page/ContactPage";
function App() {
  return (
    <BrowserRouter>
      <LayOut>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/projects" element={<ProjectPage />}></Route>
          <Route path="/project/:id" element={<DetailPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </LayOut>
    </BrowserRouter>
  );
}

export default App;

const LayOut = styled.div`
  min-height: 100vh;
  background-color: #302f2f;
  padding-bottom: 100px;
`;
