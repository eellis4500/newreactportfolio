import "./header.scss"

export default function header() {
    return (
        <div className="header">
            <div className="wrapper">
                <div className="left">
                    <a href="#home" className="logo">Eric Ellis</a>
                    <div className="itemContainer">
                        <span>910-604-1344</span>
                    </div>
                    <div className="itemContainer">
                        <span>eellis4500@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div>
                        <a href="#home" className="navbar">Home</a>
                    </div>
                    <div>
                        <a href="#portfolio" className="navbar">Portfolio</a>
                    </div>
                    <div>
                        <a href="#contact" className="navbar">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}