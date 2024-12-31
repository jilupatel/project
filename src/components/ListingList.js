import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListingList = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const response = await axios.get('/api/listings');
      setListings(response.data);
    };
    fetchListings();
  }, []);

  return (
    <div className="row">
      {listings.map((listing) => (
        <div key={listing._id} className="card row-col-lg-3 row-col-md-3 row-col-sm-1" style={{ width: '18rem' }}>
          <Link to={`/listings/${listing._id}`}>
            <img src={listing.image.url} className="card-img-top" alt="listing image" />
          </Link>
          <div className="card-body">
            <p className="card-text">{listing.title}<br />
              {listing.price ? `${listing.price.toLocaleString("en-IN")} / night` : 'Price not available'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListingList;