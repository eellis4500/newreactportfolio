import "./home.scss"

export default function home() {
    return (
        <div className="home" id="home">
            <div className="left">
                <div className="imgContainer">
                    <img src={`${process.env.PUBLIC_URL}/assets/grandcanyon.jpg`} alt=""></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Eric Ellis</h1>
                    <h3>IT Professional and <span>Developer</span></h3>
                </div>
            </div>
        </div>
    )
}