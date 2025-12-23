import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className={`text-center  text-xs text-white bg-blue-700 p-2 border-t`}>
        &copy; {new Date().getFullYear()} SuperkayDecor. All rights reserved.
      </div>
    </div>
  )
}

export default Footer