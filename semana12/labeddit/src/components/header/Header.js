import React from "react";
import format from "date-fns/format";
import logo from "../../assets/logo.png";
import ptBR from "date-fns/locale/pt-BR";
import { HeaderContainer } from "./styled";
import { useHistory } from "react-router-dom";
import { goToLogin, goToFeed } from "../../routes/Coordinator";

export const Header = ({ rightButtonText, setRightButtonText }) => {
  const history = useHistory();
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText("Login");
      goToLogin(history);
    } else {
      goToLogin(history);
    }
  };

  return (
    <HeaderContainer>
      <button type="button" onClick={() => goToFeed(history)}>
        LabEddit <img src={logo} alt="logo" />
      </button>

      <div>
        <button type="button" onClick={rightButtonAction}>
          {rightButtonText}
        </button>
        <span>{currentDate}</span>
      </div>
    </HeaderContainer>
  );
};
