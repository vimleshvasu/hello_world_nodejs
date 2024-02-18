
// 💥💥💥 JSON to Object ,,we will use ✨JSON.parse() 
const jsonString = '{ "name":"vimlesh", "age":24,"course":"nodejs"}';

const jsnToObject = JSON.parse(jsonString);
console.log(jsnToObject);
console.log(typeof jsnToObject);


// 💥💥💥object to json ,,we use JSON.stringfy
const objectString = {
    name:"vasu",
    age:24,
    course:"nodejs"
}

const json = JSON.stringify(objectString);
console.log(json);
console.log(typeof json);

