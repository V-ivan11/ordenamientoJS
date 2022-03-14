function insertionSort(D){
    for (var i = 1; i < D.length; i++) {
        var j = i;
        while(j > 0 && D[j] < D[j-1]){
            var aux = D[j];
            D[j] = D[j-1];
            D[j-1] = aux;
            j = j-1;
        }
    }
    return D;
}

function selectionSort(D){
    for (var i = 0; i < D.length; i++) {
        var min = i;
        for(var j = i; j < D.length; j++){
            if(D[min] > D[j]){
                min = j;
            }
        }
        var aux = D[min];
        D[min] = D[i];
        D[i] = aux;
    }
    return D;
}

function bubbleSort(D) {
    for (var i = 0; i < D.length-1; i++) {
        for(var j = 0; j < (D.length-i-1); j++){
            if(D[j]>D[j+1]){
                var aux = D[j];
                D[j] = D[j+1];
                D[j+1] = aux;
            }
        }
    }
    return D;
}