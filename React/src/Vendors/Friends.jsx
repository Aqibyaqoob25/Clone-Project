import React from "react";

// Friend component
const Friend = ({ name, profilePicture }) => {
  return (
    <div className="flex items-center mb-4">
      <img
        src={profilePicture}
        alt={name}
        className="w-12 h-12 rounded-full mr-4"
      />
      <p className="font-semibold">{name}</p>
    </div>
  );
};

// Friends section component
const FriendsSection = () => {
  // Dummy data for friends
  const friends = [
    {
      id: 1,
      name: "Hafiz Kashif",
      profilePicture: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Muhammad Umar",
      profilePicture: "https://via.placeholder.com/50",
    },
    // Add more friends as needed
  ];

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">Friends</h2>
      {/* List of friends */}
      <div>
        {friends.map((friend) => (
          <Friend
            key={friend.id}
            name={friend.name}
            profilePicture={friend.profilePicture}
          />
        ))}
      </div>
    </div>
  );
};

export default FriendsSection;
