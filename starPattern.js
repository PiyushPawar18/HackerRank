// Sample Output

//      #
//     ##
//    ###
//   ####
//  #####
// ######

function staircase(n) {
    for(let i=0;i<n;i++){
        let str = ""
        for(let s=n-(i+1);s>0;s--){
            str+=" ";
        }
        for(let j=i;j>=0;j--){
            str+="#"
        }
        console.log(str)
    }

}
staircase(6)