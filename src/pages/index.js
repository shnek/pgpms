import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/styles.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`main`]} />

    <div id="top-grid" style={{
      fontSize: `25px`
    }}>
      <div id="bullet-points">
        <div class="bullet-list">
          <ul>
            <li>Leczenie zaburzeń depresyjnych</li>
            <li>Leczneie zaburzeń lękowych</li>
            <li>Leczenie chorób psychicznych</li>
            <li>Leczenie zaburzeń snu</li>
          </ul>
        </div>
        <div class="bullet-list">
          <ul>
            <li>Leczenie zaburzeń odżywiania</li>
            <li>Leczenie otępień</li>
            <li>Leczenie uzależnień</li>
          </ul>
        </div>
      </div>
      <div id="main-image" style={{
        gridRowStart: `1`,
        padding: `10px`,
        margin: `10px`,
        fontSize: `20px`

      }}>
        <h2>O Mnie:</h2>
        <p>
        Lekarz specjalista psychiatra. Ukończyłam Wydział Lekarski Akademii Medycznej w Warszawie. Wiedzę i doświadczenie zdobywałam w czasie kształcenia specjalizacyjnego w Klinikach Psychiatrii w Krakowie i Lublinie. Odbyłam kształcenie  w zakresie psychoterapii w Klinice Psychoterapii w Krakowie. Swoją wiedzę pogłębiam uczestnicząc w szkoleniach i konferencjach psychiatrycznych. Od 2000 roku prowadzę gabinet psychiatryczny. 
        </p>
        {/* <ProfileImage /> */}
        {/* <Image /> */}
      </div>
      <div>
        <div style={{
          textAlign: `center`,
          margin: `10px`,
          color: `#243795`
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
              <li>13:00 - 18:00</li>
              <li>&nbsp;&nbsp;8:30 - 13:30</li>
              <li>&nbsp;&nbsp;8:30 - 12:30 </li>
              <li>13:00 - 18:00</li>
              <li>&nbsp;&nbsp;8:30 - 13:30</li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <div style={{
      background: `#243795`
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
          Kontakt:
        <br />
          <a href="tel:+48727763047">+48 727 763 047</a>
          <br />
          <br />
          Odwiedź gabinet:
        <br />
          <a href="https://www.google.com/maps/place/Chopina+16%2FU1,+39-300+Mielec,+Poland/">39-300 Mielec, ul. Chopina 16 lok. U1</a>
        </div>
      </div>
    </div>
    <iframe title="googleMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.8461168384206!2d21.441917315882474!3d50.29480030644883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d6b150ac15397%3A0xb510d89b11a68ceb!2sChopina+16%2FU1%2C+39-300+Mielec%2C+Poland!5e0!3m2!1sen!2sus!4v1556718751958!5m2!1sen!2sus" width="100%" height="450" frameborder="0" style={{ border: `0` }} allowfullscreen></iframe>
  </Layout >
)

export default IndexPage
 