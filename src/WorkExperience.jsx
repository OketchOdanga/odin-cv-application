/* this section adds practical/work experience (company name , position title, main responsibilities of your jobs date from and until when you worked for that company) */

import { useState } from "react"

export default function WorkExperience() {
    const[company, setCompany] = useState('');
    const[position, setPosition] = useState('');
    const[responsibilities, setResponsibilities] = useState('');
    const[start, setStart] = useState('');
    const[finish, setFinish] = useState('');

    function handleCompany(e){
        setCompany(e.target.value);
    }
    function handlePosition(e){
        setPosition(e.target.value);
    }
    function handleResponsibilities(e){
        setResponsibilities(e.target.value);
    }
    function handleStart(e){
        setStart(e.target.value);
    }
    function handleFinish(e){
        setFinish(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();    
    }
    function handleReset(){
        setCompany('');
        setPosition('');
        setResponsibilities('');
        setStart('');
        setFinish('');
    }

    return(
        <>
        <form className="form-work" id="formWork"  onSubmit={handleSubmit}>
            <label htmlFor="company">Company</label>
            <input type="text" name="company" id="company" value={company} onChange={handleCompany} />
            <label htmlFor="position">Position</label>
            <input type="text" name="position" id="position" value={position} onChange={handlePosition} />
            <label htmlFor="responsibilities">Responsibilities</label>
            <input type="text" name="responsibilites" id="responsibilities" value={responsibilities} onChange={handleResponsibilities} />
            <label htmlFor="start">Start</label>
            <input type="date" name="start" id="start" value={start} onChange={handleStart} />
            <label htmlFor="finish">Finish</label>
            <input type="date" name="finish" id="finish" value={finish} onChange={handleFinish}/>
            <button type="submit" >Add</button>
            <button type="reset" onClick={handleReset}>Reset</button>
        </form>
        <p>{company}</p>
        <p>{position}</p>
        <p>{responsibilities}</p>
        <p>{start} to {finish}</p>
        </>
    )
}