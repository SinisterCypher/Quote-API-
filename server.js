const express = require('express');
const app = express();
const TimeStamp = new Date()

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res, next)=>{
    const quote = getRandomElement(quotes); 
    res.send({quote})
})

// /api/quotes?person=Grace Hopper 

app.get('/api/quotes', (req, res, next)=>{
    const P = req.query.person
    if(P){
        const resQuote =(quotes.filter((elem,index,quotes)=> elem.person === P))
        res.send({quotes: resQuote})
    }
    
    else{
        res.send({quotes})
    }
}); 

app.post('/api/quotes', (req, res, next)=>{
            const newQuote = req.query.quote
            const newPerson = req.query.person
            if(newQuote && newPerson){
                quotes.push({quote: newQuote, 
                person: newPerson,date:TimeStamp})
           
                // const lastelem = quotes.pop()
                res.send({quote: quotes[quotes.length-1]})

            }
            else{
                // Bad syntax response code : 400 
                res.status(400).send("Bad Syntax"); 
            }

})

app.put('/api/quotes/:id', (req, res, next)=>{
    const {id} = req.params
    const {quote, person} = req.query
    // find the index of that quoteID in the real array, 
    const index = quotes.findIndex((elem, index, quotes)=>{
        return elem.id === Number(id)
    })
    if(index !== -1){
            // update that index with new qoute and person 
        quotes[index].quote = quote
        quotes[index].date =  TimeStamp
        if(person){

            quotes[index].person = person
        }
        else{
            quotes[index].person = "ANONYNOMOUS"

        }
        const objtosend = quotes[index]
        res.send({objtosend})
        

    }
    
})

app.delete('/api/quotes/:id', (req, res, next)=>{
    const {id} = req.params
    const index = quotes.findIndex((elem, index, quotes)=>{
        return elem.id === Number(id)}); 
    
        const rmvelem = quotes.splice(index,1)
        res.send(rmvelem)

    })
app.listen(PORT, ()=>{
    console.log('Server is listening on ', PORT)
})

