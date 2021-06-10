import './styles.scss'
import { useEffect, useState } from 'react'
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router-dom'

const RegisterForm = () => {

    const history = useHistory()

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [rePassword, setRePassword] = useState()
    const [email, setEmail] = useState()
    const [acceptCon, setAcceptCon] = useState(false)

    const [showNullErr, setShowNullErr] = useState(false)

    const [formErr] = useState({
        username: {
            error : false,
            null: true
        },
        password: {
            error : false,
            null: true
        },
        rePassword: {
            error : false,
            null: true
        },
        email: {
            error : false,
            null: true
        },
        acceptCon: {
            null: true
        }
    })

    useEffect(() => {

    }, [])

    const invalidPayload = () => {
        const stringFormErr = JSON.stringify(formErr)
        return stringFormErr.includes("true")
    }

    const nullPayload = () => {
        const stringFormErr = JSON.stringify(formErr)
        return stringFormErr.includes("true")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!invalidPayload() && !nullPayload()) {
            console.log({ username, password, rePassword, email, acceptCon })
            history.push("/")
        }
        else {
            setShowNullErr(true)
        }
    }

    const handleChange = (e) => {
        const { name, value, checked } = e.target
        switch (name) {
            case "username" :
                formErr.username.null = (value==="")? true : false
                setUsername(value)
                return
            case "email":
                formErr.email.error = (value.split("@").length <= 1)? true : false
                formErr.email.null = (value==="")? true : false
                setEmail(value)
                return
            case "password":
                formErr.rePassword.error = (value !== rePassword)? true : false
                formErr.password.null = (value==="")? true: false
                setPassword(value)
                return
            case "re-password":
                formErr.rePassword.error = (value !== password)? true : false
                formErr.rePassword.null = (value==="")? true: false
                setRePassword(value)
                return
            case "acceptCon":
                formErr.acceptCon.null = !checked
                setAcceptCon(checked)
                return
            default:
                return
        }
    }

    return (
        <div className="register-form-comp flex-col ali-cent form">
            <h2 className="form-title margin-zero">สมัครสมาชิก</h2>
            <form className="form-container flex-col" onSubmit={handleSubmit}>
                <div className="form-field flex-col">
                    <h3 className="username margin-zero">
                        <FontAwesomeIcon icon={faUser} />&nbsp;Username*
                    </h3>
                    <input name="username" value={username} onChange={handleChange} maxLength="16" />
                    {showNullErr && formErr.username.null && <label className="error">This field is required</label>}
                </div>
                <div className="form-field flex-col">
                    <h3 className="password margin-zero">
                        <FontAwesomeIcon icon={faKey} />&nbsp;Password*
                    </h3>
                    <input name="password" type="password" value={password} onChange={handleChange} maxLength="16" />
                    {showNullErr && formErr.password.null && <label className="error">This field is required</label>}
                </div>
                <div className="form-field flex-col">
                    <h3 className="re-password margin-zero">
                        <FontAwesomeIcon icon={faKey} />&nbsp;Re-Password*
                    </h3>
                    <input name="re-password" type="password" value={rePassword} onChange={handleChange} maxLength="16" />
                    {rePassword && formErr.rePassword.error && <label className="error">Password doesn't match</label>}
                    {showNullErr && formErr.rePassword.null && <label className="error">This field is required</label>}
                </div>
                <div className="form-field flex-col">
                    <h3 className="email margin-zero">
                        <FontAwesomeIcon icon={faEnvelope} />&nbsp;Email*
                    </h3>
                    <input name="email" value={email} onChange={handleChange} placeholder="example@myweb.com" maxLength="40" />
                    {formErr.email.error && <label className="error">Email invalid format</label>}
                    {showNullErr && !formErr.email.error && formErr.email.null && <label className="error">This field is required</label>}
                </div>
                <div className="cleckbox-field flex-row">
                    <input name="acceptCon" type="checkbox" value={acceptCon} onChange={handleChange} />
                    <p>ฉันยอมรับเงื่อนไขที่กำหนด</p>
                </div>
                {showNullErr && formErr.acceptCon.null && <label className="error">Please accept term and conditions</label>}
                <input className="blue-sky-btn" type="submit" value="สมัครสมาชิก" />
            </form>
        </div>
    )
}

export default RegisterForm