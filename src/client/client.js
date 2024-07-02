import axios from 'axios';

const API_version = "/api/v1"

const fetchGetData = (uri) => {
  const url = `${API_version}${uri}`;
  return axios.get(url)
    .catch(error => {
      // Handle exceptions/errors
      console.error('Error fetching data for URL:', url, 'Error', error.message);
      // You can throw the error again if you want to handle it elsewhere
      throw error;
    });
};

const fetchPostData = (uri, payload) => {
  const url = `${API_version}${uri}`;
  return axios.post(url, payload)
    .catch(error => {
      // Handle exceptions/errors
      console.error('Error fetching data for URL:', url, 'Error', error.message);
      // You can throw the error again if you want to handle it elsewhere
      throw error;
    });
};

const fetchPostDataWithAuth = (uri, payload) => {
  const token = localStorage.getItem('token');
  const url = `${API_version}${uri}`;
  return axios.post(url, payload, {headers: {
    "accept": "*/*",
    "Content-Type": "application/json",
     "Authorization": `Bearer ${token}`,
  },
})
    .catch(error => {
      // Handle exceptions/errors
      console.error('Error fetching data for URL:', url, 'Error', error.message);
      // You can throw the error again if you want to handle it elsewhere
      throw error;
    });
};

const fetchPutDataWithAuth = (uri, payload) => {
  const token = localStorage.getItem('token');
  const url = `${API_version}${uri}`;
  return axios.put(url, payload, {headers: {
    "accept": "*/*",
    "Content-Type": "application/json",
     "Authorization": `Bearer ${token}`,
  },
})
    .catch(error => {
      // Handle exceptions/errors
      console.error('Error fetching data for URL:', url, 'Error', error.message);
      // You can throw the error again if you want to handle it elsewhere
      throw error;
    });
};

const fetchGetDataWithAuth = async (uri) => {
  
  const token = localStorage.getItem('token');
  const url = `${API_version}${uri}`;
    try {
      const response = await axios.get(url,{headers: 
                                                    { "Authorization": `Bearer ${token}`,
                                            }}
                                      );
      return response;
    } catch (error) {
      // Handle errors if the request fails
      console.error('Error fetching data:', error);
    }
  };


  const fetchPostFileUploadWithAuth = async (uri, formData) => {
  
    const token = localStorage.getItem('token');
    const url = `${API_version}${uri}`;
      try {
        const response = await axios.post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            "Authorization": `Bearer ${token}`,
          },
        });
        return response;
      } catch (error) {
        // Handle errors if the request fails
        console.error('Error fetching data:', error);
      }
    };

    const fetchGetDataWithAuthArrayBuffer = (uri) => {
  
      const token = localStorage.getItem('token');
      const url = `${API_version}${uri}`;
        try {
          const response =  axios.get(url, {
                            headers: {
                                          Authorization: `Bearer ${token}`,
                                      },
                                          responseType: 'arraybuffer'
                            })
          return response;
        } catch (error) {
          // Handle errors if the request fails
          console.error('Error fetching data:', error);
        }
      };


      const fetchDeleteDataWithAuth = async (uri) => {
  
        const token = localStorage.getItem('token');
        const url = `${API_version}${uri}`;
          try {
            const response = await axios.delete(url,{headers: 
                                                          { "Authorization": `Bearer ${token}`,
                                                  }}
                                            );
            return response;
          } catch (error) {
            // Handle errors if the request fails
            console.error('Error fetching data:', error);
          }
        };

        const fetchGetBlobDataWithAuth = async (uri) => {
          const token = localStorage.getItem('token');
          const url = `${API_version}${uri}`;
        
          try {
            const response = await axios.get(url, {
              headers: {
                "Authorization": `Bearer ${token}`,
              },
              responseType: 'blob' // Add the responseType option here
            });
            return response;
          } catch (error) {
            // Handle errors if the request fails
            console.error('Error fetching data:', error);
          }
        };


  
export default fetchGetData;
export { fetchPostData, fetchPostDataWithAuth, fetchGetDataWithAuth, fetchPostFileUploadWithAuth,
   fetchGetDataWithAuthArrayBuffer, fetchPutDataWithAuth, fetchDeleteDataWithAuth, fetchGetBlobDataWithAuth };