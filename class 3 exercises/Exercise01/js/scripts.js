function chessBoard(inputNum = 8){
    let blocks = inputNum;
    for(i=0; i<blocks; i++){ //height 
        let line;   
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
        console.log(line); 
    }   
}

chessBoard(30);
chessBoard(10);