import React from 'react';
import * as S from './StyledAsideNavigation';
import icons from '../../../assets/icons';
import NavigationItem from '../NavigationItem/NavigationItem';


const AsideNavigation = () => {
   return (  
      // wysokosc elementu 1cm
      // ikonka od lewej 0.5cm
      // teskt od ikonki 0.3cm
      // element od elementu 0.3cm
      // czcionka 14px segoe
      <S.Navigation>
         <NavigationItem icon={icons.usersIcon} text='Users' link='/user/users' /> 
         <NavigationItem icon={icons.auditIcon} text='Audit Logs' link='/user/audit-logs'/>  
         <NavigationItem icon={icons.clientsIcon} text='Clients' link='/user/clients'/>  
         <NavigationItem icon={icons.reservedIcon} text='Bookings' link='/user/bookings'/>  
         <NavigationItem icon={icons.ordersIcon} text='Orders' link='/user/orders'/>  
         <NavigationItem icon={icons.chatIcon} text='Communicator' link='/user/communicator'/>   
      </S.Navigation>
   );
}
 
export default AsideNavigation;