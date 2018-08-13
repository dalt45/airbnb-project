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
    removeTail(){
            /*let tempNode = new Lista;
            let tempNode2 = new Lista;
            while(this.head){
                tempNode.addHead(this.head.valor);
                this.head = this.head.next;
            }
            tempNode.removeHead()
            console.log(tempNode);
            while(tempNode.head.next){
                tempNode2.addHead(tempNode.head.valor);
                tempNode.head = tempNode.head.next;
            }
            return tempNode*/
            let tempNode = new Lista;
            let listToReturn = new Lista;
            while(this.head.next) {
                listToReturn.addHead(this.head)
                this.head = this.head.next;
            }
            return listToReturn;
        }
    
}

let nuevaLista = new Lista ();
console.log(nuevaLista);
nuevaLista.addHead(5);
nuevaLista.addHead(4);
nuevaLista.addHead(6);
console.log(nuevaLista)
console.log(nuevaLista.removeTail())


//quitar por valor
//remover al final 