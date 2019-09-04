module.exports = function(sequelize, DataTypes) {
  var masterTask = sequelize.define("masterTask", {
    // taskid: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   autoIncrement: true
    // },
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
      allowNull: false,
      defaultValue: "Pending"
    },
    skilllevel: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    startdate: {
      type: DataTypes.DATE,
<<<<<<< HEAD
      allowNull: false,
      defaultValue: DataTypes.NOW
=======
      defaultValue: DataTypes.NOW,
      allowNull: false
>>>>>>> origin/test
    },
    enddate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  return masterTask;
};
