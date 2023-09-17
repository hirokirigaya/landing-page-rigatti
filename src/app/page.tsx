'use client';

import FirstSectionHome from '@/components/app/home/FirstSectionHome';
import SecondSectionHome from '@/components/app/home/SecondSectionHome';
import * as Styled from '@/styles/app/home/styles';

export default function Home() {
  return (
    <Styled.Main>
      <FirstSectionHome />
      <SecondSectionHome />
    </Styled.Main>
  );
}
