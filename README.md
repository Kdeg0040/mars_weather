# Mars Weather

[![Build Status](https://travis-ci.org/Kdeg0040/mars_weather.svg?branch=master)](https://travis-ci.org/Kdeg0040/mars_weather)
[![Maintainability](https://api.codeclimate.com/v1/badges/5974298ebf6068521947/maintainability)](https://codeclimate.com/github/Kdeg0040/mars_weather/maintainability)

A 7 Sol(Martian day) weather report for Mars powered by the Mars Weather Service API provided by NASA.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To get started, you will need [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/), and [Ruby](https://www.ruby-lang.org/en/) installed on your system. To see whether you already have these installed, run the following commands:

```
$ node -v
$ npm -v
$ ruby -v
```
If no version is detected visit the download pages as linked above to install.

### Installing

A step by step on how to get a development env running.

Clone this repository and `cd` into directory:

```
$ git clone git@github.com:Kdeg0040/mars_weather.git
$ cd mars_weather
```

Install ruby and node dependencies:

```
$ bundle install
$ npm install
```

### Installing

To start the local development server and open the app in your browser, use:

```
$ npm run dev
```

If it doesn't open automatically in a new tab, it can be viewed on [http://localhost:3000](http://localhost:3000/) on your chosen browser.

## Running the tests

To run all the test suites, enter the following command:

```
$ npm test -- --watchAll=false
```

To display code coverage, use:

```
$ npm test -- --coverage --watchAll=false
```

## Built With

* [NASA APIs](https://api.nasa.gov/) - Powered `InSight` the Mars Weather Service API.
* [Create React App](https://github.com/facebook/create-react-app) - Written in React and created using `create-react-app`
* [Jest](https://jestjs.io/) & [Enzyme](https://github.com/enzymejs/enzyme) - Tested with 100% coverage using `jest` and `enzyme`.
* [Bulma](https://bulma.io/) - Styled with `Bulma` a responsive, mobile first CSS framework.
* [Travis](https://travis-ci.org/) - `Travis` is used for continuous integration and deployment.
* [Heroku](https://www.heroku.com/) - Deployed on `Heroku`.
