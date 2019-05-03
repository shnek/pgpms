import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        {/* <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
                        <li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li> */}
                    </ul>
                    <div className="4u 12u$(small)" style={{width: `100%`}}>
                                <ul className="labeled-icons" style={{
                                    fontSize:`21px`,
                                    textAlign: `left`,
                                    width: `100%`,
                                    color: `rgba(255,255,255,0.80)`
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
                            </div>
                    <ul className="copyright">
                        {/* <li style={{
                            color: `rgba(255,255,255,1)`
                        }}>&copy; Małgorzata Synowiec</li> */}
                        {/* <li>Design: <a href="http://html5up.net">HTML5 UP</a></li> */}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
