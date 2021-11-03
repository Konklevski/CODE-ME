




const CITY_SPPED_LIMIT =50;
const TWO_LANE_EXPRESSWAY_SPEED_LIMIT=120;
const HIGHWAY_SPEED_LIMIT =140;


const CITY='city';
const EXPRESSWAY='expressway';
const HIGHWAY='highway';

let     speed=  50;
let     typeofRoad= CITY;

/*Sposób_1
if(typeofRoad===CITY&&speed<=CITY_SPPED_LIMIT){
    console.log('Miasto:Jedziesz prawidłowo')
}else if(typeofRoad===CITY&&speed>CITY_SPPED_LIMIT){
    console.log('Miasto:Jedziesz za szybko ! ! !')
}else if(typeofRoad===EXPRESSWAY&&speed<=TWO_LANE_EXPRESSWAY_SPEED_LIMIT){
    console.log('Ekspresowa trasa :Jedziesz prawidłowo !')
}
console.log('drive')
*/

//Sposób_2

if(typeofRoad===CITY){
    if(speed<=CITY_SPPED_LIMIT){
        console.log("Jedziesz prawidłowo po mieście ")
    }
        else{
            console.log('Przekraczasz predkosc')

        }
    }else if(typeofRoad===EXPRESSWAY){
        if(speed<=TWO_LANE_EXPRESSWAY_SPEED_LIMIT)
        console.log('')
    }
