function recogerDatos() {
    var n = 8;
    var datos = new Array(n);
    for (let i = 0; i < n; i++) {
        datos[i] = parseInt(document.getElementById(i + 1).value);

    }
    return datos;
}

function colocarResultado(D) {
    var identificadores = ["r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8"];

    for (let i = 0; i < D.length; i++) {
        document.getElementById(identificadores[i]).innerHTML = String(D[i]);
    }
}

function insertionSort() {

    D = recogerDatos();

    for (var i = 1; i < D.length; i++) {
        var j = i;
        while (j > 0 && D[j] < D[j - 1]) {
            var aux = D[j];
            D[j] = D[j - 1];
            D[j - 1] = aux;
            j = j - 1;
        }
    }

    colocarResultado(D);
}

function selectionSort() {

    D = recogerDatos();

    for (var i = 0; i < D.length; i++) {
        var min = i;
        for (var j = i; j < D.length; j++) {
            if (D[min] > D[j]) {
                min = j;
            }
        }
        var aux = D[min];
        D[min] = D[i];
        D[i] = aux;
    }

    colocarResultado(D);
}

function bubbleSort() {

    D = recogerDatos();
    
    for (var i = 0; i < D.length - 1; i++) {
        for (var j = 0; j < D.length - i - 1; j++) {
            if (D[j] > D[j + 1]) {
                var aux = D[j]
                D[j] = D[j + 1]
                D[j + 1] = aux
            }

        }
    }

    colocarResultado(D);
}