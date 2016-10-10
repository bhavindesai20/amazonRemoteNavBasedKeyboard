/*a b c d e f g 

h i j k l m n 

o p q r s t u

v w x y z */


var currentItem={};
var focusChange={};
var inputString = "";

window.onload = function() {
    document.getElementById("searchterm").innerHTML = inputString;
}

var keynavigation = [
	{key: 'a', left: '', up: '', down: 'h', right: 'b'	},
	{key: 'b', left: 'a', up: '', down: 'i', right: 'c'},
	{key: 'c', left: 'b', up: '', down: 'j', right: 'd'},
	{key: 'd', left: 'c', up: '', down: 'k', right: 'e'},
	{key: 'e', left: 'd', up: '', down: 'l', right: 'f'},
	{key: 'f', left: 'e', up: '', down: 'm', right: 'g'},
	{key: 'g', left: 'f', up: '', down: 'n', right: '1'	},
	{key: 'h', left: '', up: 'a', down: 'o', right: 'i'},
	{key: 'i', left: 'h', up: 'b', down: 'p', right: 'j'},
	{key: 'j', left: 'i', up: 'c', down: 'q', right: 'k'},
	{key: 'k', left: 'j', up: 'd', down: 'r', right: 'l'},
	{key: 'l', left: 'k', up: 'e', down: 's', right: 'm'},
	{key: 'm', left: 'l', up: 'f', down: 't', right: 'n'},
	{key: 'n', left: 'm', up: 'g', down: 'u', right: '4'},
	{key: 'o', left: '', up: 'h', down: 'v', right: 'p'},
	{key: 'p', left: 'o', up: 'i', down: 'w', right: 'q'},
	{key: 'q', left: 'p', up: 'j', down: 'x', right: 'r'},
	{key: 'r', left: 'q', up: 'k', down: 'y', right: 's'},
	{key: 's', left: 'r', up: 'l', down: 'z', right: 't'},
	{key: 't', left: 's', up: 'm', down: '', right: 'u'},
	{key: 'u', left: 't', up: 'n', down: '', right: '7'	},
	{key: 'v', left: '', up: 'o', down: '', right: 'w'	},
	{key: 'w', left: 'v', up: 'p', down: '', right: 'x'},
	{key: 'x', left: 'w', up: 'q', down: '', right: 'y'},
	{key: 'y', left: 'x', up: 'r', down: '', right: 'z'},
	{key: 'z', left: 'y', up: 's', down: '', right: '0'	},
	{key: '1', left: 'g', up: '', down: '4', right: '2'	},
	{key: '2',  left: '1', up: '', down:'5', right:'3'},
	{key: '3',  left: '2', up: '', down:'6', right:''},
	{key: '4',  left: 'n', up: '1', down:'7', right:'5'},
	{key: '5',  left: '4', up: '2', down:'8', right:'6'},
	{key: '6',  left: '5', up: '3', down:'9', right:''},
	{key: '7',  left: 'u', up: '4', down:'0', right:'8'},
	{key: '8',  left: '7', up: '5', down:'0', right:'9'},
	{key: '9',  left: '8', up: '6', down:'0', right:''},
	{key: '0',  left: 'z', up: '8', down:'', right:''}
];

function getKeyNavigation(itemId){
	return keynavigation.filter(function(item) {
		return (item.key === itemId);
	});
}

function setCurrentItem(item){
	currentItem = item;
}

function getCurrentItem(){
	return currentItem;
}


function focusElement(elementId){
	var ele = document.getElementById(elementId);
	if (ele) {
      ele.focus();
    } else {
      setTimeout(focusElement.bind(this,elementId));
    }
}

function eventPropWithFocus(item){
	focusElement(item);
	event.preventDefault();
    event.stopImmediatePropagation();
}

function eventPropWithFocus(){
	event.preventDefault();
    event.stopImmediatePropagation();
}


function keydown(event){
	var rightItem = getCurrentItem().id;
	var navItem = getKeyNavigation(rightItem)[0];
	var searchBox = document.getElementById("searchterm");
	if(event.keyCode === 13){
		searchBox.value = searchBox.value+''+ navItem.key;
		event.preventDefault();
		event.stopImmediatePropagation();
	}

	if(event.code === 'ArrowRight' || event.keyIdentifier === 'Right') {
		if(navItem.right){
			focusElement(navItem.right);
			event.preventDefault();
		    event.stopImmediatePropagation();
		}
		else{
			event.preventDefault();
		    event.stopImmediatePropagation();
		}	
	}

	if(event.code === 'ArrowLeft' || event.keyIdentifier === 'Left') {
		if(navItem.left){
			focusElement(navItem.left);
			event.preventDefault();
		    event.stopImmediatePropagation();
		}
		else{
			eventPropWithFocus();
		}	
	}

	if(event.code === 'ArrowUp' || event.keyIdentifier === 'Up') {
		if(navItem.up){
			focusElement(navItem.up);
			event.preventDefault();
		    event.stopImmediatePropagation();
		}
		else{
			eventPropWithFocus();
		}	
	}

	if(event.code === 'ArrowDown' || event.keyIdentifier === 'Down') {
		if(navItem.down){
			focusElement(navItem.down);
			event.preventDefault();
		    event.stopImmediatePropagation();
		}
		else{
			eventPropWithFocus();
		}	
	}

}


focusElement('a');