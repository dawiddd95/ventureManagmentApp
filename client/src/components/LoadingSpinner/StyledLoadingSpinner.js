import styled, {keyframes} from 'styled-components';

export const spinnerLoader = keyframes`
   0% {
      transform: rotate(0deg);
   }
   100% {
      transform: rotate(360deg);
   }
`

export const Spinner = styled.div`
   width: ${props => props.smallSpinner ? '20px' : '100px'};
   height: ${props => props.smallSpinner ? '20px' : '100px'};
   margin: ${props => props.smallSpinner ? '2px 0 0 10px' : '10vh auto 0 auto'};
   font-size: 2px;
   border-radius: 50%;
   border-top: 1.1em solid rgba(255, 255, 255, 0.2);
   border-right: 1.1em solid rgba(255, 255, 255, 0.2);
   border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
   border-left: ${props => props.smallSpinner ? '1.1em solid #ffffff' : '1.1em solid red'};
   transform: translateZ(0);
   animation: ${spinnerLoader} ${props => props.smallSpinner ? '.5s infinite linear' : '.8s infinite linear'};
`
