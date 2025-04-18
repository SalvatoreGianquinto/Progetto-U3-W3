import HomeLink from "./components/HomeLink"
import MyFooter from "./components/MyFooter"
import NewsStatic from "./components/NewsStatic"
import NuoveUscite from "./components/NuoveUscite"
import "./App.css"
import NavbarSwitcher from "./components/NavbarSwitcher"
import Layout from "./components/Layout"
import Preferiti from "./components/Preferiti"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <NavbarSwitcher />
              <NewsStatic />
              <NuoveUscite />
              <HomeLink />
              <MyFooter />
            </Layout>
          }
        />
        <Route path="/preferiti" element={<Preferiti />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
