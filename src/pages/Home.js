import React, { useEffect, useState } from "react";
import { getDocs, collection,deleteDoc,doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
const Home = ({ isAuth }) => {
  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, "posts");
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [postCollectionRef]);
  const deletePost = async(id)=>{
    const postDoc =  doc(db,"posts",id)
    await deleteDoc(postDoc)
  }

  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div className="post">
            <div className="postHeading">
              <div className="postTitle">
                <h1>{post.title}</h1>
              </div>
              <div >
                {isAuth && post.author.id === auth.currentUser.uid && <div className="delBtn" onClick={()=>{deletePost(post.id)}}>&#128465;</div>} </div>
            </div>
            <div className="postText">{post.postText}</div>
            <div className="author">
              <h3>@{post.author.name}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
