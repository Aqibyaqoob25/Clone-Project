import React from "react";

// Conversation component
const Conversation = ({ name, lastMessage, profilePicture }) => {
  return (
    <div className="flex items-center mb-4">
      <img
        src={profilePicture}
        alt={name}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-gray-600">{lastMessage}</p>
      </div>
    </div>
  );
};

// Messages section component
const MessagesSection = () => {
  // Dummy data for conversations
  const conversations = [
    {
      id: 1,
      name: "Aqib Yaqoob ",
      lastMessage: "Hey, how's it going?",
      profilePicture: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Hafiz Kashif",
      lastMessage: "Sure, see you then!",
      profilePicture: "https://via.placeholder.com/50",
    },
    // Add more conversations as needed
  ];

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">Messages</h2>
      {/* List of conversations */}
      <div>
        {conversations.map((conversation) => (
          <Conversation
            key={conversation.id}
            name={conversation.name}
            lastMessage={conversation.lastMessage}
            profilePicture={conversation.profilePicture}
          />
        ))}
      </div>
    </div>
  );
};

export default MessagesSection;
