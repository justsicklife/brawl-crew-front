  type MostBrawlers = {
    firstBrawler: string;
    firstTrophy: number;
    secondBrawler: string;
    secondTrophy: number;
    thirdBrawler: string;
    thirdTrophy: number;
  }
  
  export type PostDTO = {
    postId: number;
    memo: string;
    createDate: string; // ISO 날짜 형식 문자열
    userId: number;
    user : UserDTO;
    mostBrawlers: MostBrawlers;
  }

  export type UserDTO = {
    userEmail: string,
    userPassword:string,
    playerTag: string;
    name: string;
    trophies: number;
    ageGroup: string;
    sex : string;
  }

  export type LoginDTO = {
    userEmail: string,
    userPassword:string,
  }