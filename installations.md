## Prerequisites

#### Mysql workbench
Install it from here:

Windows: https://dev.mysql.com/downloads/windows/installer/

Mac: https://dev.mysql.com/doc/refman/5.7/en/osx-installation-pkg.html

#### Setting up on Windows
Only thing Windows users have to do is run the following command anywhere in their terminal (not necessarily the project folder): npm install -g win-node-env

Refer to this post on stackoverflow for more info.

#### Install Node
Refer to this points on how to install on your OS:

Linux
Windows
Mac
Installing
Run npm install to install all required dependencies.


#### Prettier
The Project comes pre setup with Prettier, which is a tool that will automatically format your code. Prettier is currently set up to format your code right before committing to git, so there should be no risk of someone committing something that does not live up to our coding style.

You may, however, optionally install the Prettier VS Code extension to format your code on every single save. This has the benefit that you will always be looking at code in the right format and you will know exactly what gets committed at any time.

In VS Code you can press CTRL+P (CMD+P on Mac) and type ext install esbenp.prettier-vscode to install the extension directly or you can browser and find it in the Marketplace.

Remember to enable "format on save" in VS Code settings. You can also enable formatting on pasting or while editing, depending on your taste.


#### Environment variables

Environment variables are used for working with sensitive data like passwords
and usernames.

Fx connecting to a database, we dont want to commit the code that shows our
password. Therefore we use environment variables instead. The `.env` **SHOULD
NEVER** be commited!!!! Therefore it is in the `.gitignore` file (ignored by
git).

Here is how to get started with the `.env` file

- Copy and rename the `.env.example` file to `.env`:

```
cp .env.example .env
```

- Open the `.env` file and update any parameters according to the environment
  you are running.

### Database setup

First install a MySQL database. You have two options:

1. Install with Docker
2. Install a database locally

#### Docker

If you choose to use Docker, you need to have [Docker installed](https://www.docker.com/get-started) for you respective operating system. Once Docker is installed, you can simply run:

    docker-compose up -d

The `-d` flag is optional and is short for "deamon" and just means that Docker will run in the background and you can now use your terminal for other things. If you don't use the `-d` flag you will have to open a new terminal window to do other things such as run npm commands.

Running docker compose will automatically create a docker container with a mysql database set up according to the information you provided in the `.env` file.

You can now test your database by connecting to it with a DB admin tool such as Mysql Workbench via IP `127.0.0.1` and the port and credentials given in the `.env`.

#### Local database

This is not needed if you did the steps above to run Docker. If you choose to set up a local database, you can do so by creating the database from a tool like Mysql Workbench or similar. Make sure to use the port settings and credentials that you provided in `.env`.

### 📦 NPM scripts and commands

| Command             | Note                                                                                                                                                |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run build`     | Build the project in production mode.                                                                                                               |
| `npm start`         | Runs `build` and starts the project (to be used on production servers).                                                                             |
| `npm run client`    | Runs the client application and serves it with webpack development server.                                                                          |
| `npm run server`    | Runs the server and serves it via Nodemon, meaning that the server will automatically be restarted when you make code changes.                      |
| `npm run dev`       | Runs `client` and `server` concurrently. _This is generally the command you run for development_.                                                   |
| `npm run db:setup`  | Runs `knex migrate:latest` and `knex seed:run`. Quick setup to get a fresh database ready for work.                                                 |
| `npm run do`        | Utility that allows you to easily run cli commands on npm packages installed in your `node_modules` folder without having to install them globally. |
| `npm run storybook` | Run the Storybook user interface.                                                                                                                   |
