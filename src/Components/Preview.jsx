

export const Preview = ({ user }) => {
  const {
    first_name,
    last_name,
    email,
    phone,
    education,
    workExperience,
  } = user

  return (
    <div className="preview">
      <section className="preview-header">
        <h1>CV Preview </h1>
        <button className="download-button">Download Your CV</button>
      </section>

      <section className="user_details">
        <article>
          <h5>{first_name}</h5> <h5>{last_name}</h5>
        </article>
        <p>Email : {email}</p>
        <p>Tel : {phone}</p>
      </section>

      <section className="education">
        <span> Education </span>
        {
          education.map((edu) => {
            const { school_name, competency, date_from, date_to } = edu
            return (
              <article key={education.indexOf(edu)}>
                <h5>{school_name}</h5>
                <p>{competency}</p>
                <p>{date_from} to {date_to} </p>
              </article>
            )
          })
        }
      </section>

      <section className="work_experience">
        <span>Work Experience </span>
        {
          workExperience.map((work) => {
            const { company_name, position, date_from, date_to } = work
            return (
              <article key={workExperience.indexOf(work)}>
                <h5>{company_name}</h5>
                <p>{position}</p>
                <p>{date_from} to {date_to} </p>
              </article>
            )
          })
        }
      </section>
    </div>
  )
}