

export const Pagination = ({ pagination }) => {

    const handleClickPagination = (e) => {
        console.log(e.target.value);
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {
                    pagination.hasPrevPage
                        ? (
                            
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                        )
                        : ''
                }
                <li className="page-item"><button className="page-link" onClick={handleClickPagination}>1</button></li>
                <li className="page-item"><button className="page-link" onClick={handleClickPagination}>2</button></li>
                <li className="page-item"><button className="page-link" onClick={handleClickPagination}>3</button></li>
                {
                    pagination.hasNextPage
                        ? (
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        )
                        : ''
                }
            </ul>
        </nav>
    )
}