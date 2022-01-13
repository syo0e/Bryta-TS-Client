import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import RequestCard from './RequestCard';

import ActorCard from './ActorCard';

function ActorCarousel(): ReactElement {
  return (
   <Wrap>
      <ActorCard
      name={'유아인'}
      profileImage={
        'https://w.namu.la/s/6cbde766870c3d798432936a54b586b4c55d80c0f5b16dbaa23e138f49ec8436ace76f8d7535905b91a5fb34b9c64d17465e6d8afb7083bf90497b3a6d6d7a9929417275f6a4a70b8d47cf53c10e64e5f65d2b23baeaee2c9515245a9b1184e13e2bd07129a5414af24eade743dc1958'
      }
    />
     <ActorCard
      name={'유아인'}
      profileImage={
        'https://w.namu.la/s/6cbde766870c3d798432936a54b586b4c55d80c0f5b16dbaa23e138f49ec8436ace76f8d7535905b91a5fb34b9c64d17465e6d8afb7083bf90497b3a6d6d7a9929417275f6a4a70b8d47cf53c10e64e5f65d2b23baeaee2c9515245a9b1184e13e2bd07129a5414af24eade743dc1958'
      }
    />
    <RequestCard />
   </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  /* margin-top: -114px; */
  width: 100%;
  height: 270px;
`;


export default ActorCarousel;