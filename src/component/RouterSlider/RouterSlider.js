import { Route, useLocation } from "react-router-dom"
import SlideRoutes from 'react-slide-routes'
import ForgetPassword from "../../page/ForgetPassword/ForgetPassword"
import Login from "../../page/Login/Login"
import Register from "../../page/Register/Register"

const RouterSlider = () => {

    const location = useLocation()

    return (
        <SlideRoutes location={location} duration={600}>
            <Route exact key="login" path="/" component={Login} />
            <Route exact key="register" path="/register" component={Register} />
            <Route exact key="forget-password" path="/forget-password" component={ForgetPassword} />
        </SlideRoutes>
    )
}

export default RouterSlider