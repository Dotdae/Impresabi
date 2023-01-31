import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import styled from "styled-components";

const first_Image = {
    imageUrl: 'https://i.ibb.co/hBWFdXR/Imagen-de-Whats-App-2022-12-30-a-las-14-40-32.jpg'
}
const second_Image = {

    imageUrl: 'https://i.ibb.co/DWtrQFq/Imagen-de-Whats-App-2022-12-30-a-las-14-40-31.jpg'
}

const third_Image = {
    imageUrl: 'https://i.ibb.co/5BNhXL2/Imagen-de-Whats-App-2023-01-28-a-las-10-03-57.jpg'
}

const quarter_Image = {
    imageUrl: 'https://i.ibb.co/y4CKgbM/Imagen-de-Whats-App-2023-01-28-a-las-10-03-58.jpg'
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

    h1{
        color: #d30226;
        font-size: 40px;
        text-align: center;
        padding: 10px;
    }

`;

export function Rotulacion(){
    return(
        <ImageStyle>
            <h1>Antes/Despues</h1>
            <ReactBeforeSliderComponent firstImage={second_Image} secondImage={first_Image} />
            <h1>Antes/Despues</h1>
            <ReactBeforeSliderComponent firstImage={third_Image} secondImage={quarter_Image} />
        </ImageStyle>
        
    )
}

