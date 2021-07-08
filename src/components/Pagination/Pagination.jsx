import React, { Component } from 'react';
import "./Pagination.css"
class Pagination extends Component {
    state = {}
    render() {
        return (
            <div className="Pagination">
                <nav aria-label="...">
                    <ul className="pagination justify-content-center m-2">
                        {/* Previous Page */}
                        {this.props.curpg == 1 ? (
                            <li className="page-item disabled">
                                <span className="page-link">Previous</span>
                            </li>
                        ) : (
                            <li className="page-item">
                                <span className="page-link" onClick={this.props.prevPage}>Previous</span>
                            </li>
                        )}

                        {/* Pages  */}
                        {this.props.allpgs.map((pageno) => {
                            return this.props.curpg == pageno ? (
                                <li key={pageno} className="page-item active" aria-current="page">
                                    <span className="page-link">{pageno}</span>
                                </li>
                            ) : (
                                <li key={pageno} className="page-item" onClick={()=>{this.props.setPage(pageno)}}>
                                    <span className="page-link">{pageno}</span>
                                </li>
                            )
                        })}

                        {/* NextPage */}
                        {this.props.curpg == this.props.allpgs.length ? (
                            <li className="page-item disabled">
                                <span className="page-link">Next</span>
                            </li>
                        ) : (
                            <li className="page-item" onClick={this.props.nextPage}>
                                <span className="page-link">Next</span>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Pagination;