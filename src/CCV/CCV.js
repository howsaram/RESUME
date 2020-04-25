import React from "react";
import "./CCV.css";
import Tools from "../Tools/Tools.js";
import FirstResume1 from "../FirstResume/FirstResume1";
import FirstResume2 from "../FirstResume/FirstResume2";
import FirstResume3 from "../FirstResume/FirstResume3";
import FirstResume4 from "../FirstResume/FirstResume4";
import SecondResume1 from "../SecondResume/SecondResume1";
import SecondResume2 from "../SecondResume/SecondResume2";
import Slider from "../Slider/Slider";
import SliderClick1 from "../SliderClick/SliderClick1";
import SliderClick2 from "../SliderClick/SliderClick2";

class CCV extends React.Component {
  state = {
    contact: {
      name: "Grigor",
      surname: "Khachumyan",
      profession: "Software Developer",
      adress: "Yerevan",
      phone: "+374 44-15-19-95",
      mail: "GrigorKhachumyan@gmail.com",
      birdthDate: "15.09.95",
      objective: "I have a many reasons",
    },
    eduInputs: {
      eduPlace: "",
      eduProf: "",
      eduStart: "",
      eduEnd: "",
    },
    education: [
      {
        eduPlace: "National Politechnic University",
        eduProf: "Department of Cybernetics",
        eduStart: 2013,
        eduEnd: 2017,
      },
      {
        eduPlace: "National Politechnic University",
        eduProf: "Department of Cybernetics",
        eduStart: 2019,
        eduEnd: 2021,
      },
    ],
    expInputs: {
      expPlace: "",
      expProf: "",
      expStart: "",
      expEnd: "",
      expDescription: "",
    },
    experiance: [
      {
        expPlace: "Volo",
        expProf: "Junior Developer",
        expStart: 2016,
        expEnd: 2018,
        expDescription:
          "befwbk jwjkf kwef  ewjfb kjewf jebf jbdjd dh fwehbhjqwejm bfh ewjkeb fjhfhfb hbs fvfd ",
      },
      {
        expPlace: "Devlix",
        expProf: "Mid Developer",
        expStart: 2019,
        expEnd: 2020,
        expDescription:
          "  ewjfb kjewf jebf jbdjd dh fwehbhjqwejm bfh    ewjfb kjewf jebf jbdjd dh fwehbhjqwejm bfh ewjkeb fjhfhfb hbsdhfb vmhvjhbewhj bfhewvfj vshbdfbvjhwdsg fvfd ",
      },
      {
        expPlace: "Digitain",
        expProf: "Senior Developer",
        expStart: 2021,
        expEnd: 2024,
        expDescription:
          "  ewjfb kjewf jebf jbdjd dh fwehbhjqwejm bfh ewjkeb fjhfhfb hbsdhfb vmhvjhbewhj bfhewvfj vshbdfbvjhwdsg fvfd ",
      },
    ],
    langInputs: {
      langName: "",
      langLVL: "",
    },
    languages: [{ Armenian: "95" }, { English: "55" }, { Russian: "75" }],
    skillsInputs: {
      skillsName: "",
      skillsLVL: "",
    },
    skills: [{ JS: "85" }, { HTML: "65" }, { CSS: "55" }, { REACT: "70" }],
    photo: "",
    clicked: ["ContactTools", "FirstResume", "1"],
  };

  changeState = (e, stateName, stateNameKey, clickedNumber) => {
    let stateNameObj;
    switch (stateName) {
      case "langInputs":
      case "skillsInputs":
      case "eduInputs":
      case "expInputs":
      case "contact":
      case "objective":
        stateNameObj = { ...this.state[stateName] };
        stateNameObj[stateNameKey] = e.target.value;
        break;
      case "languages":
      case "skills":
      case "education":
      case "experiance":
        if (stateNameKey === 0 || stateNameKey) {
          stateNameObj = [...this.state[stateName]];
          stateNameObj.splice(stateNameKey, 1);
        } else {
          switch (stateName) {
            case "languages":
              stateNameObj = [...this.state[stateName]];
              stateNameObj.push({
                [this.state.langInputs.langName]: this.state.langInputs.langLVL,
              });
              break;
            case "skills":
              stateNameObj = [...this.state[stateName]];
              stateNameObj.push({
                [this.state.skillsInputs.skillsName]: this.state.skillsInputs
                  .skillsLVL,
              });
              break;
            case "education":
              stateNameObj = [...this.state[stateName]];
              stateNameObj.push(this.state.eduInputs);
              break;
            case "experiance":
              stateNameObj = [...this.state[stateName]];
              stateNameObj.push(this.state.expInputs);
              break;
          }
        }
        break;
      case "clicked":
        stateNameObj = [...this.state[stateName]];
        if (
          stateNameObj[clickedNumber] === stateNameKey &&
          clickedNumber === 0
        ) {
          stateNameObj[clickedNumber] = "";
        } else {
          if (
            clickedNumber === 1 &&
            stateNameObj[clickedNumber] !== stateNameKey
          ) {
            stateNameObj[2] = "1";
          }
          stateNameObj[clickedNumber] = stateNameKey;
        }

        break;
      default:
        alert("EROR_CASE IS NOT FOUND");
    }
    this.setState(
      {
        [stateName]: stateNameObj,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div className="mainPage">
        <div
          style={{
            backdropFilter: "blur(3px)",
            display: "flex",
            height: "145vh",
            filter: "drop-shadow(0px 2px 7px black)",
          }}
        >
          <Tools
            changeState={this.changeState}
            clickedTools={this.state.clicked[0]}
            languages={this.state.languages}
            skills={this.state.skills}
            experiance={this.state.experiance}
            education={this.state.education}
          />
          <div>
            {this.state.clicked[1] === "FirstResume" &&
              this.state.clicked[2] === "1" && (
                <FirstResume1
                  name={this.state.contact.name}
                  surname={this.state.contact.surname}
                  profession={this.state.contact.profession}
                  objective={this.state.contact.objective}
                  adress={this.state.contact.adress}
                  phone={this.state.contact.phone}
                  mail={this.state.contact.mail}
                  birdthDate={this.state.contact.birdthDate}
                  skills={this.state.skills}
                  languages={this.state.languages}
                  experiance={this.state.experiance}
                  education={this.state.education}
                />
              )}
            {this.state.clicked[1] === "FirstResume" &&
              this.state.clicked[2] === "2" && (
                <FirstResume2
                  name={this.state.contact.name}
                  surname={this.state.contact.surname}
                  profession={this.state.contact.profession}
                  objective={this.state.contact.objective}
                  adress={this.state.contact.adress}
                  phone={this.state.contact.phone}
                  mail={this.state.contact.mail}
                  birdthDate={this.state.contact.birdthDate}
                  skills={this.state.skills}
                  languages={this.state.languages}
                  experiance={this.state.experiance}
                  education={this.state.education}
                />
              )}
            {this.state.clicked[1] === "FirstResume" &&
              this.state.clicked[2] === "3" && (
                <FirstResume3
                  name={this.state.contact.name}
                  surname={this.state.contact.surname}
                  profession={this.state.contact.profession}
                  objective={this.state.contact.objective}
                  adress={this.state.contact.adress}
                  phone={this.state.contact.phone}
                  mail={this.state.contact.mail}
                  birdthDate={this.state.contact.birdthDate}
                  skills={this.state.skills}
                  languages={this.state.languages}
                  experiance={this.state.experiance}
                  education={this.state.education}
                />
              )}
            {this.state.clicked[1] === "FirstResume" &&
              this.state.clicked[2] === "4" && (
                <FirstResume4
                  name={this.state.contact.name}
                  surname={this.state.contact.surname}
                  profession={this.state.contact.profession}
                  objective={this.state.contact.objective}
                  adress={this.state.contact.adress}
                  phone={this.state.contact.phone}
                  mail={this.state.contact.mail}
                  birdthDate={this.state.contact.birdthDate}
                  skills={this.state.skills}
                  languages={this.state.languages}
                  experiance={this.state.experiance}
                  education={this.state.education}
                />
              )}
            {this.state.clicked[1] === "SecondResume" &&
              this.state.clicked[2] === "1" && (
                <SecondResume1
                  name={this.state.contact.name}
                  surname={this.state.contact.surname}
                  profession={this.state.contact.profession}
                  objective={this.state.contact.objective}
                  adress={this.state.contact.adress}
                  phone={this.state.contact.phone}
                  mail={this.state.contact.mail}
                  birdthDate={this.state.contact.birdthDate}
                  skills={this.state.skills}
                  languages={this.state.languages}
                  experiance={this.state.experiance}
                  education={this.state.education}
                />
              )}
            {this.state.clicked[1] === "SecondResume" &&
              this.state.clicked[2] === "2" && (
                <SecondResume2
                  name={this.state.contact.name}
                  surname={this.state.contact.surname}
                  profession={this.state.contact.profession}
                  objective={this.state.contact.objective}
                  adress={this.state.contact.adress}
                  phone={this.state.contact.phone}
                  mail={this.state.contact.mail}
                  birdthDate={this.state.contact.birdthDate}
                  skills={this.state.skills}
                  languages={this.state.languages}
                  experiance={this.state.experiance}
                  education={this.state.education}
                />
              )}
          </div>
          {this.state.clicked[1] === "FirstResume" && (
            <SliderClick1
              changeState={this.changeState}
              clickedIndex={this.state.clicked[2]}
            />
          )}
          {this.state.clicked[1] === "SecondResume" && (
            <SliderClick2
              changeState={this.changeState}
              clickedIndex={this.state.clicked[2]}
            />
          )}
          <Slider changeState={this.changeState} />
        </div>
      </div>
    );
  }
}

export default CCV;
