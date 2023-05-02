
let command = prompt("TO DO List, Enter a command(quit,list,new,delete)")
let mylist = []
while (command !=="quit") 
{

    if (command === "list")
     {
        console.log("************ TO DO LIST ************")
        for(let i=0;i<mylist.length;i++)    
            console.log(`Index ${i}: ${mylist[i]}` )    
        console.log("***********************************")
        
     }

     else if( command === "new")
     {
        let newItem = prompt("Enter new item :")
        if(newItem)
        {
            mylist.push(newItem)
            console.log("****** Item Added ***************")
            for(let i=0;i<mylist.length;i++)    
                console.log(`Index ${i}: ${mylist[i]}` )    
            console.log("*********************************")
            
        }
    }

     else if( command === "delete")
     {
            let delIndex = prompt("Enter index of list item to delete: ")
            if(delIndex)
            {
                let delItemIndex =parseInt(delIndex)
                if(delItemIndex >=0)
                {
                    mylist.splice(delItemIndex,1)
                    console.log("****** Item Deleted ***************")
                    for(let i=0;i<mylist.length;i++)    
                        console.log(`Index ${i}:${mylist[i]}` )    
                    console.log("*********************************")
                    
                }
                else
                {
                    console.log("Please enter a valid index number")
                }
            }
     }
     command = prompt("TO DO List, Enter a command(quit,list,new,delete) ")

}
console.log("bye")
