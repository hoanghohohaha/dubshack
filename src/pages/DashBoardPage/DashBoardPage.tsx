import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { authServer } from '../../config/apiUrl.json'
import withLayout from '../../layout/withLayout';
import DashBoardSaler from './DashBoardSaler';
import DashBoardUser from './DashBoardUser';

function DashBoardPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [isUser, setIsUser] = useState(true);


  interface IUser {
    email: string;
    password: string;
    role: string
  }

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      setIsLogin(true);
      setAccessToken(access_token);
    }
  }, [])

  useEffect(() => {
    axios.get<IUser>(authServer + "/verify", {
      headers: {
        "Authorization": "Bearer " + accessToken
      }
    }).then(res => {
      if (res.data.role === "Saler") {
        console.log("Saler");
        setIsUser(!isUser)
      }
    })
  }, [accessToken])



  return (
    <>
      {isUser ? <DashBoardUser /> : <DashBoardSaler />}
    </>)
}

export default withLayout(DashBoardPage)