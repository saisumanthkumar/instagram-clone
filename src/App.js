import Home from './components/Home';
import './App.css';
import {CgAddR,CgProfile} from 'react-icons/cg';
import {AiOutlineMessage,AiOutlineHeart} from 'react-icons/ai';
import {BiHomeAlt} from 'react-icons/bi';
import {ImCross} from 'react-icons/im';
import  {data}  from './data/Data';
import { useState } from 'react';
function App() {
  const [addpPost, setaddpPost] = useState(false);
  const [currentImg, setcurrentImg] = useState('')
  const [Caption, setCaption] = useState('')
  const [updateddata, setupdateddata] = useState(data)

  const handleImg =(e)=>{
    setcurrentImg(URL.createObjectURL(e.target.files[0]))
  }

  const handlePost=()=>{
    if(Caption && currentImg){
      const post = {
        username : 'Sai_sumanth_951',
        imgUrl : currentImg,
        caption : Caption,
        likes : 0,
        comments : []
      }
      setupdateddata([post,...updateddata])
      setCaption('')
      setcurrentImg('')
      setaddpPost(false)
    }
  }

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
      <Home data ={updateddata}/>
      {addpPost && <div className="addPost">
        <div className="bg-Post">
        <div className="container">
          <h1>Add Post</h1>
          <div className="cross"><ImCross  onClick={() => {setaddpPost(!addpPost)}}/></div>
          
          <input type="file" name="post" id="post" className="postdrop" onChange={handleImg}/>
          
          <input type="text" name="caption" id="caption" placeholder="write a caption..." onChange={(e) => {setCaption(e.target.value)}}/>
          <button onClick={handlePost}>Post</button>
        </div>
        </div>
      </div>}

    </div>
  );
}

export default App;
