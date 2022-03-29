const express = require("express");

const studentRoute = express.Router();
const StudentModel = require("../models/Student");

studentRoute.route("/create-student").post((req, res, next) => {
  StudentModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    }
    return res.json(data);
  });
});
studentRoute.route("/").get((req, res, next) => {
  StudentModel.find((error, data) => {
    if (error) {
      return next(error);
    }
    return res.json(data);
  });
});
studentRoute.route("/edit-student/:id").get((req, res, next) => {
  StudentModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    }
    return res.json(data);
  });
});
// Обновить
studentRoute.route("/update-student/:id").put((req, res, next) => {
  StudentModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      }
      console.log("Student successfully updated!");
      return res.json(data);
    }
  );
});
// Удалить
studentRoute.route("/delete-student/:id").delete((req, res, next) => {
  StudentModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    }
    return res.status(200).json({
      msg: data,
    });
  });
});
module.exports = studentRoute;
