export default class Tracker{
    
    max = 999;
    allocated : string[] = []
    host : {[key:string]:{[key:number]:boolean}} = {}
    
    allocate(type :string){
        let found = false
        let i = 1
        while(!found && i < this.max ){
            if(!this.host[type]) {
                this.host[type] = {[i]:true}
                found = true
            }

            else if(!this.host[type].hasOwnProperty(i) || !this.host[type][i]) {
                this.host[type][i] = true
                found = true
            }
            
            if(found) this.allocated.push(type + i)
            i++
            
        }
        return this.allocated
    }
    deallocate(name:string){
        this.allocated.splice((this.allocated.indexOf(name)),1)

        const pattern = /\d+/g
        const match = name.match(pattern)
        let n: number | null = null
        
        if(match) n = parseInt(match[0])
        
        const type = name.replace(/[0-9]/g,'')
        if(n){
            this.host[type][n] = false
        }  
        return this.allocated
    }
}