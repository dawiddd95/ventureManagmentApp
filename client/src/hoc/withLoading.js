import React from 'react'
import LoadingSpinner from '../components/shared/LoadingSpinner/LoadingSpinner';

export default (WrappedComponent) => {
   const withLoading = ({ loading, ...props }) => {
      if (loading) return <LoadingSpinner />;

      return <WrappedComponent {...props} />
   }

   withLoading.displayName = `withLoading(${WrappedComponent.displayName || WrappedComponent.name})`

   return withLoading
}