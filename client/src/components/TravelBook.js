import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Link} from "react-router-dom";

const TravelBook = () => {

    const [travelBook, setTravelBook] = useState([])

    const fetchData = async () => {
        const {data} = await axios.get('http://localhost:5000/api/travel')
        setTravelBook(data.travels)
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {travelBook.map(tb => (
                    <div key={tb.id} className="card mb-3">
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
                                <form>
                                    <button type="submit" className="btn btn-danger">Delete</button>
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
