import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
//import tejasphoto from "../about/tejasphoto.png";
import pic from "../about/pic.jpg";


const personalDetails = [
  {
    label: "Name",
    value: "Tejas Jagannath Balkunde",
  },
  {
    label: "Age",
    value: "20",
  },
  {
    label: "Address",
    value: "Pune, Maharashtra, India",
  },
  {
    label: "Email",
    value: "tejasbalkunde1222@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 7385910245",
  },
];

const jobSummary =
  "	I am passionate Engineer, My maths & logic building is best. I'm First topper in maths at school level. Seeking an opportunity in the field of software engineering. Good knowledge of C, C++, Python, JAVA, HTML,etc.Ability to implement a full software development life cycle(SDLC) and analyze the performance of programs to correct deficiencies.Ability to understand client requirements.Continuous learner of new technologies,strategies & tools"
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <div className="combine" >
            
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
            <img src = {pic} className="prop" />
            </div>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
