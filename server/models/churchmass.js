module.exports = (sequelize, DataTypes) => {
  const ChurchMass = sequelize.define("churchmass", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    mass_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return ChurchMass;
};
