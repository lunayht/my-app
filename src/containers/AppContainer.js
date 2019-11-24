import React from 'react';
import MainRouter from '../routers/MainRouter';
import Header from '../components/Header';

class AppContainer extends React.Component{
	render() {
		return(
			<div>
				<Header />
				<MainRouter />
			</div>
		)
	}
};

export default AppContainer;