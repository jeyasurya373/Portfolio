import "./Portfolio.scss";
import { GetApp, Create } from "@material-ui/icons";


export default function Portfolio() {
    return (
        <div className="portfolio">

            <div className="left" id="aboutme">
                <h1>About me</h1>
                <p >Hi This is Jeya Surya . I'm A Programmer, Coder, Problem Solver And I'm Going To Be A Full Stack Developer Using Knowledge Of MERN Stack.And
                    I'm A Software Engineer who loves to transform ideas into reality using coding.i have Good knowledge of MERN Stack Software Development.
                    I have Developed Projects like Ecommerce Application, Social Sites Website Using latest Technology like React.Js . I have a good knowledge of solving problem Using Ds &
                    Algorithm with programming Languages like  JavaScript . </p>

                <p className="resume">
                    <GetApp className="download" />
                    <a href="https://drive.google.com/file/d/1ek2jwIrkCFKgwSseLoOrn2YLIMcnQgba/view?usp=drivesdk" rel="noreferrer" target="_blank"> Resume</a>

                </p>
                <Create />
                <span className="see"> <a href="https://www.guvi.in/jeyasurya383" rel="noreferrer" target="_blank" > Programming Skill</a></span>


            </div>
            <div className="right">
                <img src="assets/jj.jpg" alt="" />
            </div>

        </div>
    )
}