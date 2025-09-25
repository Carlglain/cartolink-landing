'use client';
import React, { useState } from 'react';
import Header from './components/layout/navbar';
import Footer from './components/layout/footer';
import Hero from './components/sections/hero';
import GenerateSection from './components/sections/generate'
import { Book, Wallet } from 'lucide-react';
const Dashboard = () => {
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7.5xl mx-auto px-10 py-8">
        <Hero />
        <GenerateSection />
        <div className='flex justify-between align-end mb-2'>
          <p className='text-xl'>Gallery</p>
          <div className='flex gap-2'>
            <span className='flex gap-1'><Book className='text-white bg-black' /> Legal</span>
            <span className='flex gap-1'><Wallet className='text-white bg-black'  /> Pricing</span>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;