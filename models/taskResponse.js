module.exports = function(sequelize, DataTypes) {
  const taskResponse = sequelize.define("taskResponse", {
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 11]
      }
    },
    taskid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 11]
      }
    },
    // taskrespid: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     validate: {
    //         len: [1, 11]
    //     }
    //     //auto increment
    // },
    taskrespnotes: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    taskrespcode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 10]
      }
    }
  });
  return taskResponse;
};
