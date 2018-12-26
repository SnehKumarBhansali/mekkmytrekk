import React from 'react'
import TrekPaginations from './TrekPaginations'
import TrekList from './TrekList'

class TrekListingHomePage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.handleNavBarItem()
    }

    render(){
        return (
            <div>
                <TrekList />
                <TrekPaginations />
            </div>
        )
    }
}

export default TrekListingHomePage;