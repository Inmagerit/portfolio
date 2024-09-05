import React, { useState, useEffect } from "react";

const ListOfPosts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPosts = (page) => {
    fetch(`http://localhost:5000/posts?_page=${page}&_limit=10`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error('Invalid response format:', data);
        }
      })
      .catch((error) => console.error('Error fetching posts:', error));
  };

  useEffect(() => {
    // Fetch posts when the component mounts or when the current page changes
    fetchPosts(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <h2>Post Catalog</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>Title:</strong> {post.title}, <strong>Body:</strong> {post.body}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <span> Page {currentPage} </span>
        <button onClick={handleNextPage}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default ListOfPosts;
