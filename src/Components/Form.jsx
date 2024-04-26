
export const Form = ({ user, updateUser }) => {
  return (
    <div className="space-y-4">
      <form className="flex flex-col gap-3">
        <section className="flex flex-col">
          <h3 className="text-center">Personal Details</h3>
          <article className="grid grid-cols-2 gap-3">
            <label>
              <span>First Name </span>
              <input type="text" placeholder="eg: John"/>
            </label>

            <label>
              <span>Last Name </span>
              <input type="text" placeholder="eg: Doe"/>
            </label>

            <label>
              <span>Email </span>
              <input type="email" placeholder="eg: jdoe@gmail.com"/>
            </label>

            <label>
              <span>Phone Number</span>
              <input type="tel" placeholder="+254 700 000 000"/>
            </label>
          </article>

        </section>

        <section className="">
          <h2>Education</h2>
          <label>
            <span>School Name </span>
            <input type="text" placeholder="Hoggwarts" />
          </label>

          <label>
            <span>Competency</span>
            <input type="text" placeholder="Bachelors, MBA, Doctorate" />
          </label>

          <label>
            {/* <span>Years</span> */}
            <section className="grid grid-cols-2 gap-2">
              <label>
                <span>From</span>
                <input type="date" />
              </label>

              <label>
                <span>To</span>
                <input type="date" />
              </label>
            </section>
          </label>
        </section>

        <section className="">
          <h2>Work Experience</h2>
          <label>
            <span>Company Name</span>
            <input type="text" placeholder="The Grand Budapest Hotel"/>
          </label>

          <label>
            <span>Position</span>
            <input type="text" placeholder="Hotel Concierge" />
          </label>

          <section className="grid grid-cols-2 gap-2">
              <label>
                <span>From</span>
                <input type="date" />
              </label>

              <label>
                <span>To</span>
                <input type="date" />
              </label>
            </section>
        </section>
      </form>
    </div>
  )
}