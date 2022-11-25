import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { MdEdit } from 'react-icons/md'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import useToken from '../../../CustomHooks/useToken';
import { getUserDetailsApi } from '../../../Services/UserService';

const UserProfile = () => {
  const {token} = useToken()
  const [UserData, setUserData] = useState();

 

useEffect(() => {
  let data = {
    userId: token.Um,
    userRole: token.Hm,
    UserName: token.UserName
  }
  getUserDetailsApi(data, (res) => {
    if(res.length > 0){
      setUserData(res[0])
    }
  })
}, [])
console.log("user", UserData)
const Setrole = (e) => {
  let temp;
  if(e === 2){
    temp = "Admin"
  }
  if(e === 1){
    temp = "Super Admin"
  }
  if(e === 3){
    temp = "user"
  }
  return temp
}

console.log('user', UserData)
  return (
    <div className='contentContainer'>
      <MainContainer>
        <div className='profileContainer'>
          <Avatar size={160} className='profileImage' icon={<UserOutlined />} />
        </div>
        <div className="profileInformation">
          {/* <a><TbEdit className='editIcon' /></a> */}
          <Button type='primary' shape='round' icon={<MdEdit/>} ghost className='CButton'> edit</Button>
          <span className='spanStyling'><h2>{UserData !== undefined ? UserData.UserFullName : ''}</h2></span>
          <span className='spanStyling'>User Name: {UserData !== undefined ? UserData.UserName : ''}</span>
          <span className='spanStyling'>Email: {UserData !== undefined ? UserData.UserEmail : ''}</span>
          <span className='spanStyling'>user Id: {UserData !== undefined ? UserData.UId: ''}</span>
          <span className='spanStyling'>Phone: {UserData !== undefined ? UserData.UserContactNumber : ''}</span>
          <span className='spanStyling'>Role: {Setrole(token.Hm)}</span>
        </div>
      </MainContainer>

    </div>
  )
}


export default UserProfile;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: '100%';
  flex-direction: column;
  padding-bottom: 32px;
  /* background-color: red; */

  .profileContainer{
    display: block;
    width: 100%;
    height: 100px;
    background: 'rgb(120,201,250)';
    background: linear-gradient(90deg, rgba(120,201,250,1) 38%,rgb(202 200 231) 100%);
    height: 160px;
    position: relative;
    
  }

  .profileImage{
      position: absolute;
      top: 50%;
      left: 32%;
      transform: translateX(-50%);
      border: 8px solid rgb(255 255 255);
      padding: 10px ;
  }
  .profileInformation{
    width: 49%;
    border: 1px solid #dbd6d6;
    /* height: 300px; */
    margin-top: 100px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 16px;
  }
  .CButton{
    position: absolute;
    right: 10px;
    top: 10px;
    /* height: 10px; */
  }
  .spanStyling{
   font-size: 16px;
   font-weight: 600;
   letter-spacing: 1.5px;
   margin-bottom: 4px;
   color: #1a2d38;

   h2{
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 2px;
    color: #132631;
   }
 }
`