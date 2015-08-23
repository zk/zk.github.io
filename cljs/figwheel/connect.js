// Compiled by ClojureScript 0.0-3165 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('zkimcom.site');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__18859__delegate = function (x){
if(cljs.core.truth_(zkimcom.site.reload_hook)){
return cljs.core.apply.call(null,zkimcom.site.reload_hook,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'zkimcom.site/reload-hook' is missing");
}
};
var G__18859 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__18860__i = 0, G__18860__a = new Array(arguments.length -  0);
while (G__18860__i < G__18860__a.length) {G__18860__a[G__18860__i] = arguments[G__18860__i + 0]; ++G__18860__i;}
  x = new cljs.core.IndexedSeq(G__18860__a,0);
} 
return G__18859__delegate.call(this,x);};
G__18859.cljs$lang$maxFixedArity = 0;
G__18859.cljs$lang$applyTo = (function (arglist__18861){
var x = cljs.core.seq(arglist__18861);
return G__18859__delegate(x);
});
G__18859.cljs$core$IFn$_invoke$arity$variadic = G__18859__delegate;
return G__18859;
})()
,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map