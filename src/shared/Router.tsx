import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from '../pages/Main'
import NotFoundPage from '../pages/NotFoundPage'
import AddBoard from '../pages/board/AddBoard'
import DetailPage from '../pages/board/DetailPage'
import EditBoard from '../pages/board/EditBoard'
import ListPage from '../pages/board/ListPage'
import MissionPage from '../pages/MissionPage/MissionPage'
import Signup from '../pages/user/Signup'
import EditUserInfo from '../pages/user/EditUserInfo'
import Login from '../pages/user/Login'
import Layout from './Layout'
import Mypage from '../pages/user/Mypage'
import Loading from '../components/Loading'

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/addboard" element={<AddBoard />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/editboard/:id" element={<EditBoard />} />
        <Route path="/listpage" element={<ListPage />} />
        <Route path="/missionpage" element={<MissionPage />} />
        <Route path="/edituserinfo" element={<EditUserInfo />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/loading" element={<Loading />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default Router
