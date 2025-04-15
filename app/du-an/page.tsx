import React from 'react'

function page() {
  return (
    <div>
      <div style={{ width: '100%', height: '100vh' }}>
        <iframe
          src="/source/index.htm"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default page