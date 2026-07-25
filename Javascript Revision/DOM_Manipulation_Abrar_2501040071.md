DOM Manipulation
A comprehensive guide to manipulating the Document Object Model (DOM) with JavaScript.
Table of Contents
What is the DOM?
Selecting Elements
Modifying Elements
Creating and Removing Elements
DOM Traversal
Events
Attributes and Properties
Classes and Styles
Best Practices
What is the DOM?
The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content.
12345678
Selecting Elements
By ID
javascript
1
By Class Name
javascript
12
By Tag Name
javascript
12
By CSS Selector (Single)
javascript
123
By CSS Selector (Multiple)
javascript
12
Modifying Elements
Text Content
javascript
123
Example
html
1
javascript
123
Creating and Removing Elements
Create Element
javascript
1234
Append Element
javascript
12345678
Remove Element
javascript
12345
Clone Element
javascript
1
DOM Traversal
Parent
javascript
12
Children
javascript
12345
Siblings
javascript
1234
Example: Traversing
html
12345
javascript
12345
Events
Adding Event Listeners
javascript
123456789
Common Events
javascript
12345678910111213141516171819202122232425
Event Object
javascript
1234567
Removing Event Listeners
javascript
123456
Event Delegation
html
12345
javascript
123456
Attributes and Properties
Get/Set Attributes
javascript
1234
Get/Set Properties
javascript
12345
Data Attributes
html
1
javascript
123456789
Classes and Styles
Classes
javascript
1234567891011121314
Styles
javascript
123456789
CSS Variables
javascript
12345
Best Practices
1. Cache DOM Queries
javascript
12345678910
2. Use DocumentFragment for Multiple Elements
javascript
12345678910111213141516171819
3. Use Event Delegation
javascript
1234567891011
4. Wait for DOM to Load
javascript
123456789
5. Use Modern Methods
javascript
1234567
Common Patterns
Toggle Visibility
javascript
123
Toggle Class Based on Condition
javascript
1
Find Closest Parent with Class
javascript
1
Check if Element is Visible
javascript
123456
Scroll to Element
javascript
1234
Quick Reference
Task
Method
Select by ID
getElementById()
Select by class
getElementsByClassName() / querySelectorAll()
Select by tag
getElementsByTagName() / querySelectorAll()
Select with CSS
querySelector() / querySelectorAll()
Create element
createElement()
Add element
appendChild() / insertBefore()
Remove element
remove() / removeChild()
Add event
addEventListener()
Remove event
removeEventListener()
Get attribute
getAttribute()
Set attribute
setAttribute()
Add class
classList.add()
Remove class
classList.remove()
Resources
MDN Web Docs - DOM
MDN - Element
MDN - Event Reference
Last Updated: 2026