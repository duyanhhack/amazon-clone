import React, { useEffect, useState } from 'react'
import Product from './Product/Product'
import ReactPaginate from 'react-paginate';
import { all } from './fetchAPI'
import './Home.scss'

function Home() {
    const [currentItems, setCurrentItems] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    // const [pageCount, setPageCount] = useState(0);
    // const [itemOffset, setItemOffset] = useState(0);

    // const url = 'https://fakestoreapi.com/products';

    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(json => setList(json))
    //         .catch(err => console.error('error:' + err));
    // }, [])

    const fetchProduct = (pageNumber) => {
        fetch(`https://fakestoreapi.com/products?page=${pageNumber}&limit=9`)
            .then(res => res.json())
            .then(json => setCurrentItems(json))
            .catch(err => console.error('error:' + err));
    }

    useEffect(() => {
        // const endOffset = itemOffset + 9;
        // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        // setCurrentItems(all?.slice(itemOffset, endOffset));
        // setPageCount(Math.ceil(all?.length / 9));
        // setCurrentItems()
        fetchProduct(pageNumber)
    }, [pageNumber]);

    const handlePageClick = (event) => {

        // const newOffset = (event.selected * 9) % all?.length;
        // console.log(
        //     `User requested page number ${event.selected}, which is offset ${newOffset}`
        // );
        // setItemOffset(newOffset);
        console.log(event.selected + 1)
        setPageNumber(event.selected + 1)
        // const pageNumber = event.selected + 1
    }

    return (
        <div className="home">
            <div className="home__container">
                <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                    className="home__image"
                />

                <div className="home__listItem">
                    {
                        currentItems?.map(item => {
                            return (
                                <Product
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    image={item.image}
                                    rating={item.rating.rate}
                                />
                            )
                        })
                    }
                </div>

                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageCount={3}
                    pageRangeDisplayed={3}
                    previousLabel="< prev"
                    renderOnZeroPageCount={null}
                    containerClassName="home__pagination"
                    pageClassName="pagination--pageItem"
                    pageLinkClassName="pagination--pageLink"
                    previousClassName='pagination--pageItem'
                    previousLinkClassName='pagination--pageLink'
                    nextClassName='pagination--pageItem'
                    nextLinkClassName='pagination--pageLink'
                    activeClassName='active'
                />


            </div>
        </div>
    )
}

export default Home