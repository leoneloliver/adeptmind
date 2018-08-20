/**
 You will use data that we we using in production. You will need to generate unique filters from
 a list of data.

 ```javascript
 //
 //Data list format:
 //========
 //
 {
     "_id": "5a6771db8393c714a22cfd93",
     "text": "sleeveless jacket",
     "metadata": {
       "created_by": "5a217e6b166ffe2c4a99667b",
     },
     "revision": "new",
     "status": "PENDING",
     "annotations": [
       {
         "value": "SLEEVELESS",
         "type": "ATTRIBUTE",
         "name": "SLEEVE_TYPE",
       },
       {
         "type": "CATEGORY",
         "name": "JACKET",
       }
     ],
   },
 {
     "_id": "5a6771db8393c714a22cfd86",
     "text": "jacket",
     "metadata": {
       "created_by": "5a217e6b166ffe2c4aAAAAAA",
     },
     "revision": "new",
     "status": "APPROVED",
     "annotations": [
       {
         "value": "COTTON",
         "type": "ATTRIBUTE",
         "name": "MATERIAL",
       },
       {
         "type": "CATEGORY",
         "name": "JACKET",
       }
     ],
   }
 //
 //Filter format:
 //========
 //
 {
   attribute: [
     'SLEEVE_TYPE:SLEEVELESS',
     'MATERIAL:COTTON'
   ],
   category: [
     'JACKET',
   ],
   status: [
     'APPROVED', 'PENDING'
   ],
   creator: [
     {
       value: '5a217e6b166ffe2c4a99667b',
     },
     {
       value: '5a217e6b166ffe2c4aAAAAAA',
     }
   ]
 }
 ```

 * Requirements
 * =========
 * -  The `attribute` and `category` values will need to be pulled out of the `annotations` field
 *    value and aggregated based on `type`
 * -  All lists ( `attribute`, `category`, `status` and `creator` ) should be unique
 *    with no falsey values
 * -  `attribute`, `category` and `status` should be sorted alphabetically
 * -  Try to get it running as fast as possible while using ES6 features and syntax.
 *    ( There are close to 12K entries )
 * -  The example data above is a simplified schema, the one you will be using will have many other fields
 * -  You can run this file using `node filter-generation.js`
*/

/**
 * Answer
 */

const data = require('./data/queries.json');

let attribute = [];
let category = [];
let status = [];
let creator = [];
const typeOfData = 'CATEGORY';

data.forEach((element, index) => {
  //The `attribute` and `category` values will need to be pulled out of the `annotations` field value and aggregated based on `type`
  if(data[index].annotations.length !== 0){
    //getting category here
    if(data[index].annotations[0].value !== "" && data[index].annotations[0].type === typeOfData){
      category.push(data[index].annotations[0].name);
    //getting attributes here  
    }else{
      attribute.push(data[index].annotations[0].name + ':' + data[index].annotations[0].value);
    }
  }
  // getting status
  if(data[index].status.length !== 0){
    if(data[index].status !== null){
      status.push(data[index].status);
    }
  }
  // getting creators
  if(data[index].metadata.length !== 0){
    if (data[index].metadata.created_by !== null){
      creator.push(data[index].metadata.created_by);
    }
  }
});

//All lists ( `attribute`, `category`, `status` and `creator` ) should be unique with no falsey values
//creating unique arrays with es6...
attribute   = [...new Set(attribute)];
category  = [...new Set(category)];
status   = [...new Set(status)];
creator = [...new Set(creator)];

//`attribute`, `category` and `status` should be sorted alphabetically 
attribute.sort();
category.sort();
status.sort();
creator.sort();

const resultAttribute = {attribute};
const resultCategory = {category};
const resultStatus = {status};
const resultCreator = {creator};

//outputs
console.log(resultAttribute);
console.log(resultCategory);
console.log(resultStatus);
console.log(resultCreator);

