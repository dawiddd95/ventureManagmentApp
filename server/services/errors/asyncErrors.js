const catchAsyncError = (asyncFunction) => {
   return (req, res, next) => asyncFunction(req, res, next).catch(err => next(err))
}

module.exports = catchAsyncError