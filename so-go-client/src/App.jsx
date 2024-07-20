import { Route, Routes } from "react-router-dom";

import MainPage from '@/pages/main/MainPage';

import Header from '@/pages/common/TheHeader'
import Menu from '@/pages/common/Menu'
import ReviewWrite from "./pages/review/ReviewWrite";
import Map from '@/pages/map/Map'
import MyInfo from "./pages/mypage/MyInfo";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/create" element={<ReviewWrite/>}/>
      <Route path="/map" element={<Map/>}/>
      <Route path="/my-page" element={<MyInfo />} />
      </Routes>
      <Menu />
    </div>

  );
}

export default App;
