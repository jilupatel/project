import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const ListingDetail = () => {
  const { id } = useParams();
  const [listing, setListing] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await axios.get(`/api/listings/${id}`);
        setListing(response.data);
      } catch (err) {
        console.error('Error fetching listing:', err);
      }
    };
    fetchListing();
  }, [id]);

  const handleDelete = async () => {
    e.preventDefault();
    try {
      await axios.delete(`/api/listings/${id}`);
      navigate('/listings');
    } catch (err) {
      console.error('Error deleting listing:', err);
    }
  };

  return (
    <div>
      <h3>Listing Details</h3>
      <ul>
        <li>{listing.title}</li>
        <li>{listing.description}</li>
        <li>&#8377; {listing.price}</li>
        <li>{listing.location}</li>
        <li>{listing.country}</li>
      </ul>
      <br />
      <Link to={`/listings/${listing._id}/edit`}>Edit this info.</Link>
      <form onSubmit={handleDelete}>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default ListingDetail;