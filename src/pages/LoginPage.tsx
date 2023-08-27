import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import kakao from '../assets/kakao_login_medium_narrow.png';
import naver from '../assets/btnG_완성형.png';

// interface form 설정 필요

const LoginPage: React.FC = () => {
	const [form, setForm] = useState({
		email: '',
		password: '',
	});
	const [valid, isValid] = useState({
		isEmail: false,
		isPassword: false,
	});
	const [touched, isTouched] = useState({
		email: false,
		password: false,
	});
	const count = useRef(0);

	const emailInputInValid = !valid.isEmail && touched.email;
	const passwordInputInValid = !valid.isPassword && touched.password;
	const navigate = useNavigate();
	const signupHandler = () => {
		navigate('/signup');
	};
	const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const emailRegex =
			/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
		console.log('success');
		isTouched({ email: true, password: true });
		isValid({ isEmail: true, isPassword: true });
		if (form.email.trim() === '' || !emailRegex.test(form.email)) {
			console.log('email fail');
			isValid({ ...valid, isEmail: false });
			count.current = count.current + 1;
		}
		if (!passwordRegex.test(form.password)) {
			console.log('password fail');
			isValid({ ...valid, isPassword: false });
			count.current = count.current + 1;
		}

		setForm({ email: '', password: '' });
	};
	console.log(emailInputInValid, passwordInputInValid);
	return (
		<SLogin>
			<div className='wrapper'>
				<h2 className='title'>로그인</h2>
				<div className='underline'>
					<form onSubmit={formSubmitHandler}>
						<div className='form-box'>
							<input
								type='text'
								className='input-id'
								placeholder='아이디 (이메일)'
								autoCapitalize='none'
								name='username'
								value={form.email}
								onChange={e => setForm({ ...form, email: e.target.value })}
							/>
							{emailInputInValid && <p className='err-message'>* 아이디 형식이 맞지 않습니다.</p>}
						</div>
						<div className='form-box'>
							<input
								type='password'
								className='input-password'
								placeholder='비밀번호'
								autoCapitalize='none'
								name='password'
								value={form.password}
								onChange={e => setForm({ ...form, password: e.target.value })}
							/>
							{passwordInputInValid && (
								<p className='err-message'>* 비밀번호 형식이 맞지 않습니다.</p>
							)}
						</div>
						{count.current <= 4 && count.current !== 0 && (
							<p className='login-fail'>
								5회 로그인 실패 시, 로그인이 10분 동안 제한됩니다.({count.current}/5)
							</p>
						)}
						<button className='btn-login' type='submit'>
							로그인하기
						</button>
					</form>
					<div className='container-sns_login'>
						<h3 className='title-sns'>SNS 계정으로 로그인하기</h3>
						<div className='container-sns'>
							<div className='sns'>
								<div className='btn-sns_kakao'>
									<img src={kakao} alt='카카오 로그인' />
								</div>
							</div>
							<div className='sns'>
								<div className='btn-sns_naver'>
									<img src={naver} alt='네이버 로그인' />
								</div>
							</div>
						</div>
					</div>
					<div className='container-signup' onClick={signupHandler}>
						간편 회원가입하기
					</div>
				</div>
			</div>
		</SLogin>
	);
};

export default LoginPage;

const SLogin = styled.div`
	max-width: 1920px;
	width: 100%;
	background-color: #fff;
	height: 100vh;
	margin: 0 auto;
	color: #000;

	.wrapper {
		padding: 43px 0 50px;
		max-width: 400px;
		margin: 0 auto;
		margin-top: 80px;

		.title {
			margin-bottom: 20px;
			color: #000;
			font-size: 44px;
			font-weight: 500;
			text-align: center;
		}

		.underline {
			padding-top: 18px;
			border-top: 4px solid #000;

			.login-fail {
				display: block;
				margin-bottom: 5px;
				color: rgb(255, 72, 0);
				font-size: 13px;
				line-height: 20px;
				word-break: keep-all;
			}

			form {
				padding: 0;
				margin: 0;

				.form-box {
					margin-top: 8px;
					margin-bottom: 8px;

					.err-message {
						font-size: 13px;
						color: red;
						margin-left: 5px;
					}

					.input-id {
						border: 1px solid #d4d4d4;
						border-radius: 2px;
						display: block;
						width: 100%;
						height: 48px;
						padding: 0 14px;
						font-size: 14px;
						font-weight: 500;
						color: #1a1a1a;
						outline: none;
						text-size-adjust: none;
						appearance: none;
					}

					.input-password {
						border: 1px solid #d4d4d4;
						border-radius: 2px;
						display: block;
						width: 100%;
						height: 48px;
						padding: 0 14px;
						font-size: 14px;
						font-weight: 500;
						color: #1a1a1a;
						outline: none;
						text-size-adjust: none;
						appearance: none;
					}
				}
				.btn-login {
					display: flex;
					justify-content: center;
					align-items: center;
					min-width: 40px;
					min-height: 25px;
					width: 100%;
					height: 56px;
					margin: 20px 0 0;
					background: #000;
					border-radius: 2px;
					color: #fff;
					font-size: 16px;
					line-height: 56px;
					font-weight: 600;
				}
			}
			.container-sns_login {
				margin: 35px 0;

				.title-sns {
					margin-bottom: 20px;
					font-weight: 500;
					font-size: 16px;
					text-align: center;
					line-height: 1.3;
					color: #000;
					margin: 0px;
					padding: 0px;
				}
				.container-sns {
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 25px;

					.sns {
						.btn-sns_kakao {
							margin-top: 10px;

							img {
								height: 40px;
							}
						}
						.btn-sns_naver {
							margin-top: 10px;
							img {
								height: 40px;
							}
						}
					}
				}
			}
			.container-signup {
				display: block;
				height: 56px;
				border: 1px solid #5d5d5d;
				border-radius: 28px;
				box-sizing: border-box;
				font-weight: 600;
				font-size: 14px;
				color: #1d1d1d;
				text-align: center;
				line-height: 56px;
				cursor: pointer;
			}
		}
	}
`;