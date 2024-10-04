import React, { useEffect, useState } from 'react'
import axios from "../../api/axios";
import requests from '../../api/requests'

export default function MainPage() {

    const [Posts,setPosts] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const [memo,setMemo] = useState("");

    const memoHandler = (e) => {
      setMemo(e.target.value);
    }

    const postSubmitHandler = async () => {
      // 게시글 저장
      const res = await axios.post(requests.savePosts,{memo:memo})
      console.log(res.data);
    }

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getPosts(requests.fetchPosts)
      console.log(res);
      setPosts(res);
    }
    fetchPosts();
  },[]);

  const getPosts = async () => {
    let res = []
    try{
      // 게시글 조회
      res = await axios.get(requests.fetchPosts);
    } catch(e) {
      alert(e.message);
    } finally {
      return res.data === undefined ? [] : res.data;
    }
  }

    if(Posts.length === 0) {
        return (
          <div className='App'>
            로딩중
          </div>
        ) 
      }else {
        return (
          <div className="App">
            <form onSubmit={postSubmitHandler}>
              <input placeholder="메모" value={memo} onChange={memoHandler}/>
            </form>
            <div className="table w-full p-10">
              <div className='table-header-group'>
                <div className='table-cell text-center'>이름</div>
                <div className='table-cell text-center'>트로피 갯수</div>
                <div className='table-cell text-center'>성별</div>
                <div className='table-cell text-center'>작성일</div>
                <div className='table-cell text-center'>메모</div>
                <div className='table-cell text-center'>나이대</div>
                <div className='table-cell text-center'>모스트 브롤러</div>
              </div>
              {Posts.map((post) => (
    
                <div key={post.postId} className="table-row">
                  <div className="table-cell text-center">
                    <h5>{post.user.name}</h5>
                  </div>
                  <div className="table-cell text-center">
                    {post.user.trophies}
                  </div>
                  <div className="table-cell text-center">
                    {post.user.sex}
                  </div>
                  <div className="table-cell text-center">
                    {post.createDate}
                  </div>
                  <div className="table-cell text-center">
                    {post.memo}
                  </div>
                  <div className="table-cell text-center">
                    {post.user.ageGroup}
                  </div>
                  <div className="table-cell text-center">
                    <div className='flex justify-center'>
                    {post.user.userBrawlers.map((userBrawler) => (
                      <div key={`${post.id}${userBrawler.brawler.name.toUpperCase()}`}>
                        <img className='w-10' 
                        alt={userBrawler.brawler.name.toUpperCase()}
                        src={`/images/brawlers/${userBrawler.brawler.name.toUpperCase()}.webp`}/>
                      </div>
                    ))}
                    </div>
                  </div>
    
                </div>
              ))}
            </div>
          </div>
        );
    }
}