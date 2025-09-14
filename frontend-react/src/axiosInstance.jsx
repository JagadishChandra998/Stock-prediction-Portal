import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_BASE_API

const axiosInstance = axios.create(
    {
        baseURL: baseURL,
        headers:{
            'Content-Type': 'application/json',
        }

    }
)

// Request intercepter
axiosInstance.interceptors.request.use(
    // config is the object that contains the request information
    function (config){                        
        const accessToken = localStorage.getItem('accessToken');

        if(accessToken){
            config.headers['Authorization'] =`Bearer ${accessToken}`
        }
        console.log ("request with header",config);
        return config;
    },
    function (error){
        return Promise.reject(error);
        
    }
)

// Response intercepter
axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    // if we get 401 error, we can try to refresh the token here
    async function (error){
       const originalRequest =error.config;
        if (error.response.status === 401 && !originalRequest.retry){
            originalRequest.retry =true;
            const refreshToken =localStorage.getItem('refreshToken');
            try{
                const response =await axiosInstance.post('token/refresh/',{refresh: refreshToken});
                localStorage.setItem('accessToken', response.data.access)
                originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`
                return axiosInstance (originalRequest);
            }catch(error){
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
            }
        }
        return Promise.reject(error);
    }
)

export default axiosInstance;

