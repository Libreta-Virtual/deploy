// import db
import db from '../database/db.js'
// import sequelize
import { DataTypes } from 'sequelize'

const DashModel = db.define('dashbs', {
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
})

export default DashModel