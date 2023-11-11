const Shorten = require("../model/shortenModel");
const generateRandomCharecter = require("../utilities/utilities");


// create new short url 

const createShortUrl = async (req, res)=>{
    const inputUrl = req.body.url;
    const slug =   req.body.slug ? req.body.slug : generateRandomCharecter(5);
    try {
    const shortUrl =`${ req.protocol}://${req.hostname}:${process.env.PORT}/sr/${slug}`;
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
            slug,
            shortUrl
        })
    } catch (err) {
        res.status(500).json({
            success:false,
            message:'Server is unavailable to process request',
        })
    }
  
}

// get slug and redirec uer to main url
const redirectUser = async(req, res) =>{
    const slug =  req.params.slug;
    try {
      const exisSlug = await  Shorten.find({slug: slug});
      if(!exisSlug.length > 0){
       return res.status(404).json({
            success:false,
            message:'Your slug is invalid',
        });
      } 
    console.log(res)
    res.redirect('https://chat.openai.com/c/1985900c-0667-41c3-bc50-b78f343671f3');
    res.status(200).json({
        success:true,
        message:'URL retrived successfully',
        redirectTo:exisSlug[0].url,
        slug:exisSlug[0].slug
    });
    } catch (err) {
        res.status(500).json({
            success:false,
            message:'There was an server error!',
        });
    }
}


module.exports   = {
    createShortUrl,
    redirectUser
};