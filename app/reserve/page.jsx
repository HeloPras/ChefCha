"use client"

import React from 'react';
import { Calendar, Clock, Users, Star, ChefHat, MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

const ChefReservationPage = () => {
  const [selectedChef, setSelectedChef] = useState(null);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    cuisine: '',
    specialRequests: ''
  });

  // Dummy data for chefs
  const chefs = [
    {
      id: 1,
      name: "Chef Antoine Dubois",
      specialty: "French Cuisine",
      rating: 4.9,
      reviews: 127,
      pricePerHour: 85,
      image: "/chef.png",
      experience: "15 years",
      description: "Master of classic French techniques with a modern twist"
    },
    {
      id: 2,
      name: "Chef Maria Rossi",
      specialty: "Italian Cuisine",
      rating: 4.8,
      reviews: 94,
      pricePerHour: 75,
      image: "/chef.png",
      experience: "12 years",
      description: "Authentic Italian flavors from Tuscany to Sicily"
    },
    {
      id: 3,
      name: "Chef Hiroshi Tanaka",
      specialty: "Japanese Cuisine",
      rating: 4.9,
      reviews: 156,
      pricePerHour: 95,
      image: "/chef.png",
      experience: "20 years",
      description: "Traditional Japanese culinary arts and modern fusion"
    },
    {
      id: 4,
      name: "Chef Isabella Rodriguez",
      specialty: "Spanish Cuisine",
      rating: 4.7,
      reviews: 89,
      pricePerHour: 70,
      image: "/chef.png",
      experience: "10 years",
      description: "Vibrant Spanish flavors and Mediterranean specialties"
    }
  ];

  // Dummy data for cuisine types
  const cuisineTypes = [
    { name: "French", icon: "🇫🇷", available: 45 },
    { name: "Italian", icon: "🇮🇹", available: 38 },
    { name: "Japanese", icon: "🇯🇵", available: 32 },
    { name: "Spanish", icon: "🇪🇸", available: 28 },
    { name: "Indian", icon: "🇮🇳", available: 41 },
    { name: "Thai", icon: "🇹🇭", available: 25 }
  ];

  // Dummy data for time slots
  const timeSlots = [
    "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", 
    "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation requested for ${selectedChef?.name || 'selected chef'}!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-orange-600" />
              <h1 className="text-2xl font-bold text-gray-900">Private Chef Booking</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5 text-orange-600" />
              <span className="text-sm text-gray-600">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Reserve Your Perfect Chef Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enjoy gourmet meals, beautifully presented and freshly prepared just for you. 
            Let us take care of the cooking while you relax and create lasting memories.
          </p>
        </div>

        {/* Cuisine Types */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Popular Cuisines</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cuisineTypes.map((cuisine, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 cursor-pointer border-2 border-transparent hover:border-orange-200"
              >
                <div className="text-3xl mb-2">{cuisine.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-1">{cuisine.name}</h4>
                <p className="text-sm text-gray-600">({cuisine.available} chefs available)</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chef Selection */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Featured Chefs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chefs.map((chef) => (
              <div
                key={chef.id}
                onClick={() => setSelectedChef(chef)}
                className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105 ${
                  selectedChef?.id === chef.id ? 'ring-2 ring-orange-500 shadow-lg' : ''
                }`}
              >
                <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                  <ChefHat className="h-16 w-16 text-orange-600" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{chef.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{chef.specialty}</p>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(chef.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">
                      {chef.rating} ({chef.reviews} reviews)
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{chef.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{chef.experience}</span>
                    <span className="font-semibold text-orange-600">${chef.pricePerHour}/hr</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reservation Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Make Your Reservation</h3>
          
          {selectedChef && (
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
              <p className="text-orange-800">
                <strong>Selected Chef:</strong> {selectedChef.name} - {selectedChef.specialty}
              </p>
            </div>
          )}

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Date Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="h-4 w-4 inline mr-2" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Time Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="h-4 w-4 inline mr-2" />
                  Preferred Time
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select time</option>
                  {timeSlots.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Users className="h-4 w-4 inline mr-2" />
                  Number of Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select guests</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i} value={i + 1}>{i + 1} {i === 0 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Cuisine Preference */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cuisine Preference
              </label>
              <select
                name="cuisine"
                value={formData.cuisine}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Select cuisine</option>
                {cuisineTypes.map((cuisine, index) => (
                  <option key={index} value={cuisine.name}>{cuisine.name}</option>
                ))}
              </select>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Requests or Dietary Restrictions
              </label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                placeholder="Any allergies, dietary preferences, or special requests..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-6 rounded-md font-semibold hover:from-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                disabled={!selectedChef}
              >
                {selectedChef ? 'Request Reservation' : 'Please Select a Chef First'}
              </button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-medium text-gray-900">Phone</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <p className="text-gray-600">reservations@privatechef.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-medium text-gray-900">Service Area</p>
                <p className="text-gray-600">Greater Metropolitan Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefReservationPage;