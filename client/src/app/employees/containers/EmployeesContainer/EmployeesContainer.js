// import React from 'react';
// import {useDispatch} from 'react-redux';
// import {Query} from 'react-apollo';

// import { USER_EMPLOYEES_QUERY } from '../../../../graphql/employee/query';
// import thunkActions from '../../duck/thunks';

// import Employees from '../../../../components/EmployeesPage/Employees/Employees';


// const EmployeesContainer = () => {
//    const dispatch = useDispatch()

//    return (  
//       <>
//          <Query query={USER_EMPLOYEES_QUERY}>
//             {({loading, error, data}) => {
//                if(data) dispatch(thunkActions.fetchLoggedUserEmployees(data))
               
//                return (
//                   <Employees />
//                )
//             }}
//          </Query>
//       </>
//    );
// }
 
// export default EmployeesContainer;
