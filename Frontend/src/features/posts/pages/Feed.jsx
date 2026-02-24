import React from "react";
import "../style/feed.scss";

const Feed = () => {
  return (
    <main className="feed-page">
      <div className="feed">
        <div className="posts">
          <div className="post">
            <div className="user">
              <div className="img-wrapper">
                <img
                   src="https://images.unsplash.com/photo-1771199918850-b66326cbccf5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D"
                   alt=""
                />
              </div>
              <p>Username</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1771600849941-fdccdc0d18a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
              alt=""
            />
            <div className="bottom">
              <p className="caption">caption caption</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Feed;
