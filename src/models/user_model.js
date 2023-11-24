import { Sequelize } from 'sequelize';
import { sequelize } from '../config/database.js';
import { DataTypes } from 'sequelize';

export const ROLES = {
    ADMIN:'admin',
    USER:'user'
}

export const user = sequelize.define('user',{
    user_name:{
        type:Sequelize.STRING,
        allowNull: false,
        unique:true
    },
    email: {
        type:Sequelize.STRING,
        allowNull:false,
        
    },
    password: {
        type:Sequelize.STRING,
        allowNull:false,
        
    },
    role: {
        type: DataTypes.ENUM(ROLES.ADMIN, ROLES.USER),
        defaultValue: ROLES.USER
      }
    }, {
      timestamps: true
    })

    
// servicio

export async function getAllUsers (){
    return await user.findAll() ?? null
};


export async function createUser (user) {
    const hashedPassword = await hashString(user.password)
  
    return await userModel.create({...user, password: hashedPassword})

}

export async function getUserById (userId) {
    return await userModel.findByPk(userId) ?? null
}

export async function getUserByEmailAndPassword ({ email, password}) {
    const user = await userModel.findOne({ where:{email}})

    if(!user){
        return null
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!isPasswordValid){
        return null
    }

    return user
}

