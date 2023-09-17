'use client';

import * as Styled from './styles';

const WhatsappButton = () => {
  return (
    <Styled.ContactButton className='button-whatsapp' title='Tirar dúvidas pelo WhatsApp'>
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
