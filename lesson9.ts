var employee={

    id:19,
    greeet:function(){

      setTimeout(()=>console.log(this.id),1000)

     
        
    }

}

employee.greeet();