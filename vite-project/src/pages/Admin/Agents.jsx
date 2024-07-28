import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const agents = [
    {
      name: "Arun Kumar",
      photo: "https://ik.imagekit.io/rqds6dyata/image%20(21).png?updatedAt=1722153470228",
      details: "Expert in residential properties.",
      contact: "arunkumar@example.com"
    },
    {
      name: "Lakshmi Natarajan",
      photo: "https://ik.imagekit.io/rqds6dyata/image%20(18).png?updatedAt=1722153211543",
      details: "Specializes in commercial properties.",
      contact: "lakshminatarajan@example.com"
    },
    {
      name: "Priya Subramanian",
      photo: "https://ik.imagekit.io/rqds6dyata/image%20(26).png?updatedAt=1722153931532",
      details: "Luxury homes specialist.",
      contact: "priyasubramanian@example.com"
    },
    {
      name: "Vijay Anand",
      photo: "https://ik.imagekit.io/rqds6dyata/image%20(24).png?updatedAt=1722153980342",
      details: "Commercial real estate expert.",
      contact: "vijayanand@example.com"
    },
    {
      name: "Ravi Shankar",
      photo: "https://ik.imagekit.io/rqds6dyata/image%20(22).png?updatedAt=1722153446717",
      details: "Investment property advisor.",
      contact: "ravishankar@example.com"
    },
    {
      name: "Kavya Ramesh",
      photo: "https://ik.imagekit.io/rqds6dyata/image%20(16).png?updatedAt=1722153084242",
      details: "New construction specialist.",
      contact: "kavyaramesh@example.com"
    },
    {
      name: "Manoj Krishna",
      photo: "https://ik.imagekit.io/rqds6dyata/image%20(20).png?updatedAt=1722153427107",
      details: "Property management professional.",
      contact: "manojkrishna@example.com"
    },
    {
      name: "Suresh Babu",
      photo: "https://ik.imagekit.io/rqds6dyata/image%20(25).png?updatedAt=1722153953187",
      details: "Rental properties expert.",
      contact: "sureshbabu@example.com"
    }
  ];
  

const Agents = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Our Agents</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {agents.map((agent, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden p-2">
            <img src={agent.photo} alt={`${agent.name}`} className="w-full h-32 object-cover" />
            <div className="p-2">
              <h2 className="text-lg font-bold mb-1 text-gray-600">{agent.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{agent.details}</p>
              <div className="flex items-center mb-2 text-gray-600">
                <Mail className="w-4 h-4 mr-1" />
                <span className="text-sm align-middle">{agent.contact}</span>
              </div>
              <button className="bg-blue-500 text-white px-2 py-1 rounded-lg hover:bg-blue-600 flex items-center text-sm">
                <MessageCircle className="w-4 h-4 mr-1" />
                Chat
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;
