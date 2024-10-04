export const json = {
    isRequired: true,
    showTranslationTab: 'true',
  
   "title": {
    "default": "Dubai Coffee Festival",
  },
    "logoPosition": "left",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1",
            "title": "First Name",
            "isRequired": true
          },
          {
            "type": "text",
            "name": "question2",
            "title": "Middle Name"
          },
          {
            "type": "text",
            "name": "question3",
            "title": "Last Name",
            "isRequired": true
          },
          {
            "type": "text",
            "name": "question4",
            "title": "Email",
            "isRequired": true,
            "inputType": "email"
          },
          {
            "type": "text",
            "name": "question5",
            "title": "Phone Number",
            "isRequired": true,
            "inputType": "tel"
          }
        ]
      }
    ]
  }
