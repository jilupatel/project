// filepath: /d:/internship/project/frontend/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ListingList from './components/ListingList';
import ListingDetail from './components/ListingDetail';
import ListingForm from './components/ListingForm';
import EditListing from './components/EditListing';
import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {
  const [listing, setListing] = useState({
    title: '',
    description: '',
    image: { filename: '', url: '' },
    price: '',
    location: '',
    country: ''
  });

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<ListingList />} />
          <Route path="/listings" element={<ListingList />} />
          <Route path="/listings/new" element={<ListingForm listing={listing} setListing={setListing} isEdit={false} />} />
          <Route path="/listings/:id" element={<ListingDetail />} />
          <Route path="/listings/:id/edit" element={<EditListing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;