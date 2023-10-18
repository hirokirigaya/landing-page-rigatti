'use client';

import { FirstSectionHormonalGuide } from '@/components/app/hormonal-guide/FirstSectionHormonalGuide';
import { SecondSectionHormonalGuide } from '@/components/app/hormonal-guide/SecondSectionHormonalGuide';
import { ThirdSectionHormonalGuide } from '@/components/app/hormonal-guide/ThirdSectionHormonalGuide';
import DarkHeader from '@/components/layout/DarkHeader';
import { MainContainer } from '@/styles/reusables/MainContainer';

export default function HormonalGuide() {
  return (
    <>
      <DarkHeader />
      <MainContainer>
        <FirstSectionHormonalGuide />
        <SecondSectionHormonalGuide />
        <ThirdSectionHormonalGuide />
      </MainContainer>
    </>
  );
}
