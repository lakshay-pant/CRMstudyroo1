import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { loginSuccess } from '../login/loginSlice';
import { getUserProfile } from '../../pages/dashboard/userAction';

import { fetchNewAccessJWT } from '../../api/userApi';

import { DefaultLayout } from '../../layout/DefaultLayout';

export const PrivateRoute = ({ children, ...rest }) => {
	const dispatch = useDispatch();
	const { isAuth } = useSelector((state) => state.login);
	const { user } = useSelector((state) => state.user);

	useEffect(() => {
		const updateAccessJWT = async () => {
			const result = await fetchNewAccessJWT();
			result && dispatch(loginSuccess());
		};

		!user._id && dispatch(getUserProfile());

		!localStorage.getItem('accessJWT') && updateAccessJWT();

		!isAuth && localStorage.getItem('accessJWT') && dispatch(loginSuccess());
	}, [dispatch, isAuth, user._id]);

	return (
		<Route
			{...rest}
			render={() =>
				isAuth ? (
					<DefaultLayout>{children}</DefaultLayout>
				) : (
					<h1>you are not logged in</h1>
				)
			}
		/>
	);
};
