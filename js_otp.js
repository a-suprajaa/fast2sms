var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://www.fast2sms.com/dev/bulkV2?authorization=YOUR_API_KEY&variables_values=5599&route=otp&numbers=9999999999,8888888888,7777777777",
    "method": "GET"
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  

