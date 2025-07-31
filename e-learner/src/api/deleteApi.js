import axios from "axios";
import { baseUrl } from "../helper/baseUrlHelper";

const deleteApi = async (endpoint, id) => {
    try {
        const response = await axios.delete(`${baseUrl}/${endpoint}/${id}`);
        return response.data;
    } catch (error) {
        console.error("DELETE request failed:", error);
        throw error;
    }
};

export default deleteApi;
