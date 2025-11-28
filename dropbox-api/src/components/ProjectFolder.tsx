import { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectFolder = () => {
  const [folders, setFolders] = useState([]);
  const accessToken = localStorage.getItem('dropbox_access_token');

  useEffect(() => {
    if (accessToken) {
      // Fetch folders from Dropbox
      axios.post('https://api.dropboxapi.com/2/files/list_folder', {
        path: '',
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        setFolders(response.data.entries);
      })
      .catch(error => {
        console.error('Error fetching folders', error);
      });
    }
  }, [accessToken]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Project Folders</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {folders.map((folder, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">{folder.name}</h3>
            <p className="text-sm text-gray-500">{folder.path_display}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectFolder;
