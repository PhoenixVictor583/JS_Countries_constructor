class Country{
    constructor(title='Ukraine', capital='Kyiv', population=41167336, area=603549){
        this.title=title;
        this.capital=capital;
        this.population=population;
        this.area=area;
        this.showCountry =function(){
            return(`Brief information about ${title}: capital(${capital}), population(${population} people), area(${area}km^2).`)
        };
    }
}
const ukraine = new Country();
const greatBritain = new Country('United kingdom of great britain','London',63182178,242495);

function showObject(object=new Country()){
 for(let key in object){
    if (typeof object[key]!=='function') {
        console.log(`key ${key} = ${object[key]}`)};
 }
}

console.log(greatBritain.showCountry());
showObject(greatBritain);