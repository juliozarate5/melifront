import React, { useEffect, useState } from 'react'
import { getProducts } from '../services/ProductService';
import Container from './products/Container';
import './Index.css';
import Banner from './ui/Banner';
import NavBar from './ui/NavBar';

const title = "Mercado Libre";

export default function Index() {

    const [products, setProducts] = useState([]);
    const [pagination, setPagination] = useState({
        pageNumber: 0,
        pageSize: 5,
        totalPages: 1,
        totalElements: 10,
        first: true,
        last: true,
    });

    const [arrayTotal, setArrayTotal] = useState(new Array(pagination.totalPages).fill(0));

    useEffect(() => {
        const getAll = async () => {
          const {data, pageNumber, pageSize, totalPages, totalElements, first, last} 
          = await getProducts(pagination.pageNumber, pagination.pageSize);
          setProducts(data);
          setPagination({
            ...pagination,
            pageNumber,
            pageSize,
            totalPages,
            totalElements,
            first,
            last
          });
          setArrayTotal(new Array(totalPages).fill(0));
        }
        getAll();
    }, [pagination.pageNumber]);

    const handlePage = (page) => {
        setPagination({
            ...pagination,
            pageNumber: page
        });
    };

    const handleNext = () => {
        setPagination({
            ...pagination,
            pageNumber: pagination.pageNumber + 1
        });
    };

    const handlePrevious = () => {
        setPagination({
            ...pagination,
            pageNumber: pagination.pageNumber - 1
        });
    };

    return (
        <>
            <NavBar title={title} />
            <Banner />
            <Container 
                products={products}
                arrayTotal={arrayTotal}
                pagination={pagination}
                handlePage={handlePage}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
            />
        </>
    )
}
