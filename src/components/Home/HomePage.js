import React from 'react'
import { Container } from 'mdbreact'
import CarouselPage from './CarouselPage'
import ReviewsPage from './ReviewsPage'
import UpcomingTrekPage from '../UpcomingTreks/UpcomingTrekPage'
import GalleryPage from './GalleryPage';

class HomePage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.handleNavBarHome()
    }
    render() {
        return (
            <Container>
                <CarouselPage />
                <UpcomingTrekPage />
                <GalleryPage />
                <ReviewsPage />
            </Container>
        )
    }
}

export default HomePage;