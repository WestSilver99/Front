import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "@components/Layout/layout";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Logout from "@pages/Logout";
import Mountains from "@pages/Mountains";
import MountainDetail from "@pages/Mountains/Mountain";
import Search from "@pages/Search";
import Auth from "@pages/Login/Auth";
import Success from "@pages/Login/Success";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/mountains" element={<Mountains />} />
          <Route path="/mountains/:id" element={<MountainDetail />} />
          <Route path="/search/:searchTerm" element={<Search />} />
          <Route path="/login/oauth2/code/kakao" element={<Auth />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
