'use client';

import * as Styled from './styles';

const ScheduleAppointmentButton = () => {
  return (
    <Styled.ContactButton
      className='button-schedule-appointment'
      variant={'secondary'}
      title='Quero agendar uma consulta'
    >
      <Styled.IconBookMark
        src={'/icons/material_bookmark_border_icon.svg'}
        alt='icone marca página'
        title='icone marca página'
      />
      <span>Quero agendar uma consulta</span>
    </Styled.ContactButton>
  );
};

export default ScheduleAppointmentButton;
