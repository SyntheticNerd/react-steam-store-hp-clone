import React from 'react'
import { UserInfoSB } from './RecStyles'

export default function UserInfo() {
  return (
    <UserInfoSB>
        <img src={process.env.PUBLIC_URL + `/images/profile-img.jpg`} alt="" />
        <div>
            <h2>User Name</h2>
            <p>Played 42 hrs at review time</p>
            <p>16 people found this review helpful</p>
        </div>
    </UserInfoSB>
  )
}
