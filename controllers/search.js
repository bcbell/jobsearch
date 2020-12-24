const Job = require('../models/search')

module.exports={
    index
}

function index(req, res){
    Job.find({})
    .then((searches)=>{
        res.render('cover',{title: 'The Job Buzz', searches : searches})
    })

}