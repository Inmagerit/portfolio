import { CounterStore } from './store/counterStore';
import './App.css';
import shallow from 'zustand/shallow';

function App() {
  const { title, count, posts } = CounterStore((state) => ({
    count: state.count,
    title: state.title,
    posts: state.posts,
  }), shallow);

  const { decrement, increment, getPosts,hidePosts } = CounterStore();



  return (
    <>
      <div>
        <h1>{title} {count}</h1>
        <button onClick={() => increment(1)}>Increment</button>
        <button onClick={() => decrement(1)}>Decrement</button>
        <button onClick={getPosts}>Get Posts</button>
        <button onClick={hidePosts}>hide Posts</button>
        <hr />
        <div>
          {posts.length === 0 ? (
            <p>No posts available.</p>
          ) : (
            <ul>
              {posts.map((post) => (
                <li key={post.id}>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

