Assignments:

-- Assignment #1
	"Hello word" program: create a module, view and controller. Bind Hello word from controller to view



-- Assignment #2
	1. Shift your Assignment #1
	2. Set the home action as a root action.
	3. Create four actions aboutme, careers, clients, toc
	4. Create four view for above actions and just place a dummy text in views.
	5. For above action the urls should be look like http://localhost/about-us, http://localhost/join-us, http://localhost/cuelogic/clients, http://locahost/terms-and-conditions respectively
	6. Place three menus in header "Home", "About Me", "Join Us", "Clients"
	7. Place one link at the footer "Terms and Conditions"
	8. Hyperlink menus/links with appropriate controller actions.



-- Assignment #3
	Create a partials for menu and footer. Use these partials into 2nd assignment.


-- Assignment #4
	1. Create a login link in header, create a login form. It should have text field for username and password. For should have following validations.
		- Text field should not empty
		- Username should be email id only
		- Submit button should be disable if form has any erros
	2. All other pages should not abe accisible without login
	3. Create a helper function to send HTTP API post request to validate login information.
	4. There are 2 scenarios
		- If login details are valid, user should redirect to home page
		- If login details are invalid, show appropriate error message
