const getIdApi = require ("../controllers/getIdApi")
const getIdDb = require ("../controllers/getIdDb")
const apiAndDbId = async (id)=>{
    const dbId = includes("-")
    if (dbId){
        const gameDb = await getIdDb(id)
        return gameDb
    } else{
        const gameApi = await getIdApi(id)
        return gameApi
    }
}

module.exports = apiAndDbId;