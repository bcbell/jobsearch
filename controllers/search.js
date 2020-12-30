const axios = require('axios')

module.exports={
    index, 
    jobQuery
}

function index(req, res){
        res.render('cover',{title: 'The Job Buzz', position : null})
}

function jobQuery(req, res){
    axios.get(`https://jobs.github.com/positions.json?description=${req.body.description}&full_time=false&location=${req.body.location}`)
    .then((response)=>{
        res.render('results', {title: "The Job Buzz ", position: response.data})
})
}