# fontester

Live font testing on the browser.

## Set up

### Install nodejs and npm

Install Node JS and Node Package Manger (npm) first.  
https://nodejs.org/en/


### Install

`cd fontester`

`npm install` will install the required packages for running fontester set up.


### Set up `config.js`

`./tester/config.js` is where we define the font files for testing and their css style attributes. We can use CSS font fallback for setting up complex tests.

```
    var fonts = [
            {
            name: '<style_name>',
            url: '/tester/fonts/<font_name>',
            weight: <css_weight>
            weight: <css_style>
            },
            {
            name: '<style_name>',
            url: '/tester/fonts/<font_name>',
            weight: <css_weight>
            weight: <css_style>
            }
        ];
        fontTesterMain(fonts);
```

## Run the server

`node server.js` This will run the server and open `http://localhost:8080/tester/` on your default browser. You can open this url on any browser.

## Export your fonts

Export your fonts to the location, Browser will update changes everytime you export font.
`./tester/fonts`

## Features

- Live updating changes of defined the fonts without refreshing the browser.
- Input text with Google transliteration set up.
- Show/hide glyphs not available in the set up fonts.


## Customize

We can make test templates in Markdown and build html tests from them using Metalsmith.

`node build_tests.js`
