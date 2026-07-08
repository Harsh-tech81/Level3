import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5000;
const app=express();

app.get('/', (req, res) => {
    res.send('AWS Deployment Learning Process on EC2 Instance by changing the code and pushing it to GitHub and then pulling it from EC2 Instance');
});
app.get('/about', (req, res) => {
    res.send('About Page of the AWS Learning Process and changes made in the code and pushed to GitHub and then pulled from EC2 Instance');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});