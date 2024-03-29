import React from 'react'

import useFetch from '../../Hooks/useFetch.js';

import Card from '../Card/Card.jsx';

import './List.scss';

const List = ({ hardcodeQuery }) => {

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