import Axios from "axios";

export const getProducts = async (page = 0, size = 10) => {
    const url = process.env.REACT_APP_BASE_URL+'/products?page='+page+"&size="+size;
    const resp = await Axios.get(url);
    return resp.data;
}
