import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-clone-b1a25.cloudfunctions.net/api'
    // "http://localhost:5001/clone-b1a25/us-central1/api",
});

export default instance;

//https://us-central1-clone-b1a25.cloudfunctions.net/api

//https://us-central1-clone-b1a25.cloudfunctions.net/api