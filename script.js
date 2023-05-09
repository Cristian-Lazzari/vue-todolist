const app = Vue.createApp({
    data() {
        return{
            todolist : [
                {
                    id :'cibo',
                    done : false
                },
             
            ],
            error : false
        }
    },
     methods: {
        additem(obj){
            let text = obj
            text = text.trim()
            if(text !== ''){
                let newi = {
                    id: text,
                    done : false
                };
                this.todolist.unshift(newi);
                console.log(this.todolist);
                this.itemid=''
                this.error= false
            }else{
                this.error= true
            }
        },
        deleteItem(i){
            this.todolist.splice(i, 1)
        },
        doItem(element){
            if(element.done){
                element.done = false;
            }else{
                element.done = true;
            }
        }
     }
});
app.mount('#root');