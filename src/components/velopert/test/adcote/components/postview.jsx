import React from "react";

const PostView = ({ id, contents }) => {

  return (
    <>
      <div className="postView">
        <div className="post-wrap">
          <h3 className="post-title">{id}</h3>
          <div className="hr" />
          <div className="post-contents">{}</div>
        </div>
      </div>
    </>
  );
};

export default PostView;
