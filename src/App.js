import './App.css';
import {CgAddR,CgProfile} from 'react-icons/cg';
import {AiOutlineMessage,AiOutlineHeart} from 'react-icons/ai';
import {BiHomeAlt} from 'react-icons/bi';
import {ImCross} from 'react-icons/im';
import  {data}  from './data/Data';
import { useState } from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'

// all tabs components 
import Home from './components/Home';
import Messages from './components/Messages'
import Activity from './components/Activity'
import Profile from './components/Profile'
// all tabs components 

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
      <Router>
      <div className="main">
        <div className="navbar">
          <div className="icon">
            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
          </div>
          <div className="gep"></div>
          <div className="more-icons">
            
            <div className="single home"><Link to="/instagram-clone/"><BiHomeAlt /></Link></div>
            <div className="single messages"><Link to="/instagram-clone/messages"><AiOutlineMessage /></Link></div>
            <div className="single addpost"  onClick={() => {setaddpPost(!addpPost)}}><CgAddR /></div>
            <div className="single like"><Link to="/instagram-clone/activity"><AiOutlineHeart /></Link></div>
            <div className="single profile"><Link to="/instagram-clone/profile"><CgProfile /></Link></div>   
            
          </div>
        </div>
      </div>
      {/* switching tabs */}
      <Switch>
        <Route exact path="/instagram-clone/">
          <Home data ={updateddata}/>
        </Route>

        <Route path="/instagram-clone/messages">
          <Messages />
        </Route>

        <Route path="/instagram-clone/activity">
          <Activity />
        </Route>

        <Route path="/instagram-clone/profile">
          <Profile />
        </Route>
      </Switch>
      {/* switching tabs */}
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
      </Router>
    </div>
  );
}

export default App;
