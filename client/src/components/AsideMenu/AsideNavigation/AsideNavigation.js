import React from 'react';
import * as S from './StyledAsideNavigation';
import icons from '../../../assets/icons';
import NavigationItem from '../NavigationItem/NavigationItem';

const AsideNavigation = () => {
   return (  
      <S.Navigation>
         <NavigationItem icon={icons.usersIcon} text='Users' link='/user/users' /> 
         <NavigationItem icon={icons.auditIcon} text='Audit Logs' link='/user/users'/>  
         <NavigationItem icon={icons.clientsIcon} text='Clients' link='/user/users'/>  
         <NavigationItem icon={icons.reservedIcon} text='Bookings' link='/user/bookings'/>  
         <NavigationItem icon={icons.ordersIcon} text='Orders' link='/user/users'/>  
         <NavigationItem icon={icons.chatIcon} text='Chat' link='/user/users'/>   
      </S.Navigation>
   );
}
 
export default AsideNavigation;