# EcommProInv
beginning of an inventory product

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

## Description
Description
This project is part of the Full Stack Flex Bootcamp at the University of Central Florida. It focuses on developing an API with CRUD operations using Node.js, Express.js, Sequelize ORM, and MySQL database. The API allows users to manage products, categories, and tags for an e-commerce platform.


Installation
Clone the repository:

git clone https://github.com/your-username/UCF-VIRT-FSF-PT-12-2023-U-LOLC.git
Navigate to the project directory:
cd UCF-VIRT-FSF-PT-12-2023-U-LOLC
Install dependencies:
npm install
Set up your MySQL database:
Create a .env file in the root directory.
Add your MySQL database credentials:
 into a dotenv
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
Usage
To start the server, run:

npm start
This will start the server on port 3002 by default. You can then access the API endpoints using a tool like Postman or Insomnia.

Routes
/api/tags
GET: Get all tags
POST: Create a new tag
/api/tags/:id
GET: Get a tag by ID
PUT: Update a tag by ID
DELETE: Delete a tag by ID

Technologies Used
Node.js
Express.js
Sequelize
MySQL


## Credits
This project was developed collaboratively by [Your Name] and [Assistant's Name] during the UCF-VIRT-FSF-PT-12-2023-U-LOLC bootcamp.


License
This project is licensed under the MIT License.

