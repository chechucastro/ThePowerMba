
/*
Dado el siguiente javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

*/

const streamers1 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

if (typeof document !== 'undefined') {
	const toFilterStreamers = document.querySelector('[data-function="toFilterStreamers"]');
	if (toFilterStreamers) {
		toFilterStreamers.addEventListener('input', (event) => {
			const value = event.target.value.toLowerCase();
			const filtered = streamers1.filter(streamer => streamer.name.toLowerCase().includes(value));
			console.log(`Streamers: ${filtered.map(streamer => streamer.name)}`);
		});
	}
}