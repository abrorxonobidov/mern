import React, {Component} from 'react';

class UpdateBook extends Component {
    render() {
        return (
            <div>
                <h3>Update record</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image Url</label>
                        <input type="text" className="form-control" id="image" placeholder="https://..."/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea rows={5} className="form-control" id="description"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default UpdateBook;
