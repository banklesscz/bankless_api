# Bankless API
REST API for Bankless Czech frontend

## Used Technologies
- Node.js
- Typescript
- Express.js

## Development
1. Clone this repo
2. Install dependencies with `yarn install`
3. Copy `.env.sample` to `.env`
4. Update variables in `.env` file
5. Run project in development mode with `yarn dev`

## Deployment

1. Clone this repo to deployment server
2. Change directory to this project
    - `$ cd bankless_api`
3. Install dependencies 
    - `$ yarn install`
4. Copy `.env.sample` to `.env`
    - `$ cp .env.sample .env`
5. Update variables in `.env` file
6. Enable execution of `deploy.sh` script
   - `$ chmod +x deploy.sh`
7. Build/run docker image/container
   - `$ ./deploy.sh`


## Update on production
1. Connect to production server
2. Run `$ ./deploy.sh`
3. Once in a while do:
    - List all docker images: `$ docker images`
    - Delete old docker images: `$ docker rmi bankless_mailchimp_api:<image_tag>`


## Commands
All commands are specified inside `package.json` file

### `yarn dev`
Running app in `development` mode (auto-compile & auto-restart after change). 

### `yarn build`
Builds app into `dist` folder

### `yarn start`
Running built app from `dist` folder
