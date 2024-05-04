module.exports = (sequelize, DataTypes) => {
    const FAQ = sequelize.define("faq", {
        faq_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        faq_question: {
            type: DataTypes.STRING,
            allowNull: false
        },
        faq_answer: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return FAQ;
}
