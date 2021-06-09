import './styles.scss'
import ForgetForm from '../../component/ForgetForm/ForgetForm'
import { useState } from 'react'
import ForgetFormFinish from '../../component/ForgetFormFinish/ForgetFormFinish'

const ForgetPassword = () => {

    const [formFinish, setFormFinish] = useState(false)

    return (
        <div className="forget-pass-page cent-page full-h">
            {formFinish ? <ForgetFormFinish /> : <ForgetForm setFormFinish={setFormFinish} />}
        </div>
    )
}

export default ForgetPassword