const {dbCon} = require("../configuration")
const {userValidator}=require('../validator');

class User{
    constructor(userData){
        this.userData={...userData};
    };

    save(cb) {
        dbCon('users',async(db)=> {
            try{
              await db.insertOne(this.userData);
              cb();
            }catch(err){
                cb(err);

            }
        })
    };
//function qui verifie l'unicite des données dans la base
    checkExistence(){
        return new Promise((resolve,reject) => {
            dbCon('users',async (db)=>{
                try{
                const user=await db.findOne({'$or':[{username:this.userData['username']},
                {email:this.userData['email']}]});
                if(!user){
                    resolve({
                        check:false
                    })
                }else if (this.userData['username']===user.username){
                    resolve({
                        check:true,
                        message:"this username is already in use"
                    })
                
                }else if(this.userData['email']===user.email){
                    resolve({
                        check:true,
                        message:'this email is already in use'
                    })
                }
            }catch(err){
                reject(err);
            }
            })
        
        
        })
    }
    //verifie si les données entrées sont correct
    static validate(userData){

        return userValidator.validate(userData);
       
    };

};
module.exports=User;
/*
const user= new User({
    username: 'cacokokao',
    email:'anaelleohok@htl.com',
    password:'Aa0986-8TYG',
    first_name:'ok',
    last_name:'oohyon'
});
//verifie si l'user n'existe pas
user.checkExistence()
.then(check => {
    console.log(check)
})
.catch(err=>console.log(err))*/
//const validation=User.validate(userData)
