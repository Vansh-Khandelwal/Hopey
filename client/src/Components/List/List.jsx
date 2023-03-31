import React from 'react'

import useFetch from '../../Hooks/useFetch.js';

import Card from '../Card/Card.jsx';

import './List.scss';

const List = ({subCats, maxPrice, sort, catId}) => {

    const { data, loading, error } = useFetch(
        `/products?populate=*&[filter][categories][id][$eq]=${catId}
        ${subCats.map(item=>`&[filters][sub_categories][id][$eq]=${item}`)}
        &[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
    );

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