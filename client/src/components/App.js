import React from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './Header';
import TransactionCreate from './transactions/TransactionCreate';
import TransactionList from './transactions/TransactionList';
import TransactionEdit from './transactions/TransactionEdit';
import TransactionDelete from './transactions/TransactionDelete';
import history from '../history';

function App() {
	return (
		<div className="ui container">
			<Router history={history}>
				<div>
					<Header />
					<Route path="/" exact component={TransactionList} />
					<Route
						path="/transactions/new"
						exact
						component={TransactionCreate}
					/>
					<Route
						path="/transactions/edit/:id"
						exact
						component={TransactionEdit}
					/>
					<Route
						path="/transactions/delete"
						exact
						component={TransactionDelete}
					/>
				</div>
			</Router>
		</div>
	);
}

export default App;
