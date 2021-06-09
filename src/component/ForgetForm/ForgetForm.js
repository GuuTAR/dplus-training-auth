import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

import './styles.scss'

const ForgetForm = ({ setFormFinish }) => {

    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email.split("@").length <= 1) throw console.error("invalid email format");
        setFormFinish(true)
    }

    return (
        <div className="forget-form-comp flex-col ali-cent form">
            <h2 className="form-title margin-zero">ลืมรหัสผ่าน</h2>
            <form className="form-container flex-col" onSubmit={handleSubmit}>
                <div className="form-field flex-col">
                    <h3 className="email margin-zero">
                        <FontAwesomeIcon icon={faEnvelope} />&nbsp;Email
                    </h3>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" />
                </div>
                <input className="blue-sky-btn" type="submit" value="Continue" />
            </form>
        </div>
    )
}

export default ForgetForm