
npx sequelize-cli model:generate --name user --attributes firstName:string,lastName:string,username:string,email:string,hasedPassword:string

npx sequelize-cli model:generate --name branch --attributes name:string,street:string,city:string,state:string,zip:string,createdAt:date,updatedAt:date

npx sequelize-cli model:generate --name facility --attributes name:string,branchId:integer,createdAt:date,updatedAt:date

npx sequelize-cli model:generate --name accesslevel --attributes level:string,createdAt:date,updatedAt:date

npx sequelize-cli model:generate --name academicdepartment --attributes name:string,chair:string,imgurl:string,createdAt:date,updatedAt:date

npx sequelize-cli model:generate --name employeedepartment --attributes name:string,imgurl:string,createdAt:date,updatedAt:date

npx sequelize-cli model:generate --name employee --attributes employeeDepartmentId:integer,academicDepartmentId:integer,accessLevelId:integer,firstName:string,nickName:string,middleName:string,lastName:string,familyName:string,phone:string,email:string,street:string,city:string,state:string,zip:string,dob:string,ssn:string,firstLang:string,secondLang:string,thirdLang:string,firstInst:string,secondInst:string,thirdInst:string,primaryTitle:string,primaryStartDate:string,primaryEndDate:string,primaryPayRate:string,secondaryTitle:string,secondaryStartDate:string,secondaryEndDate:string,secondaryPayRate:integer,tertiaryTitle:string,tertiaryStartDate:string,tertiaryEndDate:string,tertiaryPayRate:integer,quarternaryTitle:string,quarternaryStartDate:string,quarternaryEndDate:string,quarternaryPayRate:integer,biography:text,notes:text,createdAt:date,updatedAt:date

npx sequelize-cli model:generate --name household --attributes name:string,notes:text,createdAt:date,updatedAt:date

npx sequelize-cli model:generate --name student --attributes householdId:integer,headOfHousehold:boolean,accesslevelId:integer,firstName:string,nickName:string,middleName:string,lastName:string,familyName:string,phone:string,email:string,street:string,city:string,state:string,zip:string,dob:string,firstLang:string,secondLang:string,thirdLang:string,firstInst:string,secondInst:string,thirdInst:string,yearlyIncome:integer,biography:text,notes:text,createdAt:date,updatedAt:date

===========================================================================================

npx sequelize-cli seed:generate --name demo-users

npx sequelize-cli seed:generate --name demo-branches

npx sequelize-cli seed:generate --name demo-facilities

npx sequelize-cli seed:generate --name demo-accesslevels

npx sequelize-cli seed:generate --name demo-academicdepartments

npx sequelize-cli seed:generate --name demo-employeedepartments

npx sequelize-cli seed:generate --name demo-employees

npx sequelize-cli seed:generate --name demo-households

npx sequelize-cli seed:generate --name demo-students
