## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all npm packages

Create .env file and add parameters that are described in .env.example

### `docker-compose up`

Runs the app

EXAMPLE for POST request

http://localhost:3000/api/fetch

{
    "lon":"42",
    "lat":"11",
    "part":"hourly,daily"
}

EXAMPLE for GET request

http://localhost:3000/api/get?lat=11&lon=42&part=hourly,daily
