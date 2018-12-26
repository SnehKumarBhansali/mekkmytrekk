import React from 'react';
import {Container} from 'mdbreact'
import TrekPaginations from './TrekPaginations';
import TrekDetailsCard from './TrekDetailsCard';
import Data from '../Data'

class TrekList extends React.Component {
    constructor(props) {
        super(props);

        // an example array of 150 items to be paged
        // let exampleItems = [...Array(150).keys()].map(i => ({ id: (i + 1), name: 'Track ' + (i + 1) }));

        this.state = {
            exampleItems: Data,
            pageOfItems: []
        };

    }

    onChangePage = (pageOfItems) => {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        return (
            <Container>
                <section className="my-5">
                    <h2 className="h1-responsive font-weight-bold text-center my-5">Participate Now</h2>
                    <p className="text-center w-responsive mx-auto pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
                    {this.state.pageOfItems.map((item) =>
                        <TrekDetailsCard key={item.trekId} title={item.trekName} id={item.trekId}/>
                    )}
                    <TrekPaginations items={this.state.exampleItems} onChangePage={this.onChangePage} />
                </section>
            </Container>
        );
    }
}

export default TrekList;