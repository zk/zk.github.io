// Compiled by ClojureScript 0.0-3165 {}
goog.provide('vee.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cognitect.transit');
goog.require('goog.string');
vee.util.reader = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
vee.util.writer = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
vee.util.to_transit = (function vee$util$to_transit(o){
return cognitect.transit.write.call(null,vee.util.writer,o);
});
vee.util.from_transit = (function vee$util$from_transit(s){
return cognitect.transit.read.call(null,vee.util.reader,s);
});
vee.util.to_json = (function vee$util$to_json(o){
return JSON.stringify(o);
});
vee.util.from_json = (function vee$util$from_json(o){
return cljs.core.js__GT_clj.call(null,JSON.parse(o),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
vee.util.ellipsis = (function vee$util$ellipsis(n,s){
if(cljs.core.truth_(s)){
var len = cljs.core.count.call(null,s);
if((len > n)){
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,n,s))),cljs.core.str("...")].join('');
} else {
return s;
}
} else {
return null;
}
});
vee.util.now = (function vee$util$now(){
return Date.now();
});
vee.util.format_phone = (function vee$util$format_phone(phone){
if(cljs.core.truth_(phone)){
var phone__$1 = clojure.string.replace.call(null,phone,/[^\d]/,"");
var pc = cljs.core.count.call(null,phone__$1);
return [cljs.core.str((((pc > (3)))?"(":null)),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(3),phone__$1))),cljs.core.str((((cljs.core.count.call(null,phone__$1) > (3)))?[cljs.core.str(") "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(3),cljs.core.drop.call(null,(3),phone__$1))))].join(''):null)),cljs.core.str((((cljs.core.count.call(null,phone__$1) > (6)))?[cljs.core.str("-"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,(6),phone__$1)))].join(''):null))].join('');
} else {
return null;
}
});
vee.util.uuid = (function vee$util$uuid(){
var d = vee.util.now.call(null);
var uuid_str = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
return clojure.string.replace.call(null,uuid_str,/[xy]/,((function (d,uuid_str){
return (function (c){
var r = (cljs.core.mod.call(null,(d + (Math.random() * (16))),(16)) | (0));
var d__$1 = Math.floor((d / 16.0));
return ((cljs.core._EQ_.call(null,"x",c))?r:(((3) & r) | (8))).toString((16));
});})(d,uuid_str))
);
});
vee.util.initials = (function vee$util$initials(s){
if(cljs.core.truth_(s)){
var ps = clojure.string.split.call(null,clojure.string.trim.call(null,s),/\s+/);
return clojure.string.upper_case.call(null,[cljs.core.str(cljs.core.first.call(null,cljs.core.first.call(null,ps))),cljs.core.str((((cljs.core.count.call(null,ps) > (1)))?cljs.core.first.call(null,cljs.core.last.call(null,ps)):null))].join(''));
} else {
return null;
}
});
/**
 * @param {...*} var_args
 */
vee.util.sformat = (function() { 
var vee$util$sformat__delegate = function (args){
return cljs.core.apply.call(null,goog.string.format,args);
};
var vee$util$sformat = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24282__i = 0, G__24282__a = new Array(arguments.length -  0);
while (G__24282__i < G__24282__a.length) {G__24282__a[G__24282__i] = arguments[G__24282__i + 0]; ++G__24282__i;}
  args = new cljs.core.IndexedSeq(G__24282__a,0);
} 
return vee$util$sformat__delegate.call(this,args);};
vee$util$sformat.cljs$lang$maxFixedArity = 0;
vee$util$sformat.cljs$lang$applyTo = (function (arglist__24283){
var args = cljs.core.seq(arglist__24283);
return vee$util$sformat__delegate(args);
});
vee$util$sformat.cljs$core$IFn$_invoke$arity$variadic = vee$util$sformat__delegate;
return vee$util$sformat;
})()
;
vee.util.timeago = (function vee$util$timeago(millis){
if(cljs.core.truth_(millis)){
var ms = (vee.util.now.call(null) - millis);
var s = (ms / (1000));
var m = (s / (60));
var h = (m / (60));
var d = (h / (24));
var y = (d / 365.0);
if((s < (60))){
return "less than a minute";
} else {
if((m < (2))){
return "1 minute";
} else {
if((h < (1))){
return [cljs.core.str((m | (0))),cljs.core.str(" minutes")].join('');
} else {
if((h < (2))){
return "1 hour";
} else {
if((d < (1))){
return [cljs.core.str((h | (0))),cljs.core.str(" hours")].join('');
} else {
if((d < (2))){
return "1 day";
} else {
if((y < (1))){
return [cljs.core.str((d | (0))),cljs.core.str(" days")].join('');
} else {
return [cljs.core.str(vee.util.sformat.call(null,"%.1f",y)),cljs.core.str(" years")].join('');

}
}
}
}
}
}
}
} else {
return null;
}
});
vee.util.exact_timeago = (function vee$util$exact_timeago(millis){
if(cljs.core.truth_(millis)){
var ms = (vee.util.now.call(null) - millis);
var s = (ms / (1000));
var m = (s / (60));
var h = (m / (60));
var d = (h / (24));
var y = (d / 365.0);
if((s < (60))){
return [cljs.core.str((s | (0))),cljs.core.str("s")].join('');
} else {
if((m < (2))){
return "1m";
} else {
if((h < (1))){
return [cljs.core.str((m | (0))),cljs.core.str("m")].join('');
} else {
if((h < (2))){
return "1h";
} else {
if((d < (1))){
return [cljs.core.str((h | (0))),cljs.core.str("h")].join('');
} else {
if((d < (2))){
return "1d";
} else {
if((y < (1))){
return [cljs.core.str((d | (0))),cljs.core.str("d")].join('');
} else {
return [cljs.core.str(vee.util.sformat.call(null,"%.1f",y)),cljs.core.str("y")].join('');

}
}
}
}
}
}
}
} else {
return null;
}
});

//# sourceMappingURL=util.js.map