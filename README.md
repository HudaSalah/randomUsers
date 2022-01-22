# RandomUsers

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Running DockerFile

Run `ng run build` to build the project. The build artifacts will be stored in the `dist/` directory. 

Run `docker build -t dockerized-angular-app .` With the -t argument, we define the name of the image. You can have anything here instead of the mentioned one above ‘dockerized-angular-app‘. The second argument (“.”) defines the location of the Dockerfile. This command can take a while because images have to be downloaded and the angular app has to be compiled.

Run `docker run  -p 8080:80 dockerized-angular-app` With -p we define a port mapping. Basically, we define that the port 80 of our container should be exposed to the port 8080 of our host machine. In this case “angular-container”. The last argument is the name of the image (“angular”) we want to use.

Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.



## Points coverd :
1- Showing list of random users
2- Possible to filter random users list with gander and nationality
3- Possible to export random users list with CSV or XML
4- Able infinity scrolling 
5- Possible to add or remove coulmns 
6- Only request the fields that realy needed based on columns selected
7- DockerFile with necessary condigrations to serve angular app 
