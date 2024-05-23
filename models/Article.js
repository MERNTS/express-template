const mongoose = require('mongoose');
mongoose.set('strictQuery', false)


const ArticleSchema =  mongoose.Schema({
    uid:{type:String,required: true},
    cid:{type:String,required: true},
    content:{type:String,required: true},
}, {timestamps: true});

// ArticleSchema.set('toJSON', {
//     transform: (document, returnedObject) => {
//         returnedObject.id = returnedObject._id.toString()
//         delete returnedObject._id
//         delete returnedObject.__v
//     }
// })


const Article = mongoose.model("Article", ArticleSchema)

module.exports = Article