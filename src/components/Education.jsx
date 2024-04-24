/* this section will include educational experience (school name title of study and date of study) */

import { useState } from "react";
export default function Education() {
    const[education,setEducation] = useState({});

    function handleChange(e){
        const {name, value} = e.target;
        setEducation({...education, [name]: value})
    }
    

    function handleSubmit(e){
        e.preventDefault();
        setEducation('')
    }

    return (
        <section className="hero2">
        <form className="form-education" id="formEducation" onSubmit={handleSubmit}>
            <div className="school">
                <label htmlFor="school">School</label>
                <input type="text" name="school" id="school" value={education.school} onChange={handleChange}/>
            </div>

            <div className="course">
                <label htmlFor="course">Course</label>
                <input type="text" name="course" id="course" value={education.course} onChange={handleChange} />
            </div>

            <div className="start">
                <label htmlFor="start">Start</label>
                <input type="date" name="start" id="start" value={education.start} onChange={handleChange} />
            </div>

            <div className="finish">
                <label htmlFor="finish">Finish</label>
                <input type="date" name="finish" id="finish" value={education.finish} onChange={handleChange} />
            </div>

            <div className="buttons">
                <button type="submit">Add</button>
            </div>
        </form>

        <div className="education">
            <h2>Education</h2>
            <p><strong>{education.school}</strong> <em>{education.start} to {education.finish}</em> </p>
            <p>{education.course}</p>

        </div>


        
        
        </section>
    )
}