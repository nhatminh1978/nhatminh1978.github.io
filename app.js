
let data =[
	{
		name:"Borderlands 3",
		url:'https://borderlands.com/en-US/'
	},
	{
		name:"Metro Exodus",
		url:'https://www.metrothegame.com/en-gb/'
	},{
		name:"Destiny 2",
		url:'https://www.bungie.net/'
	},{
		name:"Doom",
		url:'https://slayersclub.bethesda.net/en'
	},{
		name:"Apex Legends",
		url:'https://store.steampowered.com/app/1172470/Apex_Legends/'
	},{
		name:"Crysis 3",
		url:'https://store.steampowered.com/agecheck/app/1282690/'
	},
	{
		name:"Kingdom Come: Deliverance",
		url:'https://www.kingdomcomerpg.com/'
	},{
		name:"Prey",
		url:'https://store.steampowered.com/app/480490/Prey/'
	},{
		name:"Far Cry 5",
		url:'https://store.steampowered.com/app/552520/Far_Cry_5/'
	},
	{
		name:"Shadow of the Tomb Raider",
		url:'https://tombraider.square-enix-games.com/en-us'
	},

]
function newGame() {
	var randomNumber = Math.floor(Math.random() * (data.length));
	document.getElementById('gameDisplay').innerHTML = data[randomNumber].name
	document.getElementById('play_now_url').href = data[randomNumber].url
	

}

