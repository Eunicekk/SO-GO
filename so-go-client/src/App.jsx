import { Route, Routes } from "react-router-dom";

import Layout from '@/pages/common/Layout';
import MainPage from '@/pages/main/MainPage';

import Login from "@/pages/login/Login";
import ReviewWrite from "@/pages/review/ReviewWrite";
import Map from '@/pages/map/Map'
import MyInfo from "@/pages/mypage/MyInfo";
import PlaceDetail from "@/pages/place/PlaceDetail";
import SearchResultList from "./pages/search/SearchResultList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout><MainPage /></Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Layout><ReviewWrite /></Layout>} />
        <Route path="/map" element={<Layout><Map /></Layout>} />
        <Route path="/my-page" element={<Layout><MyInfo /></Layout>} />
        <Route path="/place/:placeId" element={<Layout><PlaceDetail /></Layout>} />
        <Route path="/search" element={<Layout><SearchResultList /></Layout>} />
      </Routes>
    </div>

  );
}

export default App;
