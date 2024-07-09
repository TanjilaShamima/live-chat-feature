const router = require('express').Router();

router.get('/', (req: any, res: any) => {
    res.send('Hello, TypeScript with Express!');
});

module.exports = router;