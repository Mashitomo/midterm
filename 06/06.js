function fizzbuzz(G){
    if(G % 3 == 0 && G % 5 == 0){
        return "fizzbuzz";
    }else if (G % 5 == 0){
        return "buzz";
    }
    else if (G % 3 == 0){
        return "fizz"}else
    { return G;}
}
