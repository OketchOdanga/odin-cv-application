/* this section adds practical/work experience (company name , position title, main responsibilities of your jobs date from and until when you worked for that company) */

export const AddWorkExperience = ({company,position,responsibilites,date,onChange,onAddExperience}) => (
    <form className="form-work"> 
    <div className="company">
        <label htmlFor="company">company</label>
        <input type="text" name="company" id="company" value={company} onChange={onChange} placeholder="Harvad"/>
    </div>

    <div className="position">
        <label htmlFor="position">position</label>
        <input type="text" name="position" id="position" 
        value={position} onChange={onChange} placeholder="Dean" />
    </div>
    
    <div className="responsibilities">
        <label htmlFor="responsibilities">responsibilites</label>
        <textarea type="text" name="responsibilites" id="responsibilites" 
        value={responsibilites} onChange={onChange} placeholder="Chemistry" />
    </div>

    <div className="date">
        <label htmlFor="date">duration</label>
        <input type="text" name="date" id="date" 
        value={date} onChange={onChange} placeholder="July 2019 - present" />
    </div>
    <div>
        <button type="button" onClick={onAddExperience}>Add</button>
    </div>
</form> 
)

export const WorkExperienceList = ({list}) => (
    <ul className="wrapper-work">
        {list.map((item)=>(
            <li key={item.id} >
                <h4>{item.position}</h4>
                <p className="list_company">{item.company}</p>
                <p>{item.responsibilites}</p>
                <p><em>{item.date}</em></p>
            </li>
        ))}
    </ul>
)