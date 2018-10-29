var name = 'Mim roy'
var email = 'mimroy@gmail.com'

const func = () => {
    console.log(this.name,this.email);
}

var result = func()
console.log(result);