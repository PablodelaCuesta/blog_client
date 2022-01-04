
export const Pagination = ({ pagination, actualPage, setPage }) => {

    const paginationNumbers = ( number ) => {
        
        let content = [];
        let html;
        for (let index = 1; index <= number; index++) {
            if ( index == actualPage) {
                html = <li key={index} className="page-item active"><button value={index} className="page-link" onClick={handleClickPagination}>{index}</button></li>
            } else {
                html = <li key={index} className="page-item"><button value={index} className="page-link" onClick={handleClickPagination}>{index}</button></li>
            }
            content.push(html)        
        }

        return content
    }

    const handleClickPagination = (e) => {
        setPage(e.target.value);
    }

    const handlerNext = (e) => {
        setPage(pagination.nextPage)
    }

    const handlerPrev = (e) => {
        setPage(pagination.prevPage)
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {
                    pagination.hasPrevPage
                        ? (
                            <li className="page-item">
                                <button className="page-link" onClick={handlerPrev}><span aria-hidden="true">&laquo;</span></button>
                            </li>
                        )
                        : ''
                }
                {
                    paginationNumbers(pagination.totalPages)
                }
                {
                    pagination.hasNextPage
                        ? (
                            <li className="page-item">
                                <button className="page-link" onClick={handlerNext}><span aria-hidden="true">&raquo;</span></button>
                            </li>
                        )
                        : ''
                }
            </ul>
        </nav>
    )
}