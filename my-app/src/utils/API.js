import axios from "axios";

export default {
	getArticle : (query) => {
		return axios.get("api/articles", {params: { q: query}});
	}
}