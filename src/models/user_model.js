// import { Sequelize } from 'sequelize';
import Sequelize from 'sequelize';
import { sequelize } from '../config/database.js';

export const user = sequelize.define('user',{
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
    },
    // role: {
    //     type: DataTypes.ENUM(ROLES.ADMIN, ROLES.USER),
    //     defaultValue: ROLES.ADMIN
    //   }
    }, {
      timestamps: true
    })
    
// servicio

// export async function getAllUsers (){
//     return await user.findAll() ?? null
// };

export async function getUserById (user) {
    const hashedPassword = await hasgString(user.password)
};

