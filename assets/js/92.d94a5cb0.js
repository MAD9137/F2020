(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{517:function(e,t,a){"use strict";a.r(t);var n=a(53),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"navigating-with-a-navigation-controller"}},[e._v("Navigating with a Navigation Controller")]),e._v(" "),a("p",[e._v("Yet another commonly used way to control navigation from one view to another is to embed a "),a("strong",[e._v("NavigationController")]),e._v(" in the main view of your application.  A NavigationController embedded in a view can manage navigation to additional views connected by segues, and back to the initial view that contains the NavigationController.")]),e._v(" "),a("h2",{attrs:{id:"embedding-a-navigationcontroller-in-a-view"}},[e._v("Embedding a NavigationController in a View")]),e._v(" "),a("p",[e._v("To learn how to use a NavigationController, we will continue from the tableView example project built in this weeks lessons.  A NavigationController embedded in a view can manage navigation to additional views connected by a segue, and back to the initial view the navigationController is embedded in.")]),e._v(" "),a("p",[e._v("The following image shows the project's storyboard with the existing tableView and a new second basic viewController added to the storyboard.  This new viewController has a label displaying the text “Second View”.  It also has a new viewController class called SecondViewController that has been setup to control this new view.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/F2020/assets/img/NavController_1.png",alt:"Navigation Controller"}})]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Always remember to set your new view's Custom Class in the Identity Inspector within your storyboard.")])]),e._v(" "),a("p",[e._v("Just to review, in your existing custom tableViewController class in the sample project, you have the array with 7 elements that is used to create the tableViewCells.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/F2020/assets/img/NavController_2.png",alt:"Navigation Controller"}})]),e._v(" "),a("p",[e._v("The idea here is that you want to have each cell in the table be a clickable button that will navigate to the next view.  We want the NavigationController to add and manage the interface to let us navigate to the next view and back.")]),e._v(" "),a("h2",{attrs:{id:"embed-a-navigationcontroller-in-view"}},[e._v("Embed a NavigationController in View")]),e._v(" "),a("p",[e._v("Start by selecting the view in the storyboard you want as the initial root view for the navigation - in this case the tableView.  Then, click on the Editor menu at the top and selection Embed In -> Navigation Controller.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/F2020/assets/img/NavController_3.png",alt:"Navigation Controller"}})]),e._v(" "),a("p",[e._v('You will see a few things change in your storyboard, the first of which is that the new navigationController has been added, looking like an entirely new view that is grey with the words "Navigation Controller" written on it.')]),e._v(" "),a("p",[e._v("If the original view had previously been set to the initial view, the navigationController will instead be set to the initial view of the application.  You can also see the navigationController is connected to the tableView by an arrow with a symbol on it.  This is called a "),a("strong",[e._v("Segue")]),e._v(" and will navigate to the first view of the tableView when the application loads the navigationController.")]),e._v(" "),a("h2",{attrs:{id:"connecting-a-segue"}},[e._v("Connecting a Segue")]),e._v(" "),a("p",[e._v("Next, we want to connect the tableView's prototype cell with a segue to the second view.  When you connect the Prototype Cell of a table to another view it will make a segue connection for each cell created in the table to that second view.")]),e._v(" "),a("p",[e._v("To connect this segue, start by selecting your tableView's prototype cell in the storyboard.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/F2020/assets/img/NavController_4.png",alt:"Navigation Controller"}})]),e._v(" "),a("p",[e._v("Press and hold the control key and mouse click (Control+click) on the selected cell and drag the connection out from the cell.  Drag it to the view you want to connect to - in this case the one labeled Second View.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/F2020/assets/img/NavController_5.png",alt:"Navigation Controller"}})]),e._v(" "),a("p",[e._v("When it highlights the second view in blue, let go of the mouse button and a menu will pop up.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/F2020/assets/img/NavController_6.png",alt:"Navigation Controller"}})]),e._v(" "),a("p",[e._v("In the menu that opens up, under the Segue Selection heading, select the "),a("strong",[e._v("Show")]),e._v(" option.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/F2020/assets/img/NavController_7.png",alt:"Navigation Controller"}})]),e._v(" "),a("p",[e._v("Now, when you run the application the will see the tableView has a grey horizontal bar across the top of it.  This is the navigationController and will show buttons as you navigate away from the initial view.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/F2020/assets/img/NavController_8.png",alt:"Navigation Controller"}})]),e._v(" "),a("p",[e._v("Each cell in the tableView will now work as a button letting the user click on it and segue to the second view.")]),e._v(" "),a("p",[e._v("The second view will also show the grey navigationController bar that has persisted at the top, now with a Back button in it created by the navigation. This button has been created by the navigationController, and pressing it tells the navigationController to unwind the segue back to the previous view.")]),e._v(" "),a("h2",{attrs:{id:"unwinding-segue-with-navigation-controller"}},[e._v("Unwinding Segue with Navigation Controller")]),e._v(" "),a("p",[e._v("If you want to programmatically unwind a segue in your code while using a NavigationController, you need to call the following function:")]),e._v(" "),a("div",{staticClass:"language-swift line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[e._v("navigationController"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("popViewController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("animated"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("If you want to unwind all the segues back to the initial view, you can simply call this:")]),e._v(" "),a("div",{staticClass:"language-swift line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[e._v("navigationController"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("popToRootViewController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("animated"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"passing-values-from-a-tableviewcell-to-a-second-viewcontroller"}},[e._v("Passing values from a TableViewCell to a second ViewController")]),e._v(" "),a("p",[e._v("In the last lesson, you used the IndexPath.row value passed into the tableView(tableView, cellForRowAt indexPath) function to access each array object and get information for each cell in the tableView.  When using a TableView where you have your Prototype Cell connected to segue to another view and you want to pass information about that specific cell the user tapped, you will need the identify what cell was tapped as you prepare to segue to the next view.")]),e._v(" "),a("p",[e._v("In your "),a("code",[e._v("override func prepare(for segue: UIStoryboardSegue, sender: Any?)")]),e._v(" function you can get the number of the cell that was tapped to triggered the segue using the following code:")]),e._v(" "),a("div",{staticClass:"language-swift line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" indexPathRow "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" tableView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("indexPathForSelectedRow"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("row\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("This gets the currently selected tableViewCell's row number as an Int, which can be used to as an index for getting that cell's data from an array like this:")]),e._v(" "),a("div",{staticClass:"language-swift line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" currentUser "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" userArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("indexPathRow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("This will let you access the corresponding data to pass to the next viewController class.")]),e._v(" "),a("p",[e._v("The following videos give you more knowledge about navigating between multiple views in your application.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://app.pluralsight.com/course-player?clipId=85f6fc73-cdcd-4d51-aac9-fe75a47dfc8e",target:"_blank",rel:"noopener noreferrer"}},[e._v("iOS 11 Fundamentals - Choosing a Navigation Method for Multiple View Controllers "),a("Badge",{attrs:{text:"Pluralsight"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://app.pluralsight.com/course-player?clipId=05997bc1-2616-4f1e-b763-822531782c32",target:"_blank",rel:"noopener noreferrer"}},[e._v("iOS 11 Fundamentals - Adding a Navigation Controller to an Existing Project "),a("Badge",{attrs:{text:"Pluralsight"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://app.pluralsight.com/course-player?clipId=63f9a169-beac-4224-8915-439359659d84",target:"_blank",rel:"noopener noreferrer"}},[e._v("iOS 11 Fundamentals - Creating a Tabbed Application "),a("Badge",{attrs:{text:"Pluralsight"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://app.pluralsight.com/course-player?clipId=18de4f3f-2c73-49cd-859a-de794d8e636a",target:"_blank",rel:"noopener noreferrer"}},[e._v("iOS 11 Fundamentals - Creating iOS Apps with Multiple Screens Summary "),a("Badge",{attrs:{text:"Pluralsight"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/modules/week5/#during-class"}},[e._v("Back to Week 5")])],1)])}),[],!1,null,null,null);t.default=o.exports}}]);