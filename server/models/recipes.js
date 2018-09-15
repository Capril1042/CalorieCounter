const mongoose =require ('mongoose');

const recipeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ingredients :{
        type:String,
        required:true
    },
    directions:{
        type:String,
        required:true
    },
    ownerId:{
        type:String,
        required:true
    }
    
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = { Recipe }