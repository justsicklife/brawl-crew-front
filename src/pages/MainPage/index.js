import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function MainPage() {

    const [users,setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await getUsers()
      console.log(res);
      setUsers(res);
    }
    fetchUsers();
  },[]);

  const getUsers = async () => {
    let res = []
    try{
      res = await axios.get("http://localhost:8080/users")
    } catch(e) {
      alert(e.message);
    } finally {
      return res.data === undefined ? [] : res.data;
    }
  }

    if(users.length === 0) {
        return (
          <div className='App'>
            로딩중
          </div>
        ) 
      }else {
        return (
          <div className="App">
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
              {users.map((user) => (
    
                <div key={user.userId} className="table-row">
                  <div className="table-cell text-center">
                    <h5>{user.name}</h5>
                  </div>
                  <div className="table-cell text-center">
                    {user.trophies}
                  </div>
                  <div className="table-cell text-center">
                    {user.sex}
                  </div>
                  <div className="table-cell text-center">
                    {user.createDate}
                  </div>
                  <div className="table-cell text-center">
                    {user.memo}
                  </div>
                  <div className="table-cell text-center">
                    {user.ageGroup}
                  </div>
                  <div className="table-cell text-center">
                    <div className='flex justify-center'>
                    {user.userBrawlers.map((userBrawler) => (
                      <div key={`${user.id}${userBrawler.brawler.name.toUpperCase()}`}>
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