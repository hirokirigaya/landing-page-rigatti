'use client';

import FifthSectionHome from '@/components/app/home/FifthSectionHome';
import FirstSectionHome from '@/components/app/home/FirstSectionHome';
import FourthSectionHome from '@/components/app/home/FourthSectionHome';
import SecondSectionHome from '@/components/app/home/SecondSectionHome';
import ThirdSectionHome from '@/components/app/home/ThirdSectionHome';
import * as Styled from '@/styles/app/home/styles';

export default function Home() {
  return (
    <Styled.Main>
      <FirstSectionHome />
      <SecondSectionHome />
      <ThirdSectionHome />
      <FourthSectionHome />
      <FifthSectionHome />
    </Styled.Main>
  );
}
