import React from 'react'
import qs from 'qs'

import useFetch from '../../Hooks/useFetch.js';

import Card from '../Card/Card.jsx';

import './List.scss';

const List = ({subCats, maxPrice, sort, catId}) => {

    // Query building
    const query = qs.stringify({
        filters: {
            categories: {
                id: {
                    $eq: catId
                }
            },
            price: {
                $lte: maxPrice
            }
        },
        sort: {
            price: sort
        }
        // $or: [
        //     {
        //         date: {
        //             $eq: '2020-01-01',
        //         },
        //     },
        //     {
        //         date: {
        //             $eq: '2020-01-02',
        //         },
        //     },
        // ],
        // author: {
        //     name: {
        //         $eq: 'Kai doe',
        //     },
        // },
    }, {
        encodeValuesOnly: true, // prettify URL
    });

    const hardcodeQuery = `/products?populate=*&[filter][categories][id][$eq]=${catId}${subCats.map(item => `&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`

    const { data, loading, error } = useFetch(
        hardcodeQuery
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