import React from 'react';

const DropboxLogin = () => {
  const CLIENT_ID = '14i6v606va9wxvl';  // Dropbox App Key
  const REDIRECT_URI = 'http://localhost:3000/oauth/callback';  // Redirect URI

  const handleLogin = () => {
    // Redirect user to Dropbox OAuth URL
    window.location.href = `https://www.dropbox.com/oauth2/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`;
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <button
        onClick={handleLogin}
        className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
      >
        Login with Dropbox
      </button>
    </div>
  );
};

export default DropboxLogin;
