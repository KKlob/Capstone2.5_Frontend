import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import API_Routes from '../Utilities/apiRoutes';
import './Form.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Universal Form file for Login / Signup pages. Both forms utilize the same logic and have very slight differences in user input.
// Depends on path which form will be shown. onSubmit logic is the same
// Utilizes Yup to validate form inputs before firing off API call to login/signup user

// ******* STILL NEED TO HANDLE ERRORS FROM API AND DISPLAY TO USER *************

function Form({ setToken, lastMember }) {

    const navigate = useNavigate();

    const path = useLocation().pathname;

    // console.log(lastMember);

    // Login Form              ****************************************************************
    if (path.includes("login")) {

        return (
            <div id="div-form-container">
                <Formik
                    initialValues={{ username: "", password: "" }}
                    validationSchema={
                        Yup.object({
                            username: Yup.string()
                                .max(25, 'Must be between 4 and 25 characters')
                                .min(4, 'Must be between 4 and 25 characters')
                                .required('Required'),
                            password: Yup.string()
                                .max(25, 'Must be between 6 and 25 characters')
                                .min(6, 'Must be between 6 and 25 characters')
                                .required('Required'),
                        })}
                    onSubmit={async (values) => {
                        const { username, password } = values;
                        const url = API_Routes.baseURL + API_Routes.user.login;
                        try {
                            const token = await axios({
                                method: 'post',
                                url,
                                data: { username, password }
                            });

                            setToken(token.data.token)
                            navigate(lastMember);
                        } catch (error) {
                            // implement error handling here
                            console.log(error);
                            navigate("/login");
                        }
                    }}
                >
                    {props => (
                        <form onSubmit={props.handleSubmit}>
                            <Container id="form-container">
                                <Row xs={1} className="justify-content-center">
                                    <Col xs={12} md={10} lg={8} className="form-section">
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="text"
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            value={props.values.username}
                                            name="username"
                                        />
                                        {props.errors.username && <div className="feedback">{props.errors.username}</div>}
                                    </Col>
                                    <Col xs={12} md={10} lg={8} className="form-section">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            value={props.values.password}
                                            name="password"
                                        />
                                        {props.errors.password && <div className="feedback">{props.errors.password}</div>}
                                    </Col>
                                    <Col xs={8} md={6} lg={5} className="d-grid form-section">
                                        <Button type="submit" size="lg">Login</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </form>
                    )}
                </Formik>
            </div>
        )
        // SignUp Form         ********************************************************************************
    } else if (path.includes("signup")) {

        return (
            <div id="div-form-container">
                <Formik
                    initialValues={{ username: "", password: "", confirmPassword: "" }}
                    validationSchema={
                        Yup.object({
                            username: Yup.string()
                                .max(25, 'Must be between 4 and 25 characters')
                                .min(4, 'Must be between 4 and 25 characters')
                                .required('Required'),
                            password: Yup.string()
                                .max(25, 'Must be between 6 and 25 characters')
                                .min(6, 'Must be between 6 and 25 characters')
                                .required('Required'),
                            confirmPassword: Yup.string()
                                .test('passwordTest', 'Passwords must match', function (value) {
                                    return value === this.parent.password;
                                })
                        })}
                    onSubmit={async (values) => {
                        const { username, password } = values;
                        const url = API_Routes.baseURL + API_Routes.user.signup;
                        try {
                            const token = await axios({
                                method: 'post',
                                url,
                                data: { username, password }
                            });

                            setToken(token.data)
                            navigate(lastMember);
                        } catch (error) {
                            // implement error handling here
                            console.log(error);
                            navigate("/signup");
                        }
                    }}
                >
                    {props => (
                        <form onSubmit={props.handleSubmit}>
                            <Container id="form-container">
                                <Row xs={1} className="justify-content-center">
                                    <Col xs={12} md={10} lg={8} className="form-section">
                                        <label htmlFor="username">Username:</label>
                                        <input
                                            type="text"
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            value={props.values.username}
                                            name="username"
                                        />
                                        {props.errors.username && <div className="feedback">{props.errors.username}</div>}
                                    </Col>
                                    <Col xs={12} md={10} lg={8} className="form-section">
                                        <label htmlFor="password">Password:</label>
                                        <input
                                            type="password"
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            value={props.values.password}
                                            name="password"
                                        />
                                        {props.errors.password && <div className="feedback">{props.errors.password}</div>}
                                    </Col>
                                    <Col xs={12} md={10} lg={8} className="form-section">
                                        <label htmlFor="confirmPassword">Confirm Password:</label>
                                        <input
                                            type="password"
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            value={props.values.confirmPassword}
                                            name="confirmPassword"
                                        />
                                        {props.errors.confirmPassword && <div className="feedback">{props.errors.confirmPassword}</div>}
                                    </Col>
                                    <Col xs={8} md={6} lg={5} className="d-grid form-section">
                                        <Button type="submit" size="lg">Login</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }

}

export default Form;