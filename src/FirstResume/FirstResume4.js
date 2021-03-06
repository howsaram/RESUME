import React from "react";
import "./Resume.css";
import NameProfContact2 from "./ResumeComponents/NameProfContact2";
import Education2 from "./ResumeComponents/Education2";
import Experiance2 from "./ResumeComponents/Experiance2";
import Languages from "./ResumeComponents/Languages";
import Skills from "./ResumeComponents/Skills";
import Objective from "./ResumeComponents/Objective";

class Resume extends React.Component {
  state = {};
  render() {
    return (
      <div className="Resume">
        <div className="ResumeBody2">
          <NameProfContact2
            name={this.props.name}
            surname={this.props.surname}
            profession={this.props.profession}
            adress={this.props.adress}
            phone={this.props.phone}
            mail={this.props.mail}
            birdthDate={this.props.birdthDate}
          />
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "10vw",
                backgroundColor: "#d9d8dd",
              }}
            >
              <div className="OutlineBlack"></div>
              <div className="ProfileDiv">PROFILE</div>
              <Objective objective={this.props.objective} />
              <div className="EduDiv2">EDUCATION</div>
              <div className="Outline"></div>
              <Education2 education={this.props.education} />
              <div className="LangDiv">LANGUAGES</div>
              <div className="Outline"></div>
              <Languages languages={this.props.languages} />
              <div className="SkillsDiv">SKILLS</div>
              <div className="Outline"></div>
              <Skills skills={this.props.skills} />
            </div>
            <div
              style={{
                width: "19.7vw",
                backgroundColor: "#f1f1f3",
              }}
            >
              <div className="ExpDiv">EXPERIENCE</div>
              <Experiance2 experiance={this.props.experiance} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
