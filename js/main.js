firstDot = location.hostname.indexOf('.');
domain =  location.hostname.substring(firstDot == -1 ? 0 : firstDot + 1);
    if(domain=="sortly.co"){
    var GTM_TAG = "GTM-K66B4SQ";
    var ANA_TAG = "UA-49456419-10";
    }
    else {
    var GTM_TAG = "GTM-5RS9RFL";
    var ANA_TAG = "UA-49456419-8";
    }

<style>.async-hide { opacity: 0 !important} </style>

(function(a,s,y,n,c,h,i,d,e) {
    s.className+=' '+y;h.start=1*new Date;
    h.end=i=function() {
        s.className=s.className.replace(RegExp(' ?'+y),'')
    };

(a[n]=a[n]||[]).hide=h;setTimeout(function() {
    i();h.end=null},c);h.timeout=c;
})

(window,document.documentElement,'async-hide','dataLayer',5000,
{GTM_TAG:true});

(function(i,s,o,g,r,a,m) {
    i['GoogleAnalyticsObject']=r;i[r]=i[r]||function() {
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();
        a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];
        a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    }
)

(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', ANA_TAG, location.hostname);
ga('require', GTM_TAG );
ga('send', 'pageview');

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-856287500', { 'optimize_id': 'GTM-K66B4SQ'});
	
	
(function(i,s,o,g,r,a,m) {
    i['GoogleAnalyticsObject']=r;i[r]=i[r]||function() {
        (i[r].q=i[r].q||[]).push(arguments)
    },i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        ga('create','UA-49456419-8', 'auto');
        ga('send', 'pageview');

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-856287500');

(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
})(window,document.documentElement,'async-hide','dataLayer',4000,
{'GTM-5RS9RFL':true});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-49456419-8', 'auto');
ga('require', 'GTM-5RS9RFL');
ga('send', 'pageview');

window['_fs_debug'] = false;
window['_fs_host'] = 'fullstory.com';
window['_fs_org'] = 'D6QGQ';
window['_fs_namespace'] = 'FS';
(function(m,n,e,t,l,o,g,y){
    if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
    g=m[e]=function(a,b){g.q?g.q.push([a,b]):g._api(a,b);};g.q=[];
    o=n.createElement(t);o.async=1;o.src='https://'+_fs_host+'/s/fs.js';
    y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
    g.identify=function(i,v){g(l,{uid:i});if(v)g(l,v)};g.setUserVars=function(v){g(l,v)};g.event=function(v){g('event',{n:i,p:v})};
    g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
    g.consent=function(a){g("consent",!arguments.length||a)};
    g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
    g.clearUserCookie=function(){};
})(window,document,window['_fs_namespace'],'script','user');

  /* Facebook Pixel Code */
  
  !function(f,b,e,v,n,t,s) {
        if(f.fbq)return;
            n=f.fbq=function() { 
                n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)
            };

        if(!f._fbq)f._fbq=n;
            n.push=n;
            n.loaded=!0;
            n.version='2.0';

  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '635893243277417'); 
  fbq('track', 'PageView');
  
  <noscript>
    <img height="1" width="1" 
    src="https://www.facebook.com/tr?id=635893243277417&ev=PageView&noscript=1"/>
  </noscript>