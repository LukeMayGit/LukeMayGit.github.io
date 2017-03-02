/* Page Animations */
var page_top = "closed";
var page_btm = "closed";
var page_lft = "closed";
var page_rgt = "closed";

// Opens the top page.
function open_page_top() {
	switch(page_top) {
		case "closed":
			// Checks if other tabs are open.
			if (page_btm = "open")
			{
				open_page_btm();
			}			
			if (page_lft = "open")
			{
				open_page_lft();
			}
			if (page_rgt = "open")
			{
				open_page_rgt();
			}
			// Opens the tab.
			document.getElementById("menu1").style.height = "100%";
			//document.getElementById("btn1").style.top = "100%";
			page_top = "open";
			break;
		case "open":
			document.getElementById("menu1").style.height = "0";
			//document.getElementById("btn1").style.top = "0";
			page_top = "closed";
			break;
	}
}

// Opens the left page.
function open_page_lft() {
	switch(page_lft) {
		case "closed":
			// Checks if other tabs are open.
			if (page_btm = "open")
			{
				open_page_btm();
			}			
			if (page_top = "open")
			{
				open_page_top();
			}
			if (page_rgt = "open")
			{
				open_page_rgt();			}

			document.getElementById("menu2").style.width = "100%";
			//document.getElementById("btn2").style.left = "100%";
			page_lft = "open";
			break;
		case "open":
			document.getElementById("menu2").style.width = "0";
			//document.getElementById("btn2").style.left = "0";
			page_lft = "closed";
			break;
	}
}

// Opens the right page.
function open_page_rgt() {
	switch(page_rgt) {
		case "closed":
			// Checks if other tabs are open.
			if (page_btm = "open")
			{
				open_page_btm();
			}			
			if (page_lft = "open")			
			{
				open_page_lft();
			}
			if (page_top = "open")
			{
				open_page_top();
			}

			document.getElementById("menu3").style.width = "100%";
			//document.getElementById("btn3").style.right = "100%";
			page_rgt = "open";
			break;
		case "open":
			document.getElementById("menu3").style.width = "0";
			//document.getElementById("btn3").style.right = "0";
			page_rgt = "closed";
			break;
	}
}

// Opens the bottom page.
function open_page_btm() {
	switch(page_btm) {
		case "closed":
			// Checks if other tabs are open.
			if (page_top = "open")
			{
				open_page_top();
			}			
			if (page_lft = "open")
			{
				open_page_lft();
			}
			if (page_rgt = "open")
			{
				open_page_rgt();
			}

			document.getElementById("menu4").style.height = "100%";
			//document.getElementById("btn4").style.bottom = "100%";
			page_btm = "open";
			break;
		case "open":
			document.getElementById("menu4").style.height = "0";
			//document.getElementById("btn4").style.bottom = "0";
			page_btm = "closed";
			break;
	}
}
