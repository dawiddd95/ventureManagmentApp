import styled, {keyframes} from 'styled-components';


export const Wrapper = styled.div`
   width: 100%;
   margin: 40px 0;
` 

export const spinnerLoader = keyframes`
   0% {
      transform: rotate(0deg);
   }
   100% {
      transform: rotate(360deg);
   }
`

export const P = styled.p`
   margin: 20px 0 0 0;
   text-align: center;
   font-size: ${({small_style}) => small_style ? '14px' : '16px'};
`

export const Spinner = styled.div`
   width: ${({small_style}) => small_style ? '40px' : '150px'};
   height: ${({small_style}) => small_style ? '40px' : '150px'};
   margin: 0 auto;
   font-size: 2px;
   border-radius: 50%;
   border-top: 1.1em solid rgba(255, 255, 255, 0.2);
   border-right: 1.1em solid rgba(255, 255, 255, 0.2);
   border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
   border-left: 1.1em solid red;
   transform: translateZ(0);
   animation: ${spinnerLoader} .8s infinite linear;
`
