function removeloading() {
  setTimeout(function() {
    $("#loadingtheme").hide();
   // $("#SA").show();
    try{
    document.getElementById("btn-1").disabled = false;
    document.getElementById("verifybtn").disabled = false;}
    catch(ex){}
  }
    ,1000);
}
function showloading(){
  try{
  document.getElementById("btn-1").disabled = true;
  document.getElementById("verifybtn").disabled = true;}
  catch(ex){}
  //$("#SA").hide();
  $("#loadingtheme").show();
}
var headers="";

function loadheaders() {
 // const xhttp = new XMLHttpRequest();
 // xhttp.onload = function() {
 //   headers=this.responseText;   
    callserver();
  //}
  //xhttp.open("GET", "https://d3jn1bt6q1fl3j.cloudfront.net/API/GetHeaders.aspx");
  //xhttp.send();
}

var acc = getParameterByName("Acc");
var src = getParameterByName("src");
var label=getParameterByName('label')
var themeid=-1;
var cadid=getParameterByName('cadid');
var GoogleAnalyticsID=getParameterByName("GoogleAnalyticsID");
var endpoint="https://d3jn1bt6q1fl3j.cloudfront.net";
if(window.location.hostname !='localhost' && window.location.hostname!='liteoffersapps-eu1.s3.eu-central-1.amazonaws.com')
endpoint="https://"+window.location.hostname
//endpoint="https://d243nnx4s3bm7x.cloudfront.net";
var country=getParameterByName("country");
var scheme="";
var lang=getParameterByName("lang");
var istesting=getParameterByName("M");
var overridedtheme=getParameterByName('themeid');
var supportedcountries=[];
var NextService=-1;
var servicename="";
var DeviceID="";
var Maingps_adid="";
var countrycode="";
var Mainpkg="";
var campaignid="";
var reflink="";
var campaignGUID="";
var SessionID="";
var redirectionurl="";
var pincodelen=6;
if(getParameterByName("sessionid"))
SessionID=getParameterByName("sessionid");

var NextAction=1;
if(getParameterByName("action")!="")
NextAction=getParameterByName("action");
 
var phonenumber="";
var ischeckbox=false;
var pincode="";
var cgNotificationsLocaldata="";
var Retarget=false;
var requestsource="inapp"
var aplkcampid="1c78144a-41e3-4e6f-b106-284d14eef363";
var atcampid="244da5f5-ad0c-44b5-91f9-272f34017d8e";
var serviceid=-1;
if(getParameterByName(serviceid)!="")
  serviceid=getParameterByName(serviceid);
if(getParameterByName("Retarget")!='')
Retarget=true;
$("#phone").val(getParameterByName("phonenumber"));
var lang=getParameterByName("lang");
var atlaspackages=[
  'com.kocaeli.beautifypicseditor',
  'com.vini.driftingleagu',
  'com.fonts.nextkeyboard',
  'com.mobileartsme.laki',
  'com.adwd.pixartplus',
  'com.gita.translatorymaxpro'
]
var PackageName=getParameterByName("PackageName");
var package_id=getParameterByName('package_id');
var packageName=getParameterByName("packageName");
var package=getParameterByName('package');

if(package_id!="" )
Mainpkg=package_id

if(PackageName!="" )
Mainpkg=PackageName

if(package!="" )
Mainpkg=package

if(packageName!="" )
Mainpkg=packageName

var Aff_ID=getParameterByName("Aff_ID");
var extra=getParameterByName("extra");
var extra1=getParameterByName("extra1");
var Pub_ID=getParameterByName("Pub_ID");
var CloseBtn_countries=['om','sa','ma','lb'];
var firebase_instance_id=getParameterByName("firebase_instance_id");
var adjust_attribution=getParameterByName("adjust_attribution");
var google_attribution=getParameterByName("google_attribution");
var appmetrica_device_id=getParameterByName("appmetrica_device_id");
var MaincampaignGUID=getParameterByName("naming");
var campname=getParameterByName("naming");
if(campname!=""){
  var newcampname=decodeURIComponent(campname);
  try{
    var msnewcampname=newcampname.split("_");
    campaignGUID=msnewcampname['0']
  }
  catch(ex){}
}
var deeplink=getParameterByName("deeplink");
var referringLink=getParameterByName("referringLink");
if(deeplink!="")
reflink=deeplink;
if(referringLink!="")
reflink=referringLink;
var GCampaignID=getParameterByName("GCampaignID");
var SMCampaign=getParameterByName("SMCampaign")
if(GCampaignID!="")
campaignid=GCampaignID;
if(SMCampaign!="")
campaignid=SMCampaign;
if(GCampaignID!="" || SMCampaign!="")
requestsource='wap'
var gclid=getParameterByName("gclid");
var ClickID=getParameterByName("ClickID");
var android_id=getParameterByName("android_id");
var click_id=getParameterByName("click_id");
var adjustid=getParameterByName("adid");
var idfa=getParameterByName("idfa");
var idfv=getParameterByName("idfv");
var gps_adid = getParameterByName("gps_adid");
var MobiBox_Ref_ID=getParameterByName("MobiBox_Ref_ID")
var eclickID =getParameterByName("eclickID");
var gpsadid=getParameterByName("gpsAdid");
var deviceid=getParameterByName("deviceId");
 if(gps_adid!="")
Maingps_adid=gps_adid;

if(gpsadid!="")
Maingps_adid=gpsadid;

var platform="InApp";
if(campaignid!=""){ //wap type
  MaincampaignGUID="";
  if (gclid != "")
  DeviceID=gclid

  if(getParameterByName('wbraid')!=""){
    gclid=getParameterByName('wbraid')
    DeviceID=gclid
  }

  if (MobiBox_Ref_ID != "")
  DeviceID=MobiBox_Ref_ID;

  if (click_id != "")
  DeviceID=click_id;

  if(ClickID=="")
    ClickID=gclid
 
  if(DeviceID=="")
  DeviceID=uuidv4()+"-"+new Date().getTime();
 
  if(ClickID=="")
  ClickID="MA-"+uuidv4();
  
  platform='WEB';
}
else{  //inapp
 
if(android_id!="")
DeviceID=android_id;

if(click_id!="")
DeviceID=click_id;

if(ClickID!="")
DeviceID=ClickID;

if(deviceid!="")
DeviceID=deviceid;

if(DeviceID =="" && firebase_instance_id!="")
DeviceID=firebase_instance_id;

if(package_id!="" &&  firebase_instance_id!="" && click_id!="")
DeviceID=firebase_instance_id;

  if(DeviceID=="")
  DeviceID=uuidv4()+"-"+new Date().getTime();

if(getParameterByName("val1")!=""){
  Mainpkg=getParameterByName('val2');
  DeviceID=getParameterByName("val1");
  adjust_attribution=getParameterByName("val4");
  Maingps_adid=getParameterByName("val5");
}

 try{
 
try{  
var testbase64 = location.search.substr(1);
var mynewid=testbase64.split(';')[0];
mynewid=atob(decodeURIComponent(mynewid));
 
try{
Mainpkg=mynewid.split('-')[0];
DeviceID=mynewid.substring(Mainpkg.length+1);}
catch(ex){saveLogAndForward("",'PageVisit-Error',false);}
}
catch(ex){}
}
catch(ex){}

  if(ClickID=="")
    ClickID="MA-"+uuidv4();
    reflink=reflink.replace('YOUR_CLICK_ID',ClickID)
 }// endInapp
function getdevicelang(){
   try{ 
       var language = window.navigator.userLanguage || window.navigator.language;
       return language.substring(0, 2);  
      }
    catch(ex){  return "" }
}
function builddeviceid(){return  uuidv4()+"-"+new Date().getTime();}
function extractcampaignfromfb(){
  try{
    if(adjust_attribution.includes("fir:")){
  var Adjustattribution2= decodeURIComponent(adjust_attribution)
  Adjustattribution2=Adjustattribution2.split("fir:");
  var myjson=(JSON.parse(Adjustattribution2[1]))
  return myjson['fb_install_referrer_campaign_group_name']
  }
    else{
      var myjson=(JSON.parse (decodeURIComponent(adjust_attribution)))
      return myjson['fb_install_referrer_campaign_group_name']
    } 
}
catch(ex){
 return "";
}
}
function replaceUrlParam(url, paramName, paramValue)
{
   if (paramValue == null) {
        paramValue = '';
    }
    var pattern = new RegExp('\\b('+paramName+'=).*?(&|#|$)');
    if (url.search(pattern)>=0) {
        return url.replace(pattern,'$1' + paramValue + '$2');
    }
    url = url.replace(/[?#]$/,'');
    return url + (url.indexOf('?')>0 ? '&' : '?') + paramName + '=' + paramValue;
}
function uuidv4() {
   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
     var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
     return v.toString(16);
   });
 }
 function arrayToQueryString(array_in) {
   var out = new Array();
 
   for (var key in array_in) {
     out.push(key + '=' + encodeURIComponent(array_in[key]));
   }
 
   return out.join('&');
 }
 function ValidateEmail(mail) 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    return (true)
    else
    return (false)
}
function  callanalytics(){
   if(GoogleAnalyticsID!="")
  gtag('config', GoogleAnalyticsID);
}
 
function checkOperatingSystem()
{
    var  userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent))
        return "Android";
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
        return "IOS";
    if (navigator.appVersion.indexOf("Win")!=-1)
       return "Windows";
    if (navigator.appVersion.indexOf("Mac")!=-1)
        return "Mac";
}
function getParameterByName(name) {
  var url=window.location.href.replace('#','-')
 var match = RegExp('[?&]' + name + '=([^&]*)').exec(url);
   var result= match && match[1].replace(/\+/g, ' ');
      if (result == null || result === undefined || result === "null")
          return "";
     else
   return result;
 }
 function getParameterByNamefromURL(name,url) {
  url = url.replace('#','-');
   var match = RegExp('[?&]' + name + '=([^&]*)').exec(url);
   var result= match && match[1].replace(/\+/g, ' ');
   if (result == null || result === undefined || result === "null")
   return "";
   else
   return result;
 }
 function b64_to_utf8( str ) {
   return  ((window.atob( str )));
 } 

var ss=CryptoJS.enc.Utf8.parse('938c4fc7a05d4029afb480ae281428b5');
var iv = CryptoJS.enc.Utf8.parse('b771a037bc4b4b70');
 
 
function encryptBody(realbody){
  try{
  var tempencrypt = CryptoJS.AES.encrypt(realbody, ss, { keySize: 256 / 8, iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
   return tempencrypt.toString() ;}
   catch(ex){saveLogAndForward("",'Encryption-Error',false);}
 }
      function decryptBody(realbody){
   try{var decrypted = CryptoJS.AES.decrypt(realbody, ss, { keySize: 256 / 8, iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
   return decrypted.toString(CryptoJS.enc.Utf8);}
   catch(ex){saveLogAndForward("",'Decryption-Error',false);}
   } 
  
if(campaignGUID==""){
MaincampaignGUID=extractcampaignfromfb();
campaignGUID=extractcampaignfromfb();
}
function hasQueryParams(url) {
  return url.includes('?');
}
$(document).ready(function(){
  if(getParameterByName("applinkscript")){
    getclickidapplink();
    return;
  }
  if (!hasQueryParams(window.location.href)) {
      removeloading()
      getcontent();
      return;
       }
    var atlaspackages=[
    'com.kocaeli.beautifypicseditor',
    'com.vini.driftingleagu',
    'com.fonts.nextkeyboard',
    'com.mobileartsme.laki',
    'com.adwd.pixartplus',
    'com.gita.translatorymaxpro'
  ]
  var applinkcampid="1c78144a-41e3-4e6f-b106-284d14eef363";
  var atlascampid="244da5f5-ad0c-44b5-91f9-272f34017d8e";
  var fuckads="31560779-4698-4355-95b0-74b6e133fc7e";
  var Aldeadpro="96e3a7e6-50cb-4d86-ab50-5c95f80006c6";
  var splitedcampaign="";
  var msnewcampname;
 
  try{
    var newcampname=decodeURIComponent(MaincampaignGUID);
     msnewcampname=newcampname.split("_");
     splitedcampaign=msnewcampname['0']
  }
  catch(ex){
 
  }
   switch(splitedcampaign) {
    case applinkcampid:
   var applinkurl="https://getyours.fun/tracking/apps?package="+Mainpkg+"&naming="+MaincampaignGUID+"&deeplink="+reflink+"&idfa=&gps_adid="+Maingps_adid+"&adid=&idfv="+idfv+"&cid="+DeviceID;
   saveLogAndForward(applinkurl,'Applink_PageVisit',true);
      break;
    case fuckads:
    var sub1=msnewcampname[1];
     var sub2=msnewcampname[2];
      var sub3=msnewcampname[3];
       var sub4=msnewcampname[4];
        var sub5=msnewcampname[5];
         var sub6=msnewcampname[6];
   var fuckadsurl="http://installsgate.com/t/kt4xhq?gaid="+Maingps_adid+"&naming="+MaincampaignGUID+"&PackageName="+Mainpkg+"&MobiBox_Ref_ID="+DeviceID+"&sub1="+sub1+"&sub2="+sub2+"&sub3="+sub3+"&sub4="+sub4+"&sub5="+sub5;
   saveLogAndForward(fuckadsurl,'Fuckads_PageVisit',true);
      break;
    case atlascampid:
      try{
      var atlaslink="https://landspace.site/"+msnewcampname[1]+"?&PackageName="+Mainpkg+"&campaign="+MaincampaignGUID;
      var Malink="https://fone-mania.com/?SMCampaign="+atlascampid+"&PackageName="+Mainpkg+"&gps_adid="+Maingps_adid+"&MobiBox_Ref_ID="+DeviceID+"&ClickID="
      getclickid(atlaslink,Malink);
         }
      catch(ex){
      callserver();
      }
      break;
      case Aldeadpro:
        getclickidAldeadpro();
        break;
    default:
   try{
   if(atlaspackages.includes(packageid)){
    $.ajax({ 
    type: "GET", dataType: "text", 
    url: "https://cc2ij08r1f.execute-api.us-east-1.amazonaws.com/dev/GetCountryInfo", 
    success: function (data) {
    var response = JSON.parse(data);
    var myurl= (response['message']);
    var alpha2= (myurl['alpha2'])
    var atlaslink="https://landspace.site/1nCzQF?PackageName="+Mainpkg+"&countryCode="+alpha2+"&platform=ios";
    var Malink="https://fone-mania.com/?SMCampaign="+atlascampid+"&PackageName="+Mainpkg+"&gps_adid="+Maingps_adid+"&MobiBox_Ref_ID="+DeviceID+"&ClickID="
  getclickid(atlaslink,Malink)
  }});
   }
   else
   loadheaders();
      }
      catch(ex){
        loadheaders();
      } 
  }

});

function getclickid(getclickurl,forwardUrl) {
  $.ajax({ 
    type: "GET", dataType: "text", 
  url: getclickurl, 
error: function (jqXHR, textStatus, errorThrown) {  
  callserver();},  
beforeSend: function () { showloading(); },  
success: function (data) { window.location.href=forwardUrl+data;  }})}

function getclickidapplink() {
  $.ajax({ 
    type: "GET",
  url: "https://mycontent.pw/t/f4f7a?json=1", 
error: function (jqXHR, textStatus, errorThrown) {loadheaders();},  
beforeSend: function () { showloading(); },  
success: function (data) {  try{ ClickID=data['track_id'];
loadheaders();}
catch(ex){
  loadheaders();
}
}})}

function getclickidAldeadpro() {
  $.ajax({ 
    type: "GET",
  url: "https://coaled.site/N3pgnz?naming="+MaincampaignGUID, 
error: function (jqXHR, textStatus, errorThrown) {loadheaders();},  
beforeSend: function () { showloading(); },  
success: function (data) {  
  try{ClickID=data['click_id'];
  loadheaders(); }
  catch(ex){
    loadheaders();
  }
  
}})}


function saveLogAndForward(forwardUrl,relatedto,doaction) {
  $.ajax({ 
    type: "POST", dataType: "text", 
    data: JSON.stringify({
      'SourceURL': window.location.href,
      'TargetUrl': forwardUrl,
      'DeviceID':DeviceID,
      'Country':'',
      'PackageName':Mainpkg,
      'RelatedTo':relatedto,
      'SmartCampaignGUID':campaignGUID,
      'SourceBody':'',
      'SourceResponse':'',
      'SourceURL':window.location.href,
      'TargetResponse':'',
      'gps_adid':Maingps_adid
  }),
  url: endpoint+"/API/SaveLogs.aspx?decryptRequest=false", 
error: function (jqXHR, textStatus, errorThrown) {  
  if(doaction)
  callserver();
},  
beforeSend: function () { 
showloading()
},  
success: function (data) {
  if(doaction){
   if(forwardUrl=="")
   callserver();
  else
 window.location.href = forwardUrl;
}


 }})
}
 
function loadcheckboxfunc(){
  $("#checkboxlable").css("color",'grey')
  ischeckbox=false;
}

function callserver(){
  if(NextAction==2){
  if(ischeckbox){
    $("#checkboxlable").css("color",'red')
      return;
    }
 fireevents("PhoneEntry","G-F5LP1DJTFF");}
  if(NextAction==2 &&  phonenumber.length<7){
    var phones = document.getElementById('phone');
    phones.classList.add('error');
    setTimeout(function() {
      phones.classList.remove('error');
  }, 300);
  return;
  
  }
  if(NextAction==3 &&  pincode.length!=pincodelen){
    var phones = document.getElementById('pincode');
    phones.classList.add('error');
    setTimeout(function() {
      phones.classList.remove('error');
  }, 300);
  return;
  }
  showloading()
  var sourceurl= window.location.href
   try{
   sourceurl=  sourceurl.replace('YOUR_CLICK_ID',ClickID)}
   catch(ex){}
  var mydata= JSON.stringify({
    "DeviceInfo": {
      'PackageName':Mainpkg,
      'UserAgent':navigator.userAgent,
      'DeviceID':DeviceID,
      'OS':checkOperatingSystem(),
      'LangCode':lang,
      'gpsAdid':Maingps_adid,
      'idfa':idfa,
      'idfv':idfv
    },
    "Referrer": {
      "MBSDK": {
        "Campaign": campaignid,
        "ClickID": ClickID,
        "Pub_ID": Pub_ID,
        "Aff_ID": Aff_ID,
        "extra":extra,
        "extra1": extra1,
        "Country": country,
        "firstPageButtonID": "btn-1",
        "secondPageButtonID": "verifybtn",
        "AFToken": "",
        "IDService":serviceid ,
        "Retarget":Retarget,
        "CampaignName": campaignGUID,
        "SRC":requestsource,
        "Adjustattribution": adjust_attribution,
        "Deeplink":reflink,
        "SourceURL":sourceurl,
        "Headers":headers
      }
    },
    "Request": {
      "Action": NextAction,
      "TransactionID": uuidv4(),
      "SessionID": SessionID,
      "MSISDN": phonenumber,
      "PinCode": pincode,
      "Data":cgNotificationsLocaldata
    }
})
           $.ajax({
   type: "POST", contentType: "text/plain", dataType: "text",
   data: encryptBody(mydata),
   url:endpoint+"/UsersAquisition/" ,
   async:false,
   error: function (jqXHR, textStatus, errorThrown) { 
     },
   beforeSend: function () {
  
   },
   success: function (ss) {
     var mainresponse=decryptBody(ss);
    var response=JSON.parse(mainresponse);
        $("#SA").show();
      if(response['Error']==0){
      if(NextAction==1){ //initiate
      SessionID=response['SessionID'];
      try{supportedlang=response['NextAction']['Info']['GeneralSettings']['SupportedLanguages']
      $("#langbar").html("");
      for(var i = 0; i < supportedlang.length; i++){
       $("#langbar").append('<option>'+supportedlang[i].toUpperCase()+'</option>');
       lang=supportedlang[0]
      }
     } catch(ex){}
      try{
     $("#mideldisc").html( (decodeURIComponent( response['NextAction']['Info']['Disclaimers']['footerInfo'])).replace(/\+/g, ' ').replaceAll('#', 'c'))
      } catch(ex){}
      try{$("#head1").html( (decodeURIComponent( response['NextAction']['Info']['Disclaimers']['headerInfo']).replace(/\+/g, ' ').replaceAll('#', 'c'))) } catch(ex){}
      try{$("#head2").html( (decodeURIComponent( response['NextAction']['Info']['Disclaimers']['middleInfo'])).replace(/\+/g, ' ').replaceAll('#', 'c')) } catch(ex){}
      try{ 
        themeid= response['NextAction']['Info']['Theme']['ThemeID'] 
      if(themeid==undefined)
        themeid=12;
      } catch(ex){}
      //if(overridedtheme!="")
      //themeid=overridedtheme;
      $('head').append('<link rel="stylesheet" type="text/css" href="https://liteoffersapps-eu1.s3.eu-central-1.amazonaws.com/themecss/'+themeid+'.css">');
       $('head').append(' <script async src="https://liteoffersapps-eu1.s3.eu-central-1.amazonaws.com/themecss/'+themeid+'.js"></script>');
       if(lang=='ar'){
      $("#head1").css('direction', 'rtl');
      $("#head2").css('direction', 'rtl');
      $("#mideldisc").css('direction', 'rtl');
     }
     var Afscript=response['NextAction']['AFScript']
     var script = document.createElement("script");
     script.type = "text/javascript";
     script.innerHTML = Afscript;
     document.getElementsByTagName('head')[0].appendChild(script);

     try{
     EmpelloInterface.onFraudStopLoaded(function (statusCode) {
      if (statusCode === 201) {
        if(window.location.hostname =="lp.appsfactory.mobi")
        alert("Emplelo loaded with statusCode"+statusCode)
   console.log("Empelo script loaded!")
      }});
    }
    catch(ex){
   
    }
     try{country=response['NextAction']['Info']['GeneralSettings']['Country']['Name'];} catch(ex){}
     for(var i = 0; i < CloseBtn_countries.length; i++){
       
      if(CloseBtn_countries[i].toUpperCase()==country.toUpperCase())
      $("#closediv").html('<a style="color:grey;" onclick="closepage()">X</a>');
     }
     try{countrycode=response['NextAction']['Info']['GeneralSettings']['Country']['Code'];} catch(ex){}
     $("#countrycode").val(countrycode);
    try{scheme=response["Scheme"]}catch(ex){}
    try{servicename=response['NextAction']['Service']['Name']}catch(ex){} 
    try{
      $("#displaynewphoto").html("<img style='width:50px' src='"+response['NextAction']['Service']['HeaderPic']+"'/>")
      try{
      let hostname = window.location.hostname;
      if(hostname=='liteoffersapps-eu1.s3.eu-central-1.amazonaws.com' || hostname.includes('cloudfront.net') || hostname.includes('localhost') || hostname.includes('testing') || hostname=='publisherads.click'){
    }
    else
     $("#brand").html("<p>"+servicename+" by "+hostname+"</p>")
     {
      if(requestsource!='wap'){
        $("#brand").html("");
      }
     }
      }catch(ex){} 
      }catch(ex){} 
      try{
        $("#btn-1").html(response['NextAction']['Info']['Theme']['Button']['Text'])
         document.getElementById("phone").placeholder = response['NextAction']['Info']['Theme']['TextBox']['Text'];
        }catch(ex){} 
       try{
        var uri='"'+response['NextAction']['Info']['Theme']['TermsAndConditions']['URL']+'"'
        $("#mideldisc").append("<br><br><a onclick='loadurl("+uri+")'>"+response['NextAction']['Info']['Theme']['TermsAndConditions']['Text']+"</a>");
       }catch(ex){} 
       try{
        if(response['NextAction']['Info']['Theme']["CheckBox"]['Checked'])
        $("#otpcheckbox").html(' <label     ><input type="checkbox" checked style="width:15px;height:15px;margin-top: 12px;"  id="otpchecking" name=""> ' + response['NextAction']['Info']['Theme']["CheckBox"]["Text"] + '</label>')
         else{
       $("#otpcheckbox").html(' <label id="checkboxlable"  onClick="loadcheckboxfunc()"  ><input type="checkbox"  style="width:15px;height:15px;margin-top: 12px;"  id="otpchecking" name=""> ' + response['NextAction']['Info']['Theme']["CheckBox"]["Text"] + '</label>')
      ischeckbox=true;
       } }
       catch(ex){  }
       try{
        var uri='"'+response['NextAction']['Info']['Theme']['PrivacyPolicies']['URL']+'"'
         $("#mideldisc").append("<br><br><a onclick='loadurl("+(uri)+")'>"+response['NextAction']['Info']['Theme']['PrivacyPolicies']['Text']+"</a>");
       }catch(ex){} 
      removeloading();
     }// end initiate
    if(NextAction==2 || NextAction==14){ //otp section
    if(NextAction==14)
    $('head').append('<link rel="stylesheet" type="text/css" href="https://liteoffersapps-eu1.s3.eu-central-1.amazonaws.com/themecss/'+themeid+'.css">');


      removeloading();
      var pinplaceholder="";
      try{
        for(var i = 0; i <response['NextAction']['Info']['Theme']['TextBox']['Length'];  i++){
          pinplaceholder+="__ "
        }
        pincodelen=response['NextAction']['Info']['Theme']['TextBox']['Length']
      $("#pincodediv").html('<input type="tel" id="pincode" onkeydown="deleteinout()" onKeyPress="if(this.value.length==' + pincodelen + ') return false;"   style="text-align: center;font-size: 25px;width: 100%;height: 50px;" placeholder="'+pinplaceholder+'" name="">')
      $("#verifybtn").html(response['NextAction']['Info']['Theme']['Button']['Text'])
      }
      catch(ex){
       }
      $("#OTPdiv").hide();
      $("#VCODEdiv").show();
      try{
        $("#mideldisc").html( (decodeURIComponent( response['NextAction']['Info']['Disclaimers']['footerInfo'])).replace(/\+/g, ' ').replaceAll('#', 'c'))
         } catch(ex){}
          try{$("#head1").html( (decodeURIComponent( response['NextAction']['Info']['Disclaimers']['headerInfo']).replace(/\+/g, ' ').replaceAll('#', 'c'))) } catch(ex){}
         try{$("#head2_pin").html( (decodeURIComponent( response['NextAction']['Info']['Disclaimers']['middleInfo'])).replace(/\+/g, ' ').replaceAll('#', 'c')) } catch(ex){}
        if(lang=='ar'){
         $("#head1").css('direction', 'rtl');
         $("#head2_pin").css('direction', 'rtl');
         $("#mideldisc").css('direction', 'rtl');
        }
        $("#langbar").hide();
        $("#closediv").hide();

        var Afscript=response['NextAction']['AFScript']
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.innerHTML = Afscript;
        document.getElementsByTagName('head')[0].appendChild(script);

    }//endotpsection
    
    NextAction=response['NextAction']['Action'];
    if(NextAction==4){
      var isvcode=false;
      var idnetwork=-1;
      try{
      isvcode=response['NextAction']['isVcode'];
      idnetwork=response['NextAction']['IDNetwork'];
      if(idnetwork==1650 && NextService!=-1 && isvcode){
        $("#retargetdiv").show();
        Retarget=true;
        $("#otpvcodeDiv").html("");
        removeloading();
        $('#NewService').attr('onClick', 'refreshsame()');
        $('#continueretarget').attr('onClick', 'window.location.href="'+response['NextAction']['URL']+'"');
      }
      } catch(ex){  }
      if(response['Payout']['isNetworkConverted']){
        fireevents("purchase","G-F5LP1DJTFF");
        if(Retarget)
         callpixelpostback("");
        else
        callpixelpostback(response['NextAction']['URL']);  
        return;
      }
      else{
        $("#mideldisc").hide();
        $("#retargetdiv").show();
        $("#otpvcodeDiv").html("");
        $('#continueretarget').hide();
        $('#NewService').hide();
        window.location.href=response['NextAction']['URL'];
      }
      
    }
    if(NextAction==6 || NextAction==8){
      $("#countrycode").hide();
      $("#head1").hide();
      $("#phone").hide();
    }
    if(NextAction==13){
      try{
        $("#mideldisc").html("");
      slascript=response['NextAction']['Script'];
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.innerHTML = slascript;
      document.getElementsByTagName('head')[0].appendChild(script);
    
    }
      catch(ex){}
    }
  
    if(NextAction==15){
  $("#phone").hide();
  $("#countrycode").hide();
  $("#btn-1").css("width","100%");
  //redirectionurl=response[]
  $('#btn-1').attr('onClick', 'window.location.href="'+response['NextAction']['URL']+'"');
}
   }// endsuccessresponse
    else{ //error
      if(response['Error']==3  )//already sub
      {
        if(NextService!=-1){
        var ssurl=window.location.href;
        ssurl=removeParam("serviceid",ssurl);
        ssurl=removeParam("phonenumber",ssurl);
        myurl=ssurl+"&Retarget=true&serviceid="+NextService+"&phonenumber="+phonenumber
        window.location.href=myurl
      }
        else{
           NextAction=response['NextAction']['Action']
           if(NextAction==4)
          window.location.href=response['NextAction']['URL'];
        }
      }
      else{
        if(response['NextAction']['Action']!=undefined)
        NextAction=response['NextAction']['Action'];
      
        if(NextAction==7){
           if((response['Scheme']=='content/index.html' || response['Scheme']=='') && requestsource=='wap')
          {
            $('head').append('<link rel="stylesheet" type="text/css" href="https://liteoffersapps-eu1.s3.eu-central-1.amazonaws.com/themecss/'+12+'.css">');
            $("#countrycode").val('')
            removeloading();
           
          }
          else
          window.location.href=response['Scheme'];
         
        }
        else{
          removeloading()
          $("#showerror").html(response['MessageToShow']);
        }
     }
     } //enderror
   }})
  }
  function getcontent() {
    $("#cats").html("");
                $.ajax({
                                type: 'GET',
                                dataType: "",
                                url: "https://s3.amazonaws.com/wap.mobibox.mobi/freeapis/Mgames.json",
                                success: function (data) {
                                  var d=JSON.stringify(data)
                                  var response = JSON.parse(d);
                                  var content=response["Content"][0]["HTML5"];
                                  var str='  <div class="content-wrapper" style="display:flex; flex-direction:row; flex-wrap: wrap; gap: 2rem;justify-content:center;">';
                                 var ss="";
     
                                     for(i=0;i<content.length;i++)
                            {
                           for(j=0;j<content[i]['Content'].length;j++)
                            {  
                              str+='   <div class="single-content">'
                              str+='  <a href="'+content[i]['Content'][j]['Content']+'"> <img src="'+content[i]['Content'][j]['Thumbnail_Large']+'" alt=""><a>'
                              str+='   </div>'   }
                            }
                  str+='</div>'
                            $("#SA").html(str);
                            $("#SA").show()
                                }
                            });
                              }
  function refreshsame(){
    var url=window.location.href;
    window.location.href=(replaceUrlParam(window.location.href,'SMCampaign','d77b1d98-20bd-4c6a-b344-f2e11b0da684'))+"&serviceid="+NextService+"&Retarget=true&phonenumber="+phonenumber;
  }
  function fireevents(eventName,AnalyticsID){
    gtag('js', new Date());
    gtag('config', AnalyticsID);
    gtag('event', eventName);
  }
  var isonlineconv=false
     function callpixelpostback(redirectionurl){
    if(src=="" || acc==""){
      if(redirectionurl!=""){
      window.location.href=redirectionurl;
      return;}
      else
      return;
    }
       if (src== 'ga' || src == "google")
        {
         $('head').append(' <script async src="https://www.googletagmanager.com/gtag/js?id='+acc+'></script>');
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', acc);
           gtag('event', 'conversion', { 'send_to': acc+'/'+label, 'transaction_id': '' });
           isonlineconv=true;
        } 
       if (src == 'snap') {
         (function (e, t, n) {
           if (e.snaptr) return; var a = e.snaptr = function () { a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments) };
           a.queue = []; var s = 'script'; r = t.createElement(s); r.async = !0;
           r.src = n; var u = t.getElementsByTagName(s)[0];
           u.parentNode.insertBefore(r, u);
         })(window, document,
           'https://sc-static.net/scevent.min.js');
            snaptr('init', acc, {
           'user_email': ''
         });
         snaptr('track', 'SUBSCRIBE');
          isonlineconv=true;
       }
       if ( src.includes("facebook")) {
           !function (f, b, e, v, n, t, s) {
           if (f.fbq) return; n = f.fbq = function () {
             n.callMethod ?
             n.callMethod.apply(n, arguments) : n.queue.push(arguments) };
           if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
           n.queue = []; t = b.createElement(e); t.async = !0;
           t.src = v; s = b.getElementsByTagName(e)[0];
           s.parentNode.insertBefore(t, s)
           }(window, document, 'script',
           'https://connect.facebook.net/en_US/fbevents.js');
         fbq('init', acc);
         fbq('track', 'Subscribe');
         $("#loadtrack_fb").html('<img height="1" width="1" style="display:none"src="https://www.facebook.com/tr?id=' + acc + '&ev=Add Payment Info&noscript=1"/>')
         isonlineconv=true;  
        } 
            if (src  == 'bigo') {
          $('head').append(' <script async src="https://api.imotech.video/ad/events.js?pixel_id='+acc+'"></script>');
         window.bgdataLayer = window.bgdataLayer || [];
         function bge(){bgdataLayer.push(arguments);}
         bge('init',acc);
         bge('event', 'ec_register'); 
        }
        if (src  == 'tiktok' ) {
         !function (w, d, t) {
           w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
           ttq.load(acc);
            ttq.track('AddPaymentInfo');
           ttq.page();
         }(window, document, 'ttq');
          isonlineconv=true;
       }
       if(!isonlineconv && redirectionurl!=""){
        window.location.href=redirectionurl;   
       }
       else{
       setTimeout(function() {
        if(redirectionurl!=""){
         window.location.href=redirectionurl;    }
      },7000);}
     }
  function callotp(){
  phonenumber=$("#phone").val();
  callserver();
 }
 function callvcode(){
  pincode=$("#pincode").val();
  callserver();
 }
 function loadurl(uro){
  modal.style.display = "block";
 $("#loadiframehere").html("<iframe class='responsive-iframe' src='"+uro+"'>")
 }
 function deleteinout(){
  $("#showerror").html("");
 } 
 function changelang(){
  lang=$("#langbar").val();
 $("#loadingtheme").show();
  NextAction=1;
  callserver()
 }
 function closepage(){
  if(scheme=="")
   window.location.href="https://lp-portal.s3.eu-central-1.amazonaws.com/index.html";
  else
  window.location.href=scheme
 }
 function cgNotificationsLocal(data) {
  cgNotificationsLocaldata=JSON.stringify(data);
   callserver();
}
 function removeParam(key, sourceURL) {
  var rtn = sourceURL.split("?")[0],
      param,
      params_arr = [],
      queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
  if (queryString !== "") {
      params_arr = queryString.split("&");
      for (var i = params_arr.length - 1; i >= 0; i -= 1) {
          param = params_arr[i].split("=")[0];
          if (param === key) {
              params_arr.splice(i, 1);
          }
      }
      if (params_arr.length) rtn = rtn + "?" + params_arr.join("&");
  }
  return rtn;
}