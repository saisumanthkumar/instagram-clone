import Posts from './components/Posts';
import './App.css';
import {CgAddR,CgProfile} from 'react-icons/cg';
import {AiOutlineMessage,AiOutlineHeart} from 'react-icons/ai';
import {BiHomeAlt} from 'react-icons/bi';
import {ImCross} from 'react-icons/im';
import { useState } from 'react';
function App() {
  const [addpPost, setaddpPost] = useState(false)
  return (
    <div className="App">
      <div className="main">
        <div className="navbar">
          <div className="icon">
            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
          </div>
          <div className="gep"></div>
          <div className="more-icons">
            <div className="single home"><BiHomeAlt /></div>
            <div className="single messages"><AiOutlineMessage /></div>
            <div className="single addpost"  onClick={() => {setaddpPost(!addpPost)}}><CgAddR /></div>
            <div className="single like"><AiOutlineHeart /></div>
            <div className="single profile"><CgProfile /></div>   
          </div>
        </div>
      </div>
      <div className="post-container">
        <Posts />
        <Posts />
        <Posts />
      
      </div>

      {addpPost && <div className="addPost">
        <div className="bg-Post">
        <div className="container">
          <h1>Add Post</h1>
          <div className="cross"><ImCross  onClick={() => {setaddpPost(!addpPost)}}/></div>
          
          <input type="file" name="post" id="post" className="postdrop" title="hello"/>
          
          <input type="text" name="caption" id="caption" placeholder="write a caption..."/>
          <button>Post</button>
        </div>
        </div>
      </div>}

    </div>
  );
}

export default App;
