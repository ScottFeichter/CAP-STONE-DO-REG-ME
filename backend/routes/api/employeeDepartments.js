const express = require('express');
const { Op } = require('sequelize');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { EmployeeDepartment } = require("../../db/models");


// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// ==================TEST ROUTES===============================================

router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello world from route api/employeeDepartments/hello/world!');
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

}


// ==================GET ALL EMPLOYEE DEPARTMENTS==============================
router.get("/employeeDepartments", async (req, res, next) => {
  console.log("inside the route");




  let employeeDepartments = await EmployeeDepartment.findAll({
    attributes: [
      "id",
      "name",
      "imageURL",
      "createdAt",
      "updatedAt",
    ],
    // ...pagination,
  });



  return res.json({ employeeDepartments, /* page, size */ });

});




// ==================CREATE AN EMPLOYEE DEPARTMENT=============================


// ==================EDIT AN EMPLOYEE DEPARTMENT===============================


// ==================DELETE AN EMPLOYEE DEPARTMENT=============================


module.exports = router;
