import axios from '@/config/requestConfig.js';
import {
	headerForm
} from './common.js'
export const sendLoginCode = async (phone) => {
	let data = await axios.post('user/login/' + phone)
	return data
}

export const userLogin = async (data) => {
	let result = await axios.post('user/login', data);
	return result
}
export const userLoginCode = async (data) => {
	let result = await axios.post('user/login/code', data,headerForm);
	return result
}
