import React from 'react';
import { Field, reduxForm } from 'redux-form';

class TransactionForm extends React.Component {
	renderError({ error, touched }) {
		if (error && touched) {
			return <div className="ui error message">{error}</div>;
		}
	}

	renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit = (transaction) => {
		this.props.onSubmit(transaction);
	};

	render() {
		return (
			<div>
				<form
					onSubmit={this.props.handleSubmit(this.onSubmit)}
					className="ui form error"
				>
					<div className="field">
						<div className="two fields">
							<div className="field">
								<Field
									name="type"
									component={this.renderInput}
									label="Type"
								/>
							</div>
							<div className="field">
								<Field
									name="source"
									component={this.renderInput}
									label="Source"
								/>
							</div>
						</div>
					</div>

					<button className="ui button primary">Submit</button>
				</form>
			</div>
		);
	}
}

const validate = (formValues) => {
	const errors = {};

	if (!formValues.type) {
		errors.type = 'Enter a title';
	}

	if (!formValues.source) {
		errors.source = 'Enter a source';
	}

	return errors;
};

export default reduxForm({
	form: 'transactionForm',
	validate: validate,
})(TransactionForm);
