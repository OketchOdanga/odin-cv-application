/* this section adds practical/work experience (company name , position title, main responsibilities of your jobs date from and until when you worked for that company) */

import { useState } from "react"
export default function WorkExperience() {
    const [work, setWork] = useState({company:'audi', position:'manager', responsibilities:['sleep'],start: '2004-4-6', finish: '2012-5-7'})
    const [newindex,setNewIndex] = useState(null);
    function handleChange(e) {
        const {name, value} = e.target
        setWork({...work, [name]: value})
    }

    function handleAddWork() {
        if (newindex !== null) {
            const newWork = [...work]
            newWork[newindex] = work;
            setWork(newWork);
            setNewIndex(null)

        } else {
            setWork({...work, work})
        }
       setWork({company:'audi', position:'manager', responsibilities:['sleep'],start: '2004-4-6', finish: '2012-5-7'})

    }

    function handleReset() {
        setWork('')
    }

    function handleSubmit(e){
        e.preventDefault();
    }


    return(
        <section className="hero3">
        <form className="form-work" id="formWork"  onSubmit={handleAddWork}>
            <div className="company">
                <label htmlFor="company">Company</label>
                <input type="text" name="company" id="company" value={work.company} onChange={handleChange} />
            </div>

            <div className="position">
                <label htmlFor="position">Position</label>
                <input type="text" name="position" id="position" value={work.position} onChange={handleChange} />
            </div>

            <div className="responsibilities">
                <label htmlFor="responsibilities">Responsibilities</label>
                <input type="text" name="responsibilites" id="responsibilities" value={work.responsibilities} onChange={handleChange} />
            </div>

            <div className="start">
                <label htmlFor="start">Start</label>
                <input type="date" name="start" id="start" value={work.start} onChange={handleChange} />
            </div>

            <div className="finish">
                <label htmlFor="finish">Finish</label>
                <input type="date" name="finish" id="finish" value={work.finish} onChange={handleChange}/>
            </div>
            <div className="buttons">
                <button type="submit" onClick={handleSubmit}>Add</button>
                 <button type="reset" onClick={handleReset}>Reset</button>
            </div>
        </form>
        <div className="work-experience">
            <h2>Experience</h2>
            <p><strong>{work.position}</strong> </p>
            <p>{work.company}</p>
            <p> <em>{work.start} to {work.finish}</em></p>
            <p>{work.responsibilities}</p>
            
        </div>
        </section>
    )
}