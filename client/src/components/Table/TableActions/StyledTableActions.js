import styled from 'styled-components';
import colors from '../../../assets/colors';


export const ButtonsWrapper = styled.div`
   width: 100%;
   height: 52px;
   margin-top: 20px;
   margin-bottom: 40px;
   overflow: hidden;
   display: flex;
   align-items: flex-end;
   flex-wrap: wrap;
`

export const Button = styled.button`
   height: 34px;
   margin-right: 20px;
   padding: 0 15px;
   font-weight: 400;
   font-size: 14px;
   background-color: #F50057;
   border: 1px solid transparent;
   border-radius: 5px;
   text-shadow: 0 -1px 0 rgba(0,0,0,0.12);
   box-shadow: 0 2px 0 rgba(0,0,0,0.045);
   text-decoration: none;
   color: white;
   transition: .3s;
   cursor: pointer;
   outline: none;
   display: flex;
   align-items: center;
   :hover {
      background-color: #ff4285;
      border: 1px solid transparent;
      color: white};
      transition: .3s;
   }
`

export const Img = styled.img`
   width: 15px;
   height: 15px;
   margin-right: 10px;
`

export const StyledLabel = styled.label`
   font-size: 14px;
   color: ${props => props.active ? '#F50057' : colors.black65};
`

export const SelectWrapper = styled.div`
   margin: 0 30px 0 auto;
   display: flex;
   flex-direction: column;
`

export const Label = styled.label`
   margin: 0 0 2px 5px;
   font-size: 12px;
   color: ${colors.black65};
`

export const Select = styled.select`
   width: 200px;
   height: 34px;
   text-indent: 5px;
   border: 1px solid #D9D9D9;
   border-radius: 5px;
   font-weight: 400;
   font-size: 14px;
   font-family: Arial;
   color: ${colors.black65};
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