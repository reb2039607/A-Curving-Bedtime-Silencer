module.exports = function(sequelize, DataTypes) {
  var masterTask = sequelize.define("masterTask", {
    taskid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    taskduration: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rewardpoints: {
      type: DataTypes.STRING,
      allowNull: false
    },
    skillsrequired: {
      type: DataTypes.STRING,
      allowNull: false
    },
    taskstatus: {
      type: DataTypes.STRING,
      allowNull: false
    },
    skilllevel: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userid: {
      type: DataTypes.INETGER,
      allowNull: false
    },
    startdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    enddate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  return masterTask;
};
