/* This section contains general information like name, email and phone nmber */
export const AddPersonalInfo = ({name,email,number,onChange,onAdd}) => (
    <form className="form-personal-info">
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={name} onChange={onChange} required/>
        </div>
        <div>
            <label htmlFor="email">email</label>
            <input type="email" name="email" id="email" value={email} onChange={onChange}/>
        </div>
        <div>
            <label htmlFor="number">phone number</label>
            <input type="tel" name="number" id="number" value={number} onChange={onChange}/>
        </div> 
        <button type="button" onClick ={onAdd} >Add</button> 
    </form>
)

export const PersonalInfoList = ({list,onEdit,onDelete}) => (
    <ul className="personalInfo">
        {list.map((item)=>(
            <li key={item.id}>
                <p>{item.name}</p>
                <p> <img src="src/assets/phone.svg" alt="phone icon"/> {item.number}</p>
                <p> <img src="src/assets/email-outline.svg" alt="phone icon"/> {item.email}</p>
                <button type="button" onClick={onEdit} >Edit</button>
                <button type="button" onClick={onDelete}>Delete</button>
            </li>
        ))}
    </ul>
)