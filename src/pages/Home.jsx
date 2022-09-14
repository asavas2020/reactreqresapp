import axios from 'axios';
import { useEffect, useState } from 'react';
// import Register from './Register';
const Home = () => {
 
  const [myData, setMyData] = useState([]) 

  const url = "https://reqres.in/api/users?page=1";

  const getUsers = async() =>{
    try {
      const {data} = await axios.get(url)
      setMyData(data.data)
      console.log(data);
  } catch (error) {
    console.log(error);
  }
  }
 //? Sadece Component mount oldugunda istek yapar
 useEffect(() => {

  getUsers();

}, []);


  return (
    <div className="review">
      {myData.map((user,index)=>{
        const {avatar, email, first_name, last_name} = user
        return(
      <div key={index} className="user_card">
        <div className="img-container">
          <img className='avatar' src={avatar} alt="avatar" />
        </div>
          <h4 className="info">{first_name} {last_name}</h4>
          <h3>{email}</h3>
        </div>)
      })}
    </div>
  )
}
export default Home