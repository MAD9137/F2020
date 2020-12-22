(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{437:function(t,e,n){"use strict";n.r(e);var a=n(53),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"assignment-1-build-event-and-schedule-class"}},[t._v("Assignment 1: Build Event and Schedule Class")]),t._v(" "),n("h2",{attrs:{id:"description"}},[t._v("Description")]),t._v(" "),n("p",[t._v("In this assignment you will be creating a simple iOS project with a textView to display information about events. You will be creating 2 classes in this project in Swift: an Event class, and a Schedule class. You will be creating methods for the schedule class to create copies of, and access Event objects within an array property in your schedule class, and outputting the event information to the textView.")]),t._v(" "),n("h2",{attrs:{id:"requirements"}},[t._v("Requirements")]),t._v(" "),n("h3",{attrs:{id:"step-1"}},[t._v("Step 1")]),t._v(" "),n("p",[t._v("Begin by "),n("a",{attrs:{href:"/F2020/assets/downloads/Assignment_01_Start.zip"}},[t._v("downloading this iOS project")]),t._v(" to start with.  This has a textView object in the main view that is connected to an outlet in your viewController class.  This project will be used to create your assignment, and shows you an example of where to output your messages in the viewController’s viewDidLoad() method.  This is where you will Testing the Classes.")]),t._v(" "),n("h3",{attrs:{id:"step-2"}},[t._v("Step 2")]),t._v(" "),n("p",[t._v("Create the Event class in the Event.swift file")]),t._v(" "),n("ul",[n("li",[t._v("Add an optional String variable called ‘title’")]),t._v(" "),n("li",[t._v("Add an optional String variable called ‘description’")]),t._v(" "),n("li",[t._v("Add an optional Date variable called ‘date’")]),t._v(" "),n("li",[t._v("Copy in the following function into your Event class:")])]),t._v(" "),n("div",{staticClass:"language-swift line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-swift"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("formatedDateString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" formatting "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("DateFormatter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    formatting"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dateFormat "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yyyy/MM/dd HH:mm"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("date "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" formatting"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("from"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" formatedDateString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[n("em",[t._v("To use Date objects you must have “import Foundation” at the top of your Event.swift file, and you will need to pass the setDate() function a string formatted like this “2016/09/26 12:34”.")])])]),t._v(" "),n("ul",[n("li",[t._v("Create a base init function that takes 2 String parameters; title and description that sets the self.title and self.description properties in the class.")]),t._v(" "),n("li",[t._v("Create a convenience init function that takes 3 String parameters called title, description and dateString. Call the base init to set the self.title and self.description variables, and pass the dateString to the setDate() function to set the Date object.")]),t._v(" "),n("li",[t._v("Create a getInfo function that takes no parameters, and returns a String formatted with the event’s title, event’s date.description, and the event’s description text. (Note: The date.description returns a string formatted with the current date and time.)")])]),t._v(" "),n("h3",{attrs:{id:"step-3"}},[t._v("Step 3")]),t._v(" "),n("p",[t._v("Create the Schedule class in the Schedule.swift file")]),t._v(" "),n("ul",[n("li",[t._v("Add an "),n("strong",[t._v("empty")]),t._v(" Event array variable called eventArray")]),t._v(" "),n("li",[t._v("Add a "),n("strong",[t._v("get-only")]),t._v(" Int called eventCount, use a guard statement to check if isEmpty is false on the array, else return 0. If the guard passes return the array’s count value.")]),t._v(" "),n("li",[t._v("Create an addNewEvent function that takes in 3 String parameters called title, description and dateString. Append a new Event object to the array using these values within this function.")]),t._v(" "),n("li",[t._v("Create a function called outputAllEvents that takes no arguments, and returns a string. Use a guard to check if the isEmpty is false on the array, else return an error message. If the guard passes, then loop through the eventArray array concatenating the String data returned from each event’s getInfo function to a new formatted string, and return that string")])]),t._v(" "),n("h3",{attrs:{id:"step-4"}},[t._v("Step 4")]),t._v(" "),n("p",[t._v("Testing the classes in the viewController.swift file")]),t._v(" "),n("ul",[n("li",[t._v("In the viewController.swift file you will create an instance of your Schedule class, and add some code to the bottom of the viewDidLoad function")]),t._v(" "),n("li",[t._v("Output the eventCount value by concatenating it to the textViewOutput.text String")]),t._v(" "),n("li",[t._v("Call the addNewEvent function 3 or more time to add some test data to a couple of events in the array")]),t._v(" "),n("li",[t._v("Output the eventCount value again by concatenating it to the textViewOutput.text String")]),t._v(" "),n("li",[t._v("Last call the outputAllEvents function concatenating it’s return text to the textViewOutput.text String")])]),t._v(" "),n("h2",{attrs:{id:"marks-rubric"}},[t._v("Marks Rubric")]),t._v(" "),n("h3",{attrs:{id:"create-event-class-15pt"}},[t._v("Create Event Class (15pt)")]),t._v(" "),n("ul",[n("li",[t._v("Define event class "),n("strong",[t._v("(1pt)")])]),t._v(" "),n("li",[t._v("Add 2 Strings and 1 Date property "),n("strong",[t._v("(3pt)")])]),t._v(" "),n("li",[t._v("Create init that takes 3 Strings "),n("strong",[t._v("(5pt)")]),t._v(" (2 for definition, 3 for setting values)")]),t._v(" "),n("li",[t._v("Copy setDate function provided "),n("strong",[t._v("(1pt)")])]),t._v(" "),n("li",[t._v("Create getInfo function "),n("strong",[t._v("(5pt)")]),t._v(" (must return info as a formatted String with all 3 event properties used)")])]),t._v(" "),n("h3",{attrs:{id:"create-schedule-class-15pt"}},[t._v("Create Schedule Class (15pt)")]),t._v(" "),n("ul",[n("li",[t._v("Define schedule class "),n("strong",[t._v("(1pt)")])]),t._v(" "),n("li",[t._v("Add empty Event array: eventArray "),n("strong",[t._v("(1pt)")])]),t._v(" "),n("li",[t._v("Create get-only property: eventCount "),n("strong",[t._v("(4pt)")]),t._v(" (1 for definition, 2 for guard else return 0, 1 for returning count)")]),t._v(" "),n("li",[t._v("Create addNewEvent function "),n("strong",[t._v("(4pt)")])]),t._v(" "),n("li",[t._v("Create outputAllEvents function "),n("strong",[t._v("(5pt)")]),t._v(" (1 for definition, 2 for guard else print and return, 1 for for-loop, 1 for printing each)")])]),t._v(" "),n("h3",{attrs:{id:"test-7pt"}},[t._v("Test (7pt)")]),t._v(" "),n("ul",[n("li",[t._v("Create instance of Schedule class "),n("strong",[t._v("(1pt)")])]),t._v(" "),n("li",[t._v("Print message with eventCount (at 0) "),n("strong",[t._v("(1pt)")])]),t._v(" "),n("li",[t._v("Create 3 events using addNewEvent "),n("strong",[t._v("(3pt)")])]),t._v(" "),n("li",[t._v("Print message with eventCount (at 3) "),n("strong",[t._v("(1pt)")])]),t._v(" "),n("li",[t._v("Call outputAllEvents function "),n("strong",[t._v("(1pt)")])])]),t._v(" "),n("h3",{attrs:{id:"quality-control-8pt"}},[t._v("Quality Control (8pt)")]),t._v(" "),n("ul",[n("li",[t._v("Clear and comprehensible commenting "),n("strong",[t._v("(4pt)")])]),t._v(" "),n("li",[t._v("Code runs with no errors "),n("strong",[t._v("(4pt)")])])]),t._v(" "),n("h3",{attrs:{id:"total-45pt"}},[t._v("Total: 45pt")]),t._v(" "),n("h2",{attrs:{id:"submission"}},[t._v("Submission")]),t._v(" "),n("p",[t._v("Submit a .zip file of your assignment through Brightspace.")]),t._v(" "),n("p",[t._v("Use the following naming convention for submissions:")]),t._v(" "),n("p",[n("code",[t._v("username_assignment-title.zip")]),t._v(" (for example - "),n("code",[t._v("lenc0001_assignment-1.zip")]),t._v(")")]),t._v(" "),n("p",[t._v("Due by: Oct. 02, 11:59pm")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://brightspace.algonquincollege.com/d2l/lms/dropbox/user/folders_list.d2l?ou=196083&isprv=0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Assignment 1 - Section 300"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://brightspace.algonquincollege.com/d2l/lms/dropbox/user/folders_list.d2l?ou=196084&isprv=0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Assignment 1 - Section 310"),n("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);