import React, { FormEvent, useEffect, useRef, useState } from 'react'
import './modal.css'
import { PostDTO } from '../../model/PostWithUserDTO.js';
import {fetchPostsWithUser, fetchSavePost } from "../../api/requsts.ts";

const MainPage:React.FC = () =>  {

  const [Posts, setPosts] = useState<PostDTO[]>([]);

  const [IsRoading,setIsRoading] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef<HTMLDivElement>(null);

  const [playerId,setPlayerId] = useState(0);

  const [memo, setMemo] = useState("");

  const memoHandler = (e:any) => {
    setMemo(e.target.value);
  }

  const postSubmitHandler = async (e:FormEvent<HTMLFormElement>) => {
    // 게시글 저장
    e.preventDefault();
    const post = await fetchSavePost(memo);
    console.log(post);
  }

  const postList = Posts.map((post:PostDTO) => {
    return (
      <div className='table-row-group' key={post.postId}>
        <div className='table-cell text-center'>
          {post.user.name}
        </div>
        <div className='table-cell text-center'>
          {post.user.trophies}
        </div>
        <div className='table-cell text-center'>
          {post.user.sex}
        </div>
        <div className='table-cell text-center'>
          {post.createDate}
        </div>
        <div className='table-cell text-center'>
          {post.memo}
        </div>
        <div className='table-cell text-center'>
          {post.user.ageGroup}
        </div>
        <div className='table-cell text-center'>
          <div className='flex flew-column'>
            <img width="30px" src={`/images/brawlers/${post.mostBrawlers.firstBrawler}.webp`}/>
            <img width="30px" src={`/images/brawlers/${post.mostBrawlers.secondBrawler}.webp`}/>
            <img width="30px" src={`/images/brawlers/${post.mostBrawlers.thirdBrawler}.webp`}/>
          </div>
        </div>
    </div>
    )
  })

  useEffect(() => {
    const fetchPosts = async () => {
      const res : PostDTO[] = await fetchPostsWithUser()
      setIsRoading(true);
      setPosts(res);
    }
    fetchPosts();
  }, []);


  if (Posts.length === 0 && !IsRoading) {
    return (
      <div className='App'>
        로딩중
      </div>
    )
  } else {
    return (
      <div className="App">

        <div className={`btn-wrapper`}>
          <button className={'modal-open-btn'} onClick={() => setModalOpen(true)}>
            모달열기
          </button>
        </div>
        {
          modalOpen &&
          <div className={'modal-container'} ref={modalBackground} onClick={e => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}>
            <div className={'modal-content'}>
              <form onSubmit={postSubmitHandler}>
                <input placeholder="메모" value={memo} onChange={memoHandler} />
                <input placeholder='아이디' value={playerId} onChange={(e :React.ChangeEvent<HTMLInputElement>) => {
                  setPlayerId(Number(e.target.value));
                }}/>
                <button>
                  전송
                </button>
              </form>
              <button className={'modal-close-btn'} onClick={() => setModalOpen(false)}>
                모달닫기
              </button>
            </div>
          </div>
        }

        <div className="table w-full p-10">
          <div className='table-header-group'>
            <div className='table-cell text-center'>이름</div>
            <div className='table-cell text-center'>트로피 갯수</div>
            <div className='table-cell text-center'>성별</div>
            <div className='table-cell text-center'>작성일</div>
            <div className='table-cell text-center'>메모</div>
            <div className='table-cell text-center'>나이대</div>
            <div className='table-cell text-center'>              
            </div>
          </div>
          {postList}
        </div>
      </div>
    );
  }
}

export default MainPage;