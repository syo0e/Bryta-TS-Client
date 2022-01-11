import styled from '@emotion/styled';
import React, { ReactElement, useState } from 'react';

interface Props {
  name: string;
  profileImage: string;

}

function ActorCard({ name, profileImage }: Props): ReactElement {
  const [isHover, setIsHover] = useState(false);

  function handleMouseEnter() {
    setIsHover(true);
  }

  function handleMouseLeave() {
    setIsHover(false);
  }

  return (
    <Wrap name={name} profileImage={profileImage} >
      <button className="bgImg" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {isHover && (
          <div className="hover">
            <p className="hover__name">{name}</p>
            <p className="hover__label">Start exploring &gt;</p>
          </div>
        )}
      </button>
    </Wrap>
  );
}

const Wrap = styled.div<Props>`
  border-radius: 10px;
  width: 360px;
  height: 270px;
  overflow: hidden;
  object-fit: cover;
  .bgImg {
    border: none;
    background: linear-gradient(black, black), url(${(props: Props) => props.profileImage});
    background-blend-mode: saturation;
    background-size: cover;
    cursor: pointer;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  .hover {
    background: linear-gradient(158.98deg, #f1be15 3.15%, rgb(133, 240, 138) 94.3%);
    background-size: fill;
    width: 100%;
    height: 100%;

    &__name {
      margin-top: 55px;
      width: 190px;
      height: 100px;
      object-fit: contain;
      filter: brightness(0) invert(1);
    }

    &__label {
      margin-top: 30px;
      text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
      line-height: 30px;
      color: #ffffff;
      font-size: 24px;
      font-weight: bold;
      font-style: normal;
    }
  }
`;

export default ActorCard;