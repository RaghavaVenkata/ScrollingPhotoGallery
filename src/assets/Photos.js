
import PropTypes from 'prop-types'; // Import PropTypes

function Photos({ item }) {
    return (
        <div className="col-sm-2 my-4">
            <img src={item.thumbnailUrl} className="card-img-top img-fluid" alt={item.title} />
            <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                <div className="card-body">
                    <h5 className="card-title text-center h2">Id : {item.id}</h5>
                    <h6 className="card-subtitle mb-2 text-muted text-center">{item.title}</h6>
                    <p className="card-text">{item.url}</p>
                </div>
            </div>
        </div>
    );
}

// Add prop type validation
Photos.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired
    }).isRequired
};

export default Photos;
