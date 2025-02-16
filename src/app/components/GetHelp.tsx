'use client';

import Image from 'next/image';
import { useState, FormEvent } from 'react';

const GetHelp = () => {
  const [formData, setFormData] = useState({
    // Kid's details
    surname: '',
    name: '',
    age: '',
    grade: '',
    schoolName: '',
    
    // Guardian's details
    mother: '',
    father: '',
    others: '',
    
    // Location
    urbanRural: '',
    country: '',
    state: '',
    province: '',
    city: '',
    town: '',
    houseAddress: '',
    
    // Financial Status
    totalFees: '',
    familyContribution: '',
    childNeed: '',
    otherFund: '',
    otherNeeds: '',
    
    // Kids Grades
    lastAcademicResults: '',
    specialSkills: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-black text-white py-12">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center px-4 mb-12">
        <Image
          src="/logo.png"
          alt="Eunath Foundation"
          width={100}
          height={100}
          className="mx-auto mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">Esinath Foundation is here to support you.</h1>
        <p className="mb-4">Are you facing challenges that you need assistance with? We are committed to making a positive impact on our community.</p>
        <p className="mb-8">Please fill out the form below to share your needs. Our dedicated team will review your request and provide appropriate support.</p>
        <h2 className="text-2xl font-semibold mb-2">How can we help you?</h2>
        <p>Please describe your situation briefly and clearly.</p>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto bg-white text-black rounded-lg p-8">
        <div className="text-center mb-8">
          <Image
            src="/logo.png"
            alt="Get Help Form"
            width={80}
            height={80}
            className="mx-auto"
          />
          <h3 className="text-xl font-bold">Get Help Form</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Kid's Details */}
          <div>
            <h4 className="text-lg font-bold mb-4">Kid&apos;s details (Enter all the details needed below)</h4>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Surname"
                className="w-full p-2 border rounded"
                value={formData.surname}
                onChange={(e) => setFormData({...formData, surname: e.target.value})}
              />
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border rounded"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input
                type="text"
                placeholder="Age"
                className="w-full p-2 border rounded"
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
              />
              <input
                type="text"
                placeholder="Grade"
                className="w-full p-2 border rounded"
                value={formData.grade}
                onChange={(e) => setFormData({...formData, grade: e.target.value})}
              />
              <input
                type="text"
                placeholder="School name"
                className="w-full p-2 border rounded"
                value={formData.schoolName}
                onChange={(e) => setFormData({...formData, schoolName: e.target.value})}
              />
            </div>
          </div>

          {/* Guardian's Details */}
          <div>
            <h4 className="text-lg font-bold mb-4">Guardian&apos;s details (Enter all the details below)</h4>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Mother"
                className="w-full p-2 border rounded"
                value={formData.mother}
                onChange={(e) => setFormData({...formData, mother: e.target.value})}
              />
              <input
                type="text"
                placeholder="Father"
                className="w-full p-2 border rounded"
                value={formData.father}
                onChange={(e) => setFormData({...formData, father: e.target.value})}
              />
              <input
                type="text"
                placeholder="Others"
                className="w-full p-2 border rounded"
                value={formData.others}
                onChange={(e) => setFormData({...formData, others: e.target.value})}
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-lg font-bold mb-4">LOCATION (Enter all the details below)</h4>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Urban| Rural"
                className="w-full p-2 border rounded"
                value={formData.urbanRural}
                onChange={(e) => setFormData({...formData, urbanRural: e.target.value})}
              />
              <input
                type="text"
                placeholder="Country"
                className="w-full p-2 border rounded"
                value={formData.country}
                onChange={(e) => setFormData({...formData, country: e.target.value})}
              />
              <input
                type="text"
                placeholder="State"
                className="w-full p-2 border rounded"
                value={formData.state}
                onChange={(e) => setFormData({...formData, state: e.target.value})}
              />
              <input
                type="text"
                placeholder="Province"
                className="w-full p-2 border rounded"
                value={formData.province}
                onChange={(e) => setFormData({...formData, province: e.target.value})}
              />
              <input
                type="text"
                placeholder="City"
                className="w-full p-2 border rounded"
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
              />
              <input
                type="text"
                placeholder="Town"
                className="w-full p-2 border rounded"
                value={formData.town}
                onChange={(e) => setFormData({...formData, town: e.target.value})}
              />
              <input
                type="text"
                placeholder="House address"
                className="w-full p-2 border rounded"
                value={formData.houseAddress}
                onChange={(e) => setFormData({...formData, houseAddress: e.target.value})}
              />
            </div>
          </div>

          {/* Financial Status */}
          <div>
            <h4 className="text-lg font-bold mb-4">Financial Status</h4>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="How much is the total fees?"
                className="w-full p-2 border rounded"
                value={formData.totalFees}
                onChange={(e) => setFormData({...formData, totalFees: e.target.value})}
              />
              <input
                type="text"
                placeholder="How much is the family able to provide?"
                className="w-full p-2 border rounded"
                value={formData.familyContribution}
                onChange={(e) => setFormData({...formData, familyContribution: e.target.value})}
              />
              <input
                type="text"
                placeholder="How much does the child need?"
                className="w-full p-2 border rounded"
                value={formData.childNeed}
                onChange={(e) => setFormData({...formData, childNeed: e.target.value})}
              />
              <input
                type="text"
                placeholder="Is the kid on another fund, please specify?"
                className="w-full p-2 border rounded"
                value={formData.otherFund}
                onChange={(e) => setFormData({...formData, otherFund: e.target.value})}
              />
              <textarea
                placeholder="Is there any need besides fees (PLEASE SPECIFY)?"
                className="w-full p-2 border rounded h-32"
                value={formData.otherNeeds}
                onChange={(e) => setFormData({...formData, otherNeeds: e.target.value})}
              />
            </div>
          </div>

          {/* Kids Grades */}
          <div>
            <h4 className="text-lg font-bold mb-4">Kids Grades</h4>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Last academic results?"
                className="w-full p-2 border rounded"
                value={formData.lastAcademicResults}
                onChange={(e) => setFormData({...formData, lastAcademicResults: e.target.value})}
              />
              <input
                type="text"
                placeholder="Any special skills?"
                className="w-full p-2 border rounded"
                value={formData.specialSkills}
                onChange={(e) => setFormData({...formData, specialSkills: e.target.value})}
              />
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="bg-emerald-500 text-white px-6 py-2 rounded hover:bg-emerald-600 transition-colors"
            >
              Download
            </button>
            <button
              type="submit"
              className="bg-emerald-500 text-white px-6 py-2 rounded hover:bg-emerald-600 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetHelp; 