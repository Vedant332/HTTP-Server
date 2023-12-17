const express=require("express");
const app=express();
const port=3000;
const users=[{
    name:"v",
    kidneys:[{
        healthy:false
    }]
}];
app.use(express.json());



//Git branch testing 
app.get("/",function(req,res){
    let kidney=users[0].kidneys;
    let number=kidney.length;
    let healthy=0;
    for(let i=0;i<kidney.length;i++){
        if(kidney[i].healthy){
            number=number+1;
        }
    }
    let unhealthy=number-healthy;
    res.json({
        kidney,
        healthy,
        unhealthy
    })
})

app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"done"
    })
})

app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({});
})

app.delete("/",function(req,res){
    let newkidney=[];
    for(let i=0;i<users[0].kidneys[i].length;i++){
        if( users[0].kidneys[i].healthy){
            newkidney.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newkidney;
    res.json({msg:"kidneys deleted"})
})



app.listen(port,()=>{
    console.log("server running");
})