import { UserLayout, MyCart, MyOrder, Settings, Profile } from "./pages/index"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />} />
          <Route  path="/mycart" element={<MyCart />} />
          <Route path="/myorder" element={<MyOrder />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}