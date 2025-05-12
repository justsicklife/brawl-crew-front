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

export const fetchSavePost = async (): Promise<String> => {
  
  const response = await axios(`${BASE_URL}${requsts.savePosts}`)
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