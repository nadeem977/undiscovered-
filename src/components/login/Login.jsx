import React, {useState } from 'react'
import icon1 from '../../assets/img/Message.svg';
import icon2 from '../../assets/img/Lock.svg';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Form, Button } from 'react-bootstrap';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { BAE_URL_API } from '../../Config';
import { useSnackbar } from 'notistack';
import axios from "axios"

const MyLogin = () => {



    const { enqueueSnackbar } = useSnackbar();

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [showpwd, setShowpwd] = useState(false)
    const navigations = useNavigate()


    const LoginUser = async () => {
        try {
            const data = {
                email: email,
                password: password,
            }
            const res = await axios.post(`${BAE_URL_API}/Login`, data)
            console.log(res)
            localStorage.setItem("user", JSON.stringify(res?.data))
            enqueueSnackbar("User Login successfully!", { variant: "success" });
            navigations("/")
            setPassword("")
            setEmail("")
        } catch (error) {
            console.log(error)
            enqueueSnackbar(error?.response?.data, { variant: "error" })
        }
    }

    return (
        <section className="accounts_section">
            <Container>
                <div className="accounts_card_main_div">
                    <div className="accounts_title">
                        <h2>Welcome back!</h2>
                        <p>Login to your account to get started!</p>
                    </div>
                    <Form className="accounts_input_main">
                        <div className="accounts_input_div">
                            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <img src={icon1} alt="icons" />
                        </div>
                        <div className="accounts_input_div">
                            <input type={`${showpwd ? "text" : "password"}`} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <img src={icon2} alt="icons" />
                            <div className='pwdIcon' onClick={() => setShowpwd(!showpwd)}>
                                {showpwd ? <i className="bi bi-eye-fill"></i> : <i className="bi bi-eye-slash-fill"></i>}
                            </div>

                        </div>
                    </Form>
                    <div className="forgot_text">
                        <Link>Forget password?</Link>
                    </div>
                    <div className="accounts_btn">
                        <Button onClick={LoginUser}>Login</Button>
                    </div>
                    <p className="last_text">Don’t have an account? <Link to="/signup">Sign up</Link></p>
                </div>
            </Container>
        </section>
    )
}

export default MyLogin