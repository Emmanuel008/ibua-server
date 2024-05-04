module.exports = (sequelize, DataTypes) => {
    const Testimony = sequelize.define("testimony", {
        testimony_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        testimony_content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        testimony_author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author_postion:{
            type:DataTypes.STRING,
            allowNull: false
        },
        image_path: { // Add a field for storing file path
            type: DataTypes.STRING
        }
    })
    return Testimony;
}
