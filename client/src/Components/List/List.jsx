import React, { useEffect, useState } from 'react'

import useFetch from '../../Hooks/useFetch.js';

import Card from '../Card/Card.jsx';

import './List.scss';

const List = ({subCats, maxPrice, sort, catId}) => {

    // Edit:Take the query selection in products.jsx

    // Query building
    const [hardcodeQuery, sethardcodeQuery] = useState(`/products?populate=*`)

    // const hardcodeQuery = `/products?populate=*&[filters][categories][id][$eq]=${catId}${subCats.map(item => `&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
    useEffect(() => {
        async function f() {
            // console.log(catId)
            if (await catId) {
                sethardcodeQuery(`/products?populate=*&[filters][categories][id][$eq]=${catId}${subCats.length ? `&[filters][sub_categories][id][$in]=${subCats}` : ``}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`)
            } else {
                sethardcodeQuery(`/products?populate=*`)
            }
        }
        console.log(hardcodeQuery)
    }, [subCats, catId, maxPrice, sort, hardcodeQuery])

    const { data, loading, error } = useFetch(
        hardcodeQuery
    );

    // console.log(data)

    return (
        <div className="list">
            {error ? "Something Went Wrong!!" : 
            loading ? "loading": data?.map(item=>{
                return <Card item={item} key={item.id}/>
            })}
        </div>
    )
}

export default List