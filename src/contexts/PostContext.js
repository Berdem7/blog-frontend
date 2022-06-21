import { createContext, useState, useContext, useEffect } from "react";
// import { foodServices } from "../services/foodServices";
import { postServices } from "../services/postServices";

export const PostContext = createContext({});

export function usePost() {
  return useContext(PostContext);
}

export default function PostProvider(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    postServices.getAllPosts().then((data) => {
      setPosts(data.data);
      console.log(data.data);
    });
  }, [posts]);
  return (
    <PostContext.Provider value={[posts, setPosts]}>
      {props.children}
    </PostContext.Provider>
  );
}
