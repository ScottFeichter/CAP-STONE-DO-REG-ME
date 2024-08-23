#!/bin/zsh

# To make a text file executable cd to the directory then run

# chmod +x myscript.zsh

# To run it ./myscript.zsh argument1 argument2 etc...

# ------------------------------------------------------------------------------------------------------------------

project_name=$1

# ------------------------------------------------------------------------------------------------------------------

########################################## BACKEND AUTH ME START ###################################################

# BACKEND PHASE 0 START=====================================================================================================

mkdir $project_name
cd $project_name

mkdir -p admin admin/schema admin/images admin/wireframes

touch README.md
	echo "# [$project_name]">> README.md;
	echo "! [db-schema ]">> README.md;
	echo "[db-schema]: ./admin/schema/[$project_name]-schema.png">> README.md



git config --global init.defaultBranch main

git init
git add -A
git commit -m "initial w README"

gh repo create $project_name --public

git remote add origin https//github.com/ScottFeichter/$project_name
git branch -M main
git push -u origin main
wait;




# ------------------------------------------------------------------------------------------------------------------


touch .gitignore
	echo node_modules >> .gitignore;
	echo .env >> .gitignore;
	echo build >> .gitignore;
	echo .DS_Store >> .gitignore;
	echo "*.db" >> .gitignore;


git add -A
git commit -m "created .gitignore"
git push
wait;



# ------------------------------------------------------------------------------------------------------------------

mkdir -p backend frontend
cd backend

touch backendRequirements.txt
    echo "npm init -y"			>> backendRequirements.txt
	echo "" 					>> backendRequirements.txt

	echo "# npm install for:" 	>> backendRequirements.txt
	echo cookie-parser 			>> backendRequirements.txt;
	echo cors 					>> backendRequirements.txt;
	echo csurf 					>> backendRequirements.txt;
	echo dotenv 				>> backendRequirements.txt;
	echo express 				>> backendRequirements.txt;
	echo express-async-errors 	>> backendRequirements.txt;
	echo helmet 				>> backendRequirements.txt;
	echo jsonwebtoken 			>> backendRequirements.txt;
	echo morgan 				>> backendRequirements.txt;
	echo per-env 				>> backendRequirements.txt;
	echo sequelize@6 			>> backendRequirements.txt;
	echo sequelize-cli@6 		>> backendRequirements.txt;
	echo pg						>> backendRequirements.txt;
	echo "" 					>> backendRequirements.txt;

	echo "#npm install -D for:" >> backendRequirements.txt;
	echo sqlite3 				>> backendRequirements.txt;
	echo dotenv-cli				>> backendRequirements.txt;
	echo nodemon				>> backendRequirements.txt;
	wait;




npm init -y

npm install cookie-parser
npm install cors
npm install csurf
npm install dotenv
npm install express
npm install express-async-errors
npm install helmet
npm install jsonwebtoken
npm install morgan
npm install per-env
npm install sequelize@6
npm install sequelize-cli@6
npm install pg

npm install -D sqlite3
npm install -D dotenv-cli
npm install -D nodemon
wait;

git add -A
git commit -m "backend installs"
git push
wait;

# ------------------------------------------------------------------------------------------------------------------

# THIS NEEDS WORK AS THE RESULT IS NOT BEING CAPTURED BY THE SECRET VARIABLE
secret = $(openssl rand -base64 128)

touch .env;
	echo PORT=8001									>> .env;
	echo DB_FILE=db/dev.db 							>> .env;
	echo JWT_SECRET=$secret 						>> .env; # create strong JWT secret generated by openssl
	echo "JWT_EXPIRES_IN=604800"					>> .env;
	echo SCHEMA=$project_name-schema				>> .env; # create custom schema name using snake case
	wait;

mkdir config
cd config

touch index.js
	echo  "module.exports = {" 									>> index.js;
	echo  "environment: process.env.NODE_ENV || 'development'," >> index.js;
	echo  "port: process.env.PORT || 8000," 					>> index.js;
	echo  "dbFile: process.env.DB_FILE," 						>> index.js;
	echo  "jwtConfig: {" 										>> index.js;
	echo  "secret: process.env.JWT_SECRET," 					>> index.js;
	echo  "expiresIn: process.env.JWT_EXPIRES_IN" 				>> index.js;
	echo  "}" 													>> index.js;
	echo  "};" 													>> index.js;
	wait;

cd ..

git add -A
git commit -m "backend configuration"
git push
wait;



# ------------------------------------------------------------------------------------------------------------------ha ha ha I learned to use cat halfway through this next step lol


touch .sequelizerc
	echo "const path = require('path');"						>> .sequelizerc;
	echo  "module.exports = {" 									>> .sequelizerc;
	echo  "config: path.resolve('config', 'database.js')," 		>> .sequelizerc;
	echo  "'models-path': path.resolve('db', 'models')," 		>> .sequelizerc;
	echo  "'seeders-path': path.resolve('db', 'seeders')," 		>> .sequelizerc;
	echo  "'migrations-path': path.resolve('db', 'migrations')" >> .sequelizerc;
	echo  "};" 													>> .sequelizerc;
	wait;


npx sequelize init

cd config

cat > database.js <<EOF

const config = require('./index');

module.exports = {
development: {
	storage: config.dbFile,
	dialect: "sqlite",
	seederStorage: "sequelize",
	logQueryParameters: true,
	typeValidation: true
},
production: {
	use_env_variable: 'DATABASE_URL',
	dialect: 'postgres',
	seederStorage: 'sequelize',
	dialectOptions: {
	ssl: {
		require: true,
		rejectUnauthorized: false
	}
	},
	define: {
	schema: process.env.SCHEMA
	}
}
};
EOF

cd ..

touch psql-setup-script.js

cat > psql-setup-script.js <<EOF

const { sequelize } = require('./db/models');

sequelize.showAllSchemas({ logging: false }).then(async (data) => {
  if (!data.includes(process.env.SCHEMA)) {
    await sequelize.createSchema(process.env.SCHEMA);
  }
});

EOF

npx dotenv sequelize db:migrate

git add -A
git commit -m "sequelize setup"
git push
wait;


# ------------------------------------------------------------------------------------------------------------------

touch app.js
cat > app.js <<EOF
const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const { environment } = require('./config');
const isProduction = environment === 'production';

const routes = require('./routes');

// =================IMPORTS END======================//

const app = express();

// =================MIDDLE WARE START======================//

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

// Security Middleware
if (!isProduction) {
  // enable cors only in development
  app.use(cors());
}

// helmet helps set a variety of headers to better secure your app
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin"
  })
);

// Set the _csrf token and create req.csrfToken method
app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true
    }
  })
);

app.use(routes); // Connect all the routes

// =================MIDDLE WARE END======================//

module.exports = app;

EOF

mkdir routes
cd routes
touch index.js
cat > index.js <<EOF
const express = require('express');
const router = express.Router();

router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello World!');
});

router.get("/api/csrf/restore", (req, res) => {
  const csrfToken = req.csrfToken();
  res.cookie("XSRF-TOKEN", csrfToken);
  res.status(200).json({
    'XSRF-Token': csrfToken
  });
});

module.exports = router;

EOF

cd ..

git add -A
git commit -m "express setup app.js and router"
git push
wait;


# ------------------------------------------------------------------------------------------------------------------

mkdir bin
cd bin
touch www
cat > www <<EOF
#!/usr/bin/env node

// Import environment variables
require('dotenv').config();

const { port } = require('../config');

const app = require('../app');
const db = require('../db/models');

// Check the database connection before starting the app
db.sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection success! Sequelize is ready to use...');

    // Start listening for connections
    app.listen(port, () => console.log(\`Listening on port ${port}...\`));
  })
  .catch((err) => {
    console.log('Database connection failure.');
    console.error(err);
  });

EOF

cd ..

# this really should be an add on of the scripts part only
cat > package.json <<EOF
{
  "name": "backend",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "sequelize": "sequelize",
    "sequelize-cli": "sequelize-cli",
    "start": "per-env",
    "start:development": "nodemon ./bin/www",
    "start:production": "node ./bin/www",
    "build": "node psql-setup-script.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "csurf": "^1.11.0",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "express-async-errors": "^3.1.1",
    "helmet": "^7.1.0",
    "jsonwebtoken": "^9.0.2",
    "morgan": "^1.10.0",
    "per-env": "^1.0.2",
    "pg": "^8.12.0",
    "sequelize": "^6.37.3",
    "sequelize-cli": "^6.6.2"
  },
  "devDependencies": {
    "dotenv-cli": "^7.4.2",
    "nodemon": "^3.1.4",
    "sqlite3": "^5.1.7"
  }
}
EOF


#   "scripts": {
#     "sequelize": "sequelize",
#     "sequelize-cli": "sequelize-cli",
#     "start": "per-env",
#     "start:development": "nodemon ./bin/www",
#     "start:production": "node ./bin/www",
#     "build": "node psql-setup-script.js"
#   }

git add -A
git commit -m "express setup server"
git push
wait;

# ------------------------------------------------------------------------------------------------------------------

#this needs work
echo "ITS TIME TO TEST THE SERVER:

1. OPEN ANOTHER TERMINAL
2. CD TO THE BACKEND DIR
3. NPM START
4. IN BROWSER NAVIGATE TO http://localhost:8001/hello/world

You should see the text Hello World!.

5. Take a look at your cookies in the Application tab of your Chrome DevTools Inspector.
6. Delete all the cookies to make sure there are no lingering cookies from other projects, then refresh the page.
7. You should still see the text Hello World! on the page as well as two cookies, one called _csrf and the other called XSRF-TOKEN in your DevTools.
8. If successful you can remove the test route from routes/index.js if you'd like.

If you don't see this, then check your backend server logs in the terminal where you ran npm start. Then check your routes.

If there is a database connection error, make sure you set up the correct username and password defined in the .env file.

When you're finished testing, press ctr + c then run the following:

git add -A
git commit -m "express setup test success! backend auth me BACKEND Phase 0 complete"
git push
wait;

"

npm start




# BACKEND PHASE 1 START=====================================================================================================

cd routes
mkdir api
cd api
touch index.js
cat > index.js <<EOF
const router = require('express').Router();

router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});

module.exports = router;
EOF

cd ..

# sed -i '1s/^/const apiRouter = require('./api'); \n/' index.js  NOT WORKING SHOULD FIGURE OUT LATER

cat > index.js <<EOF
const express = require('express');
const router = express.Router();

const apiRouter = require('./api');

router.use('/api', apiRouter);

router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello World!');
});

router.get("/api/csrf/restore", (req, res) => {
  const csrfToken = req.csrfToken();
  res.cookie("XSRF-TOKEN", csrfToken);
  res.status(200).json({
    'XSRF-Token': csrfToken
  });
});

module.exports = router;

EOF

cd ..

git add -A
git commit -m "created api folder and test route"
git push
wait;


# ------------------------------------------------------------------------------------------------------------------


#this needs work - should the fetch be a curl?
echo "ITS TIME TO TEST THE API ROUTER:

1. OPEN ANOTHER TERMINAL
2. CD TO THE BACKEND DIR
3. NPM START
4. IN BROWSER NAVIGATE TO http://localhost:8001/api/csrf/restore
5. CREATE A FETCH REQUEST IN THE BROWSER DEV TOOLS CONSOLE
6. REPLACE THE <value of XSRF-TOKEN cookie> WITH THE VALUE OF THE XSRF-TOKEN

fetch('/api/test', {
  method: \"POST\",
  headers: {
    \"Content-Type\": \"application/json\",
    \"XSRF-TOKEN\": <value of XSRF-TOKEN cookie>
  },
  body: JSON.stringify({ hello: 'world' })
}).then(res => res.json()).then(data => console.log(data));


If you don't have the XSRF-TOKEN cookie anymore, access the http://localhost:8001/api/csrf/restore route to add the cookie back.

After the response returns to the browser, the .thens parse the JSON response body and print it out.

If you get an error, check your backend server logs in the terminal where you ran npm start. Also, check your fetch request syntax and your API router setup.

When you're finished testing, press ctr + c to close the server.

Then add a comment such as // test successful to the index.js file so we can add and commit.

They run:

git add -A
git commit -m \"api router test success! backend auth me BACKEND Phase 1 complete\"
git push
wait;

"

npm start

# BACKEND PHASE 2 START=====================================================================================================

# This should really be a sed but is beyond my pay grade
cat > app.js <<EOF
const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const { environment } = require('./config');
const isProduction = environment === 'production';

// needed for error handler for catching Sequelize errors and formatting them before sending the error response
const { ValidationError } = require('sequelize');
//see Process sequelize errors below

const routes = require('./routes');

// =================IMPORTS END======================//

const app = express();

// =================MIDDLE WARE START======================//

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

// Security Middleware
if (!isProduction) {
  // enable cors only in development
  app.use(cors());
}

// helmet helps set a variety of headers to better secure your app
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin"
  })
);

// Set the _csrf token and create req.csrfToken method
app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true
    }
  })
);

app.use(routes); // Connect all the routes


// Catch unhandled requests and forward to error handler.
app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = { message: "The requested resource couldn't be found." };
  err.status = 404;
  next(err);
});



// Process sequelize errors
app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    let errors = {};
    for (let error of err.errors) {
      errors[error.path] = error.message;
    }
    err.title = 'Validation error';
    err.errors = errors;
  }
  next(err);
});


// Error formatter
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack
  });
});

module.exports = app;
EOF


git add -A
git commit -m "added server error handling middle wares to app.js"
git push
wait;

# ------------------------------------------------------------------------------------------------------------------


#this needs work - should the fetch be a curl?
echo "ITS TIME TO TEST THE ERROR HANDLERS:

You can't really test the Sequelize error handler now because you have no Sequelize models to test it with, but you can test the Resource Not Found error handler and the Error Formatter error handler.

1. OPEN ANOTHER TERMINAL
2. CD TO THE BACKEND DIR
3. NPM START
4. IN BROWSER NAVIGATE TO http://localhost:8001/not-found

If you see the json below, you have successfully set up your Resource Not Found and Error Formatter error handlers!

{
  \"title\": \"Resource Not Found\",
  \"message\": \"The requested resource couldn't be found.\",
  \"errors\": {
    \"message\": \"The requested resource couldn't be found.\"
  },
  \"stack\": \"Error: The requested resource couldn't be found.\n ...<stack trace>...\"
}


If you don't see the json above, check your backend server logs in your terminal where you ran npm start.

Make sure your route at http://localhost:8000/api/csrf/restore is still working. If it is not working, make sure you are defining your error handlers after your route connections in app.js (i.e., after app.use(routes)).

You will test the Sequelize error handler later when you populate the database with a table.

When you're finished testing, press ctr + c to close the server.

Then add a comment such as // test successful resource not found and error formatter to the app.js file so we can add and commit.

Then run:

git add -A
git commit -m \"app error formatter and resource not found test success! backend auth me BACKEND Phase 2 complete\"
git push
wait;

"

npm start


# BACKEND PHASE 3 START=====================================================================================================

cd ..
# should be in root on main branch

git checkout -b dev
git push origin dev
git checkout -b auth-setup

cd backend
npm install bcryptjs

git add -A
git commit -m "installed bcryptjs in backend"
git push
wait;

# ------------------------------------------------------------------------------------------------------------------

npx sequelize model:generate --name User --attributes username:string,email:string,hashedPassword:string

cd db
cd migrations
userMigro=(*)
echo $userMigro


cat > $userMigro <<EOF
'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: true
      },
      hashedPassword: {
        type: Sequelize.STRING.BINARY,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, options);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Users";
    return queryInterface.dropTable(options);
  }
};
EOF


cd ../.. #should be in /backend

npx dotenv sequelize db:migrate

cd db
cd models
userModel=(*)
echo $userModel


cat > $userModel <<EOF
'use strict';

const { Model, Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  };

  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [4, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [3, 256],
          isEmail: true
        }
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60]
        }
      }
    }, {
      sequelize,
      modelName: 'User'
    }
  );
  return User;
};
EOF

cd ../..

git add -A
git commit -m "User migro and model created and modified"
git push
wait;

# ------------------------------------------------------------------------------------------------------------------

npx sequelize seed:generate --name demo-user

cd db
cd seeders
demoUserSeed=(*)
echo $demoUserSeed


cat > $demoUserSeed <<EOF
'use strict';

const { User } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3')
      }
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
EOF

cd ../..
npx dotenv sequelize db:seed:all

sqlite3 db/dev.db  '.mode box' 'SELECT * FROM "Users"'

git add -A
git commit -m "demo user seed generated updated and seeded"
git push
wait;

# ------------------------------------------------------------------------------------------------------------------


cd db
cd models
userModel=(*)
echo $userModel


cat > $userModel <<EOF
'use strict';
const { Model, Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  };

  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256],
          isEmail: true
        }
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60]
        }
      }
    },
    {
      sequelize,
      modelName: "User",
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "createdAt", "updatedAt"]
        }
      }
    }
  );
  return User;
};
EOF


git add -A
git commit -m "updated user model with scope protections"
git push
wait;


# ------------------------------------------------------------------------------------------------------------------

cd ../..
touch authenticationFlow.md
cat > authenticationFlow.md <<EOF
# Authentication Flow

The backend login flow in this project will be based on the following plan:

1. The API login route will be hit with a request body holding a valid credential (either username or email) and password combination.
2. The API login handler will look for a User with the input credential in either the username or email columns.
3. Then the hashedPassword for that found User will be compared with the input password for a match.
4. If there is a match, the API login route should send back a JWT in an HTTP-only cookie and a response body. The JWT and the body will hold the user's id, username, and email.

The backend sign-up flow in this project will be based on the following plan:

1. The API signup route will be hit with a request body holding a username, email, and password.
2. The API signup handler will create a User with the username, an email, and a hashedPassword created from the input password.
3. If the creation is successful, the API signup route should send back a JWT in an HTTP-only cookie and a response body. The JWT and the body will hold the user's id, username, and email.

The backend logout flow will be based on the following plan:

1. The API logout route will be hit with a request.
2. The API logout handler will remove the JWT cookie set by the login or signup API routes and return a JSON success message.
EOF

git add -A
git commit -m "added authenticationFlow.md for an FYI"
git push
wait;

# ------------------------------------------------------------------------------------------------------------------


mkdir utils
cd utils
touch auth.js
cat > auth.js <<EOF
const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const { User } = require('../db/models');
const { secret, expiresIn } = jwtConfig;

const setTokenCookie = (res, user) => {
  // Create the token.
  const safeUser = {
    id: user.id,
    email: user.email,
    username: user.username,
  };
  const token = jwt.sign(
    { data: safeUser },
    secret,
    { expiresIn: parseInt(expiresIn) } // 604,800 seconds = 1 week
  );

  const isProduction = process.env.NODE_ENV === "production";

  // Set the token cookie
  res.cookie('token', token, {
    maxAge: expiresIn * 1000, // maxAge in milliseconds
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction && "Lax"
  });

  return token;
};


const restoreUser = (req, res, next) => {
  // token parsed from cookies
  const { token } = req.cookies;
  req.user = null;

  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      return next();
    }

    try {
      const { id } = jwtPayload.data;
      req.user = await User.findByPk(id, {
        attributes: {
          include: ['email', 'createdAt', 'updatedAt']
        }
      });
    } catch (e) {
      res.clearCookie('token');
      return next();
    }

    if (!req.user) res.clearCookie('token');

    return next();
  });
};


const requireAuth = function (req, _res, next) {
  if (req.user) return next();

  const err = new Error('Authentication required');
  err.title = 'Authentication required';
  err.errors = { message: 'Authentication required' };
  err.status = 401;
  return next(err);
}


module.exports = { setTokenCookie, restoreUser, requireAuth };
EOF

cd ..

git add -A
git commit -m "added utils folder and auth.js with User auth middlewares setTokenCookie restoreUser requireAuth"
git push
wait;

# ------------------------------------------------------------------------------------------------------------------

cd routes/api

indexApi=(*)
echo $indexApi


cat > $indexApi <<EOF
const router = require('express').Router();

// GET /api/restore-user
const { restoreUser } = require('../../utils/auth.js');

router.use(restoreUser);

// first post test
router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});


router.get(
  '/restore-user',
  (req, res) => {
    return res.json(req.user);
  }
);


// GET /api/require-auth
const { requireAuth } = require('../../utils/auth.js');
router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);


// GET /api/set-token-cookie
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
router.get('/set-token-cookie', async (_req, res) => {
  const user = await User.findOne({
    where: {
      username: 'Demo-lition'
    }
  });
  setTokenCookie(res, user);
  return res.json({ user: user });
});



module.exports = router;
EOF


git add -A
git commit -m "updated routes/api/index.js"
git push
wait;

# ------------------------------------------------------------------------------------------------------------------



echo "
I. TEST TOKEN COOKIE:
  1. Go to http://localhost:8001/api/set-token-cookie and see if there is a token cookie set in your browser's DevTools.
  2. If there isn't, then check your backend server logs in the terminal where you ran npm start.
  3. Also, check the syntax of your setTokenCookie function as well as the test route.

II. TEST RESTORE USER:
  1. Go to http://localhost:8001/api/restore-user and see if the response has the demo user information returned as JSON.
  2. Then, remove the token cookie manually in your browser's DevTools and refresh. The JSON response should be empty.
  3. If this isn't the behavior, then check your backend server logs in the terminal where you ran npm start as well as the syntax of your restoreUser middleware and test route.
  4. To set the token cookie back, just go to the GET /api/set-token-cookie route again: http://localhost:8001/api/set-token-cookie.

III. TEST REQUIRE AUTH:
  1. Set the token cookie back by accessing the GET /api/set-token-cookie route again: http://localhost:8001/api/set-token-cookie.
  2. Go to http://localhost:8001/api/require-auth and see if the response has the demo user's information returned as JSON.
  3. Then, remove the token cookie manually in your browser's DevTools and refresh.
  4. The JSON response should now be an "Unauthorized" error.
  5. If this isn't the behavior, then check your backend server logs in the terminal where you ran npm start as well as the syntax of your requireAuth middleware and test route.
  6. To set the token cookie back, just go to the GET /api/set-token-cookie route again: http://localhost:8001/api/set-token-cookie.

Once you are satisfied with the test results, you can remove all code for testing the user auth middleware routes.

Make sure to keep the restoreUser middleware connected before any other middleware or route handlers are connected to the router.

This will allow all route handlers connected to this router to retrieve the current user on the Request object as req.user.

If there is a valid current user session, then req.user will be set to the User in the database.

If there is NO valid current user session, then req.user will be set to null.

git add -A
git commit -m "auth tests success! BACKEND Phase 3 complete. preparing to merge to main."
git push
wait;

"

cd ../..

npm start


git checkout dev
git pull origin dev
git merge auth-setup
git push origin dev


# BACKEND PHASE 4 START=====================================================================================================

# ------------------------------------------------------------------------------------------------------------------

git add -A
git commit -m "backend auth me set up ran"
git push
wait;

code .
clear


########################################## FRONTEND AUTH ME START ###################################################

# ------------------------------------------------------------------------------------------------------------------

# touch .env;
# 	echo FLASK_ENV=development>> .env;
# 	echo SECRET_KEY=super_secret_key >> .env;
# 	echo DATABASE_URL=sqlite:///dev.db >> .env;
# 	wait;

# touch .flaskenv;
# 	echo FLASK_APP=app>> .flaskenv;
# 	echo FLASK_ENV=development>> .flaskenv;
# 	echo FLASK_DEBUG=True>> .flaskenv;
# 	wait;

# touch config.py;
# 	echo "print(\"top \")">> config.py;
# 	echo import os>> config.py;
# 	echo class Config:>> config.py;
# 	echo "    SECRET_KEY = os.environ.get(\"SECRET_KEY\")">> config.py;
#  	echo "    SQLALCHEMY_DATABASE_URI = os.environ.get(\"DATABASE_URL\")">> config.py;
#     	echo "    SQLALCHEMY_TRACK_MODIFICATIONS = False">> config.py;
# 	wait;


# touch database.py


# touch db_seeder.py
# 	echo from app.models import db, User, Post>> db_seeder.py;
# 	echo from app import app>> db_seeder.py;
# 	echo from random import choice>> db_seeder.py;
# 	echo from faker import Faker>> db_seeder.py;
# 	echo "fake = Faker()">> db_seeder.py;
# 	echo "with app.app_context():">> db_seeder.py;
# 	echo "#insert seeds here">> db_seeder.py;
# 	echo "all_seedsnames = [seedname1, seedname2, seedname3]">> db_seeder.py;
# 	echo "_ = [db.session.add(user) for user in all_users]">> db_seeder.py;
# 	echo "db.session.commit()">> db_seeder.py;
# 	echo "print(\"SEEDS SEEDED TO DB\")">> db_seeder.py;
# 	wait;

# touch README.md
# 	echo "# This is a flask application for some purpose">> README.md;
# 	echo "## Use pipenv to install dependencies">> README.md
# 	wait;




# mkdir -p app app/forms app/models app/routes app/static app/templates app/instance app/migrations


# touch app/forms/post.py
# 	echo from flask_wtf import FlaskForm>>app/forms/post.py;
# 	echo from wtforms import SelectField, StringField, SubmitField>>app/forms/post.py;
# 	echo from wtforms.validators import DataRequired, Length, URL>>app/forms/post.py;
# 	echo "class PostForm(FlaskForm):">>app/forms/post.py;
# 	wait;


# touch app/models/__init__.py
# 	echo from .db import db>>app/models/__init__.py;
# 	echo from .user import User>>app/models/__init__.py;
# 	echo from .post import Post>>app/models/__init__.py;
# 	wait;


# touch app/models/db.py
# 	echo from flask_sqlalchemy import SQLAlchemy>>app/models/db.py;
# 	echo "db = SQLAlchemy()">>app/models/db.py;
# 	wait;

# touch app/models/post.py
# 	echo "from .db import db">>app/models/post.py
# 	echo "from .likes import likes">>app/models/post.py
# 	wait;



# touch app/models/user.py
# touch app/routes/post_routes.py
# touch app/routes/user_routes.py
# touch app/static/index.html
# touch app/templates/__init__.py
# touch app/templates/posts.py
