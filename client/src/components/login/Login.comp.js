import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import usePasswordToggle from '../../hooks/usePasswordToggle';
import { loginPending, loginSuccess, loginFail } from './loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner, Alert } from 'react-bootstrap';
import { userLogin } from '../../api/userApi';
import { useHistory } from 'react-router-dom';
import { getUserProfile } from '../../pages/dashboard/userAction';
import { Link, useLocation } from 'react-router-dom';
import { resetErrorMsg } from './loginSlice';

export const Login = ({ formSwitcher }) => {
	const [PasswordInputType, ToggleIcon] = usePasswordToggle();
	const dispatch = useDispatch();

	const history = useHistory();
	const location = useLocation();

	const { isLoading, isAuth, error } = useSelector((state) => state.login);

	useEffect(() => {
		sessionStorage.getItem('accessJWT') && history.push('/dashboard');
	}, [history, isAuth]);

	useEffect(() => {
		return () => {
			error && dispatch(resetErrorMsg());
		};
	}, [error, dispatch]);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleOnChange = (e) => {
		const { name, value } = e.target;

		switch (name) {
			case 'email':
				setEmail(value);
				break;

			case 'password':
				setPassword(value);
				break;

			default:
				break;
		}
	};

	const handleOnSubmit = async (e) => {
		e.preventDefault();

		if (!email || !password) {
			return alert('Fill up all the form!');
		}
		dispatch(loginPending());

		try {
			const isAuth = await userLogin({ email, password });

			if (isAuth.status === 'error') {
				return dispatch(loginFail(isAuth.message));
			}
			dispatch(loginSuccess());
			dispatch(getUserProfile());
			history.push('/dashboard');
		} catch (error) {
			dispatch(loginFail(error.message));
		}
	};

	return (
		<div className="body">
			<section className="mainlogin">
				<div id="login">
					<div className="container">
						<div
							id="login-row"
							className="row justify-content-center align-items-center"
						>
							<div id="login-column">
								<div className="login-box">
									{error && <Alert variant="danger">{error}</Alert>}

									<form
										className="login-form form"
										action=""
										method="post"
										onSubmit={handleOnSubmit}
									>
										<div className="logoimg text-center">
											<img
												src={process.env.PUBLIC_URL + '/images/logo.png'}
												className="img-fluid"
												alt="studyroo-logo"
											></img>
											<h2>
												Hello! Welcome to the studyroo <br />
												Education System
											</h2>
											{isLoading && (
												<Spinner variant="primary" animation="border" />
											)}
										</div>
										<div className="form-group">
											<label className="text-lb">User Name</label>
											<br />
											<input
												type="text"
												name="email"
												placeholder="User Name"
												id="username"
												className="form-control"
												onChange={handleOnChange}
												value={email}
												required
											/>
										</div>

										<div className="form-group">
											<label className="text-lb">Password</label>
											<br />
											<input
												id="loginpassword password"
												type={PasswordInputType}
												name="password"
												placeholder="Enter your Password"
												className="form-control"
												onChange={handleOnChange}
												value={password}
												required
											/>
											<span className="toggle-password field-icon">
												{ToggleIcon}
											</span>
										</div>
										<div className="form-group resiterlink">
											<div className="chck">
												<input type="checkbox" id="box-2" />
												<label for="box-2">Remember Me </label>
											</div>

											<a
												className="forgettext"
												onClick={() => formSwitcher('rest')}
											>
												Forgot Password?
											</a>
										</div>

										<div className="footersingbtn">
											<input
												type="submit"
												name="submit"
												className="btn getin-btn"
												value="Sign in"
											/>
										</div>
										<p>
											Are you new here?{' '}
											<Link to="/registration">
												<a className="forgettext"> Register Now</a>
											</Link>
										</p>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

Login.propTypes = {
	formSwitcher: PropTypes.func.isRequired,
};
