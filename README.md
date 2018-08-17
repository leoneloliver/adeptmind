## Adeptmind frontend test

There are two questions in the Adeptmind frontend test.

### Profile Styling

The first is to style a profile page (profile-styling.html) to match the design that is provided

##### Requirements

- Match the final design as closely as possible (see `profile-styling-finished.png` 
for what it should look like)
- Add hover effects to the navigation in the the header and footer.
- Use only html and css
- Specific styles can be found in the `html` file.
- Images used are provided in the `images` directory
- Write vanilla css within `style` tags in the `head`
- Use any css or html that works in Chrome 65 + (no other browsers will be tested )
- It will be evaluated on a 15" Macbook Pro on Chrome
- Style only a Desktop version
- Create a "sticky footer" so regardless of the content, the footer is stuck to the 
  bottom of the content


### Filter Generation

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

##### Requirements
 -  The `attribute` and `category` values will need to be pulled out of the `annotations` field
     value and aggregated based on `type`
 -  All lists ( `attribute`, `category`, `status` and `creator` ) should be unique
     with no falsey values
 -  `attribute`, `category` and `status` should be sorted alphabetically
 -  Try to get it running as fast as possible while using ES6 features and syntax.
     ( There are close to 12K entries )
 - The example data above is a simplified schema, the one you will be using will have many other fields
 -  You can run this file using `node filter-generation.js`
