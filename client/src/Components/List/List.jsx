import React, { useEffect } from 'react'

import useFetch from '../../Hooks/useFetch.js';

import Card from '../Card/Card.jsx';

import './List.scss';

const List = ({subCats, maxPrice, sort, catId}) => {

    // Query building

    // const hardcodeQuery = `/products?populate=*&[filters][categories][id][$eq]=${catId}${subCats.map(item => `&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
    const hardcodeQuery = `/products?populate=*&[filters][categories][id][$eq]=${catId}${subCats.length ? `&[filters][sub_categories][id][$in]=${subCats}` : ``}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`

    const { data, loading, error } = useFetch(
        hardcodeQuery
    );

    // useEffect(() => {
    //     console.log(hardcodeQuery)
    // }, [subCats, hardcodeQuery])


    return (
        <div className="list">
            {error ? "Something Went Wrong!!": 
            loading ? "loading": data?.map(item=>{
                return <Card item={item} key={item.id}/>
            })}
        </div>
    )
}

export default List