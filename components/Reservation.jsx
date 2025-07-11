import React, { useState } from 'react';

const Reservation = () => {
  const [people, setPeople] = useState(4);
  const [date, setDate] = useState('2024-10-12');
  const [time, setTime] = useState('11:00 - 15:00');

  const handleIncrement = () => setPeople(people + 1);
  const handleDecrement = () => people > 1 && setPeople(people - 1);

  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h2 className="text-xl font-semibold mb-4">Pick Your Date</h2>
      <div className="flex justify-center gap-2 mb-6">
        {[10, 11, 12, 13, 14, 15, 16, 17].map(day => (
          <button
            key={day}
            className={`px-3 py-2 rounded-full ${day === 12 ? 'bg-red-600 text-white' : 'bg-gray-100'}`}
          >
            <div className="text-sm font-bold">{day}</div>
            <div className="text-xs">{['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][day % 7]}</div>
          </button>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mb-6">
        <select
          value={time}
          onChange={e => setTime(e.target.value)}
          className="bg-gray-100 px-4 py-2 rounded-md"
        >
          <option>11:00 - 15:00</option>
          <option>15:00 - 19:00</option>
          <option>19:00 - 23:00</option>
        </select>

        <div className="flex items-center gap-2">
          <span className="font-medium">No. of People</span>
          <button onClick={handleDecrement} className="px-2 bg-gray-200 rounded">-</button>
          <span>{people}</span>
          <button onClick={handleIncrement} className="px-2 bg-gray-200 rounded">+</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input type="text" placeholder="Full Name" className="p-2 rounded bg-gray-100" />
        <input type="text" placeholder="Phone Number" className="p-2 rounded bg-gray-100" />
        <input type="email" placeholder="Email" className="p-2 rounded bg-gray-100" />
      </div>

      <div className="flex items-center justify-center gap-2 mb-6">
        <input type="checkbox" id="agree" className="w-4 h-4" />
        <label htmlFor="agree" className="text-sm">
          I agree with restaurant <a href="#" className="underline">terms and services</a>.
        </label>
      </div>

      <button className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold">
        Reserve
      </button>
    </div>
  );
};

export default Reservation;
