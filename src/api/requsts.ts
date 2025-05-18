import axios from "axios";
import { LoginDTO, PostDTO, UserDTO } from "../model/PostWithUserDTO";

const BASE_URL = "http://localhost:8080";

const requsts = {
  getPosts: "/posts",
  savePosts: "/post",
  register: "/register",
  login: "/login"
}

export const fetchPostsWithUser  = async (): Promise<PostDTO[]> => {
  const response = await axios(`${BASE_URL}${requsts.getPosts}`);
  return response.data;
};

export const fetchSavePost = async (memo:String): Promise<String> => {
  const jwt: String = localStorage.getItem("jwt") ?? "";

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Accept":"application/json",
      "Content-Type" : "application/json",
      "Authorization" : `Bearer ${jwt}`,
    },
    responseType:"json"
  });

  const response = await axiosInstance.post(requsts.savePosts,{memo:memo});
  return response.data;
}

export const fetchRegister = async (req:UserDTO): Promise<String> => {
  console.log(req);
  const response = await axios.post(`${BASE_URL}${requsts.register}`,req);
  return response.data;
}

export const fetchLogin = async (req:LoginDTO) : Promise<any> => {
  const response = await axios.post(`${BASE_URL}${requsts.login}`,req);
  return response.data;
}