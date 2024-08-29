npx sequelize-cli model:generate --name employees --attributes firstName1:string,firstName2:string,middleName:string,lastName1:string,lastName2:string,street:string,city:string,state:string,zip:integer,dob:string,age:integer,ssn:string,firstLang:string,secondLang:string,thirdLang:string,firstInst:string,secondInst:string,thirdInst:string,primaryTitle:string,primaryStartDate:string,primaryEndDate:string,primaryPayRate:integer,secondaryTitle:string,secondaryStartDate:string,secondaryEndDate:string,secondaryPayRate:integer,tertiaryTitle:string,tertiaryStartDate:string,tertiaryEndDate:string,tertiaryPayRate:integer,quarternaryTitle:string,quarternaryStartDate:string,quarternaryEndDate:string,quarternaryPayRate:integer,biography:text,notes:text

npx sequelize-cli model:generate --name branches --attributes name:string,street:string,city:string,state:string,zip:integer

npx sequelize-cli model:generate --name facilities --attributes name:string,branch_Id:integer

npx sequelize-cli model:generate --name students --attributes household_Id:integer,headOfHousehold:boolean,userType_Id:integer,firstName1:string,firstName2:string,middleName:string,lastName1:string,lastName2:string,personalEmail:string,personalPhone:string,street:string,city:string,state:string,zip:integer,dob:string,age:integer,firstLang:string,secondLang:string,thirdLang:string,firstInst:string,secondInst:string,thirdInst:string,yearlyIncome:integer,biography:text,notes:text

npx sequelize-cli model:generate --name households --attributes name:string,notes:text
