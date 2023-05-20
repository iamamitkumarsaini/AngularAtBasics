/*
let commanman = {
    title:"Bruce"
};

let addPower = function(power:number){
    return function(hero:any){
        return{
            title:hero.title,
            power:power
        }
    }
};

// let tempCommonman = addPower(7)(commanman)
// commanman = tempCommonman(commanman)

// let tempCommonman = addPower(7)(commanman)
// console.log(commanman)
*/

let AddPower = function(power:number){
    return function(targetClass:any){
        return class{
            title:string = new targetClass().title
            power:number = power;
        }
    }
}

@AddPower(18)
class CommanMan{
    title:string = "Bruce";
}

// console.log( new CommanMan().power)