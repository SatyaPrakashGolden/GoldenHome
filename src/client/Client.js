import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from './Profile';
const Client = () => {
    return (
        <Routes>
            <Route path="/" element={<Profile />} />
        </Routes>
    );
};

export default Client;
