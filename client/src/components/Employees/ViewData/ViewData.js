import React from 'react';
import * as S from './StyledViewData';

const ViewData = ({employee}) => {
   const privileges = [
      employee.employeesAccess, 
      employee.auditAccess,
      employee.clientsAccess,
      employee.profileAccess,
      employee.communicatorAccess,
      employee.reservationsAccess
   ]

   return (  
      <S.Wrapper>
         <S.Item>
            <S.Label>ID: </S.Label>
            <S.Value>{employee.id}</S.Value>
         </S.Item>
         <S.Item>
            <S.Label>Name: </S.Label>
            <S.Value>{employee.name}</S.Value>
         </S.Item>
         <S.Item>
            <S.Label>Surname: </S.Label>
            <S.Value>{employee.surname}</S.Value>
         </S.Item>
         <S.Item>
            <S.Label>Phone: </S.Label>
            <S.Value>
               {employee.phone 
                  ? employee.phone 
                  : <S.NoData>No Data</S.NoData>
               }
            </S.Value>
         </S.Item>
         <S.Item>
            <S.Label>Email: </S.Label>
            <S.Value>
               {employee.email 
                  ? employee.email 
                  : <S.NoData>No Data</S.NoData>
               }
            </S.Value>
         </S.Item>
         <S.Item>
            <S.Label>Access To: </S.Label>
            {privileges.every(item => item === false) 
               ?  <S.Value><S.NoData>No Access</S.NoData></S.Value>
               :  <S.PrivilegesWrapper>
                  {employee.employeesAccess && <S.Privilege>Employees</S.Privilege>}
                  {employee.auditAccess && <S.Privilege>Audit</S.Privilege>}
                  {employee.clientsAccess && <S.Privilege>Clients</S.Privilege>}
                  {employee.reservationsAccess && <S.Privilege>Reservations</S.Privilege>}
                  {employee.communicatorAccess && <S.Privilege>Communicator</S.Privilege>}
                  {employee.profileAccess && <S.Privilege>Profile</S.Privilege>}
               </S.PrivilegesWrapper>
            }
         </S.Item>
         <S.Item>
            <S.Label>Created At:</S.Label>
            <S.Value>{employee.createdAt}</S.Value>
         </S.Item>
         <S.Item>
            <S.Label>Updated At:</S.Label>
            <S.Value>{employee.updatedAt}</S.Value>
         </S.Item>
         <S.Item>
            <S.Label>Account Active: </S.Label>
            <S.Value>
               {employee.active ? <S.Active active_style>Yes</S.Active> : <S.Active>No</S.Active>}
            </S.Value>
         </S.Item>
      </S.Wrapper>
   );
}
 
export default ViewData;