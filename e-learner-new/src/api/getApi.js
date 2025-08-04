import axios from "axios";
import { baseUrl } from "../helper/baseUrlHelper";

const getApi = async (endpoint) => {
    try {
        const response = await axios.get(`${baseUrl}/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error("GET request failed:", error);
        throw error;
    }
};

export default getApi;
