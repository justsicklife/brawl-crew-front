import axios from "axios";
import { PostDTO } from "../model/PostWithUserDTO";

const BASE_URL = "http://localhost:8080";

const requsts = {
  getPosts: "/posts",
  savePosts: "/post"
}

export const fetchPostsWithUser  = async (): Promise<PostDTO[]> => {
  const response = await axios(`${BASE_URL}${requsts.getPosts}`);
  return response.data;
};