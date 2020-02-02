let blocks =8;


for(i=0; i<blocks; i++){ //height
    
    // console.log("d");
    let line = "|"; // space maker for line change
    
    if(i%2!=0){
        for(j=0; j<=blocks; j++){ //width
            if(j%2!=0){
                line+=" * "
            }
            else if(j%2==0){
                line+="   "
            }
        }
    } 
    else{
        for(j=0;j<=blocks;j++){
            if(j%2!=0){
                line+="   ";
            }
            else{
                line+=" * ";
            }
        }
    }   
/*
    for(j=0; j<=blocks; j++) //width
    {
        //line = line+"#";
        if(j%2!=0){
            line+="*"
        }
        else if(j%2==0){
            line+=" "
        }
        
    }
    */
    console.log(line);
    
}
