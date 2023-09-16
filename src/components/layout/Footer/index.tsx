'use client';
import { Typography } from '@/components/reusables/Typography/Typography';
import Image from 'next/image';
import * as Styled from './styles';

const Footer = (): JSX.Element => {
  return (
    <Styled.Footer>
      <Styled.Logo
        src='/logo_rigatti_awaken_your_strength.svg'
        alt='Logo'
        title='Logo da clínica Rigatti, com o texto "Desperte sua força real"'
      />
      <Styled.LinkStyled href='/' title='Acessar instagram da clínica Rigatti'>
        <Image
          src='/icons/instagram_icon.svg'
          alt='Icone Instagram'
          title='Icone do Instagram'
          width={26}
          height={26}
        />
      </Styled.LinkStyled>
      <Styled.BoxContacts>
        <Styled.LinkContact
          href='tel:+5547999817131'
          title='Entrar em contato com a clínica Rigatti'
        >
          (47) 99981-7131
        </Styled.LinkContact>
        <Typography
          fontWeight={300}
          lineHeight={'26px'}
          color={'tertiary'}
          textAlign={'center'}
          paddingTop={'2px'}
          fontSize={'16px'}
        >
          Rua 2950, 117 - Centro - Balneário Camboriú - SC
        </Typography>
        <Typography
          fontWeight={500}
          lineHeight={'26px'}
          color={'tertiary'}
          textAlign={'center'}
          fontSize={'13px'}
        >
          Segunda à Sexta-feira das 9h às 19h.
        </Typography>
      </Styled.BoxContacts>
    </Styled.Footer>
  );
};

export default Footer;
