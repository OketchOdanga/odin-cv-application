import { useState } from "react";
import { CV } from "./Preview";


export function Resume() {
    /* Personal info */
    const [person,setPerson] = useState({...CV.personalInfo});

    function handleChange(e) {
        const {name, value} = e.target;
        setPerson({...person,[name]:value})
    }
    /* Education */
    const[education,setEducation] = useState({...CV.Education[0]});

    function handleEducation(e){
        const {name, value} = e.target;
        setEducation({...education, [name]: value})
    }

    function handleSubmit(e){
        e.preventDefault();
        setEducation('')
    }
    /* Experience */
    const[experience,setExperience] = useState({...CV.WorkExperience[1]});

    function handleExperience(e){
        const {name, value} = e.target;
        setExperience({...experience,[name]:value})
    }


    return (
        <section className="resume">
        <section className="user-input" > 
            <form className="form-personal-info">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={person.name} onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="email" value={person.email} onChange={handleChange}/>
                    </div>
                <div>
                    <label htmlFor="number">phone number</label>
                    <input type="tel" name="number" id="number" value={person.number} onChange={handleChange}/>
                </div>  
            </form>
            <form className="form-education" id="formEducation" onSubmit={handleSubmit}>
                <div className="school">
                    <label htmlFor="school">School</label>
                    <input type="text" name="school" id="school" value={education.school} onChange={handleEducation} placeholder="Harvad"/>
                </div>
                <div className="course">
                <label htmlFor="course">Course</label>
                    <input type="text" name="course" id="course" 
                value={education.course} onChange={handleEducation} placeholder="Chemistry" />
                </div>
                <div className="date">
                    <label htmlFor="date">Date</label>
                    <input type="text" name="date" id="date" value={education.date} onChange={handleEducation} placeholder="July 2019 - present" />
                </div>

                <div className="buttons">
                   <button type="submit">Add</button>
                </div>
                    
            </form>
            <form className="form-work"> 
                <div className="company">
                    <label htmlFor="company">company</label>
                    <input type="text" name="company" id="company" value={experience.company} onChange={handleExperience} placeholder="Harvad"/>
                </div>

                <div className="position">
                    <label htmlFor="position">position</label>
                    <input type="text" name="position" id="position" 
                    value={experience.position} onChange={handleExperience} placeholder="Dean" />
                </div>
                
                <div className="responsibilities">
                    <label htmlFor="responsibilities">responsibilites</label>
                    <input type="text" name="responsibilites" id="responsibilites" 
                    value={experience.responsibilites} onChange={handleExperience} placeholder="Chemistry" />
                </div>

                <div className="date">
                    <label htmlFor="date">duration</label>
                    <input type="text" name="date" id="date" 
                    value={experience.date} onChange={handleExperience} placeholder="July 2019 - present" />
                </div>
            </form>   
        </section>

        <section className="cv">
            <div className="personalInfo">
                <p>{person.name}</p>
                <p> <img src="src/assets/phone.svg" alt=""/> {person.number}</p>
                <p> <img src="src/assets/email-outline.svg" alt=""/> {person.email}</p>
            </div>
            <div className="_education">
                <h3>Education</h3>
                <div className="wrapper-education">
                    <div><strong>{education.course}</strong>  <em>{education.date}</em></div>
                    <p>{education.school}</p>
                </div>

            </div>
            <div className="experience">
                <h3>Work Experience</h3>
                <div className="wrapper-work">
                    <div><strong>{experience.position}</strong> <em>{experience.date}</em></div>
                    <p>{experience.company}</p>
                    <div className="roles">
                        {experience.responsibilites}
                    </div>
                </div>

            </div>
        </section>
        </section>
    )
}