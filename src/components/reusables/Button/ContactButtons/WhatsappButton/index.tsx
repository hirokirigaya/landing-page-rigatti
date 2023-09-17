'use client';

import * as Styled from './styles';

interface WhatsappButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const WhatsappButton = ({ className ,...props }: WhatsappButtonProps) => {
  return (
    <Styled.ContactButton
      className={className ? `button-whatsapp ${className}` : 'button-whatsapp'}
      title='Tirar dúvidas pelo WhatsApp'
      {...props}
    >
      <Styled.IconWhatsapp
        src={'/icons/whatsapp_white_icon.svg'}
        alt='icone whatsapp'
        title='icone whatsapp'
      />
      <span>Tirar dúvidas pelo WhatsApp</span>
    </Styled.ContactButton>
  );
};

export default WhatsappButton;
