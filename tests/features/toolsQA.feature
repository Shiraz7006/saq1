Feature: ToolsQA User Interface 

Scenario:Searching from book store application produces correct book details
Given I provide following information
Given A web browser is at the given link
When the user clicks the book store application
When the user searches for book from the search bar
When the user clicks the book
Then the user verifies that correct book details are shown on the webpage
|Headings     | inputs                                    |
|ISBN         |      9781449331818                        |   
|Title        |"Learning JavaScript Design Patterns"      |
|sub_Title    |"A JavaScript and jQuery Developer's Guide"|
|Author       |"Addy Osmani"                              |
|Publisher    |"O'Reilly Media"                           |
|Total_Pages  |254                                        | 


Scenario:The practice form is filled correctly by the given data
Given A web browser is at the given page
When the user clicks the forms button
When the user selects practise form
When the text data is filled by the user
When the file of pic is entered by the user
Then the format of file is verified by the user


