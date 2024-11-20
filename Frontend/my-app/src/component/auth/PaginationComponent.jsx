import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Pagination } from 'react-bootstrap'
import '../../../src/App.css';

const PaginationComponent = () => {
  return (
    <Pagination className='ms-5 mt-2 labels' data-bs-theme='dark'>

      <Pagination.First/>
      <Pagination.Prev/>

      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>

      <Pagination.Next/>
      <Pagination.Last/>

    </Pagination>
  )
}

export default PaginationComponent;