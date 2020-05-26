

## Deploy Application1

`cd Application_1` <br>
`npm install` <br>
`npm start` <br>

## Deploy Application2

`cd Application_2` <br>
`npm install` <br>
`npm start` <br>

The navigation will have to be added in navbar project which is under /navbar.

## How to run Microfrontend

Install dependencies as below<br>
`cd MicrofrontendConsumer`
`npm install --dev` <br>
`npm install`<br>
`cd navbar` <br>
`npm install --dev` <br>
`npm install` <br>
`npm run build` <br>
`cd ..` <br>


## check if the applications are deployed
https://localhost:3001/index_bundle.js hit this in url if this is the path to your bundle.
https://localhost:3021/index_bundle.js hit this in url if this is the path to your bundle.

## To Run the application 

`npm start`

open https://localhost:9000 to run the application.<br>



## To run the applications Standalone without microfrontend.

Stop all running applications even the micro frontend consumer.

## Deploy Application1 standalone

`cd Application_1` <br>
`npm install` <br>
`npm run start:standalone` <br>

## Deploy Application2

`cd Application_2` <br>
`npm install` <br>
`npm start:standalone` <br>

https://localhost:9001 will run application 2 standalone without microfrontend.
https://localhost:9002 will run application 1 standalone without microfrontend.

## What is this?

This is an example microfrontend repo demonstrating how to use [single-spa](https://single-spa.js.org). 

## How does it work?

[Full article](https://single-spa.js.org/docs/recommended-setup)

This repository is a javascript project that creates a javascript bundle that is an in-browser javascript module (explanation on [youtube](https://www.youtube.com/watch?v=Jxqiu6pdMSU&list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU&index=2) / [bilibili](https://www.bilibili.com/video/av83498486/)).

This project uses [Vue](https://vuejs.org) and was created with the [create-single-spa](https://single-spa.js.org/docs/create-single-spa) CLI. It uses webpack and babel.
