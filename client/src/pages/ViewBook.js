import {useState, useEffect} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import SingleBook from "../components/SingleBook";

const ViewBook = () => {

    const [tb, setTb] = useState('');
    const [deleteId, setDeleteId] = useState('')
    const {id} = useParams()
    const navigate = useNavigate();

    const deleteHandler = async (e) => {
        e.preventDefault()
        await axios.delete('http://localhost:5000/api/travel/delete/' + deleteId, {})
        navigate("/");
    }


    const fetchData = async () => await axios.get(`http://localhost:5000/api/travel/${id}`)

    useEffect(() => {
        fetchData().then(response => {
            setTb(response.data.travel)
        })
    }, []);

    return (
        <SingleBook tb={tb} deleteHandler={deleteHandler} setDeleteId={setDeleteId}/>
    );
}

export default ViewBook;
