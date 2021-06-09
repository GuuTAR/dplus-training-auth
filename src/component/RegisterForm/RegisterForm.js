import './styles.scss'
import { useEffect, useState } from 'react'
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RegisterForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [email, setEmail] = useState("")
    const [acceptCon, setAcceptCon] = useState(false)

    useEffect(() => {

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({username, password, rePassword, email, acceptCon})
    }

    return (
        <div className="register-form-comp flex-col ali-cent form">
            <h2 className="form-title margin-zero">สมัครสมาชิก</h2>
            <form className="form-container flex-col" onSubmit={handleSubmit}>
                <div className="form-field flex-col">
                    <h3 className="username margin-zero">
                        <FontAwesomeIcon icon={faUser} />&nbsp;Username
                    </h3>
                    <input value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="form-field flex-col">
                    <h3 className="password margin-zero">
                        <FontAwesomeIcon icon={faKey} />&nbsp;Password
                    </h3>
                    <input value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="form-field flex-col">
                    <h3 className="re-password margin-zero">
                        <FontAwesomeIcon icon={faKey} />&nbsp;Re-Password
                    </h3>
                    <input value={rePassword} onChange={e => setRePassword(e.target.value)} />
                </div>
                <div className="form-field flex-col">
                    <h3 className="email margin-zero">
                        <FontAwesomeIcon icon={faEnvelope} />&nbsp;Email
                    </h3>
                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder="example@myweb.com"  />
                </div>
                <div className="cleckbox-field flex-row">
                    <input type="checkbox" value={acceptCon} onChange={() => setAcceptCon(!acceptCon)} />
                    <p>ฉันยอมรับเงื่อนไขที่กำหนด</p>
                </div>
                <input className="blue-sky-btn" type="submit" value="สมัครสมาชิก" />
            </form>
        </div>
    )   
}

export default RegisterForm