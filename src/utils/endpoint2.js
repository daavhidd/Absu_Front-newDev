export const BASE_URL = "http://localhost:8181/api"


export const getAllPostsAPI = () => {
    fetch(BASE_URL+`/posts/allPost`, {
		method: 'GET',
		// headers: {
		// 	'X-RapidAPI-Key': 'your-rapidapi-key',
		// 	'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
		// },
	})
  .then(res => {
    return res.json()
  })
  .catch((err) => {
    console.log(err)
  })
}