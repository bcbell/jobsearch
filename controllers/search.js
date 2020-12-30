const axios = require('axios')

module.exports={
    index, 
    jobQuery
}

function index(req, res){
        res.render('cover',{title: 'The Job Buzz', position : null})
}

function jobQuery(req, res){
    axios.get(`https://jobs.github.com/positions.json?page=1&${req.body.query}`)
    .then((response)=>{
        res.render('cover', {title: "The Job Buzz ", position: response.data})
})
}