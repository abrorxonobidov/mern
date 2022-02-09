import {useState} from 'react'
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const AddBook = () => {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/travel/add", {
            title,
            image,
            description
        })
        navigate('/')
    }

    return (
        <div>
            <h3>Add new record</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image Url</label>
                    <input
                        type="text"
                        className="form-control"
                        id="image"
                        name="image"
                        placeholder="https://..."
                        onChange={e => setImage(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        rows={5}
                        className="form-control"
                        id="description"
                        name="description"
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default AddBook;
