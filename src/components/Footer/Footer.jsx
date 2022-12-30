import styled from "styled-components";
import logo from "../../assets/logo.png";
import { FaMapMarkerAlt,FaPhoneAlt, FaFacebook} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const FooterStyled = styled.footer`
  background: #d30226;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: bold 16px sans-serif;
  padding: 35px 30px;

  h3 {
    color: #ffffff;
    font: normal 36px "Roboto", cursive;
    margin: 0;
    span {
      color: lightseagreen;
    }
  }

  .footer-links {
    color: #ffffff;
    margin: 20px 0 12px;
    padding: 0;

    a {
      display: inline-block;
      line-height: 1.8;
      font-weight: 400;
      text-decoration: none;
      color: inherit;
      margin-left: 10px;

      &:before {
        content: "|";
        font-weight: 300;
        font-size: 20px;
        left: 0;
        color: #fff;
        display: inline-block;
        padding-right:40;
      }
    }
    .link-1:before {
      content: none;
    }
  }

  .footer-company-name {
    color: #222;
    font-size: 14px;
    font-weight: normal;
    margin: 0;
  }
  .footer-company-about {
    line-height: 20px;
    color: #92999f;
    font-size: 13px;
    font-weight: normal;
    margin: 0;
  }
  .footer-icons {
    margin-top: 25px;

    a {
      display: inline-block;
      width: 35px;
      height: 35px;
      cursor: pointer;
      background-color: #33383b;
      border-radius: 2px;
      font-size: 24px;
      color: #ffffff;
      text-align: center;
      line-height: 35px;
      margin-right: 3px;
      margin-bottom: 5px;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const FooterLeft = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 40%;

  .logo img {
    width: 100px;
    cursor: pointer;
  }
`;

const FooterCenter = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 35%;

  .icon-style{
    color: #ffffff;
    font-size: 40px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    line-height: 38px;
    margin: 10px 15px;
    vertical-align: middle;
  }

  p {
    display: inline-block;
    color: #ffffff;
    font-weight: 400;
    vertical-align: middle;
    margin: 0;

    span {
      display: block;
      font-weight: normal;
      font-size: 12px;
      line-height: 2;
    }

    a {
      color: lightseagreen;
      text-decoration: none;
    }
  }
`;

const FooterRight = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 20%;

  h3 {
    display: block;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    display: inline-block;
    color: #ffffff;
    font-weight: 400;
    vertical-align: middle;
    margin: 0;

    span {
      display: block;
      font-weight: normal;
      font-size: 12px;
      line-height: 2;
    }
  }
`;

const IconFooter = styled.div`

`;

export function Footer() {
  return (
    <FooterStyled id="contact">
      <FooterLeft>
        <div className="logo">
          <a className="logo-img" href="">
            <img src={logo} alt="impresabi-logo" />
          </a>
        </div>
        <p className="footer-links">
          <a href="#" class="link-1">
            Inicio
          </a>

          <a href="#services">Servicios</a>

          <a href="#contact">Contacto</a>

          <a href="#acercade">Acerca de</a>
        </p>
        <p className="footer-company-name">Impresabi © 2022</p>
      </FooterLeft>
      <FooterCenter>

        <IconFooter>
          <i><FaMapMarkerAlt className="icon-style"></FaMapMarkerAlt></i>
          <p> Av. Independencia 1430, Jardines del Valle, 81245 Los Mochis, Sin.</p>
        </IconFooter>
        
        <IconFooter>
          <FaPhoneAlt className="icon-style"></FaPhoneAlt>
          <p>66 81 65 84 24</p>
        </IconFooter>
        
        <IconFooter>
          <MdEmail className="icon-style"></MdEmail>
          <p>
            <a href="mailto:atencionaclientes@impresabi.com">
                atencionaclientes@impresabi.com</a>
          </p>
        </IconFooter>
      
      </FooterCenter>
      <FooterRight>
        <h3>Siguenos en</h3>
        <div className="footer-icons">
          <a href="https://www.facebook.com/Impresabi">
            <FaFacebook></FaFacebook>
          </a>
          <p>Impresabi</p>
        </div>
      </FooterRight>
    </FooterStyled>
  );
}
