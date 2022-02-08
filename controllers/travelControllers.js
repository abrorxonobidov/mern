const Travel = require('../models/Travel.model')


// GET
const getAllTravels = async (req, res) => {

    try {
        const travels = await Travel.find()

        return res.status(200).json({
            message: 'Success',
            travels: travels
        })

    } catch (error) {
        res.send(error)
    }

}

// GET
const getTravelById = async (req, res) => {

    try {
        const travel = await Travel.findById(req.params.id)
        if(!travel) {
            return res.status(404).json({
                message: 'Not found',
            })
        }
        return res.status(200).json({
            message: 'Success',
            travel
        })

    } catch (error) {
        res.send(error)
    }

}

// POST
const addTravelBook = async (req, res) => {

    try {
        
        const {title, image, description} = req.body

        const newTravel = await Travel.create({
            title,
            image,
            description
        })

        return res.status(201).json({
            message:'Success',
            newTravel
        })

    } catch (error) {
        console.log(error);
        res.send(error)
    }

}

// PUT
const updateTravelBook = async (req, res) => {

    try {
        
        const {title, image, description} = req.body

        const updatedTravel = await Travel.findByIdAndUpdate(req.params.id, {
            title,
            image,
            description
        }, {new: true})

        return res.status(200).json({
            message:'Success',
            updatedTravel
        })

    } catch (error) {
        console.log(error);
        res.send(error)
    }

}


// DELETE
const removeTravelBook = async (req, res) => {
    try {
        const {title, image, description} = req.body
        await Travel.findByIdAndRemove(req.params.id)
        return res.status(200).json({
            message:'Deleted'
        })
    } catch (error) {
        console.log(error);
        res.send(error)
    }

}

module.exports = {getAllTravels, getTravelById, addTravelBook, updateTravelBook, removeTravelBook}