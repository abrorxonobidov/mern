import {useState, useEffect} from 'react';
import axios from "axios";
import {useNavigate, useParams, Link} from "react-router-dom";

const UpdateBook = () => {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate()
    const {id} = useParams()

    const updateHandler = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/api/travel/${id}`, {
            title,
            image,
            description
        })
        navigate('/')
    }

    const fetchData = async () => await axios.get(`http://localhost:5000/api/travel/${id}`)

    useEffect(() => {
        fetchData().then(response => {
            const travel = response.data.travel;
            setTitle(travel.title)
            setImage(travel.image)
            setDescription(travel.description)
        })
    }, []);

    return (
        <div>
            <h3>Update record</h3>
            <form onSubmit={updateHandler}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image Url</label>
                    <input
                        type="text"
                        className="form-control"
                        id="image"
                        placeholder="https://..."
                        value={image}
                        onChange={e => setImage(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        rows={5}
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <Link to="/" className="btn btn-info me-3" >Back to list</Link>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default UpdateBook;
