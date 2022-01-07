import Title from 'components/home/Title';
import { mockClient } from 'lib/api'
import React from 'react';
import useSWR from 'swr'
import Header from '../components/common/header';
import { Actor } from 'types'

function Home() {
  const { data } = useSWR<{data: Actor[] }>('/actors', mockClient.get);

  console.log('data', data?.data)

  return (
    <>
      <Header />
      <Title />
      <div>안녕하세요.</div>
    </>
  );
}

export default Home;