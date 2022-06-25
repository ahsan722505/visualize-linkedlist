class Utils{
    static createMemory(MEMORY_SIZE){
        let memory=[];
        let currentRow=[];
        let counter=0;
        for(let i=0 ; i < MEMORY_SIZE ; i++){
            currentRow=[];
            for(let j=0 ; j< MEMORY_SIZE ; j++){
                currentRow.push(counter++);
            }
            memory.push(currentRow);
        }
        return memory;
    }

}
export default Utils;