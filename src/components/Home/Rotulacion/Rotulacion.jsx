import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import styled from "styled-components";

const first_Image = {
    imageUrl: 'https://i.ibb.co/hBWFdXR/Imagen-de-Whats-App-2022-12-30-a-las-14-40-32.jpg'
}
const second_Image = {

    imageUrl: 'https://i.ibb.co/DWtrQFq/Imagen-de-Whats-App-2022-12-30-a-las-14-40-31.jpg'
}
const ImageStyle = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    place-content: center;
    img{
        width: 100%;
        height: 500px
    }
`;

export function Rotulacion(){
    return(
        <ImageStyle>
            <ReactBeforeSliderComponent firstImage={second_Image} secondImage={first_Image} />
        </ImageStyle>
        
    )
}

