(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{442:function(t,e,s){"use strict";s.r(e);var n=s(53),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"assignment-4-urlrequest-data-list"}},[t._v("Assignment 4: URLRequest Data List")]),t._v(" "),s("h2",{attrs:{id:"description"}},[t._v("Description")]),t._v(" "),s("p",[t._v("In this assignment, you will be creating a single TableViewController application that will make a request to a specific URL "),s("a",{attrs:{href:"https://lenczes.edumedia.ca/mad9137/a4/respond.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://lenczes.edumedia.ca/mad9137/a4/respond.php"),s("OutboundLink")],1),t._v(". If you want to see the server script, you can "),s("a",{attrs:{href:"/F2020/assets/downloads/A4Server.zip"}},[t._v("download the php file here")]),t._v(".  It will make the URLRequest when a button is pressed, and it will display the contents of the server data in the cells of the table.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("You will need to use a CollectionViewController with a custom CollectionViewCell "),s("strong",[t._v("instead of")]),t._v(" a TableViewController in order to get full marks on this assignment.")])]),t._v(" "),s("h2",{attrs:{id:"requirements"}},[t._v("Requirements")]),t._v(" "),s("p",[t._v('The tableView will have a navigation controller embedded in it, with a single barButtonItem added to the right side of the bar. This button will be labeled "Load", and will have an action that will be used to make the URL request.')]),t._v(" "),s("p",[t._v("Your TableViewController will display the information from the JSON data returned from the URLRequest. Each cell in the table will display the eventTitle, and eventDate strings in it's labels. There are no additional views or segues in this application.")]),t._v(" "),s("p",[t._v("You TableViewController class will need an array or dictionary objects in the correct format to hold the data returned from the server.  The URLRequest will need to call a completion handler which will pass the data to a callback function to process the string of JSON and covert it to an array of objects.")]),t._v(" "),s("p",[t._v("When this URLRequest queries the server, the server script will return a string of JSON data that defines the array of dictionaries, which will look like this:")]),t._v(" "),s("div",{staticClass:"language-swift line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eventTitle"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"First Day Of Class"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eventDate"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018\\/09\\/05"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eventTitle"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Submit Assignment 1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eventDate"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018\\/10\\/01"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eventTitle"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Submit Assignment 2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eventDate"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018\\/10\\/15"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eventTitle"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Submit Midterm Project"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eventDate"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018\\/10\\/29"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eventTitle"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Submit Assignment 3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eventDate"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018\\/11\\/12"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eventTitle"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Submit Assignment 4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eventDate"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018\\/11\\/26"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eventTitle"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Submit Final Project"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eventDate"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018\\/12\\/13"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eventTitle"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"End Of Semester"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eventDate"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018\\/12\\/14"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("When you capture the response data in your callback function and serialize the JSON, it will converted to an array of dictionaries. This means your TableViewController class will need a property to store it that looks like this:")]),t._v(" "),s("div",{staticClass:"language-swift line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" jsonArray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("Pay special attention to the shape of this array.  This will help you understand how to access each dictionary within it using the indexPath.row value.")])]),t._v(" "),s("p",[t._v("In your "),s("code",[t._v("tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int{}")]),t._v(" method, you will use optional binding to return the .count of the jsonArray.count and, if it is still nil, you return '0'.")]),t._v(" "),s("p",[t._v("In your "),s("code",[t._v("override tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell{}")]),t._v(" method, again you will use optional binding on the jsonArray to access it only if the data was created properly. You will need to access the dictionary of values in the array using the indexPath.row passed to the tableView function.")]),t._v(" "),s("p",[t._v('You will then take the "eventTitle" and "eventDate" string values from your dictionary and set that cell\'s labels with this information.')]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("You will need to use the DispatchQueue.main.async {} in a callback function to update the UI, like when you call the reloadData() method on your tableView.")])]),t._v(" "),s("h2",{attrs:{id:"marks-rubric"}},[t._v("Marks Rubric")]),t._v(" "),s("h3",{attrs:{id:"create-layout-4pt"}},[t._v("Create Layout: (4pt)")]),t._v(" "),s("ul",[s("li",[t._v("TableViewController with embedded Navigation Controller "),s("strong",[t._v("(2pt)")])]),t._v(" "),s("li",[t._v("Add Bar Button Item to nav bar in table view labeled 'Load' "),s("strong",[t._v("(1pt)")])]),t._v(" "),s("li",[t._v("Give prototype cell an Identifier name "),s("strong",[t._v("(1pt)")])])]),t._v(" "),s("h3",{attrs:{id:"tableviewcontroller-class-3pt"}},[t._v("TableViewController class: (3pt)")]),t._v(" "),s("ul",[s("li",[t._v("Create IBAction for 'Load' button "),s("strong",[t._v("(1pt)")])]),t._v(" "),s("li",[t._v("Create jsonData object to hold response "),s("strong",[t._v("(2pt)")])])]),t._v(" "),s("h3",{attrs:{id:"button-action-function-7pt"}},[t._v("Button Action function: (7pt)")]),t._v(" "),s("ul",[s("li",[t._v("Create button Action "),s("strong",[t._v("(1pt)")])]),t._v(" "),s("li",[t._v("Create URL "),s("strong",[t._v("(1pt)")])]),t._v(" "),s("li",[t._v("Create Request using URL "),s("strong",[t._v("(1pt)")])]),t._v(" "),s("li",[t._v("Create Session using shared session "),s("strong",[t._v("(1pt)")])]),t._v(" "),s("li",[t._v("Create task object from session passing in request and completion handler "),s("strong",[t._v("(2pt)")])]),t._v(" "),s("li",[t._v("Execute task "),s("strong",[t._v("(1pt)")])])]),t._v(" "),s("h3",{attrs:{id:"completion-handler-request-task-function-9pt"}},[t._v("Completion Handler Request Task function: (9pt)")]),t._v(" "),s("ul",[s("li",[t._v("Create the completion handler function for the url session "),s("strong",[t._v("(2pt)")])]),t._v(" "),s("li",[t._v("If the serverError is not nil, execute the callback function passing in empty string for data and description of error message "),s("strong",[t._v("(2pt)")])]),t._v(" "),s("li",[t._v("If there was no error, convert the raw data to a utf8 json string, and execute callback passing in json string data, and nil for the error "),s("strong",[t._v("(5pt)")])])]),t._v(" "),s("h3",{attrs:{id:"callback-function-12pt"}},[t._v("Callback function: (12pt)")]),t._v(" "),s("ul",[s("li",[t._v("Output the error if it's not nil using the print method "),s("strong",[t._v("(1pt)")])]),t._v(" "),s("li",[t._v("If there is no error, print the json information to the console "),s("strong",[t._v("(1pt)")])]),t._v(" "),s("li",[t._v("Convert json string to data "),s("strong",[t._v("(2pt)")])]),t._v(" "),s("li",[t._v("Attempt to convert the data to a json object stored in the jsonData object "),s("strong",[t._v("(3pt)")])]),t._v(" "),s("li",[t._v("Catch and print out any errors in jsonData conversion "),s("strong",[t._v("(2pt)")])]),t._v(" "),s("li",[t._v("Call reloadData on tableView on main thread with dispatch async "),s("strong",[t._v("(3pt)")])])]),t._v(" "),s("h3",{attrs:{id:"tableview-numberofrowsinsection-method-3pt"}},[t._v("TableView(numberOfRowsInSection) method: (3pt)")]),t._v(" "),s("ul",[s("li",[t._v("Use optional binding to return json array count "),s("strong",[t._v("(2pt)")])]),t._v(" "),s("li",[t._v("If the json data does not exist return 0 "),s("strong",[t._v("(1pt)")])])]),t._v(" "),s("h3",{attrs:{id:"tableview-cellforrowatindexpath-method-7pt"}},[t._v("TableView(cellForRowAtIndexPath) method: (7pt)")]),t._v(" "),s("ul",[s("li",[t._v("Get a copy of the dequeued reusable cell "),s("strong",[t._v("(2pt)")])]),t._v(" "),s("li",[t._v("Use optional binding to get the jsonData object if it exists, and get the current dictionary by using the indexPath.row "),s("strong",[t._v("(3pt)")])]),t._v(" "),s("li",[t._v("Set each tableViewCell's textLabel with the 'eventTitle' and 'eventDate' values in the current json dictionary from the jsonData array "),s("strong",[t._v("(2pt)")])])]),t._v(" "),s("h3",{attrs:{id:"quality-control-30pt"}},[t._v("Quality Control (30pt)")]),t._v(" "),s("ul",[s("li",[t._v("Use a CollectionViewController with a custom CollectionViewCell with proper constraints "),s("strong",[t._v("instead of")]),t._v(" a TableViewController "),s("strong",[t._v("(15pt)")])]),t._v(" "),s("li",[t._v("Code is clear and well-commented "),s("strong",[t._v("(10pt)")])]),t._v(" "),s("li",[t._v("Application runs without errors "),s("strong",[t._v("(5pt)")])])]),t._v(" "),s("h3",{attrs:{id:"total-75pt"}},[t._v("Total: 75pt")]),t._v(" "),s("h2",{attrs:{id:"submission"}},[t._v("Submission")]),t._v(" "),s("p",[t._v("Submit a .zip file of your assignment through Brightspace.")]),t._v(" "),s("p",[t._v("Use the following naming convention for submissions:")]),t._v(" "),s("p",[s("code",[t._v("username_assignment-title.zip")]),t._v(" for example - "),s("code",[t._v("lenc0001_assignment-4.zip")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://brightspace.algonquincollege.com/d2l/lms/dropbox/user/folders_list.d2l?ou=196083&isprv=0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Section 300"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://brightspace.algonquincollege.com/d2l/lms/dropbox/user/folders_list.d2l?ou=196084&isprv=0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Section 310"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);