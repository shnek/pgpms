import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import ProfileImage from "../components/profile"
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
        {/* <ProfileImage /> */}
        {/* <Image /> */}
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
              <li>&nbsp;&nbsp;8:00 - 12:00</li>
              <li>12:00 - 16:00</li>
              <li>&nbsp;&nbsp;8:00 - 12:00 </li>
              <li>14:00 - 18:00</li>
              <li>&nbsp;&nbsp;8:00 - 12:00</li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <div style={{
      background: `#63ACD5`
    }}>
      <div id="blue-grid">
        <div>
          <div class="imageWrapper">
            <Image />
          </div>

        </div>
        <div style={{
          margin: `auto`,
          padding: `20px`
        }}>
          Skontaktuj się/zarejestruj wizytę:
        <br />
          <a href="tel:+48519343230">+48 519 343 230</a>
          <br />
          <a href="tel:+608629612">+48 608 629 612</a>
          <br /><br />
          Odwiedź gabinet:
        <br />
          <a href="https://www.google.com/maps/place/Wolności+27c,+39-300+Mielec,+Poland/">39-300 Mielec, ul. Wolności 27c</a>
        </div>
      </div>
    </div>

    <iframe width="100%" height="450" frameborder="0" style={{ border: `0` }} title="gmaps"
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJi7ZB42lrPUcRz4cQBhohJuU&key=AIzaSyD1_wJmMo6JRk6vVnxuei4t5i0z3Eejby8" allowfullscreen></iframe>
  </Layout >
)

export default IndexPage
