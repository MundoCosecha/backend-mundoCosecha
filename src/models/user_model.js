// import { Sequelize } from 'sequelize';
import Sequelize from 'sequelize';
import { sequelize } from '../config/database.js';

const user = sequelize.define('user',{
    user_name:{
        type:Sequelize.STRING,
        allowNull: false,
        unique:true
    },
    email: {
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    password: {
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    }
})

export default user;