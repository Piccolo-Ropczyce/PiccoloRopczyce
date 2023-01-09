class klasa {
	constructor(name) {
		this.name = name
	}
}

klasa.prototype.say = function () {
	console.log(`mistrzunio ty kurwo ${this.name}`)
}

const mistrz = new klasa('Konrad')

mistrz.say()

//
