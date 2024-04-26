/* this section will include educational experience (school name title of study and date of study) */

export const AddEducation = ({school,course,date,onChange,onAddEducation}) => (
    <form className="form-education" id="formEducation">
    <div className="school">
        <label htmlFor="school">School</label>
        <input type="text" name="school" id="school" value={school} onChange={onChange} placeholder="Harvad"/>
    </div>
    <div className="course">
    <label htmlFor="course">Course</label>
        <input type="text" name="course" id="course" 
    value={course} onChange={onChange} placeholder="Chemistry" />
    </div>
    <div className="date">
        <label htmlFor="date">Date</label>
        <input type="text" name="date" id="date" value={date} onChange={onChange} placeholder="July 2019 - present" />
    </div>

    <div className="buttons">
       <button type="button" onClick={onAddEducation}>Add</button>
    </div>
        
    </form>
)

export const EducationList = ({list}) => (
    <ul className="wrapper-education">
        {list.map((item)=>(
            <li key={item.id} >
                <h4>{item.course}</h4>
                <p className="list_school">{item.school}</p>
                <p><em>{item.date}</em></p>
            </li>
        ))}
    </ul>
)
