import styled, {css} from 'styled-components';
import colors from '../../assets/colors';


export const Wrapper = styled.div`
   width: 100%;
   margin: 20px 0 40px 0;
   
   display: flex;
   flex-wrap: wrap;
`

export const Select = styled.select`
   width: 120px;
   height: 35px;
   margin-right: 20px;
   text-indent: 10px;
   font-size: 14px;
   color: ${colors.black65};
   border: 1px solid ${colors.silverColor};
   border-radius: 4px;
   outline: none;
   transition: .3s;

   :hover {
      border: 1px solid ${colors.redColor};
      transition: .3s;
   }

   :focus {
      border: 1px solid ${colors.redColor};
      box-shadow: 0 0 0 2px rgba(245,34,45,0.2);
      transition: .3s;
   }
`

export const Button = styled.button`
   width: 35px;
   height: 35px;
   margin-right: 10px;
   margin-bottom: 20px;
   border: ${({active}) => active ? `1px solid ${colors.redColor}` : `1px solid ${colors.silverColor}`};
   border-radius: 4px;
   color: ${({active}) => active ? colors.redColor : colors.black65};
   background-color: white;
   cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'};
   outline: 0;
   transition: .3s;

   display: flex;
   align-items: center;
   justify-content: center;

   :hover {
      border: 1px solid ${colors.redColor};
      color: ${colors.redColor};
      transition: .3s;
   }

   ${props => props.active && css`
      border: 1px solid ${colors.redColor};
      color: ${colors.redColor};
   `}
`

export const Img = styled.img`
   width: 10px;
   height: 10px;
`