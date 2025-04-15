import React from 'react'
import Header from './Header'
import Footer from './Footer';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout