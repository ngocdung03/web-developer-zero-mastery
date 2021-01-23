- Traceroute in Window:
	+ Eg: Open cmd/tracert www.google.com
- Tags in HTML:
	- html, head, title, body
	- `h1 ~ h6`: header, biggest to smallest
	- `p`: paragraph
	- `strong`: bold
	- `em`: italicised (emphasize)
	- `ol`: ordered list (numbered list); ul: unordered list
	- `li`: list (can nest lists together)
	- self-closing tags: br (line break), hr (horizontal line), img (image)
- Image tag: 
	+ Eg: `<img src="www.google.com"> `   #src (source) is an attribute
	+ Attribute: always has a value attached to it
	+ Other attribute for image: alt (alternative text for image), width, height
- Anchor tag: <a>
	+ Eg: <a href="newpage.html">New Page</a>	#New Page: the text line will appear for hyperlink
	+ href: hypertext reference
- Common practice:
	+ Name homepage as index.html
- Form tag: 
	+ <form></form>
	+ Eg: 	<form method="GET" attribute action="action.php">  #attach information in URL (URL encoding) and send it to server; Action.php: submit the form to backend server
				# method="POST" #not display information in URL
		# Ctrl+/ to Note
		First Name: <input type="text" name="firstname"><br> #should add name attribute to every field so later can retrieve the information
	       	Email: <input typ="email" required name="email"><br>
		Password: <input type="password" minlength="5" name="pw"><br>
	       	Birthday: <input type="date" name="bd"><br>
	       	Gender: 	#radio: round option type
		<input type="radio" name="gender" value="Male">Male<br>	#name="gender": connect these options together so it will be single-option choice
	       	<input type="radio" name="gender" value="Female">Female<br>
	       	<input type="radio" name="gender" value="Other">Other<br>
	       	Pets: <br>
		<input type="checkbox" name="cat"> Cat<br>		#checkbox: square option type
		<input type="checkbox" name="dog"> Dog<br>
		Cars: <br>
		<select multiple name="cars">		#multiple: can search more with "html select tag>
			<option value="Volvo">Volvo</option> #option: dropdown type
			<option value="Audi">Audi</option>
		</select><br>
	       	<input type="submit" value="Register!">  #submit button
	       	<input type="reset">  #reset button
		</form>
- div: divide content into blocks
- span: inline element
	+ 

- Learn flex box properties: 
	https://css-tricks.com/snippets/css/a-guide-to-flexbox/
	flexboxfroggy.com
- CSS browser support reference: search in w3school OR caniuse.com
- Bootstrap 
	+ resource: getbootstrap.com
	+ Flex object: activate the flexbox system by class".d-flex"
- Required meta tags:
	+ set up webpage so that it can has good responsive design
	+ getbootstrap.com/Get-started/Introduction/Starter template/copy 2 lines of <meta>
	+ "developed mobile first"
- Full page responsive background image: https://css-tricks.com/perfect-full-page-background-image/
- Copy color: developer tool/select item
- Capitalize text: add class="text-uppercase"
- Bootstrap vertical alignment
- Email marketing service: Mailchimp. 
	+ Audience/Manage audience/Sign up form/Setting/Audience name and default
	+ Campaign/Landing Page