import React from "react"
import Header from "../components/header/Header"
import Banner from "../components/banner/Banner"
import {GlobalStilos} from "../styles/global"

export default function Home() {
  return (
    <div>
      <GlobalStilos/>
      <Header/>
      <Banner/>

    </div>
  )
}
