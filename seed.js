var mongoose    = require("mongoose");
var Campground  = require("./models/campground");
var Comment     = require("./models/comment");
var data =[
    {
        name  : "Cloud's Rest",
        image : "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104491f5c77faeebbdbe_340.jpg",
        description : "Cool Winter!!Wow!!"
    },
    {
        name  : "Dsert Mesa",
        image : "https://pixabay.com/get/e83db7082af3043ed1584d05fb1d4e97e07ee3d21cac104491f5c77faeebbdbe_340.jpg",
        description : "Beautiful Girl!!Wow!!"
    },
    {
        name  : "Canyon Floor",
        image : "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg",
        description : "Spcial Camp!!Wow!!"
    },
]


function seedDB(){
    //Remove all campgrounds
   Campground.deleteMany({},function(err){
        if(err)
        {
            console.log(err);
        }
        console.log("removed  campgrounds");
     //add a few campgrounds
    //  data.forEach(function(seed){
    //     Campground.create(seed,function(err,campground){
    //         if(err)
    //         {
    //             console.log(err);
    //         }else {
    //             console.log("added a campground");
                
    //             //Create a comment
    //             Comment.create({
    //                 text:"This place is great,I wish there was internet!!",
    //                 author:"Homer"
    //             },function(err,comment){
    //                 if(err)
    //                 {
    //                     console.log(err);
    //                 }
    //                 else
    //                 {
    //                     campground.comments.push(comment)
    //                     campground.save();
    //                     console.log("Created new comment");
    //                 }

    //             });
    //         }
    //     });   
    //  });
}) ;

}

module.exports = seedDB;