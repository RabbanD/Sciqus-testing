import React, { useState } from 'react';

const MyForm = () => {
  const [rationCard, setRationCard] = useState('');
  const [gender, setGender] = useState('male'); // default to male
  const [age, setAge] = useState('');
  const [annualIncome, setAnnualIncome] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle the form submission
    console.log('Ration Card:', rationCard);
    console.log('Gender:', gender);
    console.log('Age:', age);
    console.log('Annual Income:', annualIncome);
    console.log('Selected State:', selectedState);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-8 bg-gray-100 rounded-md">
      <div className="mb-4">
        <label htmlFor="rationCard" className="block text-sm font-medium text-gray-600">
          Ration Card:
        </label>
        <select
          id="rationCard"
          value={rationCard}
          onChange={(e) => setRationCard(e.target.value)}
          className="mt-1 p-2 border rounded-md w-full"
        >
          <option value="" disabled>
            Select Ration Card Type
          </option>
          <option value="orange">Orange</option>
          <option value="white">White</option>
          <option value="yellow">Yellow</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="gender" className="block text-sm font-medium text-gray-600">
          Gender:
        </label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="mt-1 p-2 border rounded-md w-full"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="age" className="block text-sm font-medium text-gray-600">
          Age:
        </label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="annualIncome" className="block text-sm font-medium text-gray-600">
          Annual Income:
        </label>
        <input
          type="number"
          id="annualIncome"
          value={annualIncome}
          onChange={(e) => setAnnualIncome(e.target.value)}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="state" className="block text-sm font-medium text-gray-600">
          State:
        </label>
        <select
          id="state"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="mt-1 p-2 border rounded-md w-full"
        >
          <option value="" disabled>
            Select State
          </option>
          <option value="andhraPradesh">Andhra Pradesh</option>
          <option value="arunachalPradesh">Arunachal Pradesh</option>
          <option value="maharashtra">Maharashtra</option>
          {/* Add all other Indian states here */}
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Submit
      </button>
    </form>
  );
};

export default MyForm;
