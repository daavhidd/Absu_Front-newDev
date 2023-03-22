import axios from "axios";
import { notify, objectToHTTPQuery } from "./helpers";
import { getUserToken, logOutUser, rememberRoute } from "./auth";

let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":"*"
    //token: localStorage.getItem("token"),
};
const username  = "miracle.godspeed"
const password  = "abia@2022webd"
let fileHeaders = {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
    // token: localStorage.getItem("token"),
    Authorization: "Basic " + Buffer.from(`${username}:${password}`).toString("base64")
};

export const baseContentURL = "https://belearnng.lloydant.com/api";

const Endpoint = {
    init: () => {
        // accountId = process.env.REACT_APPg5b657_ACCOUNT_ID;
        let token = getUserToken();
        //if(token) axios.defaults.headers.common["Authorization"] = token
        //axios.defaults.baseURL = "https://c4-na.altogic.com/e:6373addaea9f94c58832bfbe";
        axios.defaults.baseURL = "https://backendapi.swaggercorridor.online/api/";
        
        //axios.defaults.baseURL = "http://localhost:8181/api/";
        // Intercept 401 HTTP Error code in API
        //https://uchendiabia.herokuapp.com/api/Home/GetNews
    },

    // ---Auth--- //
    // login: (data) => {
    //     return axios.post(`/User/Authenticate`, data, headers);
    // },

    //posts
    getAllPost: () => {
        return axios.get(`/posts/allPost`, headers);
    },

    registerUser: (data) => {
        return axios.post(`/Home/CreatePerson`, data, fileHeaders);
    },
    authenticateUser: (data) => {
        return axios.post(`/user/authenticateUser`,data, headers);
    },
    postContactUs: (data) => {
        return axios.post(`/Home/CreateContactUs`, data, headers);
    },
    
    // ---Institution Details--- //
    getAllLgas: () => {
        return axios.get(`/Home/AllLga`, headers);
    },

    getNewsAndMedia: () => {
        return axios.get(`/Home/GetNews`, headers);
    },
    getMediaLinks: () => {
        return axios.get(`/Home/GetAllMedia`, headers);
    },
    getAllPerson: () => {
        return axios.get(`/Home/GetAllPersons`, headers);
    },

    getPersonByLGA: (data) => {
        return axios.get(`/Home/GetAllPersonsByLga?Lga=${data}`, headers);
    },
    getPersonByFormType: (data) => {
        return axios.get(`/Home/GetAllPersonsByFormType?FormType=${data}`, headers);
    },
    getPersonByGender: (data) => {
        return axios.get(`Home/GetAllPersonsGender?Gender=${data}`, headers);
    },
    getPersonByPVC: (data) => {
        return axios.get(`/Home/GetAllPersonsByHasPvc?Response=${data}`, headers);
    },
    getStats: (data) => {
        return axios.get(`/Home/Repoorts`, headers);
    },

    postSaveNews: (data) => {
        return axios.post(`/Home/CreateNews`, data, fileHeaders);
    },
    
    getYouthWingByLga: (data) => {
        return axios.get(`/Home/GetYouthWingByLga?Lga=${data}`, headers);
    },
    getAllYouthWing: (data) => {
        return axios.get(`/Home/GetYouthWing`, headers);
    },
   
    postYouthWing: (data) => {
        return axios.post(`/Home/CreateYouthWing`,data, headers);
    },
    postCodeNumber: (data) => {
        return axios.get(`Home/GetStaffByCodeNumber?CodeNumber=${data}`, headers);
    },
    
    postStaffDetails: (data) => {
        return axios.post(`/Home/CreateStaff`,data, fileHeaders);
    },

    postCreateStaff: (data) => {
        return axios.post(`/Staff`,data, fileHeaders);
    },
    getStaff: (data) => {
        return axios.get(`/Staff`,data, fileHeaders);
    },
    postCreateAdmin: (data) => {
        return axios.post(`/Users`,data, fileHeaders);
    },
    getPosts: (data) => {
        return axios.get(`/posts`,data, fileHeaders);
    },
    createPost: (data) => {
        return axios.post(`/posts/addPost`,data, headers);
    },

    getWpCategories: () => {
        return axios.get(`/posts?categories=49`, fileHeaders);
    },

    getAllPosts: () => {
        return axios.get(`/ContentPosts`, headers);
    },
    editPost: (id, data) => {
        return axios.put(`/ContentPosts/${id}`,data, headers);
    },
    deletePost: (id) => {
        return axios.delete(`/posts/${id}`, headers);
    },
};

export default Endpoint;