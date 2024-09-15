function expect(val){
    return {
        toBe:(value)=>{
            if(value===val){
                return true;
            }else{
                throw "Not Equal";
            }
        },
        notToBe:(value)=>{
            if(value !== val){
                return true;
            }else{
                throw "Equal "
            }
        }

    }
}
const result =expect(5).toBe(5)
console.log(result)