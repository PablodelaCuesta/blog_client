// import { useState } from "react";


export const Pagination = ({ pagination }) => {

    // const [state, setState] = useState(pagination)

    const handleClickPagination = (e) => {
        console.log(e.target.value);
    }

    const handlerNext = (e) => {
        console.log( pagination.hasNextPage, pagination.nextPage);
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {
                    pagination.hasPrevPage
                        ? (
                            // TODO: Add functionality by pre page
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                        )
                        : ''
                }
                {/* TODO: Each number must to make a call to the api and show the respective posts */}
                <li className="page-item"><button className="page-link" onClick={handleClickPagination}>1</button></li>
                <li className="page-item"><button className="page-link" onClick={handleClickPagination}>2</button></li>
                <li className="page-item"><button className="page-link" onClick={handleClickPagination}>3</button></li>
                {
                    pagination.hasNextPage
                        ? (
                            // TODO: Add functionality by next page
                            <li className="page-item">
                                <button className="page-link" onClick={handlerNext}><span aria-hidden="true">&raquo;</span></button>
{/*                                     
                                <a className="page-link" href="#" aria-label="Next">
                                </a> */}
                            </li>
                        )
                        : ''
                }
            </ul>
        </nav>
    )
}