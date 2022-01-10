const mongoose=require("mongoose")

const User=require("./User")

mongoose.connect(
  "mongodb+srv://Jerreh:8wt7jHRVpDCwfJY@cluster0.1gnll.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);


go()
async function go(){

    const user = await User.create({
         name: "Jerreh", 
         age: 38 ,
         hobbies:["Football","Jogging"],
         address:{
         street:"down town"
         }

        });


//both this one above create new user like the one below//

  //  const user = new User({ name: "Jerreh", age: 38 })
   // await user.save()
   console.log(user)
}

