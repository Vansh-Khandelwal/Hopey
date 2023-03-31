import { useState } from "react";
import { useEffect } from "react";
import { makeRequest } from "../makeRequest.js";

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {

        const fetchData = async() => {
            try {
                setLoading(true);
                const res = await makeRequest.get(url);
                setData(res.data.data);

            } catch (error) {
                setError(true);
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();

    }, [url]);

    return { data, loading, error };
};

export default useFetch;