import React from 'react';
import {Pagination} from 'react-bootstrap';
export const Paginator = ({paging, activePage, handleSelect}) => {
	return (
        <div className="table_pagination clearfix">
            <nav className="pull-right" aria-label="Page navigation">
        		<Pagination
					bsSize="medium"
					items={paging.pages}
					activePage={activePage}
					maxButtons={10}
					boundaryLinks={true}
					prev="Previous"
					next="Next"
					first="First"
					last="Last"
					onSelect={handleSelect} />
            </nav>
        </div> 
	)
}