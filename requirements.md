# **Software Requirements**
* The vision of this product: Give a service that can help people in multiple fields 

* The pain point does this project solve: Assist the users for services providers in multiple fields 

* Why should we care about your product: If you need home assistance service or Road Service you can request it by easy 4 steps. 

 

## **IN - What our product does:**

- The First Feature: Road Services: 

If you get lost on the road or need help you can enter our website and in the services section, you will find road service. You can read about the service requirement itself then you will fill in a form with specific information  

- The Second Feature: Home Services: 

If you need some help with the home services, you can enter our website and, in the services section, you will find home service. You can read about the service requirement itself then you will fill in a form with specific information. 

## **OUT - What will our product not do:** 

It will not have an authorization management system because we decided it as STRECH Goal because we can`t until now distinguish between Admin Account and normal User Account	 

## **Minimum Viable Product** 

It can locate your location with your permission, and you can give your feedback about services with an Intelligence system of sentiment analysis for every feedback that we receive rendered in the Feedback page 

## **Data Flow**

* When the user fills the form of Service request, he will click on button of get location this will render a map with its location will be passed with the Email request with all other’s data name, address, and mobile number with problem description this will Hit Email API sending an Email with this content to the Service provider company administrator and his services will be provided as soon as possible. 

* For the feedback part the same happen but without sending an email instead of that the feedback content will be passed to Sentiment Analyses NLP API that analyses every feedback and give it a mark either positive or negative and rendered with the Feedback page 

## **Non-Functional Requirements**

* Usability: It is an easy flat website with five simple steps for every request. There is a clear header route that will guide you to your destination with a grid of service selections on the home page and depend on a strong database which mongo DB and great Frontend which React also we like to analysis the feedback part within is the feedback is positive or negative this depends on strong API for sentiment analysis 

* Testability: You can test it by requesting any service and the admin will be notified by email and the feedback will be rendered with positivity mark this will work will the Email API by maximum 3-5 minutes so it is responsive Website 

## **Database** 

items of database do not belong to each other, so the feedback collections are separated from Services Requests collection 

Item being generated by First Service will be stored at the same collection in database side by side with the Second Service items. 

Items in database do not relate to many other items in your database Also, include for each separate collection: 

The name of each property stored in the collection. 

In the Feedback Collection: name, mobile address and feedback 

In the Services Requests Collection: name, address, mobile and description 

The required data type. 

An indication of if this collection is associated with another collection. 
