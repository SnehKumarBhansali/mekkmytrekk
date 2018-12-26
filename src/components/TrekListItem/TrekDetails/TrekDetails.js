import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LocationOnSharp from '@material-ui/icons/LocationOnSharp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Photo from '@material-ui/icons/Photo';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';
import { Button, Modal, ModalBody, ModalFooter } from 'mdbreact';
import CustomerDetails from '../../RegisterForTrek/CustomerDetails'
import About from './About'
import CampLeader from './CampLeader'
import Charges from './Charges'
import Duration from './Duration'
import Facts from './Facts'
import Gallery from './Gallery'
import Data from '../../Data'

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});

class TrekDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            modal: false,
            formValid:false
        }
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    toggle = () => {
        this.setState((prevState) => {
            return {
                modal: !prevState.modal,
                formValid : false
            }
        })
    }

    handleFormSubmit = formValid => {
        this.setState({ formValid })
    }


    render() {
        const { classes } = this.props;
        const { value } = this.state;
        const eventId = this.props.eventId

        return (

            <section className="text-center my-5">
                <h2 className="h1-responsive font-weight-bold my-5">Trek Name</h2>
                <div className={classes.root}>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={value}
                            onChange={this.handleChange}
                            scrollable
                            scrollButtons="on"
                            indicatorColor="primary"
                            textColor="primary"
                        >
                            <Tab label="About Trek" icon={<LocationOnSharp />} />
                            <Tab label="Facts" icon={<FavoriteIcon />} />
                            <Tab label="Duration" icon={<CalendarToday />} />
                            <Tab label="Charges" icon={<i className="fa fa-inr" style={{ fontSize: "24px" }}></i>} />
                            <Tab label="Camp Leader" icon={<PersonPinIcon />} />
                            <Tab label="Gallery" icon={<Photo />} />

                        </Tabs>
                    </AppBar>
                    {value === 0 && <TabContainer className="font-weight-normal">
                        <About eventId={eventId}/>
                    </TabContainer>}
                    {value === 1 && <TabContainer className="font-weight-normal">
                        <Facts />
                    </TabContainer>}
                    {value === 2 && <TabContainer className="font-weight-normal"><Duration /></TabContainer>}
                    {value === 3 && <TabContainer className="font-weight-normal"><Charges /></TabContainer>}
                    {value === 4 && <TabContainer className="font-weight-normal"><CampLeader /></TabContainer>}
                    {value === 5 && <TabContainer className="font-weight-normal"><Gallery /></TabContainer>}

                </div>
                <Button color="primary" onClick={this.toggle}> Register Here </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalBody>
                        <CustomerDetails handleFormSubmit={this.handleFormSubmit} />
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="secondary"
                            onClick={this.toggle}
                        >
                            Close
                        </Button>
                        <Button
                            color="primary"
                            disabled={!this.state.formValid}
                        >
                            Register
                        </Button>
                    </ModalFooter>
                </Modal>
            </section>

        );
    }
}


export default withStyles(styles)(TrekDetails);
