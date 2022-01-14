import ActorBanner from '@components/actor/ActorBanner';
import Filmograph from '@components/actor/Filmograph';
import Header from '../components/common/Header';
import React, { ReactElement } from 'react';

function actor(): ReactElement {
  return (
    <div>
      <Header isLoggedIn={true} />
      <ActorBanner />
      <Filmograph />
    </div>
  );
}

export default actor;
