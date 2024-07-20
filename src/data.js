export const apikey = 'AIzaSyDG1U-Hq2GW4j6C5NP-cX0lU5URiK1kjtM';

export const value_converter = (value)=>{
     if(value>=1000000){
        return Math.floor(value/1000000)+"M";
     }
     else if(value>=1000){
        return Math.floor(value/1000)+"K";
     }
     else{
        return value;
     }
}