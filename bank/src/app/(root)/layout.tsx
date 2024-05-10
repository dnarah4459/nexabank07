import React from 'react'

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main>
        SIDEBAR
        {children}
    </main>
  )
}

export default RootLayout



///A layout is specfic UI that you can see among multiple pages.


