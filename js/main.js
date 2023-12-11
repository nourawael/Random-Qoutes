var quots=[
    {"author":"Mourid Barghouti",
     "quote":"The fish Even in the fisherman's net Still carries The smell of the sea"
    },
    {"author":"Ibn 'Ata' Allah Al-Iskandari",
     "quote":"What has he found who has lost God? And what has he lost who has found God?"
    },
    {"author":"Mourid Barghouti",
     "quote":"The homeland does not leave the body until the last moment, the moment of death"
    },
    {"author":"Radwa Ashour",
     "quote":"فـ إن الـقرأن شـفاء للـصـدور الـمحزونـة"
    },
    {"author":"Ghassan Kanafani",
     "quote":"If the Olive Trees knew the hands that planted them, Their Oil would become Tears."
    },
    {"author":"Radwa Ashour",
     "quote":"Palestine. For most of us, the word brings to mind a series of confused images and disjointed associations-massacres, refugee camps, UN resolutions, settlements, terrorist attacks, war, occupation, checkered kouffiyehs and suicide bombers, a seemingly endless cycle of death and destruction"
    },
    {"author":"Ghassan Kanafani",
     "quote":"They steal your bread, then give you a crumb of it…Then they demand you to thank them for their generosity… O their audacity!."
    },
    {"author":"Khalil Gibran",
     "quote":"Generosity is giving more than you can, and pride is taking less than you need."
    },
    {"author":"Amal Dunqul",
     "quote":"Do not reconcile even if they give you gold, I wonder if I were to gouge out your eyes and replace them with two gems, would you see?These things are priceless."
    },
    {"author":"Ghassan Kanafani",
    "quote":"You have something in this world.So, stand for it."
    }
];
var quotNumber=[];

//checking if random number is repeated within an array.
function isRepeated(number,arr){
    for(var i =0; i<arr.length ;i++){
        if(arr[i]===number){
            return true;
        }
    }
    return false;
}

//fill the array of random numbers.
function fillArray(){
    for(var i=0 ; i<=quots.length-1; i++){
        if(quotNumber.length===0){
        quotNumber.push(Math.floor(Math.random()*quots.length));
        
    }else{
        var num=Math.floor(Math.random()*quots.length);
        while(isRepeated(num,quotNumber)&&quotNumber.length<quots.length){
            var num=Math.floor(Math.random()*quots.length);
            // console.log(num);
        }
        
        quotNumber.push(num);
        // console.log(quotNumber);
       
    }
    }
}

//calling the function to fill the array for the first time the website is opened
fillArray();

//a counter to loop the array of randoms.
var count=0;
function generate(){
  if(count<quots.length){
        console.log("count before"+count);
        document.getElementById("randomQuote").innerHTML='"'+quots[quotNumber[count]].quote+'"';
        document.getElementById("randomQuoteAuthor").innerHTML="-"+quots[quotNumber[count]].author;

        console.log(quotNumber);
        console.log(quotNumber[count]);
        // console.log(quots[quotNumber[count]].quote);
        // console.log(quots.length);
        count++;
        
        console.log("count after"+count);
    }
    else{
        count=0;
        quotNumber=[];
        console.log(quotNumber);
        //filling the array allover
        fillArray();
        console.log(quotNumber);
        console.log("count else"+count);

    }
    
}



