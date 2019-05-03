import React from 'react'

import Footer from './Footer'

class Header extends React.Component {
    render() {
        return (
            <header id="header" style={{
                paddingTop: `75px`,
                paddingBottom: `20px`
            }}>
                <div className="inner" style={{textAlign: `center`}}>
                    {/* <a href="#" className="image avatar"><img src={avatar} alt="" /></a> */}
                    <h1 style={{
                        fontSize: `1.50em`
                    }}><strong>Prywatny Gabinet Psychiatryczny</strong></h1>
                    {/* <h1 style={{
                        fontSize: `1.36em`,
                        color: `rgba(255,255,255,0.65)`
                        }}>Lek. Med. Małgorzata Synowiec</h1> */}
                        


                         
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
