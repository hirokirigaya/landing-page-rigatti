'use client';

import * as Styled from './styles';

interface ScheduleAppointmentProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ScheduleAppointmentButton = ({ className ,...props }: ScheduleAppointmentProps) => {
  return (
    <Styled.ContactButton
      className={className ? `button-schedule-appointment ${className}` : 'button-schedule-appointment'}
      variant={'secondary'}
      title='Quero agendar uma consulta'
      {...props}
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
