import { DataTypes } from 'sequelize';
import sequelize from './connection';

const Info = sequelize.define('info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    lat: { type: DataTypes.FLOAT, allowNull: false},
    lon: { type: DataTypes.FLOAT, allowNull: false},
    exclude: { type: DataTypes.STRING, allowNull: false},
    sunrise: { type: DataTypes.INTEGER, allowNull: false},
    sunset: { type: DataTypes.INTEGER, allowNull: false},
    temp: { type: DataTypes.FLOAT, allowNull: false},
    feels_like: { type: DataTypes.FLOAT, allowNull: false},
    pressure: { type: DataTypes.INTEGER, allowNull: false},
    humidity: { type: DataTypes.INTEGER, allowNull: false},
    uvi: { type: DataTypes.FLOAT, allowNull: false},
    wind_speed: { type: DataTypes.FLOAT, allowNull: false}
});

export {
    sequelize,
    Info
}