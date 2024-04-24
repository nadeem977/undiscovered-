import React, { useState } from 'react'
import icon1 from '../../assets/img/Message.svg';
import icon2 from '../../assets/img/Lock.svg';
import icon3 from '../../assets/img/Profile.svg';
import icon4 from '../../assets/img/Call.svg';
import Container from 'react-bootstrap/Container';
import { Form, Button } from 'react-bootstrap';
import './Signup.css';
import { BAE_URL_API } from '../../Config';
import { useSnackbar } from 'notistack';
import axios from "axios"
import isPasswordValid from '../CheckPassword';
import { useNavigate } from 'react-router-dom';


const Signup = () => {

    const { enqueueSnackbar } = useSnackbar();
    const [username, setUsername] = useState("")
    const [lastname, setLastname] = useState("")
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [checkbox, setCheckbox] = useState(false)
    const [validpaswords, setValidpaswords] = useState('')
    const [showpwd, setShowpwd] = useState(false)
    const navigations = useNavigate()



    const Registration = async () => {

        if (!validateEmail(email)) {
            enqueueSnackbar("Please enter a valid email address", { variant: "error" });
            return;
        }
        const Validpwd = isPasswordValid(password)
        if (Validpwd?.valid) {
            try {
                const data = {
                    username: username,
                    lastname: lastname,
                    email: email,
                    password: password,
                    phone: number
                }
                const res = await axios.post(`${BAE_URL_API}/Registration`, data)
                enqueueSnackbar("User Register successfully!", { variant: "success" });
                navigations("/login")
                console.log(res)
                setUsername("")
                setNumber("")
                setNumber("")
                setPassword("")
                setEmail("")
                setLastname("")
                setValidpaswords("")
            } catch (error) {
                console.log(error)
                enqueueSnackbar('server error', { variant: "error" })
            }
        } else {
            setValidpaswords(Validpwd?.message)
        }
    }
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    return (
        <section className="accounts_section">
            <Container>
                <div className="accounts_card_main_div">
                    <div className="accounts_title">
                        <h2>Sign Up</h2>
                        <p>Let’s create new account</p>
                    </div>
                    <Form className="accounts_input_main">
                        <div className="accounts_input_div">
                            <input type="text" placeholder='First name' value={username} onChange={(e) => setUsername(e.target.value)} />
                            <img src={icon3} alt="" />
                        </div>
                        <div className="accounts_input_div">
                            <input type="text" placeholder='Last name' value={lastname} onChange={(e) => setLastname(e.target.value)} />
                            <img src={icon3} alt="" />
                        </div>
                        <div className="accounts_input_div">
                            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <img src={icon1} alt="" />
                        </div>
                        <div className="accounts_input_div">
                            <input type="number" placeholder='Phone number' value={number} onChange={(e) => setNumber(e.target.value)} />
                            <img src={icon4} alt="" />
                        </div>
                        <div className="accounts_input_div">
                            <input type={`${showpwd ? "text" : "password"}`} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <img src={icon2} alt="" />
                            <div className='pwdIcon' onClick={() => setShowpwd(!showpwd)}>
                                {showpwd ? <i className="bi bi-eye-fill"></i> : <i className="bi bi-eye-slash-fill"></i>}
                            </div>
                        </div>
                        <p className='pwd_sms'>{validpaswords || validpaswords}</p>
                    </Form>
                    <div className="terms_text">
                        <input type="checkbox" id='terms' onChange={() => setCheckbox(!checkbox)} />
                        <label htmlFor="terms">By creating an account, you are acknowledging and accepting the terms and conditions, thereby entering into a legally binding contract with the service provider.</label>
                    </div>
                    <div className="accounts_btn">
                        <Button disabled={!checkbox} onClick={Registration}>Agree and continue</Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Signup