import styled from "@emotion/styled"
import React, { ReactElement } from 'react';

function ActorBanner(): ReactElement {
  const actorName = '유아인';

  return (
    <BannerWrap>
    <div className="bg">
      <img className="img" src ="https://image.ajunews.com/content/image/2020/06/25/20200625170136679538.png"/>
      <p className="name">{actorName}</p>
      <p className="profile">
        신체 : 179cm, 71kg
        <br />
        데뷔 : 2003년 농심 '쫄쫄면' 광고
      </p>
    </div>
  </BannerWrap>
  )
}

const BannerWrap = styled.div`
   .bg {
    background: linear-gradient(
        158.98deg,
        rgba(224, 164, 34, 0.4) 3.15%,
        rgba(100, 101, 244, 0.4) 94.3%
      );
    background-size: cover;
    width: 100%;
    height: 424px;
  }

  .img {
    border-radius: 25px;
    width: 360px;
    height: 270px;
    overflow: hidden;
  }

  .name {
    padding-top: 162px;
    text-align: center;
    color: #ffffff;
    font-size: 64px;
    font-weight: 600;
    font-style: normal;
  }
  .profile {
    padding-top: 10px;
    text-align: center;
    color: #ffffff;
    font-size: 28px;
    font-weight: 500;
    font-style: normal;
  }
`

export default ActorBanner;