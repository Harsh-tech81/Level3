import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5000;
const app=express();

app.get('/', (req, res) => {
    res.send('AWS Deployment Learning Implement CI/CD pipeline with GitHub Actions and AWS Elastic Beanstalk');
});
app.get('/about', (req, res) => {
    res.send('About Page of the AWS Deployment Learning ci/cd');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});