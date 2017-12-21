var obj = {
    name: "babylone",
    team: "Madrid",
    sponsoring: "Adidas",
    teamPlayers: 32,
    stadium: "bernabeu"
}
function object(params) {
    for (var key in params) {
        console.log(key + ": " + params[key]);
    }
}
object(obj);