import React from 'react'
import PaginationData from "../src/helper/Pagination"

const Page = () => {
    const itempage = 3;
  return (
    <div>
        <h1>list of name</h1>
        <PaginationData itemsPerPage={itempage} />
    </div>
  )
}

export default Page;