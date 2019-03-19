![CF](http://i.imgur.com/7v5ASc8.png) LAB 01
=================================================

## Class-01 Tests

### Author: Aaron Ferris

### Links and Resources
* [repo](hhttps://github.com/codefellows-js-401d29-aaron-ferris/lab-01)

### Modules
#### arithmetic.js
##### Exported Values and Methods

###### `add  -- array -> number or null`
Takes in an array. Adds the vaules of array elements. Utilizes typehelper.
###### `subtract -- array -> number or null`
Takes in an array. Subtracts values of array elements. Utilizes typehelper.

###### `mult -- array -> number or null`
Takes in an array. Multiplies values of array elements. Utilizes typehelper.

###### `div -- array -> number or null`
Takes in an array. Divides first value by subsequent values of array elements. Utilizes typehelper and infinity helper.

##### Inner Functions

##### `infinityhelper -- value => null`
using an if statement if the result is currently infinity(made by dividing by 0), change result null

##### `typehelper -- array  value => null`
using an if statement, if any part of the input is string, changes the result to null


#### greet.js
##### Exported Values and Methods

##### `greeting -- string => string`
returns  Hello (string). Utiliizes typehelper

##### `typehelper -- non-string input => null`
changes result to null if input is not a string.

### Setup

#### Tests
* Ran tests with jest
* Made one for every forseeable instance possible.
* Could not use faker yet
