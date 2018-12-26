import React from 'react'
import { Row, Col, Input } from 'mdbreact'
import TextField from '@material-ui/core/TextField';


class CustomerDetails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fields: {},
            errors: {}
        }
    }



    handleValidation() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = false;
        let nameValid = false;
        let birthdayValid = false;
        let mobileNumberValid = false;
        let TnCValid = false;

        //Name
        if (fields.hasOwnProperty('name')) {
            const fullName = fields['name'].replace(/^\s+/g, '')
            if (fullName === '') {
                errors['name'] = "Name can't be empty";
            } else if (!fullName.match(/^[a-zA-Z ]+$/)) {
                errors['name'] = 'Only letters';
            }
            if (JSON.stringify(errors) === JSON.stringify({})) {
                nameValid = true
            }
        }
        //Date of Birth
        if (fields.hasOwnProperty('birthday')) {
            if (!fields['birthday']) {
                errors['birthday'] = "Birthday can't be empty"
            }
            if (JSON.stringify(errors) === JSON.stringify({})) {
                birthdayValid = true
            }
        }


        //Mobile Number
        if (fields.hasOwnProperty('mobileNumber')) {
            const re = /^[0-9\b]+$/;
            if (fields['mobileNumber'] === '') {
                errors['mobileNumber'] = "Mobile Number can't be empty"
            } else {
                let mobileNumber = fields['mobileNumber'].replace(/\D/g, '');
                if (mobileNumber !== '') {
                    mobileNumber = mobileNumber.replace(/^0+/, '')
                    if (!re.test(mobileNumber) || mobileNumber.length !== 10) {
                        errors['mobileNumber'] = "Invalid Mobile Number"
                    }
                } else {
                    errors['mobileNumber'] = "Please enter numeric digits only"
                }
            }
            if (JSON.stringify(errors) === JSON.stringify({})) {
                mobileNumberValid = true
            }
        }
        // Check Terms and condition
        if (fields.hasOwnProperty('TnC')) {
            if (fields['TnC'] === false) {
                errors['TnC'] = "Please confirm for the terms and conditions."
            }
            if (JSON.stringify(errors) === JSON.stringify({})) {
                TnCValid = true
            }
        }

        if (this.state.errors.hasOwnProperty('gender') && !fields.hasOwnProperty('gender')) {
            errors['gender'] = "Please select gender"
        }

        if (nameValid && birthdayValid && mobileNumberValid && TnCValid) {
            //Gender
            if (!fields.hasOwnProperty('gender')) {
                errors['gender'] = "Please select gender"
            }
            if (JSON.stringify(errors) === JSON.stringify({})) {
                formIsValid = true
            }
        }
        this.setState({ errors: errors });

        return formIsValid;
    }



    handleChange = (field, e) => {
        let fields = this.state.fields;
        fields[field] = field !== 'TnC' ? e.target.value : this.refs.TnC.checked;
        this.setState({ fields });
        const result = this.handleValidation()
        this.props.handleFormSubmit(result)
    }


    render() {
        let currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');

        return (
                <form id="customerDetails">
                    <p className="h4 text-center py-4 blue-text">Please fill your details</p>
                    <p className="text-center">Your details are confidential to us. We won't share it to anyone.</p>
                    <Input
                        label="Full Name"
                        type="text"
                        ref="name"
                        value={this.state.fields["name"]?this.state.fields["name"].replace(/^\s+/g, '') : undefined}
                        onChange={(event) => this.handleChange("name", event)}
                    />
                    <span className="red-text text-left font-weight-normal">{this.state.errors["name"]}</span>
                    <div style={{ marginTop: "10px" }}>
                        <TextField
                            label="Birthday"
                            type="date"
                            InputLabelProps={{
                                shrink: true
                            }}
                            InputProps={{
                                inputProps: { max: currentDate }
                            }}
                            fullWidth
                            onChange={(event) => this.handleChange("birthday", event)}
                        />
                        <span className="red-text text-left font-weight-normal">{this.state.errors["birthday"]}</span>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <Row onChange={(event) => this.handleChange("gender", event)}>
                            <Col>
                                <label>Gender</label>
                            </Col>
                            <Col>
                                <label>
                                    <input
                                        type="radio"
                                        ref="gender"
                                        value="Male"
                                        name="gender"
                                    />
                                    Male
                                </label>
                            </Col>
                            <Col>
                                <label>
                                    <input
                                        type="radio"
                                        ref="gender"
                                        value="Female"
                                        name="gender"
                                        required
                                    />
                                    Female
                                </label>
                            </Col>
                        </Row>
                        <span className="red-text text-left font-weight-normal">{this.state.errors["gender"]}</span>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <Input
                            label="Trek"
                            type="text"
                            value="trek name"
                            disabled
                        />
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <Input
                            label="Mobile Number"
                            type="text"
                            ref="mobileNumber"
                            value={this.state.fields["mobileNumber"] ? this.state.fields["mobileNumber"].replace(/\D/g, '') : undefined}
                            onChange={(event) => this.handleChange("mobileNumber", event)}
                        />
                        <span className="red-text text-left font-weight-normal">{this.state.errors["mobileNumber"]}</span>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <input
                            type="checkbox"
                            style={{ "marginRight": "10px" }}
                            ref="TnC"
                            onChange={(event) => this.handleChange("TnC", event)}
                        />
                        <label className="text-center">I accept the terms and conditions.</label>
                    </div>
                    <span className="red-text text-left font-weight-normal">{this.state.errors["TnC"]}</span>
                </form>            
        )
    }

}

export default CustomerDetails;