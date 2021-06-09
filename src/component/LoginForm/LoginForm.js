import './styles.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons'

const LoginForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ username, password })
    }

    return (
        <div className="login-form-comp flex-col ali-cent">
            <h2 className="title margin-zero">My website</h2>
            <form className="form-container flex-col" onSubmit={handleSubmit}>
                <div className="form-field flex-col">
                    <h3 className="username margin-zero">
                        <FontAwesomeIcon icon={faUser} />&nbsp;Username
                    </h3>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-field flex-col">
                    <h3 className="password margin-zero">
                        <FontAwesomeIcon icon={faKey} />&nbsp;Password</h3>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Link to="/forget-password">ลืมรหัสผ่าน?</Link>
                </div>
            </form>
            <input className="login-btn" type="submit" value="เข้าสู่ระบบ" />
            <div>
                ยังไม่ได้เป็นสมาชิก?
                <Link to="/register">สมัครสมาชิก</Link>
            </div>
        </div>
    )
}

export default LoginForm