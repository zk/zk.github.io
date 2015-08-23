// Compiled by ClojureScript 0.0-3165 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27645__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27645 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27646__i = 0, G__27646__a = new Array(arguments.length -  0);
while (G__27646__i < G__27646__a.length) {G__27646__a[G__27646__i] = arguments[G__27646__i + 0]; ++G__27646__i;}
  args = new cljs.core.IndexedSeq(G__27646__a,0);
} 
return G__27645__delegate.call(this,args);};
G__27645.cljs$lang$maxFixedArity = 0;
G__27645.cljs$lang$applyTo = (function (arglist__27647){
var args = cljs.core.seq(arglist__27647);
return G__27645__delegate(args);
});
G__27645.cljs$core$IFn$_invoke$arity$variadic = G__27645__delegate;
return G__27645;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27648){
var map__27650 = p__27648;
var map__27650__$1 = ((cljs.core.seq_QMARK_.call(null,map__27650))?cljs.core.apply.call(null,cljs.core.hash_map,map__27650):map__27650);
var message = cljs.core.get.call(null,map__27650__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27650__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16207__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16207__auto__)){
return or__16207__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16195__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16195__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16195__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18684__auto___27779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto___27779,ch){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto___27779,ch){
return (function (state_27753){
var state_val_27754 = (state_27753[(1)]);
if((state_val_27754 === (7))){
var inst_27749 = (state_27753[(2)]);
var state_27753__$1 = state_27753;
var statearr_27755_27780 = state_27753__$1;
(statearr_27755_27780[(2)] = inst_27749);

(statearr_27755_27780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (1))){
var state_27753__$1 = state_27753;
var statearr_27756_27781 = state_27753__$1;
(statearr_27756_27781[(2)] = null);

(statearr_27756_27781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (4))){
var inst_27717 = (state_27753[(7)]);
var inst_27717__$1 = (state_27753[(2)]);
var state_27753__$1 = (function (){var statearr_27757 = state_27753;
(statearr_27757[(7)] = inst_27717__$1);

return statearr_27757;
})();
if(cljs.core.truth_(inst_27717__$1)){
var statearr_27758_27782 = state_27753__$1;
(statearr_27758_27782[(1)] = (5));

} else {
var statearr_27759_27783 = state_27753__$1;
(statearr_27759_27783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (13))){
var state_27753__$1 = state_27753;
var statearr_27760_27784 = state_27753__$1;
(statearr_27760_27784[(2)] = null);

(statearr_27760_27784[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (6))){
var state_27753__$1 = state_27753;
var statearr_27761_27785 = state_27753__$1;
(statearr_27761_27785[(2)] = null);

(statearr_27761_27785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (3))){
var inst_27751 = (state_27753[(2)]);
var state_27753__$1 = state_27753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27753__$1,inst_27751);
} else {
if((state_val_27754 === (12))){
var inst_27724 = (state_27753[(8)]);
var inst_27737 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27724);
var inst_27738 = cljs.core.first.call(null,inst_27737);
var inst_27739 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27738);
var inst_27740 = console.warn("Figwheel: Not loading code with warnings - ",inst_27739);
var state_27753__$1 = state_27753;
var statearr_27762_27786 = state_27753__$1;
(statearr_27762_27786[(2)] = inst_27740);

(statearr_27762_27786[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (2))){
var state_27753__$1 = state_27753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27753__$1,(4),ch);
} else {
if((state_val_27754 === (11))){
var inst_27733 = (state_27753[(2)]);
var state_27753__$1 = state_27753;
var statearr_27763_27787 = state_27753__$1;
(statearr_27763_27787[(2)] = inst_27733);

(statearr_27763_27787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (9))){
var inst_27723 = (state_27753[(9)]);
var inst_27735 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27723,opts);
var state_27753__$1 = state_27753;
if(inst_27735){
var statearr_27764_27788 = state_27753__$1;
(statearr_27764_27788[(1)] = (12));

} else {
var statearr_27765_27789 = state_27753__$1;
(statearr_27765_27789[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (5))){
var inst_27723 = (state_27753[(9)]);
var inst_27717 = (state_27753[(7)]);
var inst_27719 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27720 = (new cljs.core.PersistentArrayMap(null,2,inst_27719,null));
var inst_27721 = (new cljs.core.PersistentHashSet(null,inst_27720,null));
var inst_27722 = figwheel.client.focus_msgs.call(null,inst_27721,inst_27717);
var inst_27723__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27722);
var inst_27724 = cljs.core.first.call(null,inst_27722);
var inst_27725 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27723__$1,opts);
var state_27753__$1 = (function (){var statearr_27766 = state_27753;
(statearr_27766[(9)] = inst_27723__$1);

(statearr_27766[(8)] = inst_27724);

return statearr_27766;
})();
if(cljs.core.truth_(inst_27725)){
var statearr_27767_27790 = state_27753__$1;
(statearr_27767_27790[(1)] = (8));

} else {
var statearr_27768_27791 = state_27753__$1;
(statearr_27768_27791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (14))){
var inst_27743 = (state_27753[(2)]);
var state_27753__$1 = state_27753;
var statearr_27769_27792 = state_27753__$1;
(statearr_27769_27792[(2)] = inst_27743);

(statearr_27769_27792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (10))){
var inst_27745 = (state_27753[(2)]);
var state_27753__$1 = (function (){var statearr_27770 = state_27753;
(statearr_27770[(10)] = inst_27745);

return statearr_27770;
})();
var statearr_27771_27793 = state_27753__$1;
(statearr_27771_27793[(2)] = null);

(statearr_27771_27793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (8))){
var inst_27724 = (state_27753[(8)]);
var inst_27727 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27728 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27724);
var inst_27729 = cljs.core.async.timeout.call(null,(1000));
var inst_27730 = [inst_27728,inst_27729];
var inst_27731 = (new cljs.core.PersistentVector(null,2,(5),inst_27727,inst_27730,null));
var state_27753__$1 = state_27753;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27753__$1,(11),inst_27731);
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
});})(c__18684__auto___27779,ch))
;
return ((function (switch__18628__auto__,c__18684__auto___27779,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18629__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18629__auto____0 = (function (){
var statearr_27775 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27775[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18629__auto__);

(statearr_27775[(1)] = (1));

return statearr_27775;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18629__auto____1 = (function (state_27753){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_27753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e27776){if((e27776 instanceof Object)){
var ex__18632__auto__ = e27776;
var statearr_27777_27794 = state_27753;
(statearr_27777_27794[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27795 = state_27753;
state_27753 = G__27795;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18629__auto__ = function(state_27753){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18629__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18629__auto____1.call(this,state_27753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18629__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18629__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto___27779,ch))
})();
var state__18686__auto__ = (function (){var statearr_27778 = f__18685__auto__.call(null);
(statearr_27778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto___27779);

return statearr_27778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto___27779,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27796_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27796_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_27803 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27803){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27801 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27802 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_27801,_STAR_print_newline_STAR_27802,base_path_27803){
return (function() { 
var G__27804__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27804 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27805__i = 0, G__27805__a = new Array(arguments.length -  0);
while (G__27805__i < G__27805__a.length) {G__27805__a[G__27805__i] = arguments[G__27805__i + 0]; ++G__27805__i;}
  args = new cljs.core.IndexedSeq(G__27805__a,0);
} 
return G__27804__delegate.call(this,args);};
G__27804.cljs$lang$maxFixedArity = 0;
G__27804.cljs$lang$applyTo = (function (arglist__27806){
var args = cljs.core.seq(arglist__27806);
return G__27804__delegate(args);
});
G__27804.cljs$core$IFn$_invoke$arity$variadic = G__27804__delegate;
return G__27804;
})()
;})(_STAR_print_fn_STAR_27801,_STAR_print_newline_STAR_27802,base_path_27803))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27802;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27801;
}}catch (e27800){if((e27800 instanceof Error)){
var e = e27800;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27803], null));
} else {
var e = e27800;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27803))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27807){
var map__27812 = p__27807;
var map__27812__$1 = ((cljs.core.seq_QMARK_.call(null,map__27812))?cljs.core.apply.call(null,cljs.core.hash_map,map__27812):map__27812);
var opts = map__27812__$1;
var build_id = cljs.core.get.call(null,map__27812__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27812,map__27812__$1,opts,build_id){
return (function (p__27813){
var vec__27814 = p__27813;
var map__27815 = cljs.core.nth.call(null,vec__27814,(0),null);
var map__27815__$1 = ((cljs.core.seq_QMARK_.call(null,map__27815))?cljs.core.apply.call(null,cljs.core.hash_map,map__27815):map__27815);
var msg = map__27815__$1;
var msg_name = cljs.core.get.call(null,map__27815__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27814,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27814,map__27815,map__27815__$1,msg,msg_name,_,map__27812,map__27812__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27814,map__27815,map__27815__$1,msg,msg_name,_,map__27812,map__27812__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27812,map__27812__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27819){
var vec__27820 = p__27819;
var map__27821 = cljs.core.nth.call(null,vec__27820,(0),null);
var map__27821__$1 = ((cljs.core.seq_QMARK_.call(null,map__27821))?cljs.core.apply.call(null,cljs.core.hash_map,map__27821):map__27821);
var msg = map__27821__$1;
var msg_name = cljs.core.get.call(null,map__27821__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27820,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27822){
var map__27830 = p__27822;
var map__27830__$1 = ((cljs.core.seq_QMARK_.call(null,map__27830))?cljs.core.apply.call(null,cljs.core.hash_map,map__27830):map__27830);
var on_compile_warning = cljs.core.get.call(null,map__27830__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27830__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27830,map__27830__$1,on_compile_warning,on_compile_fail){
return (function (p__27831){
var vec__27832 = p__27831;
var map__27833 = cljs.core.nth.call(null,vec__27832,(0),null);
var map__27833__$1 = ((cljs.core.seq_QMARK_.call(null,map__27833))?cljs.core.apply.call(null,cljs.core.hash_map,map__27833):map__27833);
var msg = map__27833__$1;
var msg_name = cljs.core.get.call(null,map__27833__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27832,(1));
var pred__27834 = cljs.core._EQ_;
var expr__27835 = msg_name;
if(cljs.core.truth_(pred__27834.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27835))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27834.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27835))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27830,map__27830__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto__,msg_hist,msg_names,msg){
return (function (state_28036){
var state_val_28037 = (state_28036[(1)]);
if((state_val_28037 === (7))){
var inst_27970 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28038_28079 = state_28036__$1;
(statearr_28038_28079[(2)] = inst_27970);

(statearr_28038_28079[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (20))){
var inst_27998 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28036__$1 = state_28036;
if(inst_27998){
var statearr_28039_28080 = state_28036__$1;
(statearr_28039_28080[(1)] = (22));

} else {
var statearr_28040_28081 = state_28036__$1;
(statearr_28040_28081[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (27))){
var inst_28010 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28011 = figwheel.client.heads_up.display_warning.call(null,inst_28010);
var state_28036__$1 = state_28036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28036__$1,(30),inst_28011);
} else {
if((state_val_28037 === (1))){
var inst_27958 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28036__$1 = state_28036;
if(cljs.core.truth_(inst_27958)){
var statearr_28041_28082 = state_28036__$1;
(statearr_28041_28082[(1)] = (2));

} else {
var statearr_28042_28083 = state_28036__$1;
(statearr_28042_28083[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (24))){
var inst_28026 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28043_28084 = state_28036__$1;
(statearr_28043_28084[(2)] = inst_28026);

(statearr_28043_28084[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (4))){
var inst_28034 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28036__$1,inst_28034);
} else {
if((state_val_28037 === (15))){
var inst_27986 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27987 = figwheel.client.format_messages.call(null,inst_27986);
var inst_27988 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27989 = figwheel.client.heads_up.display_error.call(null,inst_27987,inst_27988);
var state_28036__$1 = state_28036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28036__$1,(18),inst_27989);
} else {
if((state_val_28037 === (21))){
var inst_28028 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28044_28085 = state_28036__$1;
(statearr_28044_28085[(2)] = inst_28028);

(statearr_28044_28085[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (31))){
var inst_28017 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28036__$1 = state_28036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28036__$1,(34),inst_28017);
} else {
if((state_val_28037 === (32))){
var state_28036__$1 = state_28036;
var statearr_28045_28086 = state_28036__$1;
(statearr_28045_28086[(2)] = null);

(statearr_28045_28086[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (33))){
var inst_28022 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28046_28087 = state_28036__$1;
(statearr_28046_28087[(2)] = inst_28022);

(statearr_28046_28087[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (13))){
var inst_27976 = (state_28036[(2)]);
var inst_27977 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27978 = figwheel.client.format_messages.call(null,inst_27977);
var inst_27979 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27980 = figwheel.client.heads_up.display_error.call(null,inst_27978,inst_27979);
var state_28036__$1 = (function (){var statearr_28047 = state_28036;
(statearr_28047[(7)] = inst_27976);

return statearr_28047;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28036__$1,(14),inst_27980);
} else {
if((state_val_28037 === (22))){
var inst_28000 = figwheel.client.heads_up.clear.call(null);
var state_28036__$1 = state_28036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28036__$1,(25),inst_28000);
} else {
if((state_val_28037 === (29))){
var inst_28024 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28048_28088 = state_28036__$1;
(statearr_28048_28088[(2)] = inst_28024);

(statearr_28048_28088[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (6))){
var inst_27966 = figwheel.client.heads_up.clear.call(null);
var state_28036__$1 = state_28036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28036__$1,(9),inst_27966);
} else {
if((state_val_28037 === (28))){
var inst_28015 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28036__$1 = state_28036;
if(inst_28015){
var statearr_28049_28089 = state_28036__$1;
(statearr_28049_28089[(1)] = (31));

} else {
var statearr_28050_28090 = state_28036__$1;
(statearr_28050_28090[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (25))){
var inst_28002 = (state_28036[(2)]);
var inst_28003 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28004 = figwheel.client.heads_up.display_warning.call(null,inst_28003);
var state_28036__$1 = (function (){var statearr_28051 = state_28036;
(statearr_28051[(8)] = inst_28002);

return statearr_28051;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28036__$1,(26),inst_28004);
} else {
if((state_val_28037 === (34))){
var inst_28019 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28052_28091 = state_28036__$1;
(statearr_28052_28091[(2)] = inst_28019);

(statearr_28052_28091[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (17))){
var inst_28030 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28053_28092 = state_28036__$1;
(statearr_28053_28092[(2)] = inst_28030);

(statearr_28053_28092[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (3))){
var inst_27972 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28036__$1 = state_28036;
if(inst_27972){
var statearr_28054_28093 = state_28036__$1;
(statearr_28054_28093[(1)] = (10));

} else {
var statearr_28055_28094 = state_28036__$1;
(statearr_28055_28094[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (12))){
var inst_28032 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28056_28095 = state_28036__$1;
(statearr_28056_28095[(2)] = inst_28032);

(statearr_28056_28095[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (2))){
var inst_27960 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28036__$1 = state_28036;
if(cljs.core.truth_(inst_27960)){
var statearr_28057_28096 = state_28036__$1;
(statearr_28057_28096[(1)] = (5));

} else {
var statearr_28058_28097 = state_28036__$1;
(statearr_28058_28097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (23))){
var inst_28008 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28036__$1 = state_28036;
if(inst_28008){
var statearr_28059_28098 = state_28036__$1;
(statearr_28059_28098[(1)] = (27));

} else {
var statearr_28060_28099 = state_28036__$1;
(statearr_28060_28099[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (19))){
var inst_27995 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27996 = figwheel.client.heads_up.append_message.call(null,inst_27995);
var state_28036__$1 = state_28036;
var statearr_28061_28100 = state_28036__$1;
(statearr_28061_28100[(2)] = inst_27996);

(statearr_28061_28100[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (11))){
var inst_27984 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28036__$1 = state_28036;
if(inst_27984){
var statearr_28062_28101 = state_28036__$1;
(statearr_28062_28101[(1)] = (15));

} else {
var statearr_28063_28102 = state_28036__$1;
(statearr_28063_28102[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (9))){
var inst_27968 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28064_28103 = state_28036__$1;
(statearr_28064_28103[(2)] = inst_27968);

(statearr_28064_28103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (5))){
var inst_27962 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28036__$1 = state_28036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28036__$1,(8),inst_27962);
} else {
if((state_val_28037 === (14))){
var inst_27982 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28065_28104 = state_28036__$1;
(statearr_28065_28104[(2)] = inst_27982);

(statearr_28065_28104[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (26))){
var inst_28006 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28066_28105 = state_28036__$1;
(statearr_28066_28105[(2)] = inst_28006);

(statearr_28066_28105[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (16))){
var inst_27993 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28036__$1 = state_28036;
if(inst_27993){
var statearr_28067_28106 = state_28036__$1;
(statearr_28067_28106[(1)] = (19));

} else {
var statearr_28068_28107 = state_28036__$1;
(statearr_28068_28107[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (30))){
var inst_28013 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28069_28108 = state_28036__$1;
(statearr_28069_28108[(2)] = inst_28013);

(statearr_28069_28108[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (10))){
var inst_27974 = figwheel.client.heads_up.clear.call(null);
var state_28036__$1 = state_28036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28036__$1,(13),inst_27974);
} else {
if((state_val_28037 === (18))){
var inst_27991 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28070_28109 = state_28036__$1;
(statearr_28070_28109[(2)] = inst_27991);

(statearr_28070_28109[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (8))){
var inst_27964 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28071_28110 = state_28036__$1;
(statearr_28071_28110[(2)] = inst_27964);

(statearr_28071_28110[(1)] = (7));


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
});})(c__18684__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18628__auto__,c__18684__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18629__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18629__auto____0 = (function (){
var statearr_28075 = [null,null,null,null,null,null,null,null,null];
(statearr_28075[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18629__auto__);

(statearr_28075[(1)] = (1));

return statearr_28075;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18629__auto____1 = (function (state_28036){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_28036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e28076){if((e28076 instanceof Object)){
var ex__18632__auto__ = e28076;
var statearr_28077_28111 = state_28036;
(statearr_28077_28111[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28112 = state_28036;
state_28036 = G__28112;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18629__auto__ = function(state_28036){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18629__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18629__auto____1.call(this,state_28036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18629__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18629__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto__,msg_hist,msg_names,msg))
})();
var state__18686__auto__ = (function (){var statearr_28078 = f__18685__auto__.call(null);
(statearr_28078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto__);

return statearr_28078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto__,msg_hist,msg_names,msg))
);

return c__18684__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18684__auto___28175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto___28175,ch){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto___28175,ch){
return (function (state_28158){
var state_val_28159 = (state_28158[(1)]);
if((state_val_28159 === (1))){
var state_28158__$1 = state_28158;
var statearr_28160_28176 = state_28158__$1;
(statearr_28160_28176[(2)] = null);

(statearr_28160_28176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (2))){
var state_28158__$1 = state_28158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28158__$1,(4),ch);
} else {
if((state_val_28159 === (3))){
var inst_28156 = (state_28158[(2)]);
var state_28158__$1 = state_28158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28158__$1,inst_28156);
} else {
if((state_val_28159 === (4))){
var inst_28146 = (state_28158[(7)]);
var inst_28146__$1 = (state_28158[(2)]);
var state_28158__$1 = (function (){var statearr_28161 = state_28158;
(statearr_28161[(7)] = inst_28146__$1);

return statearr_28161;
})();
if(cljs.core.truth_(inst_28146__$1)){
var statearr_28162_28177 = state_28158__$1;
(statearr_28162_28177[(1)] = (5));

} else {
var statearr_28163_28178 = state_28158__$1;
(statearr_28163_28178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (5))){
var inst_28146 = (state_28158[(7)]);
var inst_28148 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28146);
var state_28158__$1 = state_28158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28158__$1,(8),inst_28148);
} else {
if((state_val_28159 === (6))){
var state_28158__$1 = state_28158;
var statearr_28164_28179 = state_28158__$1;
(statearr_28164_28179[(2)] = null);

(statearr_28164_28179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (7))){
var inst_28154 = (state_28158[(2)]);
var state_28158__$1 = state_28158;
var statearr_28165_28180 = state_28158__$1;
(statearr_28165_28180[(2)] = inst_28154);

(statearr_28165_28180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (8))){
var inst_28150 = (state_28158[(2)]);
var state_28158__$1 = (function (){var statearr_28166 = state_28158;
(statearr_28166[(8)] = inst_28150);

return statearr_28166;
})();
var statearr_28167_28181 = state_28158__$1;
(statearr_28167_28181[(2)] = null);

(statearr_28167_28181[(1)] = (2));


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
});})(c__18684__auto___28175,ch))
;
return ((function (switch__18628__auto__,c__18684__auto___28175,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18629__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18629__auto____0 = (function (){
var statearr_28171 = [null,null,null,null,null,null,null,null,null];
(statearr_28171[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18629__auto__);

(statearr_28171[(1)] = (1));

return statearr_28171;
});
var figwheel$client$heads_up_plugin_$_state_machine__18629__auto____1 = (function (state_28158){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_28158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e28172){if((e28172 instanceof Object)){
var ex__18632__auto__ = e28172;
var statearr_28173_28182 = state_28158;
(statearr_28173_28182[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28183 = state_28158;
state_28158 = G__28183;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18629__auto__ = function(state_28158){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18629__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18629__auto____1.call(this,state_28158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18629__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18629__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto___28175,ch))
})();
var state__18686__auto__ = (function (){var statearr_28174 = f__18685__auto__.call(null);
(statearr_28174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto___28175);

return statearr_28174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto___28175,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto__){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto__){
return (function (state_28204){
var state_val_28205 = (state_28204[(1)]);
if((state_val_28205 === (1))){
var inst_28199 = cljs.core.async.timeout.call(null,(3000));
var state_28204__$1 = state_28204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28204__$1,(2),inst_28199);
} else {
if((state_val_28205 === (2))){
var inst_28201 = (state_28204[(2)]);
var inst_28202 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28204__$1 = (function (){var statearr_28206 = state_28204;
(statearr_28206[(7)] = inst_28201);

return statearr_28206;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28204__$1,inst_28202);
} else {
return null;
}
}
});})(c__18684__auto__))
;
return ((function (switch__18628__auto__,c__18684__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18629__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18629__auto____0 = (function (){
var statearr_28210 = [null,null,null,null,null,null,null,null];
(statearr_28210[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18629__auto__);

(statearr_28210[(1)] = (1));

return statearr_28210;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18629__auto____1 = (function (state_28204){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_28204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e28211){if((e28211 instanceof Object)){
var ex__18632__auto__ = e28211;
var statearr_28212_28214 = state_28204;
(statearr_28212_28214[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28215 = state_28204;
state_28204 = G__28215;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18629__auto__ = function(state_28204){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18629__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18629__auto____1.call(this,state_28204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18629__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18629__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto__))
})();
var state__18686__auto__ = (function (){var statearr_28213 = f__18685__auto__.call(null);
(statearr_28213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto__);

return statearr_28213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto__))
);

return c__18684__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28216){
var map__28222 = p__28216;
var map__28222__$1 = ((cljs.core.seq_QMARK_.call(null,map__28222))?cljs.core.apply.call(null,cljs.core.hash_map,map__28222):map__28222);
var ed = map__28222__$1;
var formatted_exception = cljs.core.get.call(null,map__28222__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28222__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28222__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28223_28227 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28224_28228 = null;
var count__28225_28229 = (0);
var i__28226_28230 = (0);
while(true){
if((i__28226_28230 < count__28225_28229)){
var msg_28231 = cljs.core._nth.call(null,chunk__28224_28228,i__28226_28230);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28231);

var G__28232 = seq__28223_28227;
var G__28233 = chunk__28224_28228;
var G__28234 = count__28225_28229;
var G__28235 = (i__28226_28230 + (1));
seq__28223_28227 = G__28232;
chunk__28224_28228 = G__28233;
count__28225_28229 = G__28234;
i__28226_28230 = G__28235;
continue;
} else {
var temp__4425__auto___28236 = cljs.core.seq.call(null,seq__28223_28227);
if(temp__4425__auto___28236){
var seq__28223_28237__$1 = temp__4425__auto___28236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28223_28237__$1)){
var c__16992__auto___28238 = cljs.core.chunk_first.call(null,seq__28223_28237__$1);
var G__28239 = cljs.core.chunk_rest.call(null,seq__28223_28237__$1);
var G__28240 = c__16992__auto___28238;
var G__28241 = cljs.core.count.call(null,c__16992__auto___28238);
var G__28242 = (0);
seq__28223_28227 = G__28239;
chunk__28224_28228 = G__28240;
count__28225_28229 = G__28241;
i__28226_28230 = G__28242;
continue;
} else {
var msg_28243 = cljs.core.first.call(null,seq__28223_28237__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28243);

var G__28244 = cljs.core.next.call(null,seq__28223_28237__$1);
var G__28245 = null;
var G__28246 = (0);
var G__28247 = (0);
seq__28223_28227 = G__28244;
chunk__28224_28228 = G__28245;
count__28225_28229 = G__28246;
i__28226_28230 = G__28247;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28248){
var map__28250 = p__28248;
var map__28250__$1 = ((cljs.core.seq_QMARK_.call(null,map__28250))?cljs.core.apply.call(null,cljs.core.hash_map,map__28250):map__28250);
var w = map__28250__$1;
var message = cljs.core.get.call(null,map__28250__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16195__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16195__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16195__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28257 = cljs.core.seq.call(null,plugins);
var chunk__28258 = null;
var count__28259 = (0);
var i__28260 = (0);
while(true){
if((i__28260 < count__28259)){
var vec__28261 = cljs.core._nth.call(null,chunk__28258,i__28260);
var k = cljs.core.nth.call(null,vec__28261,(0),null);
var plugin = cljs.core.nth.call(null,vec__28261,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28263 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28257,chunk__28258,count__28259,i__28260,pl_28263,vec__28261,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28263.call(null,msg_hist);
});})(seq__28257,chunk__28258,count__28259,i__28260,pl_28263,vec__28261,k,plugin))
);
} else {
}

var G__28264 = seq__28257;
var G__28265 = chunk__28258;
var G__28266 = count__28259;
var G__28267 = (i__28260 + (1));
seq__28257 = G__28264;
chunk__28258 = G__28265;
count__28259 = G__28266;
i__28260 = G__28267;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28257);
if(temp__4425__auto__){
var seq__28257__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28257__$1)){
var c__16992__auto__ = cljs.core.chunk_first.call(null,seq__28257__$1);
var G__28268 = cljs.core.chunk_rest.call(null,seq__28257__$1);
var G__28269 = c__16992__auto__;
var G__28270 = cljs.core.count.call(null,c__16992__auto__);
var G__28271 = (0);
seq__28257 = G__28268;
chunk__28258 = G__28269;
count__28259 = G__28270;
i__28260 = G__28271;
continue;
} else {
var vec__28262 = cljs.core.first.call(null,seq__28257__$1);
var k = cljs.core.nth.call(null,vec__28262,(0),null);
var plugin = cljs.core.nth.call(null,vec__28262,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28272 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28257,chunk__28258,count__28259,i__28260,pl_28272,vec__28262,k,plugin,seq__28257__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28272.call(null,msg_hist);
});})(seq__28257,chunk__28258,count__28259,i__28260,pl_28272,vec__28262,k,plugin,seq__28257__$1,temp__4425__auto__))
);
} else {
}

var G__28273 = cljs.core.next.call(null,seq__28257__$1);
var G__28274 = null;
var G__28275 = (0);
var G__28276 = (0);
seq__28257 = G__28273;
chunk__28258 = G__28274;
count__28259 = G__28275;
i__28260 = G__28276;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var figwheel$client$start = null;
var figwheel$client$start__0 = (function (){
return figwheel$client$start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var figwheel$client$start__1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});
figwheel$client$start = function(opts){
switch(arguments.length){
case 0:
return figwheel$client$start__0.call(this);
case 1:
return figwheel$client$start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$start.cljs$core$IFn$_invoke$arity$0 = figwheel$client$start__0;
figwheel$client$start.cljs$core$IFn$_invoke$arity$1 = figwheel$client$start__1;
return figwheel$client$start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
 * @param {...*} var_args
 */
figwheel.client.watch_and_reload = (function() { 
var figwheel$client$watch_and_reload__delegate = function (p__28277){
var map__28279 = p__28277;
var map__28279__$1 = ((cljs.core.seq_QMARK_.call(null,map__28279))?cljs.core.apply.call(null,cljs.core.hash_map,map__28279):map__28279);
var opts = map__28279__$1;
return figwheel.client.start.call(null,opts);
};
var figwheel$client$watch_and_reload = function (var_args){
var p__28277 = null;
if (arguments.length > 0) {
var G__28280__i = 0, G__28280__a = new Array(arguments.length -  0);
while (G__28280__i < G__28280__a.length) {G__28280__a[G__28280__i] = arguments[G__28280__i + 0]; ++G__28280__i;}
  p__28277 = new cljs.core.IndexedSeq(G__28280__a,0);
} 
return figwheel$client$watch_and_reload__delegate.call(this,p__28277);};
figwheel$client$watch_and_reload.cljs$lang$maxFixedArity = 0;
figwheel$client$watch_and_reload.cljs$lang$applyTo = (function (arglist__28281){
var p__28277 = cljs.core.seq(arglist__28281);
return figwheel$client$watch_and_reload__delegate(p__28277);
});
figwheel$client$watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$watch_and_reload__delegate;
return figwheel$client$watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map