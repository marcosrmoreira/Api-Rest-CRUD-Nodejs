import express, { Request, Response, NextFunction} from 'express';

const app = express();

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'Let´s rock!'});
});

app.listen(3000, () => {
    console.log("It´s running at port 3000")
});