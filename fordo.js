

const itemForm = document.getElementById('addItemForm');
const allItems = document.getElementById('itemList');
const takenItems = document.getElementById('takenList');
const existingItems = JSON.parse(localStorage.getItem('items')) || [];


existingItems.forEach((item) => {
            const saveItem = document.createElement('li');
            saveItem.textContent = item;
			
			const saveItem1 = document.createElement('li');
            saveItem1.textContent = item;
			
 			const removeButton1 = document.createElement('button');
			removeButton1.textContent = 'Delete';

			removeButton1.addEventListener('click', () => {
				takenItems.appendChild(saveItem1);
				allItems.removeChild(saveItem);
            });
			
        saveItem.appendChild(removeButton1);
		
        allItems.appendChild(saveItem);
        });


itemForm.addEventListener('submit', function (event) {
		event.preventDefault();

		const itemName = document.getElementById('addNeed').value;
		let itemQuantity = document.getElementById('addQuantity').value;
		
		if(itemQuantity!='')
		{
			itemQuantity = ' - ' + itemQuantity;
		}
		
		const both = `${itemName}  ${itemQuantity}`;
        existingItems.push(both);
        localStorage.setItem('items', JSON.stringify(existingItems)); 
		
		
		const takenItem = document.createElement('li');
		takenItem.textContent = both;
		
		
		const listItem = document.createElement('li');
		listItem.textContent = both;
		
		
		const removeButton = document.createElement('button');
		removeButton.textContent = 'Delete';
		removeButton.style.textAlign = 'right';

        removeButton.addEventListener('click', () => {
				takenItems.appendChild(takenItem);
				allItems.removeChild(listItem);
            });	
		
        listItem.appendChild(removeButton);
		allItems.appendChild(listItem);

		addItemForm.reset();
	});



/*
itemForm.addEventListener('submit', function (event) {
		event.preventDefault();

		const itemName = document.getElementById('addNeed').value;
		const itemQuantity = document.getElementById('addQuantity').value;
		
		const listItem = document.createElement('li');
		listItem.textContent = `${itemName} - ${itemQuantity}`;
		
		const takenItem = document.createElement('li');
		takenItem.textContent = `${itemName} - ${itemQuantity}`;
		
		const both = `${itemName} (${itemQuantity})`;
        existingItems.push(both);
        localStorage.setItem('items', JSON.stringify(existingItems));
	
				  var name = `${itemName} (${itemQuantity})`;
				  if (name) {
					var li = document.createElement("li");
					li.textContent = name;
					list.appendChild(li);
				  }
		
		const removeButton = document.createElement('button');
		removeButton.textContent = 'Taken';

        removeButton.addEventListener('click', () => {
				takenItems.appendChild(takenItem);
				allItems.removeChild(listItem);
            });
			
        listItem.appendChild(removeButton);
		allItems.appendChild(listItem);

		addItemForm.reset();
	});
	
*/
function clearFunction(){
	localStorage.removeItem('items');
	//const contactList = document.getElementById('allItems');
	allItems.innerHTML = '';
	takenItems.innerHTML = '';
};

/*
function deleteButtton(deleteItem){ 

	var index = existingItems.indexOf(deleteItem);
	if (index > -1) {
	  existingItems.splice(index, 1);
	  localStorage.setItem('items', JSON.stringify(existingItems));
	}
};
*/




