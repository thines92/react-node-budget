import React from "react";
import { Field, reduxForm } from "redux-form";
import { useDispatch, useSelector } from "react-redux";

// const NewTransaction = (transaction) => {
//     console.log('NewTransaction transaction', transaction)
//     const dispatch = useDispatch();

//     const renderError = ({ error, touched }) => {
//         if (error && touched) {
//             return <div className="ui error message">{error}</div>;
//         }
//     };

//     const renderInput = ({ input, label, meta }) => {
//       console.log('renderInput', input)
//         const className = `field ${meta.error && meta.touched ? "error" : ""}`;

//         return (
//             <div className={className}>
//                 <label>{label}</label>
//                 <input {...input} autoComplete="off" />
//                 {renderError(meta)}
//             </div>
//         );
//     };

//     return (
//         <div>
//             <form
//                 // onSubmit={this.props.handleSubmit(this.onSubmit)}
//                 onSubmit={transaction.handleSubmit(() => dispatch({ type: "ADD_TRANSACTION", action: transaction }))}
//                 className="ui form error"
//             >
//                 <h4 className="ui dividing header">Add Category</h4>
//                 <div className="field">
//                     <div className="two fields">
//                         <div className="field">
//                             <Field
//                                 name="type"
//                                 component={renderInput}
//                                 label="Type"
//                             />
//                         </div>
//                         <div className="field">
//                             <Field
//                                 name="source"
//                                 component={renderInput}
//                                 label="Source"
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 <button className="ui button primary">Submit</button>
//             </form>
//         </div>
//     );
// };

class NewTransaction extends React.Component {

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

    onSubmit = ({ type, source }) => {
      console.log('onSubmit', type)
        this.props.addTransaction(type, source);
    };

    render() {
        return (
            <div>
                <form
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                    // onSubmit={this.dispatch({ type: "ADD_TRANSACTION", action: this.props.transaction })}
                    className="ui form error"
                >
                    <h4 className="ui dividing header">Add Category</h4>
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
  console.log('validate', formValues);
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
    form: "addTransaction",
    validate: validate,
})(NewTransaction);
