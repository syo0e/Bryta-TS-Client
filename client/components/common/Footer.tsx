import styled from '@emotion/styled';
import React from 'react';

function Footer() {
  return (
    <Styled.Root>
      <Styled.Left>
        <div />
        <div>
          <Styled.Email>
            <img src="assets/icons/emailIcon.svg" alt="" />
            <span>@gmail.com</span>
          </Styled.Email>
          <Styled.Github>
            <img src="assets/icons/githubIcon.svg" alt="" />
            <span>https://github.com/ehdgusdl9177/Bryta-TS</span>
          </Styled.Github>
          <Styled.Copyright>Copyright &#169; 2022. Bryta. All rights reserved.</Styled.Copyright>
        </div>
      </Styled.Left>
      <Styled.Right>
        <div className="firstRow">
          <div className="line"></div>
          <div className="part">기획</div>
          <div className="line"></div>
        </div>
        <div className="firstRow">
          <div className="line"></div>
          <div className="part">디자인</div>
          <div className="line"></div>
        </div>
        <div className="firstRow">
          <div className="line"></div>
          <div className="part">프론트엔드</div>
          <div className="line"></div>
        </div>
        <div className="firstRow">
          <div className="line"></div>
          <div className="part">백엔드</div>
          <div className="line"></div>
        </div>
        <div>김동현</div>
        <div>김수영</div>
        <div>김수영&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div>김동현&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div>김수영</div>
        <div></div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </Styled.Right>
    </Styled.Root>
  );
}

export default Footer;

const Styled = {
  Root: styled.div`
    display: flex;
    background-color: #f6f6f6;
    margin-top: 30px;
    padding-bottom: 70px;
    color: #9d9d9d;
  `,
  Left: styled.div`
    flex-basis: 40%;
    margin-left: 140px;
    font-size: 14px;
    & > div {
      margin-top: 32px;
      margin-bottom: 105px;
    }
  `,
  Email: styled.div`
    display: flex;
    align-items: center;
    height: 24px;
    & > img {
      margin-right: 4px;
    }
  `,
  Github: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    height: 24px;
    & > img {
      margin-right: 4px;
    }
  `,
  Copyright: styled.div`
    font-size: 12px;
  `,
  Right: styled.div`
    display: grid;
    flex-basis: 60%;
    grid-template-rows: repeat(4, 45px);
    grid-template-columns: repeat(4, 1fr);
    margin-top: 100px;
    .line {
      border-top: 1px solid #9d9d9d;
      width: 15px;
    }
    .part {
      margin: 0 6px;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .firstRow {
      margin-bottom: 32px;
    }
  `,
};