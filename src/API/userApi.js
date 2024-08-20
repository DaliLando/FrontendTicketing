import axios from 'axios';
import { getLocalStorage } from '../helpers/localStorage';

export const getUserProfile = async () => {
    let token = getLocalStorage("token")

    let { data } = await axios.get(`${process.env.REACT_APP_URI}/user/profile`, {headers:{"Authorization":token}});
    return data;
};

export const updateUserProfile = async (user) => {
    let token = getLocalStorage("token")
    let { data } = await axios.put(`${process.env.REACT_APP_URI}/user/profile`, user, {headers:{"Authorization":token}
        
    });
    return data;
};

export const updateUserPassword = async (password) => {
    let token = getLocalStorage("token")
    let { data } = await axios.put(`${process.env.REACT_APP_URI}/auth/password`, { password }, {headers:{"Authorization":token}
    });
    return data;
};
