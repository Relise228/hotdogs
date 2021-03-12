import React, {useEffect} from "react";
import {Field, reduxForm} from 'redux-form'
import styles from "./AddForm.module.css"
import {useSelector} from "react-redux";

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
    <div>
        <input {...input} placeholder={label} type={type} className={styles.field}/>
        {touched && ((error && <span className={styles.error}>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
)
var allHotDogs;

let validate = values => {
    const errors = {}
    if (!values.img) {
        errors.img = 'Required'
    }
    if (!values.name) {
        errors.name = 'Required'
    } else if (values.name) {
        allHotDogs.map(h => {
            if (h.name === values.name) errors.name = "Already exist";
        })
    }
    if (!values.price) {
        errors.price = 'Required'
    } else if (isNaN(Number(values.price))) {
        errors.price = 'Must be a number'
    }
    return errors
};

const AddForm = props => {
    const {handleSubmit, submitting, onClose} = props;

    allHotDogs = useSelector(state => state.hotdogs.allHotdogs);

    return (
        <form onSubmit={handleSubmit} style={{maxWidth: 280}}>
            <div>
                <div>
                    <Field
                        name="name"
                        type="text"
                        label="Hot Dog Name"
                        component={renderField}
                        className={styles.field}

                    />
                </div>
            </div>
            <div>
                <div>
                    <Field
                        name="price"
                        component={renderField}
                        type="text"
                        label="Price"
                        className={styles.field}

                    />
                </div>
            </div>
            <div>
                <div>
                    <Field
                        name="description"
                        component={renderField}
                        label="Description"
                        className={styles.textarea}
                    />
                </div>
            </div>
            <div>
                <div>
                    <Field
                        name="img"
                        component={renderField}
                        type="text"
                        label="Image URL"
                    />
                </div>
            </div>


            <div style={{display: 'flex'}}>
                <button type="button" disabled={submitting} onClick={onClose} className={styles.formButton}>
                    No Thanks
                </button>
                <button type="submit" disabled={submitting} className={styles.formButton}>
                    Add
                </button>

            </div>
        </form>
    )
}

export default reduxForm({
    form: 'add',
    validate
})(AddForm)
