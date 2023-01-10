import express from "express";
import mongoose, { isObjectIdOrHexString } from "mongoose";
import cors from "cors";
import e from "express";

const port = process.env.PORT || 3001;

const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect(
    "mongodb+srv://Harsh:zsRYZ7qWn1GCjBIv@cluster0.3jb09.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log("Buckets Database connected");
});

const bucketSchema = new mongoose.Schema({
    bucketname: String,
    no_of_videos: Number,
    videos: [{ nameofvideo: String, link: String }]
});


const Bucket = new mongoose.model("bucket_V", bucketSchema);


app.get("/yourbuckets", async (req, res) => {
    await Bucket.find({}).then((val, err) => {
        if (err) {
            console.log(err)
            res.send("error encounterred")
        }
        else {
            res.send(val);
        }
    })
})

app.post("/g/makebucket", async (req, res) => {
    const bucketname = req.body.bucketname;
    await Bucket.findOne({ bucketname: bucketname }).then((val, err) => {
        if (err) {
            console.log(err)
            res.send("error encounterred")
        }
        else {
            res.send(val);
        }
    })
})

app.post("/makebucket", (req, res) => {
    const { bucketname, no_of_videos } = req.body;
    Bucket.findOne({ bucketname: bucketname }, (err, found) => {
        if (found) {
            res.send({ message: "Bucket already present" });
        }
        else {
            const found = new Bucket({
                bucketname: bucketname,
                no_of_videos: no_of_videos,
                videos: [{ nameofvideo: null, link: null }]
            })
            found.save(err => {
                if (err) {
                    res.send("error encountered ", err)
                }
                else {
                    res.send({ message: "Successfully Added a bucket" })
                }
            })
        }
    })
})

app.put("/makebucket", async (req, res) => {
    const { bucketname, newname } = req.body;
    await Bucket.findOneAndUpdate({ bucketname: bucketname }, {'$set':{bucketname: newname} }, { new: true })
    await res.send({ message: "updated bucket name" });
})

app.put("/cardname/:uid", async (req, res) => {
    const myid = req.params.uid;
    const {nameofvideo,newname} = req.body;
    await Bucket.update({ "videos.nameofvideo": nameofvideo }, { "$set" :{ "videos.$.nameofvideo": newname} })
    await res.send({ message: "updated cardname name" }); 
})

app.delete("/makebucket", (req, res, next) => {
    const bucketname = req.body.namechange.bucketname;
    Bucket.findOneAndRemove({ bucketname: bucketname })
        .then(deletedBucket => res.json(deletedBucket))
        .catch(err => next(err));
    console.log(req.body.namechange.bucketname);
})



app.post("/customerlist/:uid", async (req, res) => {
    const _id = req.params.uid;
    var card = { nameofvideo: req.body.nameofvideo, link: req.body.link };
    var lengthofarray= await Bucket.findOne({_id:_id}).exec();
    console.log(lengthofarray);
    await Bucket.findOneAndUpdate({ _id: _id }, { $push: { videos: card } }, { new: true })
    await Bucket.findOneAndUpdate({ _id: _id }, { $set: { no_of_videos:lengthofarray.videos.length} })
    await res.send({ message: "updated array with card" });

    // console.log(_id);
    // console.log(card);
})

app.post("/customerlist/d/:uid", async (req, res) => {
    const myid = req.params.uid;
    const arr = req.body;
     try {  
        for(var i=1;i<arr.length;i++){
        await Bucket.updateMany({},{$pull : {"videos" :{         
            "_id" : arr[i]._id,"nameofvideo": arr[i].nameofvideo,"link":arr[i].link}}})
            //  console.log(req.body);
         }
        }
    catch(err){
        console.log(err)
    } 
})


const transaction_money = [];



var new_senderaccountno;

app.put("/customerlist/:account", async (req, res) => {
    console.log(req.body)
    // Infod.update({"email":req.body.email},{$set:{account:req.body.account, savings:req.body.savings}},{multi: true})
    new_senderaccountno = req.body.account;
    await Infod.findOneAndUpdate({ account: req.body.account }, { savings: req.body.savings }, { multi: true })
    Infod.findOne({ account: req.body.account }, (err, val) => {
        if (err) {
            console.log("error here")
        }
        else {
            console.log(val.name);
        }
    })
    res.sendStatus(200)
})

app.post("/customerlist/*", async (req, res) => {
    // console.log(req.body);
    const { nameofperson, savingvalue } = req.body;
    var transaction_money_obj = {
        senderaccountno: new_senderaccountno,
        recievername: "",
        amountsend: 0,
        recieverbalance: 0
    }
    transaction_money_obj.recievername = nameofperson;
    var balance = 0;
    Infod.findOne({ name: { $all: nameofperson } }, (err, val) => {
        if (err) {
            console.log(err);
        }
        else {
            balance = val.savings;
            balance = balance + savingvalue;
            transaction_money_obj.recieverbalance = balance;
            transaction_money_obj.amountsend = savingvalue;
            Infod.findOneAndUpdate({ name: { $all: nameofperson } }, { $set: { savings: balance } }, (err2, val2) => {
                if (err2) {
                    console.log(err2)
                }
                else {
                    // console.log("hooray");
                }
            })
            // console.log(nameofperson,balance);
            balance = 0;
            transaction_money.push(transaction_money_obj);
            console.log(transaction_money);
        }

    })
    res.sendStatus(200)
})


app.get("/transaction_history", async (req, res) => {
    res.send(transaction_money);
})


app.listen(port, () => {
    console.log("server is running on port", port)
});