var array=new Array();
array=["varsan","jega","jaswanth","goms","Jeba starlin"];
for(let i=0;i<array.length;i++){
    if(array[i][0]=='J' || array[i][0]=='j'){
        console.log("Goodbye J"+array[i]);
    }
    else{
        console.log("Hello "+array[i]);
    }
}
