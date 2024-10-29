import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const TeamMember = ({ name, position, image, description, socials }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-800 text-gray-200">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover opacity-80 transition-transform duration-300 transform group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-yellow-400">{name}</h3>
          <p className="text-lg text-gray-300 mb-4">{position}</p>
          <p className="text-sm text-gray-400 mb-4">{description}</p>
          {/* Social Icons */}
          <div className="flex justify-center space-x-4">
            {socials.map((social, index) => (
              <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-500">
                <i className={`fab fa-${social.icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      position: 'CEO & Founder',
      image: 'https://via.placeholder.com/300x300',
      description: 'Passionate about uncovering hidden gems, John has over 20 years in the travel industry.',
      socials: [
        { icon: 'facebook-f', link: 'https://facebook.com' },
        { icon: 'instagram', link: 'https://instagram.com' },
        { icon: 'linkedin-in', link: 'https://linkedin.com' }
      ]
    },
    {
      name: 'Jane Smith',
      position: 'Travel Specialist',
      image: 'https://via.placeholder.com/300x300',
      description: 'With a love for adventure, Jane specializes in creating unforgettable travel experiences.',
      socials: [
        { icon: 'facebook-f', link: 'https://facebook.com' },
        { icon: 'twitter', link: 'https://twitter.com' },
        { icon: 'linkedin-in', link: 'https://linkedin.com' }
      ]
    },
    {
      name: 'Alice Brown',
      position: 'Marketing Manager',
      image: 'https://via.placeholder.com/300x300',
      description: 'Alice’s expertise in storytelling brings Madagascar’s wonders closer to travelers.',
      socials: [
        { icon: 'instagram', link: 'https://instagram.com' },
        { icon: 'twitter', link: 'https://twitter.com' },
      ]
    },
  ];

  return (
    <section className="bg-gray-900 text-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12">Meet Our Team</h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              position={member.position}
              image={member.image}
              description={member.description}
              socials={member.socials}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
