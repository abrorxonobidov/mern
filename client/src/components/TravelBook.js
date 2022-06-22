import React, {useEffect, useState} from 'react';
import axios from 'axios'
import SingleBook from "./SingleBook";

const TravelBook = () => {

    const [travelBook, setTravelBook] = useState([])
    const [deleteId, setDeleteId] = useState('')

    const fetchData = async () => {
        const {data} = await axios.get('http://localhost:5000/api/travel')
        setTravelBook(data.travels)
    }

    const deleteHandler = async (e) => {
        e.preventDefault()
        await axios.delete('http://localhost:5000/api/travel/delete/' + deleteId, {})
        //fetchData();
        setTravelBook(travelBook.filter(item => item._id !== deleteId))
    }

    useEffect(() => {
        fetchData().then();
    }, []);

    return (
        <div>
            <h3>Travel book</h3>
            <hr/>
            {travelBook.map((tb, key) =>
                <SingleBook tb={tb} deleteHandler={deleteHandler} setDeleteId={setDeleteId} key={key}/>
            )}
        </div>
    );
};

export default TravelBook;
