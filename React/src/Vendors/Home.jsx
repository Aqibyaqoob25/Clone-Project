import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

// Post component
const Post = ({ post, updatePost }) => {
  const createPost = async () => {
    try {
      const author = prompt("Enter the author:");
      const content = prompt("Enter the content:");
      if (!author || !content) return;
      const { data } = await axios.post(
        "http://localhost:3000/post/createPost",
        {
          author: author,
          content: content,
        }
      );
      if (data.error || !data.response) {
        return alert("Unable to add post");
      }
      updatePost();
    } catch (error) {
      console.error("Error adding post:", error);
      alert("An error occurred while adding post");
    }
  };

  const deletePost = async () => {
    try {
      const { data } = await axios.delete(
        "http://localhost:3000/post/deletePost",
        {
          params: {
            postId: [post.postId],
          },
        }
      );
      console.log("data", data);
      if (data.error || !data.response) {
        return alert("Unable to delete post");
      }
      updatePost();
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("An error occurred while deleting post");
    }
  };
  const editPost = async () => {
    try {
      const newContent = prompt("Enter the new content:");
      if (!newContent) return;
      const { data } = await axios.patch(
        "http://localhost:3000/post/updatePost",
        {
          postId: post.postId,
          content: newContent,
        }
      );
      if (data.error || !data.response) {
        return alert("Unable to update post");
      }
      updatePost();
    } catch (error) {
      console.error("Error updating post:", error);
      alert("An error occurred while updating post");
    }
  };
  const recoverPost = async () => {
    try {
      const { data } = await axios.put(
        "http://localhost:3000/post/recoverPost"
      );
      if (data.error || !data.response) {
        return alert("Unable to recover posts");
      }
      updatePost();
    } catch (error) {
      console.error("Error recovering posts:", error);
      alert("An error occurred while recovering posts");
    }
  };

  return (
    <div className="w-2/5 h-2/6 p-2 ml-32 flex flex-wrap ">
      <div className="w-full h-full bg-gray-300 shadow-lg p-2 flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <p className="text-gray-900 font-normal text-md">{post.author}</p>
          <p className="text-gray-900 font-normal text-md">{post.content}</p>
        </div>
        <div className="w-full p-2 flex justify-end gap-2 items-end self-end">
          <button
            className="bg-red-400"
            onClick={() => {
              void createPost();
            }}
          >
            Create
          </button>
          <button
            className="bg-blue-400"
            onClick={() => {
              void editPost();
            }}
          >
            Edit
          </button>
          <button
            className="bg-red-400"
            onClick={() => {
              void deletePost();
            }}
          >
            Delete
          </button>
          <button
            className="bg-red-400"
            onClick={() => {
              void recoverPost();
            }}
          >
            Recover
          </button>
        </div>
      </div>
    </div>
  );
};

// Home component
const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const { data } = await axios.get("http://localhost:3000/post/getAllPost", {
      withCredentials: true,
    });
    if (data.error || !data) {
      return alert("no posts exist");
    }
    console.log("data", data);
    setPosts(data.response);
  };
  useEffect(() => {
    void getPosts();
  }, []);

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
        {posts.map((post, index) => (
          <Post key={index} post={post} updatePost={getPosts} />
        ))}
      </div>
    </div>
  );
};

export default Home;
