import React from 'react';
import { Link } from 'react-router-dom';
const posts = [
  {
    id: 1,
    posted_by: 'User1',
    location: 'City A',
    date_posted: '2024-10-18',
    amount_details: '$100',
    comment: 'Need support for food supplies',
  },
  {
    id: 2,
    posted_by: 'User2',
    location: 'City B',
    date_posted: '2024-10-17',
    amount_details: '$50',
    comment: 'Emergency medical support required',
  },
];

const requirements = [
  {
    post_id: 1,
    req_id: 101,
    category_id: 1,
    quantity: 5,
    emergency: 'High',
  },
  {
    post_id: 2,
    req_id: 102,
    category_id: 2,
    quantity: 3,
    emergency: 'Medium',
  },
];

const categories = [
  { id: 1, name: 'Food' },
  { id: 2, name: 'Medicine' },
];

const PostPage = () => {
  return (
    <div className="post-container">
      <h2>Posts</h2>
      <div className="posts-list">
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <p><strong>Posted By:</strong> {post.posted_by}</p>
            <p><strong>Location:</strong> {post.location}</p>
            <p><strong>Date Posted:</strong> {post.date_posted}</p>
            <p><strong>Amount Details:</strong> {post.amount_details}</p>
            <p><strong>Comment:</strong> {post.comment}</p>
            <h4>Requirements</h4>
            {requirements
              .filter((req) => req.post_id === post.id)
              .map((req) => {
                const category = categories.find((cat) => cat.id === req.category_id);
                return (
                  <div key={req.req_id} className="requirement-item">
                    <p><strong>Category:</strong> {category ? category.name : 'N/A'}</p>
                    <p><strong>Quantity:</strong> {req.quantity}</p>
                    <p><strong>Emergency:</strong> {req.emergency}</p>
                  </div>
                );
              })}
              <Link to="/donate" className="donate-button">Donate</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;