import { API_URL } from "@env";
import axios from "axios";

   export  const instance = axios.create({
      baseURL:API_URL,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
        accept: '*/*',
      },
    });
