var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
    services:'gmail',
    auth:{
        user:'abc@gmail.com',
        pass:''
    }
});
var mailOptions={
    from:'abc@gmail.com',
    to:'xyz@gmail.com',
    subject:'sending email using node js',
    text:'That was easy'
};
transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log('Email Sent:'+info.response);
    }
});