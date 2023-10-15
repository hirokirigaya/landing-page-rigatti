'use client';

import FifthSectionHome from '@/components/app/home/FifthSectionHome';
import FirstSectionHome from '@/components/app/home/FirstSectionHome';
import FourthSectionHome from '@/components/app/home/FourthSectionHome';
import SecondSectionHome from '@/components/app/home/SecondSectionHome';
import SeventhSectionHome from '@/components/app/home/SeventhSectionHome';
import SixthSectionHome from '@/components/app/home/SixthSectionHome';
import ThirdSectionHome from '@/components/app/home/ThirdSectionHome';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import * as Styled from '@/styles/app/home/styles';

export default function Home() {
  return (
    <>
      <Header />
      <Styled.Main>
        <FirstSectionHome />
        <SecondSectionHome />
        <ThirdSectionHome />
        <FourthSectionHome />
        <FifthSectionHome />
        <SixthSectionHome />
        <SeventhSectionHome />
      </Styled.Main>
      <Footer />
    </>
  );
}
