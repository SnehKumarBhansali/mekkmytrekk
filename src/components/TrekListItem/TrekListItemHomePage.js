import React from 'react'
import { Container } from 'mdbreact'
import CarouselPage from '../Home/CarouselPage';
import TrekDetails from './TrekDetails/TrekDetails';


class TrekListItemHomePage extends React.Component {
    
    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.handleNavBarItem()
    }

    render() {
        
        const eventId = this.props.location.pathname.split("/")[2]
        return (
            <Container>
                <CarouselPage />
                <TrekDetails eventId={eventId}/>
            </Container>
        )
    }
}



export default TrekListItemHomePage;