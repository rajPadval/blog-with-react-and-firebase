import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const postCollectionRef = collection(db, "posts");
  let navigate = useNavigate();
  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div className="createPostPage">
        <div className="cpContainer">
          <h2>Lets, create today's post</h2>
          <div className="inputContainers">
            <label>Title :</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title..."
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div className="inputContainers">
            <label>Post :</label>
            <textarea
              name="post"
              id="post"
              placeholder="Post..."
              rows={8}
              onChange={(event) => {
                setPostText(event.target.value);
              }}
            />
          </div>
          <button className="createPostBtn" onClick={createPost} type="submit">
            Create Post
          </button>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
