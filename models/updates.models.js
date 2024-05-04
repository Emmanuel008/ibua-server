module.exports = (sequelize, DataTypes) => {
    const Update = sequelize.define("update",{
        update_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        update_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        update_description:{
            type: DataTypes.STRING,
            allowNull: false
        },
        update_link: {
            type: DataTypes.STRING,
            allowNull: true,
        }, 
        update_image_path: { // Add a field for storing file path
            type: DataTypes.STRING
        }
    })
    return Update;
}
