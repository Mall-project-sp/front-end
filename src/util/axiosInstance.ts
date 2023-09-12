import axios from 'axios';

// Axios 클라이언트 생성
const axiosClient = axios.create({
	baseURL: 'http://15.164.128.162:8080/', // API의 기본 URL을 여기에 설정
});

// 요청 인터셉터 설정
axiosClient.interceptors.request.use(
	config => {
		const token = localStorage.getItem('access-token');
		if (token) {
			config.headers['ACCESS-TOKEN'] = `Bearer ${token}`;
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

// 나중에 axiosClient를 사용하여 HTTP 요청을 보낼 수 있습니다.
export default axiosClient;