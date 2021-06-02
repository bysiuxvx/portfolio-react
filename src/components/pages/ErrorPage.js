import React from 'react';

function ErrorPage() {
  return (
    <div
      className="error"
      style={{
        backgroundColor: '#1f1f1f',
        color: 'white',
        textAlign: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <h1 style={{ fontSize: 50 }}>Err0r!</h1>
      <p style={{ fontSize: 35, marginBottom: 200 }}>
        This page doesn't exist!
      </p>
    </div>
  );
}

export default ErrorPage;
