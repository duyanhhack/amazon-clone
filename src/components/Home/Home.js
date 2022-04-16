import React, { useEffect, useState } from "react"
import Product from "./Product/Product"
import ReactPaginate from "react-paginate"
import "./Home.scss"

function Home() {
    const itemPerPage = 9;

    const [currentItems, setCurrentItems] = useState([])
    const [pageNumbers, setPageNumbers] = useState({
        itemStart: 0,
        itemEnd: itemPerPage,
    })
    const [pageCount, setPageCount] = useState(0)

    const fetchProduct = (itemStart, itemEnd) => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setCurrentItems(data.slice(itemStart, itemEnd))
                setPageCount(Math.ceil(data.length / itemPerPage))
            })
            .catch((err) => console.error("error:" + err))
    }

    useEffect(() => {
        fetchProduct(
            pageNumbers.itemStart,
            pageNumbers.itemEnd
        )
    }, [pageNumbers.itemStart, pageNumbers.itemEnd])

    const handlePageClick = (event) => {
        setPageNumbers({
            itemStart: event.selected * itemPerPage,
            itemEnd: (event.selected + 1) * itemPerPage,
        })
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <div className="home">
            <div className="home__container">
                <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="Amazon Prime Add"
                    className="home__image"
                />

                <div className="home__listItem">
                    {currentItems?.map((item) => {
                        return (
                            <Product
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                rating={item.rating.rate}
                                description={item.description}
                            />
                        )
                    })}
                </div>

                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageCount={pageCount}
                    pageRangeDisplayed={3}
                    previousLabel="< prev"
                    renderOnZeroPageCount={null}
                    containerClassName="home__pagination"
                    pageClassName="pagination--pageItem"
                    pageLinkClassName="pagination--pageLink"
                    previousClassName="pagination--pageItem"
                    previousLinkClassName="pagination--pageLink"
                    nextClassName="pagination--pageItem"
                    nextLinkClassName="pagination--pageLink"
                    activeClassName="active"
                />
            </div>
        </div>
    )
}

export default Home