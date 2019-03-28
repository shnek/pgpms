import React from "react"

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
    <iframe title="googleMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2549.2672941851474!2d21.43739051611315!3d50.2869381794532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d6b6a4343ce99%3A0x9e82b4a70f1903f5!2sPrywatny+Gabinet+Psychiatryczny+lek.+med.+Ma%C5%82gorzata+Synowiec!5e0!3m2!1sen!2sus!4v1553784897297" width="100%" height="450" frameborder="0" style={{ border: `0` }} allowfullscreen></iframe>
  </Layout >
)

export default IndexPage
