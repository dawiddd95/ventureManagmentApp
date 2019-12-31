import React from 'react'
import FetchError from '../components/shared/FetchError/FetchError';

export default (WrappedComponent) => {
   const withHandleError = ({ error, ...props }) => {
      if (error) return <FetchError />;

      return <WrappedComponent {...props} />
   }

   withHandleError.displayName = `withHandleError(${WrappedComponent.displayName || WrappedComponent.name})`

   return withHandleError
}