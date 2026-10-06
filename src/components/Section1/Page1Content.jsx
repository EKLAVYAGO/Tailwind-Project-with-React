import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'


const Page1Content = () => {
  return (
    <div className="py-4 px-18 bg-white flex justify-between items-center h-full gap-4">
    <LeftContent />
    <RightContent />

    </div>
  )
}

export default Page1Content