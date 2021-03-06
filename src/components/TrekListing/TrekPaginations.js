import React from 'react'
import { Pagination, Container, PageItem, PageLink } from 'mdbreact'

class TrekPaginations extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pager: {}
        }
    }

    componentWillMount() {
        // set page if items array isn't empty
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // reset page if items array has changed
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }

    setPage(page) {
        let { items, pageSize } = this.props;
        let pager = this.state.pager;

        if (page < 1 || page > pager.totalPages) {
            return;
        }

        // get new pager object for specified page
        pager = this.getPager(items.length, page, pageSize);

        // get new page of items from items array
        let pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

        // update state
        this.setState({ pager: pager });

        // call change page function in parent component
        this.props.onChangePage(pageOfItems);
    }

    getPager(totalItems, currentPage, pageSize) {
        // default to first page
        currentPage = currentPage || 1;

        // default page size is 10
        pageSize = pageSize || 10;

        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);

        let startPage, endPage;
        if (totalPages <= 5) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            } else if (currentPage + 2 >= totalPages) {
                startPage = totalPages - 5;
                endPage = totalPages;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }

        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        let pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    render() {
        let pager = this.state.pager
        if (!pager.pages || pager.pages.length <= 1) {
            // don't display pager if there is only 1 page
            return null;
        }

        return (
            <Container>
                <Pagination className="pagination-circle justify-content-center">
                    <PageItem disabled={pager.currentPage === 1 ? true : false}>
                        <PageLink className="page-link" onClick={() => this.setPage(1)}>
                            <span>First</span>
                        </PageLink>
                    </PageItem>
                    <PageItem disabled={pager.currentPage === 1 ? true : false}>
                        <PageLink className="page-link" aria-label="Previous" onClick={() => this.setPage(pager.currentPage - 1)}>
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </PageLink>
                    </PageItem>
                    {pager.pages.map((page, index) =>
                    <PageItem active={pager.currentPage === page ? true : false}>
                        <PageLink key={page}className="page-link" onClick={() => this.setPage(page)}>
                            {page} <span className="sr-only">(current)</span>
                        </PageLink>
                    </PageItem>
                    )}
                    
                    <PageItem disabled={pager.currentPage === pager.totalPages ? true : false}>
                        <PageLink className="page-link" onClick={() => this.setPage(pager.currentPage + 1)}>
                            &raquo;
                            </PageLink>
                    </PageItem>
                    <PageItem disabled={pager.currentPage === pager.totalPages ? true : false}>
                        <PageLink className="page-link" onClick={() => this.setPage(pager.totalPages)}>
                            Last
                            </PageLink>
                    </PageItem>
                </Pagination>
            </Container>
        )
    }
}


export default TrekPaginations;