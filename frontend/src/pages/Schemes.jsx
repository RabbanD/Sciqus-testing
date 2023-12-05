import React, { useState } from 'react';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';
import background from '../assets/images/hero-bg.png';
const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align items to the left
    minHeight: '100vh', // Ensure the container takes at least the full height of the viewport
  };
  
const schemesData = [
  {
    name: "PM Jan Arogya Yojna",
    eligibility: "Cashless cover of up to INR 5,00,000 per annum for listed secondary and tertiary care conditions.",
  },
  {
    name: "Mahatma Jyotirao Phule Jan Arogya Yojna",
    eligibility: "Annual income less than Rs.1 lakh, family members eligible, must belong to distressed districts of Maharashtra.",
  },
  {
    name: "Ayushman Bharat Arogya Karnataka Yojna",
    eligibility: "Resident of Karnataka, belongs to an 'Eligible Household'.",
  },
];

const hospitalsData = {
  Solapur: {
    "PM Jan Arogya Yojna": [
      "Akluj Critical Care And Trauma Center",
      "Ashwini Sahakari Rugnalaya",
      "Gangamai Hospital",
    ],
    "Mahatma Jyotirao Phule Jan Arogya Yojna": [
      "ALPESH BABY CARE AND CHILDREN HOSPITAL, Solapur, Pvt",
      "ANAND HOSPITAL",
      "Ashwini Hospital, Akluj",
    ],
    "Ayushman Bharat Arogya Karnataka Yojna": [
      "A V Daddenavar Hospital",
      "A V MULTISPECIALITY HOSPITAL, BSK III Stage Hosakerehalli, Bengaluru",
      "Aadithya Adhikari Hospital, 417 contour road Gokulam Mysore",
    ],
  },
  Karnataka: {
    "Ayushman Bharat Arogya Karnataka Yojna": [
      "A V Daddenavar Hospital",
      "A V MULTISPECIALITY HOSPITAL, BSK III Stage Hosakerehalli, Bengaluru",
      "Aadithya Adhikari Hospital, 417 contour road Gokulam Mysore",
    ],
  },
  // Add data for other cities or states as needed
};

const Schemes = () => {
  const [formData, setFormData] = useState({
    name: '',
    aadhar: '',
    age: '',
    rationCardType: '',
    gender: '',
    annualIncome: '',
    state: '',
    city: '',
    occupation: '',
  });

  const [eligibleSchemes, setEligibleSchemes] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: #4caf50; // Green color for the spinner
  `;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear previous errors when input changes
  };

  const validateInputs = () => {
    const newErrors = {};

    // Validation for Name (only alphabets)
    if (!/^[a-zA-Z ]+$/.test(formData.name.trim())) {
      newErrors.name = 'Please enter a valid name (only alphabets)';
    }

    // Validation for Aadhar Number (only 12 numeric digits allowed)
    if (!/^\d{12}$/.test(formData.aadhar.trim())) {
      newErrors.aadhar = 'Please enter a valid 12-digit Aadhar number';
    }

    // Validation for Annual Income (should not be negative)
    if (parseInt(formData.annualIncome, 10) < 0) {
      newErrors.annualIncome = 'Annual Income cannot be negative';
    }

    // Validation for State, City, and Occupation (only alphabets allowed)
    if (!/^[a-zA-Z ]+$/.test(formData.state.trim())) {
      newErrors.state = 'Please enter a valid state (only alphabets)';
    }

    if (!/^[a-zA-Z ]+$/.test(formData.city.trim())) {
      newErrors.city = 'Please enter a valid city (only alphabets)';
    }

    if (!/^[a-zA-Z ]+$/.test(formData.occupation.trim())) {
      newErrors.occupation = 'Please enter a valid occupation (only alphabets)';
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const fetchSchemes = () => {
    // Validate inputs before proceeding
    if (!validateInputs()) {
      return;
    }

    setLoading(true);

    // Simulate an API call delay (you can replace this with your actual API call)
    setTimeout(() => {
      const schemes = schemesData.filter((scheme) => {
        switch (scheme.name) {
          case "PM Jan Arogya Yojna":
            return (
              parseInt(formData.age, 10) >= 18 &&
              parseInt(formData.annualIncome, 10) <= 500000 &&
              formData.state !== '' &&
              formData.city !== '' &&
              formData.rationCardType !== '' &&
              formData.gender !== '' &&
              formData.occupation !== ''
            );

          case "Mahatma Jyotirao Phule Jan Arogya Yojna":
            return (
              parseInt(formData.annualIncome, 10) <= 100000 &&
              formData.state === 'Maharashtra' &&
              formData.city !== '' &&
              formData.rationCardType !== '' &&
              formData.gender !== '' &&
              formData.occupation !== ''
            );

          case "Ayushman Bharat Arogya Karnataka Yojna":
            return (
              formData.state === 'Karnataka' &&
              formData.city !== '' &&
              formData.rationCardType !== '' &&
              formData.gender !== '' &&
              formData.occupation !== ''
            );

          default:
            return false;
        }
      });

      setEligibleSchemes(schemes);
      setLoading(false);
    }, 1500); // Simulated delay of 1.5 seconds
  };

  const displaySchemesAndHospitals = () => {
    return (
      <div className="mt-4">
        {eligibleSchemes.length > 0 ? (
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="border px-4 py-2">Sr. No.</th>
                <th className="border px-4 py-2">Scheme Name</th>
                <th className="border px-4 py-2">Eligibility</th>
                <th className="border px-4 py-2">Hospitals</th>
              </tr>
            </thead>
            <tbody>
              {eligibleSchemes.map((scheme, index) => (
                <tr key={scheme.name}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{scheme.name}</td>
                  <td className="border px-4 py-2">{scheme.eligibility}</td>
                  <td className="border px-4 py-2">
                    {hospitalsData[formData.city]?.[scheme.name] ? (
                      <ul className="list-disc list-inside">
                        {hospitalsData[formData.city][scheme.name].map((hospital, index) => (
                          <li key={index}>{hospital}</li>
                        ))}
                      </ul>
                    ) : (
                      'Not available in selected city'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-red-500">No eligible schemes found.</p>
        )}
      </div>
    );
  };  

  return (
    <div className="container mx-auto p-4" style={backgroundStyle}>
    <div className="container mx-auto p-4">
    <div className="max-w-md mx-auto text-center mb-4">
      <h1 className="text-3xl font-bold mb-4">Government Schemes Finder</h1></div>
      <div className="max-w-md mx-auto">
      <p className="text-sm text-gray-600 mb-4">Fields marked with <span className="text-red-500">*</span> are required.</p>
      <form className={`mb-8 ${loading ? 'opacity-50' : ''}`}>
      <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`mt-1 p-2 border border-gray-300 rounded-md w-full ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="aadhar" className="block text-sm font-medium text-gray-700">
                        Aadhar Number<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="aadhar"
                        name="aadhar"
                        value={formData.aadhar}
                        onChange={handleChange}
                        className={`mt-1 p-2 border border-gray-300 rounded-md w-full ${errors.aadhar ? 'border-red-500' : ''}`}
                    />
                    {errors.aadhar && <p className="text-red-500">{errors.aadhar}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                        Age<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="rationCardType" className="block text-sm font-medium text-gray-700">
                        Ration Card Type<span className="text-red-500">*</span>
                    </label>
                    <select
                        id="rationCardType"
                        name="rationCardType"
                        value={formData.rationCardType}
                        onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    >
                        <option value="" disabled>Select Ration Card Type</option>
                        <option value="Yellow">Yellow</option>
                        <option value="White">White</option>
                        <option value="Orange">Orange</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                        Gender<span className="text-red-500">*</span>
                    </label>
                    <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    >
                        <option value="" disabled>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">
                        Occupation
                    </label>
                    <input
                        type="text"
                        id="occupation"
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                        className={`mt-1 p-2 border border-gray-300 rounded-md w-full ${errors.occupation ? 'border-red-500' : ''}`}
                    />
                    {errors.occupation && <p className="text-red-500">{errors.occupation}</p>}
                </div>
                
                <div className="mb-4">
                    <label htmlFor="annualIncome" className="block text-sm font-medium text-gray-700">
                        Annual Income<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        id="annualIncome"
                        name="annualIncome"
                        value={formData.annualIncome}
                        onChange={handleChange}
                        className={`mt-1 p-2 border border-gray-300 rounded-md w-full ${errors.annualIncome ? 'border-red-500' : ''}`}
                    />
                    {errors.annualIncome && <p className="text-red-500">{errors.annualIncome}</p>}
                </div>

                <div className="mb-4">
    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
    State
  </label>
  <select
    id="state"
    name="state"
    value={formData.state}
    onChange={handleChange}
    className="mt-1 p-2 border border-gray-300 rounded-md w-full">
    <option value="" disabled>Select State</option>
    <option value="Andhra Pradesh">Andhra Pradesh</option>
    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
    <option value="Assam">Assam</option>
    <option value="Bihar">Bihar</option>
    <option value="Chhattisgarh">Chhattisgarh</option>
    <option value="Goa">Goa</option>
    <option value="Gujarat">Gujarat</option>
    <option value="Haryana">Haryana</option>
    <option value="Himachal Pradesh">Himachal Pradesh</option>
    <option value="Jharkhand">Jharkhand</option>
    <option value="Karnataka">Karnataka</option>
    <option value="Kerala">Kerala</option>
    <option value="Madhya Pradesh">Madhya Pradesh</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Manipur">Manipur</option>
    <option value="Meghalaya">Meghalaya</option>
    <option value="Mizoram">Mizoram</option>
    <option value="Nagaland">Nagaland</option>
    <option value="Odisha">Odisha</option>
    <option value="Punjab">Punjab</option>
    <option value="Rajasthan">Rajasthan</option>
    <option value="Sikkim">Sikkim</option>
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Telangana">Telangana</option>
    <option value="Tripura">Tripura</option>
    <option value="Uttar Pradesh">Uttar Pradesh</option>
    <option value="Uttarakhand">Uttarakhand</option>
    <option value="West Bengal">West Bengal</option>
  </select>
  {errors.state && <p className="text-red-500">{errors.state}</p>}
</div>


                <div className="mb-4">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className={`mt-1 p-2 border border-gray-300 rounded-md w-full ${errors.city ? 'border-red-500' : ''}`}
                    />
                    {errors.city && <p className="text-red-500">{errors.city}</p>}
                </div>

                

        <button
          type="button"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          onClick={fetchSchemes}
        >
          Find Schemes
        </button>
      </form>
      </div>

      {loading && (
        <div className="flex flex-col items-center">
          <RingLoader css={override} size={100} color={'#4caf50'} loading={loading} />
          <p className="text-gray-600 mt-4">Fetching schemes...</p>
        </div>
      )}

      <div id="result" className="flex flex-col items-center">
        {eligibleSchemes.length > 0 ? (
          displaySchemesAndHospitals()
        ) : !loading && (
          <p className="text-red-500">No eligible schemes found.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default Schemes;
