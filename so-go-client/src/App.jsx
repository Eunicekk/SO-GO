import { Route, Routes } from "react-router-dom";

import Layout from "@/pages/common/Layout";
import MainPage from "@/pages/main/MainPage";
import TabMenu from "@/pages/main/TabMenu";

import Loading from "@/pages/login/Loading";
import Login from "@/pages/login/Login";

import ReviewWrite from "@/pages/review/ReviewWrite";
import ReviewDetail from "@/pages/review/ReviewDetail";

import Map from "@/pages/map/Map";

import MyPage from "@/pages/myPage/MyPage";

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
					<Route
						path="/loading"
						element={<Loading />}
					/>
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/menu"
						element={<TabMenu />}
					/>

					<Route
						path="/create"
						element={
							<Layout>
								<ReviewWrite />
							</Layout>
						}
					/>
					<Route
						path="/review"
						element={
							<Layout>
								<ReviewDetail />
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
								<MyPage />
							</Layout>
						}
					/>
					<Route
						path="/place"
						element={
							<Layout>
								<PlaceDetail />
							</Layout>
						}
					/>
					<Route
						path="/search"
						element={
							<Layout>
								<SearchResultList />
							</Layout>
						}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
