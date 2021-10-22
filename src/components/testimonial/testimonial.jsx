import "./testimonial.scss";

export default function Testimonial() {
    return (
        <div className="testimonial" id="skills">
            <div className="left">
                <h1>Skills</h1>
                <img src="assets/skill.jpg" alt="" />
            </div>
            <div className="right">
                <ol>
                    <p>Front End:</p>
                    <li>Javascript</li>
                    <li>React</li>
                    <p>Back End:</p>
                    <li>Node js</li>
                    <li>Express js</li>
                    <p>DataBase:</p>
                    <li>Mysql</li>
                    <li>Mongo DB</li>
                    <p>AWS & DS and Algorithm</p>

                </ol>
            </div>



        </div>
    )
}
