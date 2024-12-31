import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ListingForm from './ListingForm';

const EditListing = () => {
  const { id } = useParams();
  const [listing, setListing] = useState({
    title: '',
    description: '',
    image: { filename: '', url: '' },
    price: '',
    location: '',
    country: ''
  });

  useEffect(() => {
    const fetchListing = async () => {
      const response = await axios.get(`/api/listings/${id}`);
      setListing(response.data);
    };
    fetchListing();
  }, [id]);

  return (
    <div>
      <h1>Edit Listing</h1>
      <ListingForm listing={listing} setListing={setListing} isEdit={true} />
    </div>
  );
};

export default EditListing;