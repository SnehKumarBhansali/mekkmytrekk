import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import CustomerDetails from './CustomerDetails'
import OTPVerification from './OTPVerification'
import StepContent from '@material-ui/core/StepContent'
import MobileVerification from './MobileVerification'
import { Container, Button } from 'mdbreact'



function getSteps() {
    return ['Fill Personal Details', 'Authenticate Mobile Number', 'Payment'];
}



class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            activeStep: 0,
            formValid : false,
        };
    }

    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
            formValid : false
        }));
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    handleFormSubmit = formValid => {
        this.setState({ formValid })
    }

    getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <CustomerDetails handleFormSubmit={this.handleFormSubmit} />;
            case 1:
                return <OTPVerification />;
            case 2:
                return "Payment process is under construction";
            default:
                return 'Unknown stepIndex';
        }
    }

    render() {
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <Container>
                <h2 className="h1-responsive font-weight-bold text-center my-5">Register your seat here</h2>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => {
                        return (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                                <StepContent>
                                <Typography >{this.getStepContent(index)}</Typography>
                                <div className="d-flex justify-content-center">
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack} 
                                    >
                                        Back
                                    </Button>
                                    <Button 
                                        color="primary" 
                                        onClick={this.handleNext}
                                        disabled={this.state.activeStep === 0 && !this.state.formValid?true:false}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                                </StepContent>
                            </Step>
                        );
                    })}
                </Stepper>
            </Container>
        );
    }
}


export default Register;
