/* this section adds practical/work experience (company name , position title, main responsibilities of your jobs date from and until when you worked for that company) */

import { useState } from "react"

export default function WorkExperience() {
    const [work, setWork] = useState([
        {company:'',position:'',responsibilities:'',start:'',finish:''}
    ])
/*     const[company, setCompany] = useState('');
    const[position, setPosition] = useState('');
    const[responsibilities, setResponsibilities] = useState('');
    const[start, setStart] = useState('');
    const[finish, setFinish] = useState(''); */

    function handleCompany(e){
        setWork(...work,  e.target.value);
    }
    function handlePosition(e){
        setWork(e.target.value);
    }
    function handleResponsibilities(e){
        setWork(e.target.value);
    }
    function handleStart(e){
        setWork(e.target.value);
    }
    function handleFinish(e){
        setWork(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();    
    }
    function handleReset(){
        setWork('');
        setWork('');
        setWork('');
        setWork('');
        setWork('');
    }

    return(
        <section className="hero3">
        <form className="form-work" id="formWork"  onSubmit={handleSubmit}>
            <div className="company">
                <label htmlFor="company">Company</label>
                <input type="text" name="company" id="company" value={work. company} onChange={handleCompany} />
            </div>

            <div className="position">
                <label htmlFor="position">Position</label>
                <input type="text" name="position" id="position" value={position} onChange={handlePosition} />
            </div>

            <div className="responsibilities">
                <label htmlFor="responsibilities">Responsibilities</label>
                <input type="text" name="responsibilites" id="responsibilities" value={responsibilities} onChange={handleResponsibilities} />
            </div>

            <div className="start">
                <label htmlFor="start">Start</label>
                <input type="date" name="start" id="start" value={start} onChange={handleStart} />
            </div>

            <div className="finish">
                <label htmlFor="finish">Finish</label>
                <input type="date" name="finish" id="finish" value={finish} onChange={handleFinish}/>
            </div>
            <div className="buttons">
                <button type="submit" >Add</button>
                <button type="reset" onClick={handleReset}>Reset</button>
            </div>
        </form>
        <p>{company}</p>
        <p>{position}</p>
        <p>{responsibilities}</p>
        <p>{start} to {finish}</p>
        </section>
    )
}