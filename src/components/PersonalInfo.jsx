/* This section contains general information like name, email and phone nmber */
import './styles/PersonalInfo.css'
import {useState} from "react"
export default function PersonalInfo() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    /* user name */
    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }
    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }
    /* email */
    function handleEmail(e) {
        setEmail(e.target.value);
    }
    /* phonenumber */
    function handlePhoneNumber(e) {
        setphoneNumber(e.target.value);
    }
    function handleReset() {
        setFirstName('');
        setLastName('');
        setEmail('');
        setphoneNumber('');
    }

    return (
        <section className="hero1">
        <form className="form-personal-info" id="formPersonalInfo" onSubmit={e => e.preventDefault()} >
            <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input placeholder='First Name' value={firstName} onChange={handleFirstNameChange} id="firstName" name="firstName"  />
            </div>

            <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input placeholder='Last Name' value={lastName} onChange={handleLastNameChange} id="lastName" name="lastName" />
            </div>

            <div className="email">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="hey@email.com" value={email} onChange={handleEmail}/>
            </div>

            <div className="phoneNumber">
                <label htmlFor="phoneNumber">Phone number</label>
                <input type="text" name="phoneNumber" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumber}/>
            </div>
            <div className="buttons">
                <button onClick={handleReset}>Reset</button>
            </div>
        </form>
        <div className='personal-info'>
        <p>{firstName} {lastName}</p>
        <p>{email}</p>
        <p>{phoneNumber}</p>
        </div>

        </section>
    )
}
