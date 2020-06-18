import React, { Component } from 'react';
import styles from './Autocomplete.module.scss';

export interface AutoCompleteProp {
	// public
	searchResult: string[];
	handleSearch: (value: string) => {};
	valuechange: (value: string) => {};
	// private
	changeEnabled: (input: any) => {};
}

interface State {
	value: string;
	fading: boolean;
}

class Autocomplete extends Component {
	constructor(props: AutoCompleteProp) {
		super(props);
		this.state = { value: '', fading: false };
		this.selectItem = this.selectItem.bind(this);
		this.onChange = this.onChange.bind(this);
		this.clearResult = this.clearResult.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.onFocus = this.onFocus.bind(this);
		this.syncValue = this.syncValue.bind(this);
	}

	onChange(e: any) {
		this.setState({ value: e.target.value });
		(this.props as AutoCompleteProp).handleSearch(e.target.value);
		this.syncValue(e.target.value);
	}

	onBlur(e: any) {
		this.clearResult();
	}

	onFocus() {
		(this.props as AutoCompleteProp).handleSearch((this.state as State).value);
	}

	clearResult() {
		this.setState({ fading: true });
		setTimeout(() => {
			(this.props as AutoCompleteProp).handleSearch('');
			this.setState({ fading: false });
		}, 300);
	}

	selectItem(cur: string, e: any) {
		this.setState({ value: cur });
		this.syncValue(cur);
		this.clearResult();
	}

	syncValue(value: string) {
		setTimeout(() => {
			(this.props as AutoCompleteProp).valuechange(value);
		}, 0);
	}

	render() {
		const { searchResult } = this.props as AutoCompleteProp;
		return (
			<div className={styles.component}>
				<div className={styles.outInput}>
					<input
						className={styles.input}
						type="text"
						value={(this.state as State).value}
						onChange={this.onChange}
						onBlur={this.onBlur}
						onFocus={this.onFocus}
					/>
				</div>
				<div
					className={
						!(this.state as State).fading && searchResult && searchResult.length > 0
							? `${styles.list} ${styles.show}`
							: `${styles.list}`
					}
				>
					<ul className={styles.ul}>
						{searchResult &&
							searchResult.map((item) => (
								<li className={styles.li} key={item} onClick={this.selectItem.bind(this, item)}>
									{item}
								</li>
							))}
					</ul>
				</div>
			</div>
		);
	}
}

export default Autocomplete;
