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
  .footer-icons {
    margin-top: 25px;

    a {
      display: inline-block;
      width: 30px;
      height: 30px;
      cursor: pointer;
      border-radius: 2px;
      font-size: 25px;
      color: #be0d0d;
      text-align: center;
    }
  }

  @media (max-width: 800px) {
            width: auto;
            height:auto;
        }
`;

const FooterLeft = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-right: 10px;
  width: 35%;
  @media (max-width: 767px) {
    width: 100%;
    display: block;
    margin-right: 0;
  }

  .logo img {
    width: 100px;
    cursor: pointer;

    @media (max-width: 767px) {
      width: 80px;
    }
  }
`;

const FooterCenter = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 35%;
  margin-left: 5px;
  margin: 10px 5px;

  .icon-style{
      color: #ffffff;
      font-size: 30px;
      height: 30px;
      text-align: center;
      vertical-align: middle;
      margin: 10px;
  }

  p {
    display: inline-block;
    color: #ffffff;
    font-weight: 400;
    vertical-align: middle;
    padding-top: 15px;
    a {
      color: lightseagreen;
      text-decoration: none;
      font-size: 15px;
      

    }
    
  }
  @media (max-width: 767px) {
    width: 100%;
    text-align: center;
    margin-left: 0;

    .icon-style {
      font-size: 20px;
      height: 20px;
    }

    p {
      display: block;
      padding-top: 10px;
    }
  }
`;

const FooterRight = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
  width: 25%;

  h3 {
    display: block;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .icon-style{
    color: #ffffff;
    font-size: 30px;
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
    margin-left: 25px;
  }
  @media (max-width: 768px) {
    width: 100%;
    display: block;
    text-align: center;
    margin: 0;

    h3 {
      margin-bottom: 10px;
    }

    .icon-style {
      margin: 10px auto;
    }

    p {
      display: block;
      margin: 10px 0;
      text-align: center;
    }
  }
`;

const IconFooter = styled.div`
    display: flex;
    margin-top: 5px;
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
          <a href="#">Inicio</a>
          <a href="/servicios">Servicios</a>
          <a href="/contact">Contacto</a>
          <a href="/about">Acerca de</a>
        </p>
        <p className="footer-company-name">Impresabi © 2022</p>
      </FooterLeft>

      <FooterCenter>  
        <IconFooter>
          <FaMapMarkerAlt className="icon-style"></FaMapMarkerAlt>
          <p> Av. Independencia 1430, Jardines del Valle, 81245 Los Mochis, Sin.</p>
        </IconFooter>
        
        <IconFooter>
          <FaPhoneAlt className="icon-style"></FaPhoneAlt>
          <p>66 81 65 84 24</p>
        </IconFooter>
        
        <IconFooter>
          <MdEmail className="icon-style"></MdEmail>
          <p><a href="mailto:atencionaclientes@impresabi.com">atencionaclientes@impresabi.com</a></p>
        </IconFooter>
      </FooterCenter>
      
      <FooterRight>
        <h3>Siguenos en</h3>
        <div className="footer-icons">
          <a href="https://www.facebook.com/Impresabi">
            <FaFacebook className="icon-style"></FaFacebook>
          </a>
          <p>Impresabi</p>
        </div>
      </FooterRight>
    </FooterStyled>
  );
}
