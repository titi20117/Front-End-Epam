var obj = {};
obj.name = "john";  
obj.weight = 75;
obj.human = true;
console.log(obj.human);
delete obj.weight;
console.log("удаляем свойство объект weight\n\n");
for (var key in obj){
    console.log(key);
};