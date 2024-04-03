import React from "react";

// Post component
const Post = ({ author, content }) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 mb-4">
      <p className="font-semibold">{author}</p>
      <p>{content}</p>
    </div>
  );
};

// Home component
const Home = () => {
  // Dummy data for posts
  const posts = [
    { id: 1, author: "Aqib Yaqoob", content: "Hello world!" },
    { id: 2, author: "Kashif Ali", content: "This is a sample post." },
    // Add more posts as needed
  ];

  return (
    <div className="container mx-auto mt-8">
      {/* User profile section */}
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/50"
          alt="User Profile"
          className="w-12 h-12 rounded-full mr-4"
        />
        <p className="font-semibold">User Name</p>
      </div>

      {/* Post feed */}
      <div>
        {posts.map((post) => (
          <Post key={post.id} author={post.author} content={post.content} />
        ))}
      </div>
    </div>
  );
};

export default Home;
