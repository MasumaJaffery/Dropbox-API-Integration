import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const OAuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (!code) {
      console.error('Authorization code missing from URL');
      return;
    }

    const CLIENT_ID = '';         
    const CLIENT_SECRET = '';    
    const REDIRECT_URI = 'http://localhost:5173/oauth/callback';

    const body = new URLSearchParams({
      code,
      grant_type: 'authorization_code',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
    });

    axios
      .post('https://api.dropboxapi.com/oauth2/token', body, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((response) => {
        console.log('Token response:', response.data);
        const { access_token } = response.data;

        if (!access_token) {
          console.error('No access_token in response');
          return;
        }

        localStorage.setItem('dropbox_access_token', access_token);

        navigate('/project');
      })
      .catch((error) => {
        console.error('Error getting access token', error.response || error);
      });
  }, [navigate]);

  return (
    <div style={{ padding: '20px' }}>
      Dropbox Connecting... please wait.
    </div>
  );
};

export default OAuthCallback;
