const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE)

const { User } = require('./models/user');
const { Recipe } = require('./models/recipes');

app.use(bodyParser.json());
app.use(cookieParser());

// GET //

app.get('/api/getRecipe', (req,res)=>{
    let id =req.query.id;

    Recipe.findbyId(id, (err, doc)=> {
        if(err) return res.status(400).send(err);
        res.send(doc)
    })
})

app.get('/api/recipes',(req, res)=> {
    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.limit);
    let order = req.query.order;

    Recipe.find().skip(skip).sort({_id:order}).limit(limit).exec((err,doc)=> {
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})

// POST //

app.post('/api/recipe', (req,res) => {
    const recipe = new Recipe(req.body)

    recipe.save((err,doc)=> {
        if (err) return res.status(400).send(err);
        res.status(200).json({
            post:true,
            recipeId:doc._id
        })
    })
})

// UPDATE //
app.post('/api/recipe_update', (req,res)=>{
    Recipe.findByIdAndUpdate(req.body._id, req.body, {new:true},(err,doc)=> {
        if (err) return res.status(400).send(err); 
            res.json({
                success:true,
                doc
        })
    })
})

// DELETE //

app.delete('/api/delete_recipe', (req, res)=>{
    let id = req.query.id;

    Recipe.findByIdAndRemove(id,(err, doc)=> {
        if(err) return res.status(400).send(err);
        res.json(true)
    })
})

const port = process.env.PORT || 3001;
app.listen(port,()=> {
    console.log(`Server is Running`)
})
