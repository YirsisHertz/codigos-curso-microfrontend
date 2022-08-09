import React from "react";
import { useGetAllPostsQuery } from "../services/post";
import Error from "./Error";
import Loader from "./Loader";

const Posts = () => {
  const { data, error, isLoading } = useGetAllPostsQuery();

  return (
    <>
      {isLoading && <Loader />}
      {error && <Error msg={error.status} />}

      {data?.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default Posts;
