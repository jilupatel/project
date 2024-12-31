import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ListingForm = ({ listing, setListing, isEdit }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');
    if (keys.length === 1) {
      setListing((prevListing) => ({
        ...prevListing,
        [name]: value,
      }));
    } else {
      setListing((prevListing) => ({
        ...prevListing,
        [keys[0]]: {
          ...prevListing[keys[0]],
          [keys[1]]: value,
        },
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) {
      await axios.put(`/api/listings/${listing._id}`, listing);
    } else {
      await axios.post('/api/listings', listing);
    }
    navigate('/listings');
  };

  return (
    <>
      <h1>Create a New Listing</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={listing.title}
          onChange={handleChange}
          placeholder="Title"
          required
        /><br /><br />
        <textarea
          name="description"
          value={listing.description}
          onChange={handleChange}
          placeholder="Description"
        ></textarea><br /><br />
        <input
          type="text"
          name="image.filename"
          value={listing.image.filename}
          onChange={handleChange}
          placeholder="Enter Image Filename"
          required
        /><br /><br />
        <input
          type="text"
          name="image.url"
          value={listing.image.url}
          onChange={handleChange}
          placeholder="Enter Image URL"
          required
        /><br /><br />
        <input
          type="number"
          name="price"
          value={listing.price}
          onChange={handleChange}
          placeholder="Price"
        /><br /><br />
        <input
          type="text"
          name="location"
          value={listing.location}
          onChange={handleChange}
          placeholder="Location"
        /><br /><br />
        <input
          type="text"
          name="country"
          value={listing.country}
          onChange={handleChange}
          placeholder="Country"
        /><br /><br />
        <button type="submit">{isEdit ? 'Update' : 'Add'}</button>
      </form>
    </>
  );
};

export default ListingForm;