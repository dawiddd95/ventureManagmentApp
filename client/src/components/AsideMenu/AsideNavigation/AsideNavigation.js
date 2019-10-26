import React from 'react';
import * as S from './StyledAsideNavigation';
import icons from '../../../assets/icons';
import NavigationItem from '../NavigationItem/NavigationItem';


const AsideNavigation = () => {
   return (  
      <S.Wrapper>
         <S.Navigation>
            <NavigationItem icon={icons.usersIcon} text='Employees' link='/user/employees' /> 
            <NavigationItem icon={icons.auditIcon} text='Audit Logs' link='/user/audit-logs'/>  
            <NavigationItem icon={icons.clientsIcon} text='Clients' link='/user/clients'/>  
            <NavigationItem icon={icons.reservedIcon} text='Reservations' link='/user/reservations'/>  
            <NavigationItem icon={icons.ordersIcon} text='Orders' link='/user/orders'/>  
            <NavigationItem icon={icons.chatIcon} text='Communicator' link='/user/communicator'/>   
         </S.Navigation>
      </S.Wrapper>
   );
}
 
export default AsideNavigation;