import "./contact.scss"

export default function contact() {
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src={`${process.env.PUBLIC_URL}/assets/contact.jpg`} alt=""/>
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <ul>
                    <a href="https://github.com/eellis4500">Github Profile</a>
                    <li>910-604-1344</li>
                    <li>eellis4500@gmail.com</li>
                    <a href="https://www.linkedin.com/in/eric-ellis-6605b093/">LinkedIn</a>
                </ul>
            </div>
        </div>
    )
}