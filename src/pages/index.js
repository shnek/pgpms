import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import avatar from '../assets/images/avatar.png'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '4', src: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    // { id: '5', src: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    // { id: '6', src: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Prywatny Gabinet Psychiatryczny Lek. Med. Małgorzata Synowiec"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                    <div style={{ textAlign:`center`}}>
                        <a href="#" className="image avatar"><img src={avatar} alt="" style={{
                            maxWidth: `370px`
                        }}/></a>   
                    </div>

                        <header className="major">
                            <h2>O Mnie<br /></h2>
                        </header>
                        <p style={{textAlign: `justify`}}>Lekarz specjalista psychiatra. Ukończyłam Wydział Lekarski Akademii Medycznej w Warszawie. Wiedzę i doświadczenie zdobywałam w czasie kształcenia specjalizacyjnego w Klinikach Psychiatrii w Krakowie i Lublinie. Odbyłam kształcenie  w zakresie psychoterapii w Klinice Psychoterapii w Krakowie. Swoją wiedzę pogłębiam uczestnicząc w szkoleniach i konferencjach psychiatrycznych. Od 2000 roku prowadzę gabinet psychiatryczny. </p>
                    </section>

                    <section id="oneAndHalf">
                        <header className="major">
                            <h2>Zakres usług<br /></h2>
                        </header>
                        <ul>
                            <li>Leczenie zaburzeń depresyjnych</li>
                            <li>Leczneie zaburzeń lękowych</li>
                            <li>Leczenie chorób psychicznych</li>
                            <li>Leczenie zaburzeń snu</li>
                            <li>Leczenie zaburzeń odżywiania</li>
                            <li>Leczenie otępień</li>
                            <li>Leczenie uzależnień</li>
                        </ul>
                        
                    </section>

                    <section id="two">
                        {/* <h2>Recent Work</h2> */}

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        {/* <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul> */}
                    </section>

                    <section id="three">
                        <h2>Godziny przyjęć</h2>
                        <p></p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <iframe title="googleMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.8461168384206!2d21.441917315882474!3d50.29480030644883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d6b150ac15397%3A0xb510d89b11a68ceb!2sChopina+16%2FU1%2C+39-300+Mielec%2C+Poland!5e0!3m2!1sen!2sus!4v1556718751958!5m2!1sen!2sus" width="100%" height="450" frameborder="0" style={{ border: `0` }} allowfullscreen></iframe>

                                {/* <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul> */}
                            </div>
                            {/* <div className="4u 12u$(small)">
                                <ul className="labeled-icons" style={{
                                    fontSize:`17px`
                                    }}>
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        39-300 Mielec<br/>
                                        ul. Chopina 16 lok. U1
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        +48 727 763 047
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">mgsynowiec@gmail.com</a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex