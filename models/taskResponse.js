module.exports = function(sequelize, DataTypes) {
  const taskResponse = sequelize.define("taskResponse", {
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    taskid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // taskrespid: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    //     //auto increment
    // },
    taskrespnotes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    taskrespcode: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return taskResponse;
};
