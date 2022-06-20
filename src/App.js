import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Card } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import AddPostModal from "../src/components/AddPostModal";

function App() {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:3000/api/posts").then((res) => {
      const data = res.data;
      // console.log(formatDate(data[0].created_at));
      setPosts([...data]);
    });
  }, [posts]);

  function formatDate(string) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toLocaleDateString([], options);
  }

  const handleDelete = (e) => {
    e.preventDefault();
    const idToDelete = e.target.parentNode.childNodes[0].alt;
    axios
      .delete(`http://localhost:3000/api/posts/${idToDelete}`)
      .then((res) => {
        setPosts([]);
      });
  };
  const handleAddPost = () => {
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
    const newTitle = e.target[0].value;
    const newURL = e.target[1].value;
    const newDescription = e.target[2].value;
    axios
      .post(`http://localhost:3000/api/posts`, {
        title: newTitle,
        url: newURL,
        description: newDescription,
      })
      .then(function (res) {
        console.log(res);
        setPosts([]);
        setShowModal(false);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  // console.log(posts);
  return (
    <div className="App">
      <Container className="container justify-center md:w-[700px]">
        <h1 className="text-3xl mt-16 mb-10 font-bold">MY BLOG POSTS</h1>
        {/* <Form className="d-flex justify-between">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form> */}
        {posts.map((post, index) => {
          return (
            <Card className="relative border-b mb-4" key={index}>
              <Card.Img
                className="w-72 h-40 sm:h-80 relative"
                variant="top"
                alt={post._id}
                src={post.url}
              />
              <button
                onClick={handleDelete}
                className="py-2 px-3 rounded-md border-0 bg-white text-base font-bold text-red-500 absolute top-28 right-2"
              >
                Delete
              </button>
              <Card.Body>
                <Card.Text className="text-base text-left font-light text-slate-400">
                  {formatDate(post.created_at)}
                </Card.Text>
                <Card.Title className="flex text-left text-2xl font-bold justify-self-start">
                  {post.title}
                </Card.Title>
                <Card.Text className="text-left font-normal font-base">
                  {post.description}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
        <button
          onClick={handleAddPost}
          className="rounded-full leading-none sticky bottom-6 text-end p-3 text-large text-white bg-sky-400"
        >
          +
        </button>
      </Container>
      <AddPostModal
        show={showModal}
        onHide={() => setShowModal(false)}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
