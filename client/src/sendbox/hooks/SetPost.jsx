import { useState } from "react";

export const SetPost = () => {
  const INITIAL_POST = { title: "", subtitle: "", author: "", createtAt: "" };
  const [post, setPost] = useState(INITIAL_POST);
  const [posts, setPosts] = useState([]);

  const createNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, post]);
    setPost(INITIAL_POST);
  };
  return (
    <>
      <div>
        <form>
          <h2>Posts</h2>
          <label htmlFor="title">title</label>
          <br />
          <input
            type="text"
            value={post.title}
            onChange={(e) =>
              setPost({
                ...post,
                title: e.target.value,
              })
            }
          />
          <br />
          <label htmlFor="subtitle">subtitle</label>
          <br />
          <input
            type="text"
            value={post.subtitle}
            onChange={(e) =>
              setPost({
                ...post,
                subtitle: e.target.value,
              })
            }
          />
          <br />
          <label htmlFor="author">author</label>
          <br />
          <input
            type="text"
            value={post.author}
            onChange={(e) =>
              setPost({
                ...post,
                author: e.target.value,
              })
            }
          />
          <br />
          <button onClick={createNewPost}>Post</button>
        </form>

        {posts.map((post, index) => (
          <div key={index}>
            {index + 1}
            <h3>{post.title}</h3>
            <h4>{post.subtitle}</h4>
            <br />
            <h4> created by:{post.author}</h4>
            {/* <h5>created at:{post.createtAt}</h5> */}
          </div>
        ))}
      </div>
    </>
  );
};
