//create database
use ZenClass



//1, Find all the topics and tasks which are thought in the month of October

db.topic.find({
  date: { $gt: new Date("2023-10-1"), $lt: new Date("2023-11-1") },
});

//2, Find all the company drives which appeared between 15 oct-2023 and 31-oct-2023

db.company_drives.find({
  date: { $gt: new Date("2023-10-15"), $lt: new Date("2023-10-31") },
});

//3, Find all the company drives and students who are appeared for the placement.

db.company_drives.find().forEach(function (value) {
  print("company Name : " + value.companyName);
  print("student Appeared : " + value.students_appeared);
});

//4, Find the number of problems solved by the user in codekata

db.codekata.find().forEach(function (value) {
  print("Name : " + value.name);
  print("Problem Solved : " + value.ProblemSolved + " out of 100 problem");
});

//5, Find all the mentors with who has the mentee's count more than 15

db.mentors.find({ menteeCount: { $gt: 15 } });

//6, Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.users.aggregate([
    {
      $lookup: {
        from: "attendance",
        localField: "id",
        foreignField: "id",
        as: "attendance",
      },
    },
    {
      $lookup: {
        from: "task",
        localField: "id",
        foreignField: "id",
        as: "task-comp",
      },
    },
    {
      $match: {
        $and: [
          {
            "attendance.attendance": false,
            "attendance.Class_date": {
              $gte: ISODate("2023-10-15"),
              $lte: ISODate("2023-10-31"),
            },
          },
          { "task.task_completion": false },
        ],
      },
    },
  ]);
  