import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
const Whatstyle = styled.div`
    a{
            position:fixed;
        width:60px;
        height:60px;
        bottom:40px;
        right:40px;
        background-color:#25d366;
        color:#FFF;
        border-radius:50px;
        text-align:center;
        font-size:30px;
        z-index:100;
        }
    .wsp-logo{
        margin-top: 13px;
    }
`;
export function Whats() {
  return (
    <Whatstyle>
      <a href="https://wa.me/+526681078649" class="whatsapp" target="_blank">
        {" "}
        <FaWhatsapp className="wsp-logo"/>
      </a>
    </Whatstyle>
  );
}
