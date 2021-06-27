# Random Color Array Generator

This package enables you to generate random colors array of desired length in different forms (RGB,RGBA,HEX,HSL,HSLA).

# Additional Components

This package also provides CSS classes for creating button

# Usage

```console
npm i random-color-array-generator
```

# Structure

```
•
└── randomArrayColorGenerator
    ├── ColorGenerator.min.js
    ├── ColorGenerator.js
    ├── Conversions.min.js
    ├── Conversions.js
    ├── Button.css
    └── README.md
```

# Usage

```js
import ColorGenerator from "random-color-array-generator/ColorGenerator.min.js"
const colorGenerator = new ColorGenerator(sizeOfArray)
// Here in place of sizeOfArray provide length of array you want like 5
console.log(colorGenerator.generateRGB()) 
// ['rgb(67,154,213)','rgb(177,96,168)','rgb(230,115,4)','rgb(159,93,46)','rgb(113,177,166)']
console.log(colorGenerator.generateHEX()) 
// [ '#8f0e63', '#5caf51', '#46e331', '#e6d0d3', '#13b8ab' ]
console.log(colorGenerator.generateHSL()) 
// ['hsl(295,62.5%,52.9%)','hsl(40,53.9%,29.8%)','hsl(88,67%,34.5%)','hsl(322,79.5%,49.8%)','hsl(90,37.6%,66.7%)']
console.log(colorGenerator.generateHSV()) 
// ['176, 96, 77','63, 71, 61','74, 62, 86','60, 37, 95','232, 81, 98']
console.log(colorGenerator.generateRGBA()) 
// ['rgba(21,74,146,0.73)','rgba(107,250,202,0.30)','rgba(241,34,163,0.55)','rgba(114,95,192,0.52)','rgba(213,96,0,0.56)']
console.log(colorGenerator.generateHSLA()) 
// ['hsla(7, 41.7%, 70.4%, 0.89)','hsla(314, 97.1%, 41%, 0.73)','hsla(115, 75.2%, 42.7%, 0.79)','hsla(145, 47.4%, 41%, 0.36)','hsla(75, 65.4%, 40.8%, 0.46)']
```

# Available Functions

| Function Name             | Description                                         | Example Outputs                       |
| :-------------------------|:----------------------------------------------------|:--------------------------------------|
| getCurrentSizeOfArray     |Return current value which is set for array length   |5                                      |
| setSizeOfArray            |Setter for changing value of array length            |                                       |
| generateRGB               |Return array of random rgb values                    |['rgb(67,154,213)','rgb(177,96,168)','rgb(230,115,4)','rgb(159,93,46)','rgb(113,177,166)']|
| generateHEX               |Return array of random hex values                    |[ '#8f0e63', '#5caf51', '#46e331', '#e6d0d3', '#13b8ab' ]|
| generateHSL               |Return array of random hsl values                    |['hsl(295,62.5%,52.9%)','hsl(40,53.9%,29.8%)','hsl(88,67%,34.5%)','hsl(322,79.5%,49.8%)','hsl(90,37.6%,66.7%)']|
| generateHSV               |Return array of random hsv values                    |['176, 96, 77','63, 71, 61','74, 62, 86','60, 37, 95','232, 81, 98']|
| generateRGBA              |Return array of random rgba values                   |['rgba(21,74,146,0.73)','rgba(107,250,202,0.30)','rgba(241,34,163,0.55)','rgba(114,95,192,0.52)','rgba(213,96,0,0.56)']|
| generateHSLA              |Return array of random hsla values                   |['hsla(7, 41.7%, 70.4%, 0.89)','hsla(314, 97.1%, 41%, 0.73)','hsla(115, 75.2%, 42.7%, 0.79)','hsla(145, 47.4%, 41%, 0.36)','hsla(75, 65.4%, 40.8%, 0.46)']|

# Tutorial

[Link To Tutorial](https://youtu.be/FLf1aG4MnmY)
# Available CSS Classes

| Class Name           |   Functioning                        |
|:---------------------|:-------------------------------------|
|custom-generate-button| Generate Base For Button             |
|button-purple         | Provides purple background to button |
|button-teal           | Provides teal background to button   |
|button-blue           | Provides blue background to button   |
|button-red            | Provides red background to button    |
|button-yellow         | Provides yellow background to button |
|button-pink           | Provides pink background to button   |

# Button Example

```HTML
<!-- Import StyleSheet -->
<link rel="stylesheet" href="random-color-array-generator/Button.css">
<button class="custom-generate-button button-pink" id="generate-color">This is custom generate button</button>
```
