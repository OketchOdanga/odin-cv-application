import { CV } from "./Preview";
import { useState } from "react";
import { AddEducation, EducationList } from "./Education";
import { AddPersonalInfo, PersonalInfoList } from "./PersonalInfo";
import { AddWorkExperience, WorkExperienceList } from "./WorkExperience";

export const CurricullumVitae = () => {
    /*PERSONAL INFO*/
    const [personData,setPersonData]= useState({list: CV.personalInfo, isShowList:true});
    const [person,setPerson] = useState({id:Math.random() * 17,name:'',email:'',number:''});

    function handleChangePerson(e) {
        const {name, value} = e.target;
        setPerson({...person,[name]:value})
    }
    function handleAdd () {
        const newPerson = personData.list.concat(person)
        setPersonData({...personData, list : newPerson});
        setPerson('');
    }
    //edit personal info
    function handleEditPersonalInfo(id) {
        const newPerson = personData.list.map((item)=>{
            if (item.id === id) {
                const updatedItem = {...item}
                setPersonData({...personData, list : newPerson});
                setPerson(updatedItem);               
            } 
        })
    }
    //delete personal info.
    function handleDeleteInfo(id) {
        //remove item.
        const newList = personData.list.filter((item)=> item.id !=id);
        setPersonData({...personData, list :newList});
       if (!personData.isShowList) {
            return null;
        } 
    }


    /* EDUCATION */
    const[educationData,setEducationData] = useState({educationlist: CV.Education , isShowList: true});
    const[education, setEducation] = useState({id:Math.random() * 7 ,school:'', course:'',date:''})

    function handlechangeEducation(e){
        const {name, value} = e.target;
        setEducation({...education, [name]: value})
    }

    /* add education */
    function handleAddEducation() {
       // e.preventDefault();
        const newEducation = educationData.educationlist.concat(education);
        setEducationData({...educationData,educationlist : newEducation});       
        setEducation('');
    }
    
    /* WORK EXPERIENCE */
    const[experienceData,setExperienceData] = useState({experiencelist: CV.WorkExperience , isShowList: true});
    const[experience, setExperience] = useState({id:Math.random() * 13,company:'', position:'',responsibilites:'',date:''})

    function handlechangeExperience(e){
        const {name, value} = e.target;
        setExperience({...experience, [name]: value})
    }

    /* add Experience */
    function handleAddExperience() {
       // e.preventDefault();
        const newExperience = experienceData.experiencelist.concat(experience);
        setExperienceData({...experienceData,experiencelist : newExperience});       
        setExperience('');
    }

    return(
        <section className="resume">
            <section className="user-input" >
            <AddPersonalInfo 
            name={person.name} 
            email={person.email} 
            number={person.number}
            onChange={handleChangePerson}
            onAdd={handleAdd} 
            />
            <AddEducation school={education.school} course={education.course} date={education.date} onChange={handlechangeEducation} onAddEducation={handleAddEducation} />
            <AddWorkExperience company={experience.company} position={experience.position} responsibilites={experience.responsibilites} date={experience.date} onChange={handlechangeExperience} onAddExperience={handleAddExperience} />
            </section>

            <section className="cv">
                <div className="personal-Info">
                    {personData.isShowList && <PersonalInfoList list={personData.list} onEdit={handleEditPersonalInfo}
                    onDelete={handleDeleteInfo}/>}
                </div>
                <div className="_education">
                    <h3>Education</h3>
                    {educationData.isShowList &&  <EducationList list={educationData.educationlist}/>}
                </div>
                <div className="experience">
                    <h3>Work Experience</h3>
                    {experienceData.isShowList && <WorkExperienceList list={experienceData.experiencelist} />}
                </div>    

            </section>
            
        </section>
    )
}





