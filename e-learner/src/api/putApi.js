import axios from "axios";
import { baseUrl } from "../helper/baseUrlHelper";

const putApi = async (endpoint, id, payload) => {
    try {
        const response = await axios.put(`${baseUrl}/${endpoint}/${id}`, payload);
        return response.data;
    } catch (error) {
        console.error("PUT request failed:", error);
        throw error;
    }
};

export default putApi;
