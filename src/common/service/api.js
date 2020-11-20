import axios from 'axios'

export const api = axios.create({
  baseURL: "https://private-d1e861-zakyapp.apiary-mock.com/api/v1",
  headers: {
    'Access-Control-Allow-Origin': "http://localhost:3000/",
    'Access-Control-Allow-Headers': "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    'Content-Type': 'application/json',
    'Accept': '*/*'
  }
})