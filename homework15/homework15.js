class  SuperMath {
    constructor(obj) {
        this.obj = obj;
        
    }

    check() {
        if(confirm(`Вы уверены что хотите выполнить ${this.obj.X} ${this.obj.znack} ${this.obj.Y}`)){
            if((this.obj.znack == '/') && !(Boolean(this.obj.Y))) {
                 return false
            }
            return true
        }
        return false
    }

    main() {
        if(this.check()) {
            if(this.obj.znack == '+') {
                this.res = this.obj.Y + this.obj.X;
            } else if(this.obj.znack == '-'){
                this.res = this.obj.Y - this.obj.X;
            } else if(this.obj.znack == '*'){
                this.res = this.obj.Y * this.obj.X;
            } else if(this.obj.znack == '/'){
                this.res = this.obj.Y / this.obj.X;
            }
            return this.res
        }
    }
}

res = new SuperMath({X:1, Y:2, znack:'*'});
console.log(res.main());
