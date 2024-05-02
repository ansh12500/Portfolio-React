import React, {useState} from 'react';
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) =>{
      setToggleState(index);
  }
  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
            <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
            onClick={() => toggleTab(1)}
            >
              
              <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
              Education
            </div>

            <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
            onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
              Experience
            </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">High School</h3>
                <span className="qualification__subtitle">DAV Centenary Public School, Panipat</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Intermediate - Commerce</h3>
                <span className="qualification__subtitle">DAV Centenary Public School, Panipat</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020
                </div>
              </div>

             
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachelor of Computer Applications</h3>
                <span className="qualification__subtitle">IITM Group of Institution, New Delhi</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Full Stack Web Development</h3>
                <span className="qualification__subtitle">Coding Ninjas</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>

             
            </div>


          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Internet of Things Intern</h3>
                <span className="qualification__subtitle">SkillVertex</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Jun 2022 - Jul 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Graphic Designer</h3>
                <span className="qualification__subtitle">Infotech</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Sep 2022 - Mar 2023
                </div>
              </div>

             
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer Internship</h3>
                <span className="qualification__subtitle">Oasis Infobyte, Remote</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Oct 2023 - Nov 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Database Operator</h3>
                <span className="qualification__subtitle">IndianOil Corp Limited</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Mar 2023 - Present
                </div>
              </div>

             
            </div>


          </div>
        </div>
        </div>
    </section>
  )
}

export default Qualification