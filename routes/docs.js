import express from "express";
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
const app = express();


const options = {
    swaggerDefinition: {
        info: {
            title: 'API',
            version: '1.0.0',
            description: 'API documentation',
        },
        host: 'localhost:5000',
        basePath: '/api/v1',
        produces: ['application/json'],
        schemes: ['http', 'https'],
        apis : ['./routes/*.js']
}};

 
const specs = swaggerJsDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));