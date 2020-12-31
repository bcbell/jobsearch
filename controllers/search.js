const axios = require('axios')

module.exports={
    index, 
    jobQuery,
    jobs
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

function jobs(req, res){
    axios.get(`https://jobs.github.com/positions.json?page=1`)
    .then((response)=>{
        res.render('alljobs',{title: 'All Jobs', position: response.data})
    })
}
