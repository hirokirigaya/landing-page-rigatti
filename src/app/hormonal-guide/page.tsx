'use client';

import { FirstSectionHormonalGuide } from '@/components/app/hormonal-guide/FirstSectionHormonalGuide';
import { SecondSectionHormonalGuide } from '@/components/app/hormonal-guide/SecondSectionHormonalGuide';
import DarkHeader from '@/components/layout/DarkHeader';
import { MainContainer } from '@/styles/reusables/MainContainer';

export default function HormonalGuide() {
  return (
    <>
      <DarkHeader />
      <MainContainer>
        <FirstSectionHormonalGuide />
        <SecondSectionHormonalGuide />
      </MainContainer>
    </>
  );
}
