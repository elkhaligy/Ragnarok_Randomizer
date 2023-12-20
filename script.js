function fetchRandomMonster() {
	const imageContainer = document.getElementById('imageContainer');

	// Clear previous image
	imageContainer.innerHTML = '';

	// Generate a random monster_id (assuming the range is from 1 to 100, adjust as needed)
	const randomMonsterId = getRandomNumber(1000,2500	);
	console.log(randomMonsterId);
	// Fetch a random image for the generated monster_id
		fetch(`https://ragnapi.com/api/v1/old-times/monsters/${randomMonsterId}`)
		.then(response => {
			// Check if the response status is OK
			if (response.ok) {
				// Parse JSON data from the response
				return response.json();
			} else {
				console.error('Error:', response.statusText);
				throw new Error('Error fetching monster data');
			}
		})
		.then(data => {
			console.log(data);
			const monsterGif = document.createElement('img');
			monsterGif.src = data.gif;
			imageContainer.appendChild(monsterGif);
		})
		.catch(error => {
			fetchRandomMonster();
			console.error('Error fetching random image:', error);
		});
}
function fetchRandomItem() {
	const imageContainer = document.getElementById('imageContainer');

	// Clear previous image
	imageContainer.innerHTML = '';

	// Generate a random monster_id (assuming the range is from 1 to 100, adjust as needed)
	const randomItemId = getRandomNumber(1000,2500);
	console.log(randomItemId);
	// Fetch a random image for the generated monster_id
		fetch(`https://ragnapi.com/api/v1/old-times/items/${randomItemId}`)
		.then(response => {
			// Check if the response status is OK
			if (response.ok) {
				// Parse JSON data from the response
				return response.json();
			} else {
				console.error('Error:', response.statusText);
				throw new Error('Error fetching monster data');
			}
		})
		.then(data => {
			console.log(data);
			const itemPng = document.createElement('img');
			itemPng.src = data.img;
			imageContainer.appendChild(itemPng);
		})
		.catch(error => {
			fetchRandomItem();
			console.error('Error fetching random image:', error);
		});
}
function getRandomNumber(min, max) {
    // Ensure that the provided values are numbers
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Both arguments must be numbers');
    }

    // Swap values if min is greater than max
    if (min > max) {
        [min, max] = [max, min];
    }

    // Generate a random number within the range [min, max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}