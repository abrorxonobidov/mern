import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Link} from "react-router-dom";

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
            {travelBook.map(tb => (
                    <div key={tb._id} className="card mb-3">
                        <img
                            src={tb.image}
                            className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{tb.title}</h5>
                            <p className="card-text">
                                {tb.description}
                            </p>
                            <div className="d-flex justify-content-start">
                                <Link to={'/update/' + tb._id} className="btn btn-primary me-2">
                                    Update
                                </Link>
                                <form onSubmit={deleteHandler}>
                                    <button type="submit" className="btn btn-danger" onClick={() => setDeleteId(tb._id)}>
                                        Delete
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default TravelBook;
