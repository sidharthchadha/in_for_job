module.exports = (sequelize, DataTypes) => {
  const candidates = sequelize.define("candidates", {
    commentBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return candidates;
};
