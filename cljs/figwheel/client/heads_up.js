// Compiled by ClojureScript 0.0-3165 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

/**
 * @param {...*} var_args
 */
figwheel.client.heads_up.node = (function() { 
var figwheel$client$heads_up$node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28413_28421 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28414_28422 = null;
var count__28415_28423 = (0);
var i__28416_28424 = (0);
while(true){
if((i__28416_28424 < count__28415_28423)){
var k_28425 = cljs.core._nth.call(null,chunk__28414_28422,i__28416_28424);
e.setAttribute(cljs.core.name.call(null,k_28425),cljs.core.get.call(null,attrs,k_28425));

var G__28426 = seq__28413_28421;
var G__28427 = chunk__28414_28422;
var G__28428 = count__28415_28423;
var G__28429 = (i__28416_28424 + (1));
seq__28413_28421 = G__28426;
chunk__28414_28422 = G__28427;
count__28415_28423 = G__28428;
i__28416_28424 = G__28429;
continue;
} else {
var temp__4425__auto___28430 = cljs.core.seq.call(null,seq__28413_28421);
if(temp__4425__auto___28430){
var seq__28413_28431__$1 = temp__4425__auto___28430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28413_28431__$1)){
var c__16992__auto___28432 = cljs.core.chunk_first.call(null,seq__28413_28431__$1);
var G__28433 = cljs.core.chunk_rest.call(null,seq__28413_28431__$1);
var G__28434 = c__16992__auto___28432;
var G__28435 = cljs.core.count.call(null,c__16992__auto___28432);
var G__28436 = (0);
seq__28413_28421 = G__28433;
chunk__28414_28422 = G__28434;
count__28415_28423 = G__28435;
i__28416_28424 = G__28436;
continue;
} else {
var k_28437 = cljs.core.first.call(null,seq__28413_28431__$1);
e.setAttribute(cljs.core.name.call(null,k_28437),cljs.core.get.call(null,attrs,k_28437));

var G__28438 = cljs.core.next.call(null,seq__28413_28431__$1);
var G__28439 = null;
var G__28440 = (0);
var G__28441 = (0);
seq__28413_28421 = G__28438;
chunk__28414_28422 = G__28439;
count__28415_28423 = G__28440;
i__28416_28424 = G__28441;
continue;
}
} else {
}
}
break;
}

var seq__28417_28442 = cljs.core.seq.call(null,children);
var chunk__28418_28443 = null;
var count__28419_28444 = (0);
var i__28420_28445 = (0);
while(true){
if((i__28420_28445 < count__28419_28444)){
var ch_28446 = cljs.core._nth.call(null,chunk__28418_28443,i__28420_28445);
e.appendChild(ch_28446);

var G__28447 = seq__28417_28442;
var G__28448 = chunk__28418_28443;
var G__28449 = count__28419_28444;
var G__28450 = (i__28420_28445 + (1));
seq__28417_28442 = G__28447;
chunk__28418_28443 = G__28448;
count__28419_28444 = G__28449;
i__28420_28445 = G__28450;
continue;
} else {
var temp__4425__auto___28451 = cljs.core.seq.call(null,seq__28417_28442);
if(temp__4425__auto___28451){
var seq__28417_28452__$1 = temp__4425__auto___28451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28417_28452__$1)){
var c__16992__auto___28453 = cljs.core.chunk_first.call(null,seq__28417_28452__$1);
var G__28454 = cljs.core.chunk_rest.call(null,seq__28417_28452__$1);
var G__28455 = c__16992__auto___28453;
var G__28456 = cljs.core.count.call(null,c__16992__auto___28453);
var G__28457 = (0);
seq__28417_28442 = G__28454;
chunk__28418_28443 = G__28455;
count__28419_28444 = G__28456;
i__28420_28445 = G__28457;
continue;
} else {
var ch_28458 = cljs.core.first.call(null,seq__28417_28452__$1);
e.appendChild(ch_28458);

var G__28459 = cljs.core.next.call(null,seq__28417_28452__$1);
var G__28460 = null;
var G__28461 = (0);
var G__28462 = (0);
seq__28417_28442 = G__28459;
chunk__28418_28443 = G__28460;
count__28419_28444 = G__28461;
i__28420_28445 = G__28462;
continue;
}
} else {
}
}
break;
}

return e;
};
var figwheel$client$heads_up$node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__28463__i = 0, G__28463__a = new Array(arguments.length -  2);
while (G__28463__i < G__28463__a.length) {G__28463__a[G__28463__i] = arguments[G__28463__i + 2]; ++G__28463__i;}
  children = new cljs.core.IndexedSeq(G__28463__a,0);
} 
return figwheel$client$heads_up$node__delegate.call(this,t,attrs,children);};
figwheel$client$heads_up$node.cljs$lang$maxFixedArity = 2;
figwheel$client$heads_up$node.cljs$lang$applyTo = (function (arglist__28464){
var t = cljs.core.first(arglist__28464);
arglist__28464 = cljs.core.next(arglist__28464);
var attrs = cljs.core.first(arglist__28464);
var children = cljs.core.rest(arglist__28464);
return figwheel$client$heads_up$node__delegate(t,attrs,children);
});
figwheel$client$heads_up$node.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$heads_up$node__delegate;
return figwheel$client$heads_up$node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17102__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17103__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17104__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17105__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17106__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17102__auto__,prefer_table__17103__auto__,method_cache__17104__auto__,cached_hierarchy__17105__auto__,hierarchy__17106__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17102__auto__,prefer_table__17103__auto__,method_cache__17104__auto__,cached_hierarchy__17105__auto__,hierarchy__17106__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17106__auto__,method_table__17102__auto__,prefer_table__17103__auto__,method_cache__17104__auto__,cached_hierarchy__17105__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_28465 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28465.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28465.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_28465.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28465);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28466,st_map){
var map__28470 = p__28466;
var map__28470__$1 = ((cljs.core.seq_QMARK_.call(null,map__28470))?cljs.core.apply.call(null,cljs.core.hash_map,map__28470):map__28470);
var container_el = cljs.core.get.call(null,map__28470__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28470,map__28470__$1,container_el){
return (function (p__28471){
var vec__28472 = p__28471;
var k = cljs.core.nth.call(null,vec__28472,(0),null);
var v = cljs.core.nth.call(null,vec__28472,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28470,map__28470__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28473,dom_str){
var map__28475 = p__28473;
var map__28475__$1 = ((cljs.core.seq_QMARK_.call(null,map__28475))?cljs.core.apply.call(null,cljs.core.hash_map,map__28475):map__28475);
var c = map__28475__$1;
var content_area_el = cljs.core.get.call(null,map__28475__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28476){
var map__28478 = p__28476;
var map__28478__$1 = ((cljs.core.seq_QMARK_.call(null,map__28478))?cljs.core.apply.call(null,cljs.core.hash_map,map__28478):map__28478);
var content_area_el = cljs.core.get.call(null,map__28478__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__18684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto__){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto__){
return (function (state_28520){
var state_val_28521 = (state_28520[(1)]);
if((state_val_28521 === (1))){
var inst_28505 = (state_28520[(7)]);
var inst_28505__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28506 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28507 = ["10px","10px","100%","68px","1.0"];
var inst_28508 = cljs.core.PersistentHashMap.fromArrays(inst_28506,inst_28507);
var inst_28509 = cljs.core.merge.call(null,inst_28508,style);
var inst_28510 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28505__$1,inst_28509);
var inst_28511 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28505__$1,msg);
var inst_28512 = cljs.core.async.timeout.call(null,(300));
var state_28520__$1 = (function (){var statearr_28522 = state_28520;
(statearr_28522[(7)] = inst_28505__$1);

(statearr_28522[(8)] = inst_28510);

(statearr_28522[(9)] = inst_28511);

return statearr_28522;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28520__$1,(2),inst_28512);
} else {
if((state_val_28521 === (2))){
var inst_28505 = (state_28520[(7)]);
var inst_28514 = (state_28520[(2)]);
var inst_28515 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28516 = ["auto"];
var inst_28517 = cljs.core.PersistentHashMap.fromArrays(inst_28515,inst_28516);
var inst_28518 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28505,inst_28517);
var state_28520__$1 = (function (){var statearr_28523 = state_28520;
(statearr_28523[(10)] = inst_28514);

return statearr_28523;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28520__$1,inst_28518);
} else {
return null;
}
}
});})(c__18684__auto__))
;
return ((function (switch__18628__auto__,c__18684__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__18629__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__18629__auto____0 = (function (){
var statearr_28527 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28527[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__18629__auto__);

(statearr_28527[(1)] = (1));

return statearr_28527;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__18629__auto____1 = (function (state_28520){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_28520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e28528){if((e28528 instanceof Object)){
var ex__18632__auto__ = e28528;
var statearr_28529_28531 = state_28520;
(statearr_28529_28531[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28532 = state_28520;
state_28520 = G__28532;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__18629__auto__ = function(state_28520){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18629__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18629__auto____1.call(this,state_28520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__18629__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__18629__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto__))
})();
var state__18686__auto__ = (function (){var statearr_28530 = f__18685__auto__.call(null);
(statearr_28530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto__);

return statearr_28530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto__))
);

return c__18684__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__28534 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__28534,(0),null);
var ln = cljs.core.nth.call(null,vec__28534,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28537 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28537,(0),null);
var file_line = cljs.core.nth.call(null,vec__28537,(1),null);
var file_column = cljs.core.nth.call(null,vec__28537,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28537,file_name,file_line,file_column){
return (function (p1__28535_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__28535_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__28537,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16207__auto__ = file_line;
if(cljs.core.truth_(or__16207__auto__)){
return or__16207__auto__;
} else {
var and__16195__auto__ = cause;
if(cljs.core.truth_(and__16195__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16195__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__28539 = figwheel.client.heads_up.ensure_container.call(null);
var map__28539__$1 = ((cljs.core.seq_QMARK_.call(null,map__28539))?cljs.core.apply.call(null,cljs.core.hash_map,map__28539):map__28539);
var content_area_el = cljs.core.get.call(null,map__28539__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__18684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto__){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto__){
return (function (state_28586){
var state_val_28587 = (state_28586[(1)]);
if((state_val_28587 === (1))){
var inst_28569 = (state_28586[(7)]);
var inst_28569__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28570 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28571 = ["0.0"];
var inst_28572 = cljs.core.PersistentHashMap.fromArrays(inst_28570,inst_28571);
var inst_28573 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28569__$1,inst_28572);
var inst_28574 = cljs.core.async.timeout.call(null,(300));
var state_28586__$1 = (function (){var statearr_28588 = state_28586;
(statearr_28588[(7)] = inst_28569__$1);

(statearr_28588[(8)] = inst_28573);

return statearr_28588;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28586__$1,(2),inst_28574);
} else {
if((state_val_28587 === (2))){
var inst_28569 = (state_28586[(7)]);
var inst_28576 = (state_28586[(2)]);
var inst_28577 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28578 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28579 = cljs.core.PersistentHashMap.fromArrays(inst_28577,inst_28578);
var inst_28580 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28569,inst_28579);
var inst_28581 = cljs.core.async.timeout.call(null,(200));
var state_28586__$1 = (function (){var statearr_28589 = state_28586;
(statearr_28589[(9)] = inst_28576);

(statearr_28589[(10)] = inst_28580);

return statearr_28589;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28586__$1,(3),inst_28581);
} else {
if((state_val_28587 === (3))){
var inst_28569 = (state_28586[(7)]);
var inst_28583 = (state_28586[(2)]);
var inst_28584 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28569,"");
var state_28586__$1 = (function (){var statearr_28590 = state_28586;
(statearr_28590[(11)] = inst_28583);

return statearr_28590;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28586__$1,inst_28584);
} else {
return null;
}
}
}
});})(c__18684__auto__))
;
return ((function (switch__18628__auto__,c__18684__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__18629__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__18629__auto____0 = (function (){
var statearr_28594 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28594[(0)] = figwheel$client$heads_up$clear_$_state_machine__18629__auto__);

(statearr_28594[(1)] = (1));

return statearr_28594;
});
var figwheel$client$heads_up$clear_$_state_machine__18629__auto____1 = (function (state_28586){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_28586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e28595){if((e28595 instanceof Object)){
var ex__18632__auto__ = e28595;
var statearr_28596_28598 = state_28586;
(statearr_28596_28598[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28599 = state_28586;
state_28586 = G__28599;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__18629__auto__ = function(state_28586){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__18629__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__18629__auto____1.call(this,state_28586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__18629__auto____0;
figwheel$client$heads_up$clear_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__18629__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto__))
})();
var state__18686__auto__ = (function (){var statearr_28597 = f__18685__auto__.call(null);
(statearr_28597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto__);

return statearr_28597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto__))
);

return c__18684__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__18684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto__){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto__){
return (function (state_28631){
var state_val_28632 = (state_28631[(1)]);
if((state_val_28632 === (1))){
var inst_28621 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28631__$1 = state_28631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28631__$1,(2),inst_28621);
} else {
if((state_val_28632 === (2))){
var inst_28623 = (state_28631[(2)]);
var inst_28624 = cljs.core.async.timeout.call(null,(400));
var state_28631__$1 = (function (){var statearr_28633 = state_28631;
(statearr_28633[(7)] = inst_28623);

return statearr_28633;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28631__$1,(3),inst_28624);
} else {
if((state_val_28632 === (3))){
var inst_28626 = (state_28631[(2)]);
var inst_28627 = figwheel.client.heads_up.clear.call(null);
var state_28631__$1 = (function (){var statearr_28634 = state_28631;
(statearr_28634[(8)] = inst_28626);

return statearr_28634;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28631__$1,(4),inst_28627);
} else {
if((state_val_28632 === (4))){
var inst_28629 = (state_28631[(2)]);
var state_28631__$1 = state_28631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28631__$1,inst_28629);
} else {
return null;
}
}
}
}
});})(c__18684__auto__))
;
return ((function (switch__18628__auto__,c__18684__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__18629__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__18629__auto____0 = (function (){
var statearr_28638 = [null,null,null,null,null,null,null,null,null];
(statearr_28638[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__18629__auto__);

(statearr_28638[(1)] = (1));

return statearr_28638;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__18629__auto____1 = (function (state_28631){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_28631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e28639){if((e28639 instanceof Object)){
var ex__18632__auto__ = e28639;
var statearr_28640_28642 = state_28631;
(statearr_28640_28642[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28643 = state_28631;
state_28631 = G__28643;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__18629__auto__ = function(state_28631){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18629__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18629__auto____1.call(this,state_28631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__18629__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__18629__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto__))
})();
var state__18686__auto__ = (function (){var statearr_28641 = f__18685__auto__.call(null);
(statearr_28641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto__);

return statearr_28641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto__))
);

return c__18684__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map