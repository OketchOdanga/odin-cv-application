/* this section will include educational experience (school name title of study and date of study) */

import { useState } from "react";

export default function Education() {
    const[school, setSchool]= useState('');
    const[course, setCourse]= useState('');
    const[start, setStart]= useState('');
    const[finish, setFinish]= useState('');

    function handleSchool(e){ setSchool(e.target.value)}
    function handleCourse(e){setCourse(e.target.value)}
    function handleStart(e){setStart(e.target.value)}
    function handleFinish(e){setFinish(e.target.value)}

    function handleSubmit(e){
        e.preventDefault();
        setSchool(e.target.value);
        setCourse(e.target.value);
        setStart(e.target.value);
        setFinish(e.target.value);
    }
    function handleReset(){
        setSchool('');
        setCourse('');
        setStart('');
        setFinish('');
    }

    return (
        <section className="hero2">
        <form className="form-education" id="formEducation" onSubmit={handleSubmit}>
            <div className="school">
                <label htmlFor="school">School</label>
                <input type="text" name="school" id="school" value={school} onChange={handleSchool}/>
            </div>

            <div className="course">
                <label htmlFor="course">Course</label>
                <input type="text" name="course" id="course" value={course} onChange={handleCourse} />
            </div>

            <div className="start">
                <label htmlFor="start">Start</label>
                <input type="date" name="start" id="start" value={start} onChange={handleStart} />
            </div>

            <div className="finish">
                <label htmlFor="finish">Finish</label>
                <input type="date" name="finish" id="finish" value={start} onChange={handleFinish} />
            </div>

            <div className="buttons">
                <button type="submit">Add</button>
                <button type="reset" onClick={handleReset}>Reset</button>
            </div>
        </form>
        <p>{school}</p>
        <p>{course}</p>
        <p>{start} to {finish}</p>
        </section>
    )
}