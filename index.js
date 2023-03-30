const names=["Guadalupe", "Ollie", "Aki"];


function writeCards(name){
    console.log(`Thank you, ${name}, for the wonderful surprise gift!`)
}
writeCards(names[0]);
writeCards(names[1]);
writeCards(names[2]);



function countDown(num){
    for(let i=0; num >= i; num--){
        console.log(num)
    }

}
countDown(10)
countDown(4)

