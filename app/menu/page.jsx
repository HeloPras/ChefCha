"use client"

import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Star, ChefHat, Phone, Mail, MapPin, Clock } from 'lucide-react';

const ChefMenuPage = () => {
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Launch Box');

  // Dummy data for menu categories
  const categories = [
    'Launch Box',
    'Khana',
    'Seasonal Set',
    'Salads',
    'Desserts'
  ];

  // Dummy data for menu items
  const menuItems = {
    'Launch Box': [
      {
        id: 1,
        name: 'Khana Set',
        description: 'Freshly cooked home-made average food content with vegetable curry.',
        price: 250,
        originalPrice: 300,
        image: '/chef.png',
        rating: 4.5,
        popular: true
      },
      {
        id: 2,
        name: 'Premium Khana Set',
        description: 'Premium home-made food with special curry and seasonal vegetables.',
        price: 350,
        originalPrice: 400,
        image: '/chef.png',
        rating: 4.8,
        popular: false
      }
    ],
    'Khana': [
      {
        id: 3,
        name: 'Fish Saluted',
        description: 'Freshly caught fish marinated overnight with special curry sauce and vegetable curry.',
        price: 320,
        originalPrice: 380,
        image: '/chef.png',
        rating: 4.7,
        popular: true
      },
      {
        id: 4,
        name: 'Chicken Curry',
        description: 'Tender chicken pieces in aromatic curry sauce with traditional spices.',
        price: 290,
        originalPrice: 340,
        image: '/chef.png',
        rating: 4.6,
        popular: false
      },
      {
        id: 5,
        name: 'Mutton Special',
        description: 'Premium mutton cooked with special herbs and traditional curry.',
        price: 450,
        originalPrice: 520,
        image: '/chef.png',
        rating: 4.9,
        popular: true
      }
    ],
    'Seasonal Set': [
      {
        id: 6,
        name: 'Summer Fresh Set',
        description: 'Light and refreshing summer meal with seasonal vegetables and herbs.',
        price: 280,
        originalPrice: 320,
        image: '/chef.png',
        rating: 4.4,
        popular: false
      },
      {
        id: 7,
        name: 'Winter Comfort Set',
        description: 'Warming winter meal with hearty curry and seasonal root vegetables.',
        price: 310,
        originalPrice: 360,
        image: '/chef.png',
        rating: 4.7,
        popular: true
      }
    ],
    'Salads': [
      {
        id: 8,
        name: 'Garden Fresh Salad',
        description: 'Mixed greens with seasonal vegetables and house dressing.',
        price: 180,
        originalPrice: 220,
        image: '/chef.png',
        rating: 4.3,
        popular: false
      },
      {
        id: 9,
        name: 'Protein Power Salad',
        description: 'Grilled chicken with mixed greens, nuts, and protein-rich toppings.',
        price: 250,
        originalPrice: 290,
        image: '/chef.png',
        rating: 4.6,
        popular: true
      }
    ],
    'Desserts': [
      {
        id: 10,
        name: 'Traditional Sweet',
        description: 'Homemade traditional dessert with authentic flavors and ingredients.',
        price: 120,
        originalPrice: 150,
        image: '/chef.png',
        rating: 4.5,
        popular: false
      },
      {
        id: 11,
        name: 'Seasonal Fruit Delight',
        description: 'Fresh seasonal fruits with special cream and honey drizzle.',
        price: 160,
        originalPrice: 200,
        image: '/chef.png',
        rating: 4.7,
        popular: true
      }
    ]
  };

  // Cart functionality
  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const existingItem = cart.find(cartItem => cartItem.id === id);
    if (existingItem && existingItem.quantity > 1) {
      setCart(cart.map(cartItem =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
    } else {
      setCart(cart.filter(cartItem => cartItem.id !== id));
    }
  };

  const getCartItemQuantity = (id) => {
    const item = cart.find(cartItem => cartItem.id === id);
    return item ? item.quantity : 0;
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-orange-600" />
              <h1 className="text-2xl font-bold text-gray-900">Chef.in</h1>
            </div>
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">Menu</a>
                <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">Services</a>
                <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">Reservation</a>
              </nav>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Menu Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Menu</h2>
              <nav className="space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeCategory === category
                        ? 'bg-orange-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Menu Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">{activeCategory}</h2>
              
              {menuItems[activeCategory]?.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                          {item.popular && (
                            <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">{item.rating}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-gray-900">Rs. {item.price}</span>
                          <span className="text-sm text-gray-500 line-through">Rs. {item.originalPrice}</span>
                        </div>
                      </div>
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center ml-4">
                        <ChefHat className="h-10 w-10 text-orange-600" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {getCartItemQuantity(item.id) > 0 && (
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="w-8 h-8 rounded-full bg-red-100 text-red-600 hover:bg-red-200 flex items-center justify-center transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                        )}
                        {getCartItemQuantity(item.id) > 0 && (
                          <span className="w-8 text-center font-semibold">{getCartItemQuantity(item.id)}</span>
                        )}
                        <button
                          onClick={() => addToCart(item)}
                          className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center space-x-2"
                        >
                          <Plus className="h-4 w-4" />
                          <span>Add to Cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart/Basket */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">My Basket</h2>
                <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  {getTotalItems()}
                </div>
              </div>
              
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Your basket is empty</p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-600">Rs. {item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-6 h-6 rounded-full bg-red-100 text-red-600 hover:bg-red-200 flex items-center justify-center transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => addToCart(item)}
                          className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 flex items-center justify-center transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Sub Total:</span>
                      <span className="font-medium">Rs. {getTotalPrice()}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Delivery Fee:</span>
                      <span className="font-medium">Rs. 50</span>
                    </div>
                    <div className="flex justify-between items-center mb-4 text-lg font-bold">
                      <span>Total (incl. tax):</span>
                      <span>Rs. {getTotalPrice() + 50}</span>
                    </div>
                    <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                      Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Useful links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blogs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Main Menu</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Offers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Menus</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Reservation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2 text-gray-400">
                <p>chef.in@gmail.com</p>
                <p>+977 9801000000</p>
                <div className="flex space-x-3 mt-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">f</span>
                  </div>
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">t</span>
                  </div>
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">in</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-400">
                Savor the culinary vibrant every dish is a culinary masterpiece
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>Copyright 2025 chef.in | All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChefMenuPage;