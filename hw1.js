document.addEventListener('DOMContentLoaded', function() {
	var names = [];
	var newArr = [];
	var create = document.createElement('li');

	document.getElementById('add').addEventListener('click', function(){
		var name = document.getElementById('name').value;
		var split = name.split(',');
		var list = document.getElementById('list');
		for(i=0;i<split.length;i++){
			var name = document.createElement('li');
			name.innerHTML = split[i];
			list.appendChild(name);
			names.push(split[i]);
		}
		document.getElementById('name').value = ''
	})

	console.log('test', names);

	document.getElementById('random').addEventListener('click', function(){
		var randomName = document.getElementById('randomName');
		var random = names[Math.floor(Math.random()*names.length)];
		create.innerHTML = random;
		randomName.appendChild(create);
	})

	document.getElementById('group').addEventListener('click', function(){
		var groups = document.getElementById('groups')
		var groupSize = document.getElementById('number').value;
		var lis = groups.getElementsByTagName('li');
		var randomGroup = newArr.push(names.pop(names[Math.floor(Math.random()*names.length)]));
		for(i=0;i<groupSize;i++){
		var createLi = document.createElement('li');
		createLi.innerHTML = 'hi'
		groups.appendChild(createLi);
		}})
})

