import React from 'react'
import TopNav from './TopNav'
import HeaderBody from './HeaderBody'
import ScrollFadeIn from '../Animations/ScrollFadeIn'

const HeaderComponent = () => {
  return (
    <>
     <header className="min-h-screen header-body">

        <TopNav />
        <ScrollFadeIn>
          <HeaderBody />
        </ScrollFadeIn>
        
     </header>
    </>
  )
}

export default HeaderComponent