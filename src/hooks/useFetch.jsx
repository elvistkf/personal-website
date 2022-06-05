import {useEffect, useState} from 'react'

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [status, setStatus] = useState('loading');

    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
                setStatus('fetched');
            }
            catch (error) {
                console.error(error);
                setStatus('error');
            }
        };

        fetchData();
    }, [url]);

    return { status, data};
}
