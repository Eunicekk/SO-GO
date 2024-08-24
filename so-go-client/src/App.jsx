import { Route, Routes } from "react-router-dom";

import Layout from "@/pages/common/Layout";
import MainPage from "@/pages/main/MainPage";
import TabMenu from "./pages/main/TabMenu";

import Login from "@/pages/login/Login";
import ReviewWrite from "@/pages/review/ReviewWrite";
import Map from "@/pages/map/Map";
import MyInfo from "@/pages/mypage/MyInfo";
import PlaceDetail from "@/pages/place/PlaceDetail";
import SearchResultList from "./pages/search/SearchResultList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className={`route-wrapper`}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <MainPage />
              </Layout>
            }
          />
          <Route path="/menu" element={<TabMenu />} />
          <Route
            path="/create"
            element={
              <Layout>
                <ReviewWrite />
              </Layout>
            }
          />
          <Route
            path="/map"
            element={
              <Layout>
                <Map />
              </Layout>
            }
          />
          <Route
            path="/my-page"
            element={
              <Layout>
                <MyInfo />
              </Layout>
            }
          />
          <Route
            path="/detail"
            element={
              <Layout>
                <PlaceDetail />
              </Layout>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
