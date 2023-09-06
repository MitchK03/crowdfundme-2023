const router = require('express').Router()

router.get('/', (req,res) => {
    res.send('Hellow Crowdfund')
})

module.exports = router