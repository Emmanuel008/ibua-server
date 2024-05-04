module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("image", {
        image_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        image_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image_path: { // Add a field for storing file path
            type: DataTypes.STRING
        }
    });
    return Image;
}
