class Lista {
    constructor(){
        // Los nodos se pueden entrelazar de distintas maneras a su lugar en memoria o al siguiente objeto
        //En este caso el ultimo nodo apunta a null asì sabes que ya terminó
        this.head = null;
    }
    addHead(valor){
        const newNode = {valor:valor};
        newNode.next = this.head;
        this.head = newNode;
        return this;

    }
    removeHead() {
        if (this.head === null) return false;
        this.head = this.head.next;
        return true;
    }

    find(valor){
        let tempNode = this.head;
        while(tempNode){
            if ( tempNode.valor === valor ) return tempNode;
            else (tempNode = tempNode.next);
        }
        return undefined;
    }
}

let nuevaLista = new Lista ();
console.log(nuevaLista);
nuevaLista.addHead(5);
nuevaLista.addHead(4);
nuevaLista.addHead("a");
console.log(nuevaLista.find(4))
nuevaLista.removeHead();
console.log(nuevaLista);
//quitar por valor
//remover al final 