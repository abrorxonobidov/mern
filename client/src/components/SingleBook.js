import {Link} from "react-router-dom";

const SingleBook = ({tb, deleteHandler, setDeleteId}) => {
    return (
        <div key={tb._id} className="card mb-3">
            <img
                src={tb.image}
                className="card-img-top" alt="..."/>
            <div className="card-body">
                <Link to={'/' + tb._id} className="btn btn-link">
                    <h5 className="card-title">{tb.title}</h5>
                </Link>
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
}

export default SingleBook;
