import React from "react";
import "./Tools.css";
import "./ToolsComponents/ToolsCSS/ToolsName.css";
import "./ToolsComponents/ToolsCSS/ToolsClick.css";
import ContactTools from "./ToolsComponents/ContactTools";
import EducationTools from "./ToolsComponents/EducationTools";
import EducationBoard from "./ToolsComponents/EducationBoard";
import ExperianceTools from "./ToolsComponents/ExperianceTools";
import ExperianceBoard from "./ToolsComponents/ExperianceBoard";
import LanguagesTools from "./ToolsComponents/LanguagesTools";
import LanguagesBoard from "./ToolsComponents/LanguagesBoard";
import SkillsTools from "./ToolsComponents/SkillsTools";
import SkillsBoard from "./ToolsComponents/SkillsBoard";
import ObjectiveTools from "./ToolsComponents/ObjectiveTools";
import PhotoTools from "./ToolsComponents/PhotoTools";

class Tools extends React.Component {
  render() {
    return (
      <div className="Tools">
        <div>
          <div
            className="ToolsName"
            onClick={(e) =>
              this.props.changeState(e, "clicked", "ContactTools", 0)
            }
          >
            CONTACT
          </div>
          {this.props.clickedTools === "ContactTools" && (
            <ContactTools changeState={this.props.changeState} />
          )}
        </div>
        <div>
          <div
            className="ToolsName"
            onClick={(e) =>
              this.props.changeState(e, "clicked", "EducationTools", 0)
            }
          >
            EDUCATION
          </div>
          {this.props.clickedTools === "EducationTools" && (
            <div>
              <EducationTools changeState={this.props.changeState} />
              <EducationBoard
                changeState={this.props.changeState}
                education={this.props.education}
              />
            </div>
          )}
        </div>
        <div>
          <div
            className="ToolsName"
            onClick={(e) =>
              this.props.changeState(e, "clicked", "ExperianceTools", 0)
            }
          >
            EXPERIENCE
          </div>
          {this.props.clickedTools === "ExperianceTools" && (
            <div>
              <ExperianceTools changeState={this.props.changeState} />
              <ExperianceBoard
                changeState={this.props.changeState}
                experiance={this.props.experiance}
              />
            </div>
          )}
        </div>
        <div>
          <div
            className="ToolsName"
            onClick={(e) =>
              this.props.changeState(e, "clicked", "LanguagesTools", 0)
            }
          >
            LANGUAGES
          </div>
          {this.props.clickedTools === "LanguagesTools" && (
            <div>
              <LanguagesTools changeState={this.props.changeState} />
              <LanguagesBoard
                languages={this.props.languages}
                changeState={this.props.changeState}
              />
            </div>
          )}
        </div>
        <div>
          <div
            className="ToolsName"
            onClick={(e) =>
              this.props.changeState(e, "clicked", "SkillsTools", 0)
            }
          >
            SKILLS
          </div>
          {this.props.clickedTools === "SkillsTools" && (
            <div>
              <SkillsTools changeState={this.props.changeState} />
              <SkillsBoard
                skills={this.props.skills}
                changeState={this.props.changeState}
              />
            </div>
          )}
        </div>
        <div>
          <div
            className="ToolsName"
            onClick={(e) =>
              this.props.changeState(e, "clicked", "ObjectiveTools", 0)
            }
          >
            OBJECTIVE
          </div>
          {this.props.clickedTools === "ObjectiveTools" && (
            <ObjectiveTools changeState={this.props.changeState} />
          )}
        </div>
        <div>
          <div
            className="ToolsName"
            onClick={(e) =>
              this.props.changeState(e, "clicked", "PhotoTools", 0)
            }
          >
            PHOTO
          </div>
          {this.props.clickedTools === "PhotoTools" && <PhotoTools />}
        </div>
      </div>
    );
  }
}

export default Tools;
