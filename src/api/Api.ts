import axios from "axios";

const BASE_URL = "https://api.thedogapi.com/v1";
const API_KEY =
  "live_kqPVIYl3lkt4VCGl0iR2wNcG6XAZWZSbElbYwNZ0koO0l6vBAt4PuNlZfBOprs2W";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-api-key": API_KEY,
  },
});
