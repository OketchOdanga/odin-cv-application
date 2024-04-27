import { useState } from "react"


export const Form = ({ user, updateUser }) => {
  const {
    first_name, last_name,
    email, phone, education, workExperience,
  } = user

  // states that require a list (array)
  const [ school, setSchool ] = useState({
    school_name : '',
    competency : '',
    date_from : '',
    date_to : ''
  })

  const [ work, setWork ] = useState({
    company_name : '',
    position : '',
    date_from : '',
    date_to : ''
  })

  function ChangeEvent(e) {
    e.preventDefault();

    updateUser({...user, [e.target.name] : e.target.value })
  }

  function ChangeEventSchool(e){
    e.preventDefault()

    setSchool({...school, [e.target.name] : e.target.value })
  }

  function ChangeEventWork(e) {
    e.preventDefault();

    setWork({...work, [e.target.name] : e.target.value })
  }

  function AddWorkToUser() {
    updateUser({...user, workExperience : [...workExperience, work ]})

    setWork({
      company_name : '',
      position : '',
      date_from : '',
      date_to : ''
    })
  }

  function AddSchoolToUser() {
    updateUser({...user, education : [...education, school] })

    setSchool({
      school_name : '',
      competency : '',
      date_from : '',
      date_to : ''
    })
  }

  function SubmitCV(e){
    e.preventDefault()
  }

  return (
    <div className="space-y-4">
      <form
        className="flex flex-col gap-3"
        onSubmit={(e) => SubmitCV(e) }>
        <section className="flex flex-col">
          <h3 className="text-center">Personal Details</h3>
          <article className="grid grid-cols-2 gap-3">
            <label>
              <span>First Name </span>
              <input
                name="first_name"
                type="text"
                value={first_name}
                onChange={(e) => ChangeEvent(e)}
                placeholder="eg: John"/>
            </label>

            <label>
              <span>Last Name </span>
              <input
                type="text"
                name="last_name"
                value={last_name}
                onChange={(e) => ChangeEvent(e)}
                placeholder="eg: Doe"/>
            </label>

            <label>
              <span>Email </span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => ChangeEvent(e)}
                placeholder="eg: jdoe@gmail.com"/>
            </label>

            <label>
              <span>Phone Number</span>
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => ChangeEvent(e)}
                placeholder="+254 700 000 000"/>
            </label>
          </article>

        </section>

        <section className="">
          <h2>Education</h2>
          <label>
            <span>School Name </span>
            <input
              type="text"
              name="school_name"
              value={school.school_name}
              onChange={(e)=> ChangeEventSchool(e)}
              placeholder="Hoggwarts" />
          </label>

          <label>
            <span>Competency</span>
            <input
              type="text"
              name="competency"
              value={school.competency}
              onChange={(e)=> ChangeEventSchool(e)}
              placeholder="Bachelors, Masters, Doctorate" />
          </label>

          <label>
            <section className="grid grid-cols-2 gap-2">
              <label>
                <span>From</span>
                <input
                  name="date_from"
                  value={school.date_from}
                  onChange={(e)=> ChangeEventSchool(e)}
                  type="date" />
              </label>

              <label>
                <span>To</span>
                <input
                  name="date_to"
                  value={school.date_to}
                  onChange={(e)=> ChangeEventSchool(e)}
                  type="date" />
              </label>
            </section>
          </label>

          <button onClick={() => AddSchoolToUser()}>Add To CV</button>
        </section>

        <section className="">
          <h2>Work Experience</h2>
          <label>
            <span>Company Name</span>
            <input
              type="text"
              name="company_name"
              value={work.company_name}
              onChange={(e)=> ChangeEventWork(e)}
              placeholder="The Grand Budapest Hotel"/>
          </label>

          <label>
            <span>Position</span>
            <input
              type="text"
              name="position"
              value={work.position}
              onChange={(e)=> ChangeEventWork(e)}
              placeholder="Hotel Concierge" />
          </label>

          <section className="grid grid-cols-2 gap-2">
              <label>
                <span>From</span>
                <input
                  name="date_from"
                  value={work.date_from}
                  onChange={(e)=> ChangeEventWork(e)}
                  type="date" />
              </label>

              <label>
                <span>To</span>
                <input
                  name="date_to"
                  value={work.date_to}
                  onChange={(e)=> ChangeEventWork(e)}
                  type="date" />
              </label>
            </section>
            <button onClick={() => AddWorkToUser()}>Add To CV</button>
        </section>
      </form>
    </div>
  )
}