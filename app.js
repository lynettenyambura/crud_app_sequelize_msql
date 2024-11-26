const sequelize = require('./config/database');
const User = require('./models/User');
const express = require('express');
//const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');  
const app = express();
app.use(express.json());

//connect to database
sequelize.authenticate()
    .then(() => console.log('Database connected!'))
    .catch(err => console.error('Connection error:', err));
//sync models with database
    sequelize.sync({ force: false }) 
        .then(() => console.log('Database synced!'))
        .catch(err => console.error('Sync error:', err));
        //routes
        app.use('/api', userRoutes);
        //start server
        const PORT = 3000;
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    