import React from "react";
import { Field, reduxForm } from 'redux-form'

class EditTransaction extends React.Component {

    renderError({ error, touched }) {
        if (error && touched) {
          return <div className="ui error message">{error}</div>;
        }
      }
      
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? "error" : ""}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = (values) => {
        console.log('thiseditRans..transaction', this.props.transaction)
        this.props.editTransaction({
            _id: this.props.transaction._id,
            type: values.type,
            source: values.source,
            editting: false
        });
    }

    render() {
        return (
            <div className="row">
                <form
                    className="ui grid container form error"
                    onSubmit={this.props.handleSubmit(
                        this.onSubmit
                    )}
                >
                    <div className="field">
                        <Field
                            name="type"
                            component={this.renderInput}
                            label="Type"
                            className="eight wide column"
                        />
                    </div>
                    <div className="field">
                        <Field
                            name="source"
                            component={this.renderInput}
                            label="Source"
                            className="eight wide column"
                        />
                    </div>
                    <button className="ui button primary two wide column">Save</button>
                </form>
            </div>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
  
    if (!formValues.type) {
      errors.type = "Enter a title";
    }
  
    if (!formValues.source) {
      errors.source = "Enter a source";
    }
  
    return errors;
  };

export default reduxForm({
    form: 'editTransaction',
    validate: validate
})(EditTransaction);
