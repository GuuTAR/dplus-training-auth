import { useHistory } from 'react-router-dom'
import './styles.scss'

const ForgetFormFinish = () => {

    const history = useHistory()

    const handleClick = () => {
        history.push("/")
    }

    return (
        <div className="forget-form-finish-comp flex-col ali-cent form">
            <h2 className="form-title margin-zero">ลืมรหัสผ่าน</h2>
            <p className="margin-zero">
                ระบบได้ส่ง mail ไป email ดังกล่าวแล้ว<br />
                โปรดตรวจสอบที่ email ข้างต้น
            </p>
            <button className="blue-sky-btn" onClick={handleClick}>ย้อนกลับ</button>
        </div>
    )
}

export default ForgetFormFinish