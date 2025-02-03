# Hng_stage_ONE

#Project Overview
This task involves CreatING an API that takes a number and returns interesting mathematical properties about it, along with a fun fact. 


API Specification
Endpoint: GET** <your-domain.com>/api/classify-number?number=371
Required JSON Response Format (200 OK):
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,  // sum of its digits
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371" //gotten from the numbers API
}
Required JSON Response Format (400 Bad Request)
{
    "number": "alphabet",
    "error": true
}

#Setup Instructions:
Clone the repository to your local machine:   https://github.com/goodylove/stage-one.

#Install Dependencies
npm install

#Run the Server
npm start

#API Documentation
Endpoint URL: GET "https://hng-stage-zero-dlvt.onrender.com/api/v1/stage0"
  


