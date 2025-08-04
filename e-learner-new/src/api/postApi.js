import axios from "axios";
import { baseUrl } from "../helper/baseUrlHelper";

const postApi = async (endpoint, payload) => {
    try {
        const response = await axios.post(`${baseUrl}/${endpoint}`, payload);
        return response.data;
    } catch (error) {
        console.error("POST request failed:", error);
        throw error;
    }
};

export default postApi;
