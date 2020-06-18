import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Autocomplete from './components/Autocomplete/Autocomplete';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { autoValue1: '', autoValue2: '', searchResult: [], searchResult2: [] };
	}

	handleSearch = (value) => {
		if (value) {
			this.setState({
				searchResult: [
					value + Date.now().toString().substr(-2),
					value + Date.now().toString().substr(-3),
					value + Date.now().toString().substr(-4)
				]
			});
		} else {
			this.setState({
				searchResult: []
			});
		}
	};

	handleSearch2 = (value) => {
		if (value) {
			this.setState({
				searchResult2: [
					value + Date.now().toString().substr(-4),
					value + Date.now().toString().substr(-3),
					value + Date.now().toString().substr(-2)
				]
			});
		} else {
			this.setState({
				searchResult2: []
			});
		}
	};

	handleAuto1 = (value) => {
		const state = this.state;
		state.autoValue1 = value;
		this.setState(state);
	};

	handleAuto2 = (value) => {
		const state = this.state;
		state.autoValue2 = value;
		this.setState(state);
	};

	render() {
		return (
			<div className="App">
				<div className="auto-box">
					<Autocomplete
						valuechange={this.handleAuto1}
						searchResult={this.state.searchResult}
						handleSearch={this.handleSearch}
					></Autocomplete>
				</div>
				<div className="auto-box">
					<Autocomplete
						valuechange={this.handleAuto2}
						searchResult={this.state.searchResult2}
						handleSearch={this.handleSearch2}
					></Autocomplete>
				</div>
				<div>
					Input1:
					{this.state.autoValue1}
					<br />
					Input2:
					{this.state.autoValue2}
				</div>
			</div>
		);
	}
}
