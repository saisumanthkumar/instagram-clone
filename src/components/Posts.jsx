import React, { useState } from 'react';
import '../styles/posts.css'
import img from './images/profile.jpg'
import { Avatar } from '@material-ui/core'
import { AiOutlineLike } from 'react-icons/ai';
import {FaRegComment} from 'react-icons/fa';
import {GrSend} from 'react-icons/gr';
import {FiSave} from 'react-icons/fi';
import {BsThreeDots} from 'react-icons/bs';
import {HiOutlineEmojiHappy} from 'react-icons/hi';
import { data } from '../data/Data';

function Posts({item}) {
    const [clicks, setclicks] = useState(0);
    const [addCom, setaddCom] = useState('')
    const [comment, setcomment] = useState([])
    const [iscom, setiscom] = useState(false)
    const [moreOptions, setmoreOptions] = useState(false)
    
    const handleComment =(e) =>{
        setaddCom(e.target.value)
    }

    const addComment = () => {
        if(addCom !== ''){
            setcomment([...comment,addCom])
            setaddCom('')
        }
    }


    const likeData =() => {
        if(clicks === 0){
            {item.likes += 1}
            setclicks(1)
        }
        else{
            {item.likes -= 1}
            setclicks(0)
        }
    }

    const dots =()=>{
        setmoreOptions(!moreOptions);
        setiscom(false);
    }
    return (
        <div className="post">
            <div className="avatar">
                    <Avatar>{item.username[0]}</Avatar>
                <div className="username">
                    <strong>{item.username}</strong>
                    <div className="right">
                    <button onClick={dots}><BsThreeDots /></button>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={item.imgUrl} alt="Post Image" />
            </div>
            <div className="lcs">
                <button onClick={likeData}><AiOutlineLike /></button>
                <button onClick={()=> setiscom(!iscom)}><FaRegComment /></button>
                <button><GrSend /></button>
                <div className="right">
                    <button><FiSave /></button>
                </div>   
            </div>
            <div className="likes">
               <strong><em>{item.likes} likes</em></strong>
            </div>
            <div className="comments">
            <span>{item.caption}</span>
            <div className="prevcom">{item.comments.map((item) => <p key={item.msg}><strong>{item.user}  </strong> {item.msg}</p>)}</div>
             {comment.map((item,index) => {return <p key={index}><strong>sai_sumanth_951 </strong>  {item}</p> } )}
            </div>
            
            {iscom && <div className="addComment">
                <HiOutlineEmojiHappy />
                <input type="text" onChange={handleComment} placeholder="Add a comment..." value={addCom}/>
                <button onClick={addComment}>Post</button>
            </div>}

            {moreOptions && <div className="bg-more">
                <div className="more">
                <button>Report</button>
                <button><a href={item.imgUrl} download>Download</a></button>
                <button>Copy Link</button>
                <button onClick={() => setmoreOptions(false)}>Close</button>
                </div>
            </div> }
        </div>
    )
}

export default Posts
