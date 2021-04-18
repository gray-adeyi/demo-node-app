# Demo Node App
Tutorial on building web apps with Node.js,Express and MongoDB. pug was used as the template render engine.

## Trying it out [Linux]
1. Ensure that you have Node installed and Mongodb.
```bash
$ git clone https:github.com/gray-adeyi/demo-node-app.git
$ cd demo-node-app && npm install
```
2. Create a mongodb DATABASE for the app.
3. Create a .env file inside the project directory.
```bash
$ touch .env && echo "DATABASE=mongodb://localhost:27017/<DATABASE-NAME>" >> .env
```
4. Create users.htpasswd file inside the project root. the file is
used for restricting access to [http://localhost:3000/registrations](http://localhost:3000/registrations)
route to authenticated user which resides inside this file.
```bash
$ touch users.htpasswd && echo "<username>:<password>"
```
e.g `touch users.htpasswd && echo "admin:admin123"`

### Run the application
```bash
$ npm run watch
```
