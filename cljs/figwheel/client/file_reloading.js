// Compiled by ClojureScript 0.0-3165 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__28705_SHARP_,p2__28706_SHARP_){
var and__16195__auto__ = p1__28705_SHARP_;
if(cljs.core.truth_(and__16195__auto__)){
return p2__28706_SHARP_;
} else {
return and__16195__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16207__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16207__auto__){
return or__16207__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16207__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16207__auto__){
return or__16207__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16207__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16207__auto__)){
return or__16207__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17102__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17103__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17104__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17105__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17106__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17106__auto__,method_table__17102__auto__,prefer_table__17103__auto__,method_cache__17104__auto__,cached_hierarchy__17105__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__28707){
var map__28708 = p__28707;
var map__28708__$1 = ((cljs.core.seq_QMARK_.call(null,map__28708))?cljs.core.apply.call(null,cljs.core.hash_map,map__28708):map__28708);
var file = cljs.core.get.call(null,map__28708__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__28709){
var map__28710 = p__28709;
var map__28710__$1 = ((cljs.core.seq_QMARK_.call(null,map__28710))?cljs.core.apply.call(null,cljs.core.hash_map,map__28710):map__28710);
var namespace = cljs.core.get.call(null,map__28710__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__17102__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17103__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17104__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17105__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17106__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17106__auto__,method_table__17102__auto__,prefer_table__17103__auto__,method_cache__17104__auto__,cached_hierarchy__17105__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e28711){if((e28711 instanceof Error)){
var e = e28711;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28711;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var figwheel$client$file_reloading$reload_file_STAR_ = null;
var figwheel$client$file_reloading$reload_file_STAR___1 = (function (request_url){
return figwheel$client$file_reloading$reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var figwheel$client$file_reloading$reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
figwheel$client$file_reloading$reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$reload_file_STAR___1.call(this,request_url);
case 2:
return figwheel$client$file_reloading$reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_file_STAR___1;
figwheel$client$file_reloading$reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = figwheel$client$file_reloading$reload_file_STAR___2;
return figwheel$client$file_reloading$reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28712,callback){
var map__28714 = p__28712;
var map__28714__$1 = ((cljs.core.seq_QMARK_.call(null,map__28714))?cljs.core.apply.call(null,cljs.core.hash_map,map__28714):map__28714);
var file_msg = map__28714__$1;
var request_url = cljs.core.get.call(null,map__28714__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28714,map__28714__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28714,map__28714__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28715){
var map__28717 = p__28715;
var map__28717__$1 = ((cljs.core.seq_QMARK_.call(null,map__28717))?cljs.core.apply.call(null,cljs.core.hash_map,map__28717):map__28717);
var file_msg = map__28717__$1;
var namespace = cljs.core.get.call(null,map__28717__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__28717__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__16207__auto__ = meta_data;
if(cljs.core.truth_(or__16207__auto__)){
return or__16207__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16195__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16195__auto__){
var or__16207__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16207__auto__)){
return or__16207__auto__;
} else {
var or__16207__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16207__auto____$1)){
return or__16207__auto____$1;
} else {
var and__16195__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16195__auto____$1){
var or__16207__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16207__auto____$2){
return or__16207__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16195__auto____$1;
}
}
}
} else {
return and__16195__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28718,callback){
var map__28720 = p__28718;
var map__28720__$1 = ((cljs.core.seq_QMARK_.call(null,map__28720))?cljs.core.apply.call(null,cljs.core.hash_map,map__28720):map__28720);
var file_msg = map__28720__$1;
var request_url = cljs.core.get.call(null,map__28720__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28720__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18684__auto___28807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto___28807,out){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto___28807,out){
return (function (state_28789){
var state_val_28790 = (state_28789[(1)]);
if((state_val_28790 === (1))){
var inst_28767 = cljs.core.nth.call(null,files,(0),null);
var inst_28768 = cljs.core.nthnext.call(null,files,(1));
var inst_28769 = files;
var state_28789__$1 = (function (){var statearr_28791 = state_28789;
(statearr_28791[(7)] = inst_28769);

(statearr_28791[(8)] = inst_28768);

(statearr_28791[(9)] = inst_28767);

return statearr_28791;
})();
var statearr_28792_28808 = state_28789__$1;
(statearr_28792_28808[(2)] = null);

(statearr_28792_28808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28790 === (2))){
var inst_28769 = (state_28789[(7)]);
var inst_28772 = (state_28789[(10)]);
var inst_28772__$1 = cljs.core.nth.call(null,inst_28769,(0),null);
var inst_28773 = cljs.core.nthnext.call(null,inst_28769,(1));
var inst_28774 = (inst_28772__$1 == null);
var inst_28775 = cljs.core.not.call(null,inst_28774);
var state_28789__$1 = (function (){var statearr_28793 = state_28789;
(statearr_28793[(11)] = inst_28773);

(statearr_28793[(10)] = inst_28772__$1);

return statearr_28793;
})();
if(inst_28775){
var statearr_28794_28809 = state_28789__$1;
(statearr_28794_28809[(1)] = (4));

} else {
var statearr_28795_28810 = state_28789__$1;
(statearr_28795_28810[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28790 === (3))){
var inst_28787 = (state_28789[(2)]);
var state_28789__$1 = state_28789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28789__$1,inst_28787);
} else {
if((state_val_28790 === (4))){
var inst_28772 = (state_28789[(10)]);
var inst_28777 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28772);
var state_28789__$1 = state_28789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28789__$1,(7),inst_28777);
} else {
if((state_val_28790 === (5))){
var inst_28783 = cljs.core.async.close_BANG_.call(null,out);
var state_28789__$1 = state_28789;
var statearr_28796_28811 = state_28789__$1;
(statearr_28796_28811[(2)] = inst_28783);

(statearr_28796_28811[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28790 === (6))){
var inst_28785 = (state_28789[(2)]);
var state_28789__$1 = state_28789;
var statearr_28797_28812 = state_28789__$1;
(statearr_28797_28812[(2)] = inst_28785);

(statearr_28797_28812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28790 === (7))){
var inst_28773 = (state_28789[(11)]);
var inst_28779 = (state_28789[(2)]);
var inst_28780 = cljs.core.async.put_BANG_.call(null,out,inst_28779);
var inst_28769 = inst_28773;
var state_28789__$1 = (function (){var statearr_28798 = state_28789;
(statearr_28798[(12)] = inst_28780);

(statearr_28798[(7)] = inst_28769);

return statearr_28798;
})();
var statearr_28799_28813 = state_28789__$1;
(statearr_28799_28813[(2)] = null);

(statearr_28799_28813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__18684__auto___28807,out))
;
return ((function (switch__18628__auto__,c__18684__auto___28807,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18629__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18629__auto____0 = (function (){
var statearr_28803 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28803[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18629__auto__);

(statearr_28803[(1)] = (1));

return statearr_28803;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18629__auto____1 = (function (state_28789){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_28789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e28804){if((e28804 instanceof Object)){
var ex__18632__auto__ = e28804;
var statearr_28805_28814 = state_28789;
(statearr_28805_28814[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28815 = state_28789;
state_28789 = G__28815;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18629__auto__ = function(state_28789){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18629__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18629__auto____1.call(this,state_28789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18629__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18629__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto___28807,out))
})();
var state__18686__auto__ = (function (){var statearr_28806 = f__18685__auto__.call(null);
(statearr_28806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto___28807);

return statearr_28806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto___28807,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__28816,p__28817){
var map__28820 = p__28816;
var map__28820__$1 = ((cljs.core.seq_QMARK_.call(null,map__28820))?cljs.core.apply.call(null,cljs.core.hash_map,map__28820):map__28820);
var opts = map__28820__$1;
var url_rewriter = cljs.core.get.call(null,map__28820__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__28821 = p__28817;
var map__28821__$1 = ((cljs.core.seq_QMARK_.call(null,map__28821))?cljs.core.apply.call(null,cljs.core.hash_map,map__28821):map__28821);
var file_msg = map__28821__$1;
var file = cljs.core.get.call(null,map__28821__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28822,opts){
var map__28825 = p__28822;
var map__28825__$1 = ((cljs.core.seq_QMARK_.call(null,map__28825))?cljs.core.apply.call(null,cljs.core.hash_map,map__28825):map__28825);
var eval_body__$1 = cljs.core.get.call(null,map__28825__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28825__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16195__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16195__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16195__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28826){var e = e28826;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28831,p__28832){
var map__29034 = p__28831;
var map__29034__$1 = ((cljs.core.seq_QMARK_.call(null,map__29034))?cljs.core.apply.call(null,cljs.core.hash_map,map__29034):map__29034);
var opts = map__29034__$1;
var before_jsload = cljs.core.get.call(null,map__29034__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29034__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__29034__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__29035 = p__28832;
var map__29035__$1 = ((cljs.core.seq_QMARK_.call(null,map__29035))?cljs.core.apply.call(null,cljs.core.hash_map,map__29035):map__29035);
var msg = map__29035__$1;
var files = cljs.core.get.call(null,map__29035__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__18684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto__,map__29034,map__29034__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29035,map__29035__$1,msg,files){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto__,map__29034,map__29034__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29035,map__29035__$1,msg,files){
return (function (state_29160){
var state_val_29161 = (state_29160[(1)]);
if((state_val_29161 === (7))){
var inst_29049 = (state_29160[(7)]);
var inst_29047 = (state_29160[(8)]);
var inst_29048 = (state_29160[(9)]);
var inst_29050 = (state_29160[(10)]);
var inst_29055 = cljs.core._nth.call(null,inst_29048,inst_29050);
var inst_29056 = figwheel.client.file_reloading.eval_body.call(null,inst_29055,opts);
var inst_29057 = (inst_29050 + (1));
var tmp29162 = inst_29049;
var tmp29163 = inst_29047;
var tmp29164 = inst_29048;
var inst_29047__$1 = tmp29163;
var inst_29048__$1 = tmp29164;
var inst_29049__$1 = tmp29162;
var inst_29050__$1 = inst_29057;
var state_29160__$1 = (function (){var statearr_29165 = state_29160;
(statearr_29165[(7)] = inst_29049__$1);

(statearr_29165[(8)] = inst_29047__$1);

(statearr_29165[(11)] = inst_29056);

(statearr_29165[(9)] = inst_29048__$1);

(statearr_29165[(10)] = inst_29050__$1);

return statearr_29165;
})();
var statearr_29166_29235 = state_29160__$1;
(statearr_29166_29235[(2)] = null);

(statearr_29166_29235[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (20))){
var inst_29096 = (state_29160[(12)]);
var inst_29093 = (state_29160[(13)]);
var inst_29099 = (state_29160[(14)]);
var inst_29097 = (state_29160[(15)]);
var inst_29092 = (state_29160[(16)]);
var inst_29102 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29104 = (function (){var all_files = inst_29092;
var files_SINGLEQUOTE_ = inst_29093;
var res_SINGLEQUOTE_ = inst_29096;
var res = inst_29097;
var files_not_loaded = inst_29099;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29096,inst_29093,inst_29099,inst_29097,inst_29092,inst_29102,state_val_29161,c__18684__auto__,map__29034,map__29034__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29035,map__29035__$1,msg,files){
return (function (p__29103){
var map__29167 = p__29103;
var map__29167__$1 = ((cljs.core.seq_QMARK_.call(null,map__29167))?cljs.core.apply.call(null,cljs.core.hash_map,map__29167):map__29167);
var namespace = cljs.core.get.call(null,map__29167__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29167__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29096,inst_29093,inst_29099,inst_29097,inst_29092,inst_29102,state_val_29161,c__18684__auto__,map__29034,map__29034__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29035,map__29035__$1,msg,files))
})();
var inst_29105 = cljs.core.map.call(null,inst_29104,inst_29097);
var inst_29106 = cljs.core.pr_str.call(null,inst_29105);
var inst_29107 = figwheel.client.utils.log.call(null,inst_29106);
var inst_29108 = (function (){var all_files = inst_29092;
var files_SINGLEQUOTE_ = inst_29093;
var res_SINGLEQUOTE_ = inst_29096;
var res = inst_29097;
var files_not_loaded = inst_29099;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29096,inst_29093,inst_29099,inst_29097,inst_29092,inst_29102,inst_29104,inst_29105,inst_29106,inst_29107,state_val_29161,c__18684__auto__,map__29034,map__29034__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29035,map__29035__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29096,inst_29093,inst_29099,inst_29097,inst_29092,inst_29102,inst_29104,inst_29105,inst_29106,inst_29107,state_val_29161,c__18684__auto__,map__29034,map__29034__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29035,map__29035__$1,msg,files))
})();
var inst_29109 = setTimeout(inst_29108,(10));
var state_29160__$1 = (function (){var statearr_29168 = state_29160;
(statearr_29168[(17)] = inst_29107);

(statearr_29168[(18)] = inst_29102);

return statearr_29168;
})();
var statearr_29169_29236 = state_29160__$1;
(statearr_29169_29236[(2)] = inst_29109);

(statearr_29169_29236[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (27))){
var inst_29119 = (state_29160[(19)]);
var state_29160__$1 = state_29160;
var statearr_29170_29237 = state_29160__$1;
(statearr_29170_29237[(2)] = inst_29119);

(statearr_29170_29237[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (1))){
var inst_29039 = (state_29160[(20)]);
var inst_29036 = before_jsload.call(null,files);
var inst_29037 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29038 = (function (){return ((function (inst_29039,inst_29036,inst_29037,state_val_29161,c__18684__auto__,map__29034,map__29034__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29035,map__29035__$1,msg,files){
return (function (p1__28827_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28827_SHARP_);
});
;})(inst_29039,inst_29036,inst_29037,state_val_29161,c__18684__auto__,map__29034,map__29034__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29035,map__29035__$1,msg,files))
})();
var inst_29039__$1 = cljs.core.filter.call(null,inst_29038,files);
var inst_29040 = cljs.core.not_empty.call(null,inst_29039__$1);
var state_29160__$1 = (function (){var statearr_29171 = state_29160;
(statearr_29171[(21)] = inst_29037);

(statearr_29171[(20)] = inst_29039__$1);

(statearr_29171[(22)] = inst_29036);

return statearr_29171;
})();
if(cljs.core.truth_(inst_29040)){
var statearr_29172_29238 = state_29160__$1;
(statearr_29172_29238[(1)] = (2));

} else {
var statearr_29173_29239 = state_29160__$1;
(statearr_29173_29239[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (24))){
var state_29160__$1 = state_29160;
var statearr_29174_29240 = state_29160__$1;
(statearr_29174_29240[(2)] = null);

(statearr_29174_29240[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (4))){
var inst_29084 = (state_29160[(2)]);
var inst_29085 = (function (){return ((function (inst_29084,state_val_29161,c__18684__auto__,map__29034,map__29034__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29035,map__29035__$1,msg,files){
return (function (p1__28828_SHARP_){
var and__16195__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28828_SHARP_);
if(cljs.core.truth_(and__16195__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28828_SHARP_));
} else {
return and__16195__auto__;
}
});
;})(inst_29084,state_val_29161,c__18684__auto__,map__29034,map__29034__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29035,map__29035__$1,msg,files))
})();
var inst_29086 = cljs.core.filter.call(null,inst_29085,files);
var state_29160__$1 = (function (){var statearr_29175 = state_29160;
(statearr_29175[(23)] = inst_29086);

(statearr_29175[(24)] = inst_29084);

return statearr_29175;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_29176_29241 = state_29160__$1;
(statearr_29176_29241[(1)] = (16));

} else {
var statearr_29177_29242 = state_29160__$1;
(statearr_29177_29242[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (15))){
var inst_29074 = (state_29160[(2)]);
var state_29160__$1 = state_29160;
var statearr_29178_29243 = state_29160__$1;
(statearr_29178_29243[(2)] = inst_29074);

(statearr_29178_29243[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (21))){
var state_29160__$1 = state_29160;
var statearr_29179_29244 = state_29160__$1;
(statearr_29179_29244[(2)] = null);

(statearr_29179_29244[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (31))){
var inst_29127 = (state_29160[(25)]);
var inst_29137 = (state_29160[(2)]);
var inst_29138 = cljs.core.not_empty.call(null,inst_29127);
var state_29160__$1 = (function (){var statearr_29180 = state_29160;
(statearr_29180[(26)] = inst_29137);

return statearr_29180;
})();
if(cljs.core.truth_(inst_29138)){
var statearr_29181_29245 = state_29160__$1;
(statearr_29181_29245[(1)] = (32));

} else {
var statearr_29182_29246 = state_29160__$1;
(statearr_29182_29246[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (32))){
var inst_29127 = (state_29160[(25)]);
var inst_29140 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29127);
var inst_29141 = cljs.core.pr_str.call(null,inst_29140);
var inst_29142 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_29141)].join('');
var inst_29143 = figwheel.client.utils.log.call(null,inst_29142);
var state_29160__$1 = state_29160;
var statearr_29183_29247 = state_29160__$1;
(statearr_29183_29247[(2)] = inst_29143);

(statearr_29183_29247[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (33))){
var state_29160__$1 = state_29160;
var statearr_29184_29248 = state_29160__$1;
(statearr_29184_29248[(2)] = null);

(statearr_29184_29248[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (13))){
var inst_29060 = (state_29160[(27)]);
var inst_29064 = cljs.core.chunk_first.call(null,inst_29060);
var inst_29065 = cljs.core.chunk_rest.call(null,inst_29060);
var inst_29066 = cljs.core.count.call(null,inst_29064);
var inst_29047 = inst_29065;
var inst_29048 = inst_29064;
var inst_29049 = inst_29066;
var inst_29050 = (0);
var state_29160__$1 = (function (){var statearr_29185 = state_29160;
(statearr_29185[(7)] = inst_29049);

(statearr_29185[(8)] = inst_29047);

(statearr_29185[(9)] = inst_29048);

(statearr_29185[(10)] = inst_29050);

return statearr_29185;
})();
var statearr_29186_29249 = state_29160__$1;
(statearr_29186_29249[(2)] = null);

(statearr_29186_29249[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (22))){
var inst_29099 = (state_29160[(14)]);
var inst_29112 = (state_29160[(2)]);
var inst_29113 = cljs.core.not_empty.call(null,inst_29099);
var state_29160__$1 = (function (){var statearr_29187 = state_29160;
(statearr_29187[(28)] = inst_29112);

return statearr_29187;
})();
if(cljs.core.truth_(inst_29113)){
var statearr_29188_29250 = state_29160__$1;
(statearr_29188_29250[(1)] = (23));

} else {
var statearr_29189_29251 = state_29160__$1;
(statearr_29189_29251[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (36))){
var state_29160__$1 = state_29160;
var statearr_29190_29252 = state_29160__$1;
(statearr_29190_29252[(2)] = null);

(statearr_29190_29252[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (29))){
var inst_29126 = (state_29160[(29)]);
var inst_29131 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29126);
var inst_29132 = cljs.core.pr_str.call(null,inst_29131);
var inst_29133 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29132)].join('');
var inst_29134 = figwheel.client.utils.log.call(null,inst_29133);
var state_29160__$1 = state_29160;
var statearr_29191_29253 = state_29160__$1;
(statearr_29191_29253[(2)] = inst_29134);

(statearr_29191_29253[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (6))){
var inst_29081 = (state_29160[(2)]);
var state_29160__$1 = state_29160;
var statearr_29192_29254 = state_29160__$1;
(statearr_29192_29254[(2)] = inst_29081);

(statearr_29192_29254[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (28))){
var inst_29126 = (state_29160[(29)]);
var inst_29125 = (state_29160[(2)]);
var inst_29126__$1 = cljs.core.get.call(null,inst_29125,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29127 = cljs.core.get.call(null,inst_29125,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_29128 = cljs.core.get.call(null,inst_29125,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29129 = cljs.core.not_empty.call(null,inst_29126__$1);
var state_29160__$1 = (function (){var statearr_29193 = state_29160;
(statearr_29193[(25)] = inst_29127);

(statearr_29193[(30)] = inst_29128);

(statearr_29193[(29)] = inst_29126__$1);

return statearr_29193;
})();
if(cljs.core.truth_(inst_29129)){
var statearr_29194_29255 = state_29160__$1;
(statearr_29194_29255[(1)] = (29));

} else {
var statearr_29195_29256 = state_29160__$1;
(statearr_29195_29256[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (25))){
var inst_29158 = (state_29160[(2)]);
var state_29160__$1 = state_29160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29160__$1,inst_29158);
} else {
if((state_val_29161 === (34))){
var inst_29128 = (state_29160[(30)]);
var inst_29146 = (state_29160[(2)]);
var inst_29147 = cljs.core.not_empty.call(null,inst_29128);
var state_29160__$1 = (function (){var statearr_29196 = state_29160;
(statearr_29196[(31)] = inst_29146);

return statearr_29196;
})();
if(cljs.core.truth_(inst_29147)){
var statearr_29197_29257 = state_29160__$1;
(statearr_29197_29257[(1)] = (35));

} else {
var statearr_29198_29258 = state_29160__$1;
(statearr_29198_29258[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (17))){
var inst_29086 = (state_29160[(23)]);
var state_29160__$1 = state_29160;
var statearr_29199_29259 = state_29160__$1;
(statearr_29199_29259[(2)] = inst_29086);

(statearr_29199_29259[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (3))){
var state_29160__$1 = state_29160;
var statearr_29200_29260 = state_29160__$1;
(statearr_29200_29260[(2)] = null);

(statearr_29200_29260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (12))){
var inst_29077 = (state_29160[(2)]);
var state_29160__$1 = state_29160;
var statearr_29201_29261 = state_29160__$1;
(statearr_29201_29261[(2)] = inst_29077);

(statearr_29201_29261[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (2))){
var inst_29039 = (state_29160[(20)]);
var inst_29046 = cljs.core.seq.call(null,inst_29039);
var inst_29047 = inst_29046;
var inst_29048 = null;
var inst_29049 = (0);
var inst_29050 = (0);
var state_29160__$1 = (function (){var statearr_29202 = state_29160;
(statearr_29202[(7)] = inst_29049);

(statearr_29202[(8)] = inst_29047);

(statearr_29202[(9)] = inst_29048);

(statearr_29202[(10)] = inst_29050);

return statearr_29202;
})();
var statearr_29203_29262 = state_29160__$1;
(statearr_29203_29262[(2)] = null);

(statearr_29203_29262[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (23))){
var inst_29119 = (state_29160[(19)]);
var inst_29096 = (state_29160[(12)]);
var inst_29093 = (state_29160[(13)]);
var inst_29099 = (state_29160[(14)]);
var inst_29097 = (state_29160[(15)]);
var inst_29092 = (state_29160[(16)]);
var inst_29115 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29118 = (function (){var all_files = inst_29092;
var files_SINGLEQUOTE_ = inst_29093;
var res_SINGLEQUOTE_ = inst_29096;
var res = inst_29097;
var files_not_loaded = inst_29099;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29119,inst_29096,inst_29093,inst_29099,inst_29097,inst_29092,inst_29115,state_val_29161,c__18684__auto__,map__29034,map__29034__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29035,map__29035__$1,msg,files){
return (function (p__29117){
var map__29204 = p__29117;
var map__29204__$1 = ((cljs.core.seq_QMARK_.call(null,map__29204))?cljs.core.apply.call(null,cljs.core.hash_map,map__29204):map__29204);
var meta_data = cljs.core.get.call(null,map__29204__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29119,inst_29096,inst_29093,inst_29099,inst_29097,inst_29092,inst_29115,state_val_29161,c__18684__auto__,map__29034,map__29034__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29035,map__29035__$1,msg,files))
})();
var inst_29119__$1 = cljs.core.group_by.call(null,inst_29118,inst_29099);
var inst_29120 = cljs.core.seq_QMARK_.call(null,inst_29119__$1);
var state_29160__$1 = (function (){var statearr_29205 = state_29160;
(statearr_29205[(19)] = inst_29119__$1);

(statearr_29205[(32)] = inst_29115);

return statearr_29205;
})();
if(inst_29120){
var statearr_29206_29263 = state_29160__$1;
(statearr_29206_29263[(1)] = (26));

} else {
var statearr_29207_29264 = state_29160__$1;
(statearr_29207_29264[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (35))){
var inst_29128 = (state_29160[(30)]);
var inst_29149 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29128);
var inst_29150 = cljs.core.pr_str.call(null,inst_29149);
var inst_29151 = [cljs.core.str("not required: "),cljs.core.str(inst_29150)].join('');
var inst_29152 = figwheel.client.utils.log.call(null,inst_29151);
var state_29160__$1 = state_29160;
var statearr_29208_29265 = state_29160__$1;
(statearr_29208_29265[(2)] = inst_29152);

(statearr_29208_29265[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (19))){
var inst_29096 = (state_29160[(12)]);
var inst_29093 = (state_29160[(13)]);
var inst_29097 = (state_29160[(15)]);
var inst_29092 = (state_29160[(16)]);
var inst_29096__$1 = (state_29160[(2)]);
var inst_29097__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29096__$1);
var inst_29098 = (function (){var all_files = inst_29092;
var files_SINGLEQUOTE_ = inst_29093;
var res_SINGLEQUOTE_ = inst_29096__$1;
var res = inst_29097__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_29096,inst_29093,inst_29097,inst_29092,inst_29096__$1,inst_29097__$1,state_val_29161,c__18684__auto__,map__29034,map__29034__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29035,map__29035__$1,msg,files){
return (function (p1__28830_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28830_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_29096,inst_29093,inst_29097,inst_29092,inst_29096__$1,inst_29097__$1,state_val_29161,c__18684__auto__,map__29034,map__29034__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29035,map__29035__$1,msg,files))
})();
var inst_29099 = cljs.core.filter.call(null,inst_29098,inst_29096__$1);
var inst_29100 = cljs.core.not_empty.call(null,inst_29097__$1);
var state_29160__$1 = (function (){var statearr_29209 = state_29160;
(statearr_29209[(12)] = inst_29096__$1);

(statearr_29209[(14)] = inst_29099);

(statearr_29209[(15)] = inst_29097__$1);

return statearr_29209;
})();
if(cljs.core.truth_(inst_29100)){
var statearr_29210_29266 = state_29160__$1;
(statearr_29210_29266[(1)] = (20));

} else {
var statearr_29211_29267 = state_29160__$1;
(statearr_29211_29267[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (11))){
var state_29160__$1 = state_29160;
var statearr_29212_29268 = state_29160__$1;
(statearr_29212_29268[(2)] = null);

(statearr_29212_29268[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (9))){
var inst_29079 = (state_29160[(2)]);
var state_29160__$1 = state_29160;
var statearr_29213_29269 = state_29160__$1;
(statearr_29213_29269[(2)] = inst_29079);

(statearr_29213_29269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (5))){
var inst_29049 = (state_29160[(7)]);
var inst_29050 = (state_29160[(10)]);
var inst_29052 = (inst_29050 < inst_29049);
var inst_29053 = inst_29052;
var state_29160__$1 = state_29160;
if(cljs.core.truth_(inst_29053)){
var statearr_29214_29270 = state_29160__$1;
(statearr_29214_29270[(1)] = (7));

} else {
var statearr_29215_29271 = state_29160__$1;
(statearr_29215_29271[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (14))){
var inst_29060 = (state_29160[(27)]);
var inst_29069 = cljs.core.first.call(null,inst_29060);
var inst_29070 = figwheel.client.file_reloading.eval_body.call(null,inst_29069,opts);
var inst_29071 = cljs.core.next.call(null,inst_29060);
var inst_29047 = inst_29071;
var inst_29048 = null;
var inst_29049 = (0);
var inst_29050 = (0);
var state_29160__$1 = (function (){var statearr_29216 = state_29160;
(statearr_29216[(7)] = inst_29049);

(statearr_29216[(33)] = inst_29070);

(statearr_29216[(8)] = inst_29047);

(statearr_29216[(9)] = inst_29048);

(statearr_29216[(10)] = inst_29050);

return statearr_29216;
})();
var statearr_29217_29272 = state_29160__$1;
(statearr_29217_29272[(2)] = null);

(statearr_29217_29272[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (26))){
var inst_29119 = (state_29160[(19)]);
var inst_29122 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29119);
var state_29160__$1 = state_29160;
var statearr_29218_29273 = state_29160__$1;
(statearr_29218_29273[(2)] = inst_29122);

(statearr_29218_29273[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (16))){
var inst_29086 = (state_29160[(23)]);
var inst_29088 = (function (){var all_files = inst_29086;
return ((function (all_files,inst_29086,state_val_29161,c__18684__auto__,map__29034,map__29034__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29035,map__29035__$1,msg,files){
return (function (p1__28829_SHARP_){
return cljs.core.update_in.call(null,p1__28829_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_29086,state_val_29161,c__18684__auto__,map__29034,map__29034__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29035,map__29035__$1,msg,files))
})();
var inst_29089 = cljs.core.map.call(null,inst_29088,inst_29086);
var state_29160__$1 = state_29160;
var statearr_29219_29274 = state_29160__$1;
(statearr_29219_29274[(2)] = inst_29089);

(statearr_29219_29274[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (30))){
var state_29160__$1 = state_29160;
var statearr_29220_29275 = state_29160__$1;
(statearr_29220_29275[(2)] = null);

(statearr_29220_29275[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (10))){
var inst_29060 = (state_29160[(27)]);
var inst_29062 = cljs.core.chunked_seq_QMARK_.call(null,inst_29060);
var state_29160__$1 = state_29160;
if(inst_29062){
var statearr_29221_29276 = state_29160__$1;
(statearr_29221_29276[(1)] = (13));

} else {
var statearr_29222_29277 = state_29160__$1;
(statearr_29222_29277[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (18))){
var inst_29093 = (state_29160[(13)]);
var inst_29092 = (state_29160[(16)]);
var inst_29092__$1 = (state_29160[(2)]);
var inst_29093__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_29092__$1);
var inst_29094 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29093__$1);
var state_29160__$1 = (function (){var statearr_29223 = state_29160;
(statearr_29223[(13)] = inst_29093__$1);

(statearr_29223[(16)] = inst_29092__$1);

return statearr_29223;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29160__$1,(19),inst_29094);
} else {
if((state_val_29161 === (37))){
var inst_29155 = (state_29160[(2)]);
var state_29160__$1 = state_29160;
var statearr_29224_29278 = state_29160__$1;
(statearr_29224_29278[(2)] = inst_29155);

(statearr_29224_29278[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (8))){
var inst_29060 = (state_29160[(27)]);
var inst_29047 = (state_29160[(8)]);
var inst_29060__$1 = cljs.core.seq.call(null,inst_29047);
var state_29160__$1 = (function (){var statearr_29225 = state_29160;
(statearr_29225[(27)] = inst_29060__$1);

return statearr_29225;
})();
if(inst_29060__$1){
var statearr_29226_29279 = state_29160__$1;
(statearr_29226_29279[(1)] = (10));

} else {
var statearr_29227_29280 = state_29160__$1;
(statearr_29227_29280[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18684__auto__,map__29034,map__29034__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29035,map__29035__$1,msg,files))
;
return ((function (switch__18628__auto__,c__18684__auto__,map__29034,map__29034__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29035,map__29035__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18629__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18629__auto____0 = (function (){
var statearr_29231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29231[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18629__auto__);

(statearr_29231[(1)] = (1));

return statearr_29231;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18629__auto____1 = (function (state_29160){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_29160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e29232){if((e29232 instanceof Object)){
var ex__18632__auto__ = e29232;
var statearr_29233_29281 = state_29160;
(statearr_29233_29281[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29282 = state_29160;
state_29160 = G__29282;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18629__auto__ = function(state_29160){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18629__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18629__auto____1.call(this,state_29160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18629__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18629__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto__,map__29034,map__29034__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29035,map__29035__$1,msg,files))
})();
var state__18686__auto__ = (function (){var statearr_29234 = f__18685__auto__.call(null);
(statearr_29234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto__);

return statearr_29234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto__,map__29034,map__29034__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29035,map__29035__$1,msg,files))
);

return c__18684__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29285,link){
var map__29287 = p__29285;
var map__29287__$1 = ((cljs.core.seq_QMARK_.call(null,map__29287))?cljs.core.apply.call(null,cljs.core.hash_map,map__29287):map__29287);
var file = cljs.core.get.call(null,map__29287__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__29287,map__29287__$1,file){
return (function (p1__29283_SHARP_,p2__29284_SHARP_){
if(cljs.core._EQ_.call(null,p1__29283_SHARP_,p2__29284_SHARP_)){
return p1__29283_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__29287,map__29287__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29291){
var map__29292 = p__29291;
var map__29292__$1 = ((cljs.core.seq_QMARK_.call(null,map__29292))?cljs.core.apply.call(null,cljs.core.hash_map,map__29292):map__29292);
var match_length = cljs.core.get.call(null,map__29292__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29292__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29288_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29288_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var figwheel$client$file_reloading$add_link_to_doc = null;
var figwheel$client$file_reloading$add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var figwheel$client$file_reloading$add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});
figwheel$client$file_reloading$add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$add_link_to_doc__1.call(this,orig_link);
case 2:
return figwheel$client$file_reloading$add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$add_link_to_doc__1;
figwheel$client$file_reloading$add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = figwheel$client$file_reloading$add_link_to_doc__2;
return figwheel$client$file_reloading$add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29293){
var map__29295 = p__29293;
var map__29295__$1 = ((cljs.core.seq_QMARK_.call(null,map__29295))?cljs.core.apply.call(null,cljs.core.hash_map,map__29295):map__29295);
var f_data = map__29295__$1;
var file = cljs.core.get.call(null,map__29295__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__29295__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16207__auto__ = request_url;
if(cljs.core.truth_(or__16207__auto__)){
return or__16207__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29296,files_msg){
var map__29318 = p__29296;
var map__29318__$1 = ((cljs.core.seq_QMARK_.call(null,map__29318))?cljs.core.apply.call(null,cljs.core.hash_map,map__29318):map__29318);
var opts = map__29318__$1;
var on_cssload = cljs.core.get.call(null,map__29318__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29319_29339 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29320_29340 = null;
var count__29321_29341 = (0);
var i__29322_29342 = (0);
while(true){
if((i__29322_29342 < count__29321_29341)){
var f_29343 = cljs.core._nth.call(null,chunk__29320_29340,i__29322_29342);
figwheel.client.file_reloading.reload_css_file.call(null,f_29343);

var G__29344 = seq__29319_29339;
var G__29345 = chunk__29320_29340;
var G__29346 = count__29321_29341;
var G__29347 = (i__29322_29342 + (1));
seq__29319_29339 = G__29344;
chunk__29320_29340 = G__29345;
count__29321_29341 = G__29346;
i__29322_29342 = G__29347;
continue;
} else {
var temp__4425__auto___29348 = cljs.core.seq.call(null,seq__29319_29339);
if(temp__4425__auto___29348){
var seq__29319_29349__$1 = temp__4425__auto___29348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29319_29349__$1)){
var c__16992__auto___29350 = cljs.core.chunk_first.call(null,seq__29319_29349__$1);
var G__29351 = cljs.core.chunk_rest.call(null,seq__29319_29349__$1);
var G__29352 = c__16992__auto___29350;
var G__29353 = cljs.core.count.call(null,c__16992__auto___29350);
var G__29354 = (0);
seq__29319_29339 = G__29351;
chunk__29320_29340 = G__29352;
count__29321_29341 = G__29353;
i__29322_29342 = G__29354;
continue;
} else {
var f_29355 = cljs.core.first.call(null,seq__29319_29349__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29355);

var G__29356 = cljs.core.next.call(null,seq__29319_29349__$1);
var G__29357 = null;
var G__29358 = (0);
var G__29359 = (0);
seq__29319_29339 = G__29356;
chunk__29320_29340 = G__29357;
count__29321_29341 = G__29358;
i__29322_29342 = G__29359;
continue;
}
} else {
}
}
break;
}

var c__18684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto__,map__29318,map__29318__$1,opts,on_cssload){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto__,map__29318,map__29318__$1,opts,on_cssload){
return (function (state_29329){
var state_val_29330 = (state_29329[(1)]);
if((state_val_29330 === (1))){
var inst_29323 = cljs.core.async.timeout.call(null,(100));
var state_29329__$1 = state_29329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29329__$1,(2),inst_29323);
} else {
if((state_val_29330 === (2))){
var inst_29325 = (state_29329[(2)]);
var inst_29326 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_29327 = on_cssload.call(null,inst_29326);
var state_29329__$1 = (function (){var statearr_29331 = state_29329;
(statearr_29331[(7)] = inst_29325);

return statearr_29331;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29329__$1,inst_29327);
} else {
return null;
}
}
});})(c__18684__auto__,map__29318,map__29318__$1,opts,on_cssload))
;
return ((function (switch__18628__auto__,c__18684__auto__,map__29318,map__29318__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__18629__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__18629__auto____0 = (function (){
var statearr_29335 = [null,null,null,null,null,null,null,null];
(statearr_29335[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__18629__auto__);

(statearr_29335[(1)] = (1));

return statearr_29335;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__18629__auto____1 = (function (state_29329){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_29329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e29336){if((e29336 instanceof Object)){
var ex__18632__auto__ = e29336;
var statearr_29337_29360 = state_29329;
(statearr_29337_29360[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29361 = state_29329;
state_29329 = G__29361;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__18629__auto__ = function(state_29329){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__18629__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__18629__auto____1.call(this,state_29329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__18629__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__18629__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto__,map__29318,map__29318__$1,opts,on_cssload))
})();
var state__18686__auto__ = (function (){var statearr_29338 = f__18685__auto__.call(null);
(statearr_29338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto__);

return statearr_29338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto__,map__29318,map__29318__$1,opts,on_cssload))
);

return c__18684__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map