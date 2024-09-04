const express = require("express");
const { Op } = require("sequelize");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { students } = require("../../db/models");

// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// ==================TEST ROUTES===============================================

router.get("/hello/world", function (req, res) {
  res.cookie("XSRF-TOKEN", req.csrfToken());
  res.send("Hello world from route api/students/hello/world!");
});

// ==================HELPER FUNCTIONS==========================================

const pagination = (reqQuery) => {
  let { size, page } = req.query;

  if (!page) page = 1;
  if (!size) size = 10;

  if (page < 1 || isNaN(page)) page = 1;
  if (size < 1 || isNaN(size)) size = 10;

  if (size > 10) size = 10;

  const pagination = {};

  if (size > 0 && page > 0) {
    pagination.limit = parseInt(size);
    pagination.offset = parseInt(size) * parseInt(page - 1);
  }

  return pagination;
};

// ==================GET ALL STUDENTS==============================
router.get("/", requireAuth, async (req, res, next) => {
  let students = await students.findAll({
    attributes: [
      "id",
      "householdId",
      "headOfHousehold",
      "accesslevelId",
      "firstName",
      "nickName",
      "middleName",
      "lastName",
      "familyName",
      "phone",
      "email",
      "street",
      "city",
      "state",
      "zip",
      "dob",
      "firstLang",
      "secondLang",
      "thirdLang",
      "firstInst",
      "secondInst",
      "thirdInst",
      "yearlyIncome",
      "biography",
      "notes",
      "createdAt",
      "updatedAt",
    ],
    // ...pagination,
  });

  return res.json({ students /* page, size */ });
});

// ==================GET A STUDENT BY ID =========================
router.get("/:studentId", async (req, res, next) => {
  const student = await students.findByPk(req.params.studentId, {
    attributes: [
      "id",
      "householdId",
      "headOfHousehold",
      "accesslevelId",
      "firstName",
      "nickName",
      "middleName",
      "lastName",
      "familyName",
      "phone",
      "email",
      "street",
      "city",
      "state",
      "zip",
      "dob",
      "firstLang",
      "secondLang",
      "thirdLang",
      "firstInst",
      "secondInst",
      "thirdInst",
      "yearlyIncome",
      "biography",
      "notes",
      "createdAt",
      "updatedAt",
    ],
  });

  if (!student) {
    const err = new Error("Student couldn't be found.");
    err.status = 404;
    return next(err);
  }

  res.json(student);
});

// ==================CREATE A STUDENT=============================

router.post("/", requireAuth, async (req, res, next) => {
  const {
    householdId,
    headOfHousehold,
    accesslevelId,
    firstName,
    nickName,
    middleName,
    lastName,
    familyName,
    phone,
    email,
    street,
    city,
    state,
    zip,
    dob,
    firstLang,
    secondLang,
    thirdLang,
    firstInst,
    secondInst,
    thirdInst,
    yearlyIncome,
    biography,
    notes,
  } = req.body;

  const exists = await students.findAll({
    where: [{ dob: dob }, { lastName: lastName }, { familyName: familyName }],
  });

  // console.log(
  //   "exists ===============================================: ",
  //   exists
  // );

  if (exists.length !== 0) {
    const err = new Error("Student already exists.");
    err.status = 409;
    next(err);
  } else {
    const nuStudent = await students.build({
      householdId: householdId,
      headOfHousehold: headOfHousehold,
      accesslevelId: accesslevelId,
      firstName: firstName,
      nickName: nickName,
      middleName: middleName,
      lastName: lastName,
      familyName: familyName,
      phone: phone,
      email: email,
      street: street,
      city: city,
      state: state,
      zip: zip,
      dob: dob,
      firstLang: firstLang,
      secondLang: secondLang,
      thirdLang: thirdLang,
      firstInst: firstInst,
      secondInst: secondInst,
      thirdInst: thirdInst,
      yearlyIncome: yearlyIncome,
      biography: biography,
      notes: notes,
    });

    await nuStudent.validate();
    await nuStudent.save();
  }

  const nuStudentFromDB = await students.findAll({
    where: [{ firstName: firstName }, { lastName: lastName }, { email: email }],
  });

  return res.status(201).json(nuStudentFromDB);
});

// ==================EDIT A STUDENT===============================

router.put("/:studentId", requireAuth, async (req, res, next) => {
  const studentId = req.params.studentId;
  const studentToUpdate = await students.findByPk(req.params.studentId);
  const {
    householdId,
    headOfHousehold,
    accesslevelId,
    firstName,
    nickName,
    middleName,
    lastName,
    familyName,
    phone,
    email,
    street,
    city,
    state,
    zip,
    dob,
    firstLang,
    secondLang,
    thirdLang,
    firstInst,
    secondInst,
    thirdInst,
    yearlyIncome,
    biography,
    notes,
  } = req.body;

  if (!studentToUpdate) {
    const err = new Error("Student couldn't be found");
    err.status = 404;
    return next(err);
  }

  // if (
  //   (typeof type !== "string" && type !== undefined) ||
  //   type.length > 30 ||
  //   type === "" ||
  //   type === null
  // ) {
  //   const err = new Error("Bad Request");
  //   err.errors = { type: "Type must be less than 30 characters" };
  //   err.status = 400;
  //   return next(err);
  // }

  if (householdId !== undefined || householdId !== null)
    studentToUpdate.householdId = householdId;
  if (headOfHousehold !== undefined || headOfHousehold !== null)
    studentToUpdate.headOfHousehold = headOfHousehold;
  if (accesslevelId !== undefined || accesslevelId !== null)
    studentToUpdate.accesslevelId = accesslevelId;
  if (firstName !== undefined || firstName !== null)
    studentToUpdate.firstName = firstName;
  if (nickName !== undefined || nickName !== null)
    studentToUpdate.nickName = nickName;
  if (middleName !== undefined || middleName !== null)
    studentToUpdate.middleName = middleName;
  if (lastName !== undefined || lastName !== null)
    studentToUpdate.lastName = lastName;
  if (familyName !== undefined || familyName !== null)
    studentToUpdate.familyName = familyName;
  if (email !== undefined || email !== null)
    studentToUpdate.email = email;
  if (phone !== undefined || phone !== null)
    studentToUpdate.phone = phone;
  if (street !== undefined || street !== null) studentToUpdate.street = street;
  if (city !== undefined || city !== null) studentToUpdate.city = city;
  if (state !== undefined || state !== null) studentToUpdate.state = state;
  if (city !== undefined || city !== null) studentToUpdate.city = city;
  if (state !== undefined || state !== null) studentToUpdate.state = state;
  if (zip !== undefined || zip !== null) studentToUpdate.zip = zip;
  if (dob !== undefined || dob !== null) studentToUpdate.dob = dob;
  if (firstLang !== undefined || firstLang !== null)
    studentToUpdate.firstLang = firstLang;
  if (secondLang !== undefined || secondLang !== null)
    studentToUpdate.secondLang = secondLang;
  if (thirdLang !== undefined || thirdLang !== null)
    studentToUpdate.thirdLang = thirdLang;
  if (firstInst !== undefined || firstInst !== null)
    studentToUpdate.firstInst = firstInst;
  if (secondInst !== undefined || secondInst !== null)
    studentToUpdate.secondInst = secondInst;
  if (thirdInst !== undefined || thirdInst !== null)
    studentToUpdate.thirdInst = thirdInst;
  if (yearlyIncome !== undefined || yearlyIncome !== null)
    studentToUpdate.yearlyIncome = yearlyIncome;
  if (biography !== undefined || biography !== null)
    studentToUpdate.biography = biography;
  if (notes !== undefined || notes !== null) studentToUpdate.notes = notes;

  await studentToUpdate.save();

  res.json(studentToUpdate);
});

// ==================DELETE A STUDENT=============================

router.delete("/:studentId", requireAuth, async (req, res, next) => {
  const studentToDelete = await students.findByPk(req.params.studentId);

  if (!studentToDelete) {
    const err = new Error("Student couldn't be found");
    err.status = 404;
    return next(err);
  }

  await studentToDelete.destroy();
  res.json({ message: "Successfully Deleted" });
});

// ===========================================================================

module.exports = router;
