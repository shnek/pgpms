import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    {/* <ul className="icons">
                        <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
                        <li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul> */}
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
