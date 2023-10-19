// const {Videogame, Genre} = require("../db")

// const getIdDb = async (id) =>{
//     try {
//         return await Videogame.findByPk(id,{
//             include: [{
//                 model: Genre,
//                 attributes: ["name"],
//                 through:{
//                     attributes: []
//                 }
//             }]
//         })
//     } catch (error) {
//         console.error("Hubo un error en getInDb")
//     }
// }


// module.exports = getIdDb;