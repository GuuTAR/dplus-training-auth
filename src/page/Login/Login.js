import './styles.scss'

import { useEffect } from 'react'

import LoginForm from '../../component/LoginForm/LoginForm'

const Login = () => {

    useEffect(() => {
        fetch("http://localhost:8000/api/user/users")
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div className="login-page cent-page full-h">
            <LoginForm />
        </div>
    )
}

export default Login