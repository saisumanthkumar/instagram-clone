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

function Posts() {
    const [likes, setlikes] = useState(0);
    const [clicks, setclicks] = useState(0);
    const [addCom, setaddCom] = useState('')
    const [comment, setcomment] = useState(["Hello guys,Let's learn React today. 🚀"])
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
            setlikes(likes+1)
            setclicks(1)
        }
        else{
            setlikes(likes-1)
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
                    <Avatar>S</Avatar>
                <div className="username">
                    <strong>sai_sumanth_951</strong>
                    <div className="right">
                    <button onClick={dots}><BsThreeDots /></button>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={img} alt="" />
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
               <strong><em>{likes} likes</em></strong>
            </div>
            <div className="comments">
             {comment.map((item,index) => {return <p key={index}><strong>sai_sumanth_951</strong>  {item}</p> } )}
            </div>
            {iscom && <div className="addComment">
                <HiOutlineEmojiHappy />
                <input type="text" onChange={handleComment} placeholder="Add a comment..." value={addCom}/>
                <button onClick={addComment}>Post</button>
            </div>}

            {moreOptions && <div className="bg-more">
                <div className="more">
                <button>Report</button>
                <button><a href={img} download>Download</a></button>
                <button>Copy Link</button>
                <button onClick={() => setmoreOptions(false)}>Close</button>
                </div>
            </div> }
        </div>
    )
}

export default Posts
