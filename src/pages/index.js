import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/styles.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`main`]} />

    <div id="top-grid">
      <div id="bullet-points">
        <div class="bullet-list">
          <ul>
            <li>Leczenie depresji</li>
            <li>Terapia stresu</li>
            <li>Leczenie lęków</li>
          </ul>
        </div>
        <div class="bullet-list">
          <ul>
            <li>Leczenie zaburzeń osobowości</li>
            <li>Leczenie zaburzeń odżywiania</li>
            <li>Leczenie zaburzeń obsesyjno-kompulsywnych</li>
          </ul>
        </div>
      </div>
      <div id="main-image" style={{
        gridRowStart: `1`
      }}>
        <Image />
      </div>
      <div>
        <div style={{
          textAlign: `center`,
          margin: `10px`,
          color: `#63ACD5`
        }}>
          Godziny przyjęć:
      </div>
        <div>
        </div>
        <div id="parentGrid">
          <div style={{
            textAlign: `right`,
          }}>
            <ul>
              <li>Poniedziałek:</li>
              <li>Wtorek:</li>
              <li>Środa:</li>
              <li>Czwartek:</li>
              <li>Piątek:</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>8:00 - 12:00</li>
              <li>12:00 - 16:00</li>
              <li>8:00 - 12:00 </li>
              <li>14:00 - 18:00</li>
              <li>8:00 - 12:00</li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <div id="blue-grid">
      <div style={{
        padding: `50px`,
        maxWidth: `350px`
      }}>
        <Image />
      </div>
      <div style={{
        margin: `auto`
      }}>
        Skontaktuj się/zarejestruj wizytę:
        <br />
        +48 518 343 230
        <br />
        +48 608 629 612
        <br /><br />
        Odwiedź gabinet:
        <br />
        39-300 Mielec, ul. Wolności 27c
      </div>
    </div>
    <iframe width="100%" height="450" frameborder="0" style={{ border: `0` }} title="gmaps"
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJi7ZB42lrPUcRz4cQBhohJuU&key=AIzaSyD1_wJmMo6JRk6vVnxuei4t5i0z3Eejby8" allowfullscreen></iframe>
  </Layout>
)

export default IndexPage
