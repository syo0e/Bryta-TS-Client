import ActorCarousel from '@components/home/ActorCarousel';
import Title from 'components/home/Title';
import { mockClient } from 'lib/api'
import React from 'react';
import useSWR from 'swr'
import Header from '../components/common/Header';
import Footer from '@components/common/Footer';
import { Actor } from 'types'

function Home() {
  const { data } = useSWR<{data: Actor[] }>('/actors', mockClient.get);

  console.log('data', data?.data)

  return (
    <>
      <Header isLoggedIn={true} />
      <Title />
      {/* <ActorCarousel /> */}
      <Footer />
    </>
  );
}

export default Home;