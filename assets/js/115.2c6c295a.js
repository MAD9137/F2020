(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{539:function(t,e,s){"use strict";s.r(e);var i=s(53),a=Object(i.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"constraints-for-different-size-classes"}},[t._v("Constraints for Different Size Classes")]),t._v(" "),s("h2",{attrs:{id:"introduction-to-size-classes"}},[t._v("Introduction to Size Classes")]),t._v(" "),s("p",[t._v("In iOS development, there are many shapes and sizes of devices that you can build for.  In order to build an application that looks good and functions well for different screen sizes and orientations, you will need to learn to build an adaptive layout.  You have seen how to add constraints on UI objects to build an auto-layout, but you may notice that your layout that looked good on an iPhone 8 looks sparse and clumsy on an iPad.  The same layout will also be unusable on an iPhone 8 in landscape mode if the bottom portion of the layout is cutoff below the bottom of the screen.")]),t._v(" "),s("p",[t._v("So, you need a way of changing the layout of your application for different sizes of screen and what orientations your application might be running on.  The solution Apple created lets you change the layout based on something called "),s("strong",[t._v("Size Classes")]),t._v(".")]),t._v(" "),s("p",[t._v("Size Classes are a way of arbitrarily describing the size of a screen - namely the width and height of any screen, and screen orientation.  When you open your storyboard in the Xcode editor, you will see an option that displays "),s("strong",[t._v("View as: iPhone 8 (wC hR)")]),t._v(".  Clicking this option lets you choose different devices and orientations to display the views in your storyboard as.  This is also where you can see the Size Class information displayed for each device (and orientation).")]),t._v(" "),s("p",[t._v("For all iOS devices, the Sizes Class defines the height and width as being "),s("strong",[t._v("Compact")]),t._v(" or "),s("strong",[t._v("Regular")]),t._v(" sized.  These are arbitrary units of measures that define a general amount of size for width and height "),s("em",[t._v("regardless")]),t._v(' of screen size or pixel density.  The iPhone 8 in portrait orientation has a Size Class of (wC hR) or "width = Compact, height = Regular", in fact all of the models of iPhones in portrait mode have a Size Class of (wC hR).')]),t._v(" "),s("p",[t._v("All iPhone models before iPhone 8 Plus displayed in landscape orientation has a Size Class of (wC hC), whereas the iPhone 8 Plus has (wR hC).  All iPads have (wR hR) in both portrait and landscape orientation.  The following table shows some of the current iOS devices in both orientations and their associated Size Class values.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("Device")])]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("Orientation")])]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("Width")])]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("Height")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("iPad")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Portrait")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")])]),t._v(" "),s("tr",[s("td",[t._v("iPad")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Landscape")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")])]),t._v(" "),s("tr",[s("td",[t._v("iPhone")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Portrait")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("C")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")])]),t._v(" "),s("tr",[s("td",[t._v("iPhone")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Landscape")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("C")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("C")])]),t._v(" "),s("tr",[s("td",[t._v("iPhone 8 Plus")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Portrait")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("C")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")])]),t._v(" "),s("tr",[s("td",[t._v("iPhone 8 Plus")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Landscape")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("C")])])])]),t._v(" "),s("h2",{attrs:{id:"installing-uninstalling-constraints-for-different-size-classes"}},[t._v("Installing/Uninstalling Constraints for different Size Classes")]),t._v(" "),s("p",[t._v("For this lesson, we will look at an application that displays two basic views vertically in portrait mode: one blue one red.  If you need help remembering how to connect constraints to a UI object, review last week's lessons.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/F2020/assets/img/SizeClassConstraints_01.png",alt:"Constraints"}})]),t._v(" "),s("p",[t._v("We will add constraints to the top view's "),s("strong",[t._v("Leading")]),t._v(", "),s("strong",[t._v("Top")]),t._v(" and "),s("strong",[t._v("Trailing Edge")]),t._v(' to "Safe Area".')]),t._v(" "),s("p",[s("img",{attrs:{src:"/F2020/assets/img/SizeClassConstraints_02.png",alt:"Constraints"}})]),t._v(" "),s("p",[t._v("Then add constraints to the bottom view's "),s("strong",[t._v("Leading")]),t._v(", "),s("strong",[t._v("Bottom")]),t._v(" and "),s("strong",[t._v("Trailing Edge")]),t._v(' to "Safe Area".')]),t._v(" "),s("p",[s("img",{attrs:{src:"/F2020/assets/img/SizeClassConstraints_03.png",alt:"Constraints"}})]),t._v(" "),s("p",[t._v("Next, make the top view's height equal to the main view's height.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/F2020/assets/img/SizeClassConstraints_04.png",alt:"Constraints"}})]),t._v(" "),s("p",[t._v("Then, locate this constraint in the Size Inspector and "),s("strong",[t._v("double-click")]),t._v(" on it to open the parameters of the constraint (don't click the edit button).")]),t._v(" "),s("p",[s("img",{attrs:{src:"/F2020/assets/img/SizeClassConstraints_05.png",alt:"Constraints"}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("You can also open the parameters the constraints by clicking on each constraint in the Document Outline.  You can see the location of the constraints in the Document Outline in the left side of the Editor in the image below.")])]),t._v(" "),s("p",[t._v("This will show you the parameters for that specific Equal Heights constraint in the Size Inspector on the right.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/F2020/assets/img/SizeClassConstraints_06.png",alt:"Constraints"}})]),t._v(" "),s("p",[t._v("You will want to set the multiplier to about 0.44 from its current value (just to keep the numbers simple).  This sets the top view to be a little bit less than half the height of the Superview.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/F2020/assets/img/SizeClassConstraints_07.png",alt:"Constraints"}})]),t._v(" "),s("p",[t._v("Then, set the bottom view's height equal to the top view, so if the top changes on a different device the bottom will always be the same.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/F2020/assets/img/SizeClassConstraints_08.png",alt:"Constraints"}})]),t._v(" "),s("p",[t._v("Now double-click this new Equal Height constraint in the Size Inspector on the right to edit the values.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/F2020/assets/img/SizeClassConstraints_09.png",alt:"Constraints"}})]),t._v(" "),s("p",[t._v("You will need to set the multiplier to 1 if it is not already.  This sets the bottom view to be the exact same size as the top view.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/F2020/assets/img/SizeClassConstraints_10.png",alt:"Constraints"}})]),t._v(" "),s("p",[t._v("This finishes the constraints for this layout in portrait mode.  However, if you switch to landscape mode the layout looks very short and wide, but this should be expected because of the way the constraints have been set up.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/F2020/assets/img/SizeClassConstraints_11.png",alt:"Constraints"}})]),t._v(" "),s("h2",{attrs:{id:"adding-a-layout-for-a-different-size-class"}},[t._v("Adding a Layout for a Different Size Class")]),t._v(" "),s("p",[t._v("To add constraints for a different Size Class, start by switching to that view in the storyboard within the editor.  Then, at the bottom of the editor, click on the button called "),s("strong",[t._v("Vary for Traits")]),t._v(" (circled in the image above).  This will show a pop-up dialog that lets you choose to modify the layout based on the the height (or width) change being detected.  For the iPhone 8, the Size Class in portrait mode is (wC hR), while in landscape it is (wC hC), so the height is what changes and, therefore, needs to be selected.  After selecting, you simply click outside the dialog to close it.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/F2020/assets/img/SizeClassConstraints_12.png",alt:"Constraints"}})]),t._v(" "),s("p",[t._v("You will see the bottom bar has turned blue, indicating you are currently editing an additional Size Class.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/F2020/assets/img/SizeClassConstraints_13.png",alt:"Constraints"}})]),t._v(" "),s("p",[t._v("In this mode you can "),s("strong",[t._v("uninstall the constraints")]),t._v(" related to portrait mode.  To uninstall the constraints for each UI object, select each constraint in the Size Inspector and press "),s("strong",[t._v("delete")]),t._v(" button on your keyboard.  You will see that the constraint does not disappear, instead it gets greyed out and is re-ordered at the bottom.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/F2020/assets/img/SizeClassConstraints_14.png",alt:"Constraints"}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("You can also uninstall a constraint by opening the Attributes Inspector after clicking on each constraint in the Document Outline.  You will see a check box at the bottom of each constraint indicating if it is installed for the different size classes you have setup.")])]),t._v(" "),s("p",[t._v("You need to uninstall all of the constraints for each of the views we want to rearrange in the layout.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/F2020/assets/img/SizeClassConstraints_15.png",alt:"Constraints"}})]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("You will only see the greyed out 'uninstalled' constraint when you are viewing "),s("strong",[t._v("All")]),t._v(" constraints, instead of just of This Size Class constraints.  You can see this option circled in the image above.")])]),t._v(" "),s("p",[t._v("Next, you can rearrange and resize the views in the landscape layout.  This is when the blue view from the top can be placed on the left, and the red view to the right.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/F2020/assets/img/SizeClassConstraints_16.png",alt:"Constraints"}})]),t._v(" "),s("p",[t._v("We then need to do a similar job, installing (adding) constraints to these views.  The blue view on the left will need the "),s("strong",[t._v("Top")]),t._v(", "),s("strong",[t._v("Leading")]),t._v(", and "),s("strong",[t._v("Bottom")]),t._v(' edges set to the "Safe Area".  The red view to the right needs the '),s("strong",[t._v("Top")]),t._v(", "),s("strong",[t._v("Trailing")]),t._v(", and "),s("strong",[t._v("Bottom")]),t._v(' edges connected to the "Safe Area".')]),t._v(" "),s("p",[s("img",{attrs:{src:"/F2020/assets/img/SizeClassConstraints_17.png",alt:"Constraints"}})]),t._v(" "),s("p",[t._v("Then, take the first view and set its width equal to the Superview's width.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/F2020/assets/img/SizeClassConstraints_18.png",alt:"Constraints"}})]),t._v(" "),s("p",[t._v('Double-click on this new "Equal Width" constraint to view its parameters.')]),t._v(" "),s("p",[s("img",{attrs:{src:"/F2020/assets/img/SizeClassConstraints_19.png",alt:"Constraints"}})]),t._v(" "),s("p",[t._v("This shows the constraint's parameters in the Size Inspector on the right.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/F2020/assets/img/SizeClassConstraints_20.png",alt:"Constraints"}})]),t._v(" "),s("p",[t._v("Set the multiplier to 0.45 to set the width of the left view to be less than half the width of the main view.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/F2020/assets/img/SizeClassConstraints_21.png",alt:"Constraints"}})]),t._v(" "),s("p",[t._v("The red view on the right needs its width set to the left blue view's width.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/F2020/assets/img/SizeClassConstraints_22.png",alt:"Constraints"}})]),t._v(" "),s("p",[t._v("This sets the both views width to the same width Multiplier of the main view, and will finish the setup of the additional layout.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/F2020/assets/img/SizeClassConstraints_23.png",alt:"Constraints"}})]),t._v(" "),s("p",[t._v("To end editing the additional constraints, you must click the "),s("strong",[t._v("Done Varying")]),t._v(" button at the bottom of the editor.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/F2020/assets/img/SizeClassConstraints_24.png",alt:"Constraints"}})]),t._v(" "),s("p",[t._v("This turns the bottom bar grey again and shows the device and orientation options once again.  Now the layout looks correct in both portrait and landscape mode.")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/modules/week9/#during-class"}},[t._v("Back to Week 9")])],1)])}),[],!1,null,null,null);e.default=a.exports}}]);