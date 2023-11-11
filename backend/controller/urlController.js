const Shorten = require("../model/shortenModel");
const generateRandomCharecter = require("../utilities/utilities");


// create new short url 
const createShortUrl = async (req, res)=>{
    const inputUrl = req.body.url;
    const slug =  req.body.slug;
    console.log(generateRandomCharecter(5));
    return
    try {
    const newShorten = await Shorten.create({url:inputUrl, slug:slug});
    const result = await newShorten.save();
    if(!result){
     return res.status(500).json({
            success:false,
            message:'Sorry! There was an server error!',
        })
    }

     res.status(200).json({
            success:true,
            message:'Short URL created successfully',
            url: inputUrl,
            slug
        })
    } catch (err) {
        res.status(500).json({
            success:false,
            message:'Server is unavailable to process request',
        })
    }
  
}

module.exports = createShortUrl;