'use client';

import { useState } from 'react';
import * as Styled from './styles';

const NavLinks = [
  {
    title: 'Reposição Hormonal',
    accessibilityTitle: 'Clique para navegar até Reposição Hormonal',
    href: '/',
  },
  {
    title: 'Nutricionista',
    accessibilityTitle: 'Clique para navegar até Nutricionista',
    href: '/',
  },
  {
    title: 'Coleta e Exames',
    accessibilityTitle: 'Clique para navegar até Coleta e Exames',
    href: '/',
  },
];

const Header = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <Styled.Header>
      <Styled.LeftContent>
        <Styled.Logo src={'/logo_rigatti.svg'} alt='Logo da Clínica Rigatti' draggable={false} />

        <Styled.Nav>
          <Styled.ListNav>
            {NavLinks.map((item, index) => (
              <Styled.ItemList key={index}>
                <Styled.LinkNav href={item.href} title={item.accessibilityTitle}>
                  {item.title}
                </Styled.LinkNav>
              </Styled.ItemList>
            ))}
          </Styled.ListNav>
        </Styled.Nav>

        <Styled.ButtonMenu
          className={open ? 'btn-menu collapsed' : 'btn-menu'}
          onClick={() => setOpen(!open)}
          name='Menu'
          title={open ? 'Clique para fechar o menu' : 'Clique para abrir o menu'}
        >
          <Styled.LineBurguerMenu className={open ? 'top-line rotate' : 'top-line'} />
          <Styled.LineBurguerMenu className={open ? 'mid-line' : ''} />
          <Styled.LineBurguerMenu className={open ? 'bottom-line rotate' : 'bottom-line'} />
        </Styled.ButtonMenu>
      </Styled.LeftContent>
      <Styled.RightContent>
        <Styled.Hr />
        <Styled.BoxLocale>
          <Styled.TitleHours>Segunda à Sexta das 9h às 19h.</Styled.TitleHours>
          <Styled.Locale>Rua 2950, 117 - Balneário Camboriú, SC.</Styled.Locale>
        </Styled.BoxLocale>
        <Styled.LinkIconWhatsapp href='/' title='Clique para entrar em contato pelo Whatsapp'>
          <Styled.IconWhatsapp
            src={'/icons/whatsapp_icon.svg'}
            alt='Icone do Whatsapp'
            draggable={false}
          />
          <Styled.TextWhatsapp>(47) 99981 - 7131</Styled.TextWhatsapp>
        </Styled.LinkIconWhatsapp>
        <Styled.ButtonMenu
          className={open ? 'btn-menu collapsed' : 'btn-menu'}
          onClick={() => setOpen(!open)}
          name='Menu'
          title={open ? 'Clique para fechar o menu' : 'Clique para abrir o menu'}
        >
          <Styled.LineBurguerMenu className={open ? 'top-line rotate' : 'top-line'} />
          <Styled.LineBurguerMenu className={open ? 'mid-line' : ''} />
          <Styled.LineBurguerMenu className={open ? 'bottom-line rotate' : 'bottom-line'} />
        </Styled.ButtonMenu>
      </Styled.RightContent>
      <Styled.NavMobile className={open ? 'menu-mobile collapsed' : 'menu-mobile'}>
        <Styled.ListNavMobile>
          {NavLinks.map((item, index) => (
            <Styled.ItemListMobile
              key={index}
              style={{
                opacity: 0,
                animation: open
                  ? `navLinkAnimation ${index / 7 + 0.8}s ease forwards ${index / 7 + 0.5}s`
                  : `navLinkAnimationOut ${index / 7 + 0.8}s ease forwards`,
              }}
            >
              <Styled.LinkNavMobile href={item.href} title={item.accessibilityTitle}>
                {item.title}
              </Styled.LinkNavMobile>
            </Styled.ItemListMobile>
          ))}
        </Styled.ListNavMobile>
      </Styled.NavMobile>
    </Styled.Header>
  );
};

export default Header;
