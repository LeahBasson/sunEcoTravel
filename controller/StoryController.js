import express from 'express'
import bodyParser from 'body-parser'
import { stories } from '../model/index.js' 

const storyRouter = express.Router()

storyRouter.use(bodyParser.json())

storyRouter.get('/', (req, res) => {  
    stories.fetchStories(req, res) 
})

storyRouter.post('/addStory', (req, res) => {
    stories.addStory(req, res)
})

storyRouter.delete('/:id', (req, res) => { 
    stories.deleteStory(req, res)
})

export {
    express,
    storyRouter
}