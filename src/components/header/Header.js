import React from 'react';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import { HeaderContainer } from './styled';
import {useHistory} from 'react-router-dom';
import {goToLogin, goToFeed} from '../../routes/Coordinator'

export const Header = () => {
  const history = useHistory()
  const currentDate = format (new Date(), 'EEEEEE, d MMMM' , {
    locale: ptBR,
  });


  return(
    <HeaderContainer>
      <button type="button" onClick={() => goToFeed(history)} >LabEddit</button>
       <div>
      <button type="button" onClick={() => goToLogin(history)}>Login</button>
      <span>{currentDate}</span>
      </div>
    </HeaderContainer>
  );
}