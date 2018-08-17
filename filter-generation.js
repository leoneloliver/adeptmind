const data = require('./data/queries.json');

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

