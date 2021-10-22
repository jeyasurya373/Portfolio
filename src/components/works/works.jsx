import "./work.scss";
import { useState } from 'react';

import { GitHub } from "@material-ui/icons";



export default function Projects() {



    const [currentSlide, setCurrentSlide] = useState(0)



    const data = [

        {
            id: "2",
            icon: "https://webengage.com/blog/wp-content/uploads/sites/4/2018/04/How-to-Use-an-Interactive-Quiz-to-Boost-Your-Online-Conversions.png",
            title: "Quiz App",
            desc:
                "https://elegant-dijkstra-485a3b.netlify.app/",
            img:
                "https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(35)(319).jpg",

        },
        {
            id: "3",
            icon: "https://www.kindpng.com/picc/m/193-1936884_ecommerce-websites-ecommerce-icon-hd-png-download.png",
            title: "Ecommerce Page",
            desc:
                "https://60fd10feb4bc9449fc1e2253--pensive-lumiere-7adc2d.netlify.app/",
            img:
                "https://www.najmc.com/wp-content/uploads/2020/08/ecommerce-marketing.jpg"
        },
        {
            id: "4",
            icon: "https://i.pinimg.com/originals/e3/2a/f3/e32af3d4345547359eec343179bae6b7.png",
            title: "Admin Dashboard",
            desc:
                "https://61069f9a422fca6ce8ac71a9--pensive-lumiere-7adc2d.netlify.app/",
            img:
                "https://www.cyberdeveloperbd.com/wp-content/uploads/2016/04/icon4.png"

        },
        {
            id: "5",
            icon: "https://cdn2.iconfinder.com/data/icons/unilite-shift-layout-vol-2/60/021_085_layout_interface_table_price-512.png",
            title: "Price table",
            desc: "https://6106af9121527d6a00fb4274--pensive-lumiere-7adc2d.netlify.app/",
            img:
                "https://colorlib.com/wp/wp-content/uploads/sites/2/free-pricing-table-plugins.jpg"



        }
    ]


    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }



    return (
        <div className="works" id="projects">

            <h1>Projects</h1>



            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>


                {data.map(d => (



                    <div className="container">


                        <div className="iteam">
                            <div className="left">
                                <div className="leftcontainer">
                                    <div className="imgcontainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>
                                        {d.title}

                                    </h2>
                                    <p>
                                        <GitHub />

                                        <a href={d.desc} rel="noreferrer" target="_blank">Link For This Project</a>
                                    </p>
                                    <span>

                                    </span>

                                </div>
                            </div>
                            <div className="right">

                                <img src={d.img} alt="" />




                            </div>


                        </div>

                    </div>
                ))}
            </div>
            <img src="assets/right-arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
            <img src="assets/right-arrow.png" className="arrow right" alt="" onClick={() => handleClick()} />
        </div>
    );
}
