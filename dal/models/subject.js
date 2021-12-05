"use strict";
module.exports = (sequelize, DataTypes) => {
    const Subject = sequelize.define(
        "Subject",
        {
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            status: DataTypes.STRING
        },
    );
    Subject.associate = function (models) {
        Subject.hasMany(models.LearningPath, {
            foreignKey: "subjectId",
            as: "learningPaths"
        });
    };
    return Subject;
};