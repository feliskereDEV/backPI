import axios from ("axios")
const apiKey = "key=3fd86bfcbc28470abf3860189f3f7384";
const getName = async (name) =>{
    const nameRequest = await axios.get(`https://api.rawg.io/api/games?search=${name}&${apiKey}`)

    try {
       const search = await nameRequest.data.results.map(el => {
        return {
            id: el.id,
            name: el.name,
            image: el.background_image,
            rating: el.rating,
            platforms: el.platforms?.map(el => el.platform.name),
            genres: el.genres?.map(el => el.name)

        }
       })
       return search
    } catch (error) {
        console.error("Hay un error en getName")
    }
}


module.exports = getName;