import { Link } from 'react-router-dom';
import './post.css';
export default function Post({ post }) {
    const PF = "https://blogscope.onrender.com/images/";
    return (
      <div className="post">
        {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
        <div className="postInfo">
          {/* <div className="postCats">
            {post.categories.map((c) => (
              <span className="postCat">{c.name}</span>
            ))}
          </div> */}
          <Link to={`/post/${post._id}`} className="link">
          {post.title?(
          <span className="postTitle">{post.title}</span>):
          (<span className="postTitle">Post Title</span>
          )}
          </Link>
          <hr />
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="postDesc">{post.desc}</p>
      </div>
    );
  }