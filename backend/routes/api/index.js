const router = require("express").Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const employeedepartmentsRouter = require('./employeedepartments.js');
const academicdepartmentsRouter = require('./academicdepartments.js');
const accesslevelsRouter = require('./accesslevels.js');
const employeesRouter = require('./employees.js');
const branchesRouter = require('./branches.js');
const facilitiesRouter = require('./facilities.js');
const householdsRouter = require('./households.js');
const studentsRouter = require('./students.js');

const { restoreUser } = require("../../utils/auth.js");

router.use(restoreUser);

// ===========================ROUTERS===========================//

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/employeedepartments', employeedepartmentsRouter);
router.use('/academicdepartments', academicdepartmentsRouter);
router.use('/accesslevels', accesslevelsRouter);
router.use('/employees', employeesRouter);
router.use('/branches', branchesRouter);
router.use('/facilities', facilitiesRouter);
router.use('/households', householdsRouter);
router.use('/students', studentsRouter);

// =========================TEST ROUTES===========================//

// test route for routes/api/index.js (this file)
router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello world from route api/index/hello/world!');
});

// first post test
router.post("/test", (req, res) => {
  return res.json({ requestBody: req.body })
});

// GET /api/restore-user
router.get("/restore-user", (req, res) => {
  return res.json(req.user);
});

// GET /api/require-auth
const { requireAuth } = require("../../utils/auth.js");
router.get("/require-auth", requireAuth, (req, res) => {
  return res.json(req.user);
});

// GET /api/set-token-cookie
const { setTokenCookie } = require("../../utils/auth.js");
const { users } = require("../../db/models");
router.get("/set-token-cookie", async (_req, res) => {
  const user = await users.findOne({
    where: {
      username: "Demo-lition",
    },
  });
  setTokenCookie(res, user);
  return res.json({ user: user });
});

module.exports = router;
