// Compiled by ClojureScript 0.0-3165 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__16207__auto__ = elem.textContent;
if(cljs.core.truth_(or__16207__auto__)){
return or__16207__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function() {
var dommy$core$style = null;
var dommy$core$style__1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});
var dommy$core$style__2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});
dommy$core$style = function(elem,k){
switch(arguments.length){
case 1:
return dommy$core$style__1.call(this,elem);
case 2:
return dommy$core$style__2.call(this,elem,k);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$style.cljs$core$IFn$_invoke$arity$1 = dommy$core$style__1;
dommy$core$style.cljs$core$IFn$_invoke$arity$2 = dommy$core$style__2;
return dommy$core$style;
})()
;
dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto__ = elem.classList;
if(cljs.core.truth_(temp__4423__auto__)){
var class_list = temp__4423__auto__;
return class_list.contains(c__$1);
} else {
var temp__4425__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4425__auto__)){
var class_name = temp__4425__auto__;
var temp__4425__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4425__auto____$1)){
var i = temp__4425__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function() {
var dommy$core$matches_pred = null;
var dommy$core$matches_pred__1 = (function (selector){
return dommy$core$matches_pred.call(null,document,selector);
});
var dommy$core$matches_pred__2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});
dommy$core$matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return dommy$core$matches_pred__1.call(this,base);
case 2:
return dommy$core$matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$matches_pred.cljs$core$IFn$_invoke$arity$1 = dommy$core$matches_pred__1;
dommy$core$matches_pred.cljs$core$IFn$_invoke$arity$2 = dommy$core$matches_pred__2;
return dommy$core$matches_pred;
})()
;
/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function() {
var dommy$core$closest = null;
var dommy$core$closest__2 = (function (elem,selector){
return dommy$core$closest.call(null,document.body,elem,selector);
});
var dommy$core$closest__3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__23370_SHARP_){
return !((p1__23370_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});
dommy$core$closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return dommy$core$closest__2.call(this,base,elem);
case 3:
return dommy$core$closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$closest.cljs$core$IFn$_invoke$arity$2 = dommy$core$closest__2;
dommy$core$closest.cljs$core$IFn$_invoke$arity$3 = dommy$core$closest__3;
return dommy$core$closest;
})()
;
/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 * (set-style! elem :display "block" :color "red")
 * @param {...*} var_args
 */
dommy.core.set_style_BANG_ = (function() { 
var dommy$core$set_style_BANG___delegate = function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__23377_23383 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__23378_23384 = null;
var count__23379_23385 = (0);
var i__23380_23386 = (0);
while(true){
if((i__23380_23386 < count__23379_23385)){
var vec__23381_23387 = cljs.core._nth.call(null,chunk__23378_23384,i__23380_23386);
var k_23388 = cljs.core.nth.call(null,vec__23381_23387,(0),null);
var v_23389 = cljs.core.nth.call(null,vec__23381_23387,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_23388),v_23389);

var G__23390 = seq__23377_23383;
var G__23391 = chunk__23378_23384;
var G__23392 = count__23379_23385;
var G__23393 = (i__23380_23386 + (1));
seq__23377_23383 = G__23390;
chunk__23378_23384 = G__23391;
count__23379_23385 = G__23392;
i__23380_23386 = G__23393;
continue;
} else {
var temp__4425__auto___23394 = cljs.core.seq.call(null,seq__23377_23383);
if(temp__4425__auto___23394){
var seq__23377_23395__$1 = temp__4425__auto___23394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23377_23395__$1)){
var c__16992__auto___23396 = cljs.core.chunk_first.call(null,seq__23377_23395__$1);
var G__23397 = cljs.core.chunk_rest.call(null,seq__23377_23395__$1);
var G__23398 = c__16992__auto___23396;
var G__23399 = cljs.core.count.call(null,c__16992__auto___23396);
var G__23400 = (0);
seq__23377_23383 = G__23397;
chunk__23378_23384 = G__23398;
count__23379_23385 = G__23399;
i__23380_23386 = G__23400;
continue;
} else {
var vec__23382_23401 = cljs.core.first.call(null,seq__23377_23395__$1);
var k_23402 = cljs.core.nth.call(null,vec__23382_23401,(0),null);
var v_23403 = cljs.core.nth.call(null,vec__23382_23401,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_23402),v_23403);

var G__23404 = cljs.core.next.call(null,seq__23377_23395__$1);
var G__23405 = null;
var G__23406 = (0);
var G__23407 = (0);
seq__23377_23383 = G__23404;
chunk__23378_23384 = G__23405;
count__23379_23385 = G__23406;
i__23380_23386 = G__23407;
continue;
}
} else {
}
}
break;
}

return elem;
};
var dommy$core$set_style_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__23408__i = 0, G__23408__a = new Array(arguments.length -  1);
while (G__23408__i < G__23408__a.length) {G__23408__a[G__23408__i] = arguments[G__23408__i + 1]; ++G__23408__i;}
  kvs = new cljs.core.IndexedSeq(G__23408__a,0);
} 
return dommy$core$set_style_BANG___delegate.call(this,elem,kvs);};
dommy$core$set_style_BANG_.cljs$lang$maxFixedArity = 1;
dommy$core$set_style_BANG_.cljs$lang$applyTo = (function (arglist__23409){
var elem = cljs.core.first(arglist__23409);
var kvs = cljs.core.rest(arglist__23409);
return dommy$core$set_style_BANG___delegate(elem,kvs);
});
dommy$core$set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$set_style_BANG___delegate;
return dommy$core$set_style_BANG_;
})()
;
/**
 * Remove the style of `elem` using keywords:
 * 
 * (remove-style! elem :display :color)
 * @param {...*} var_args
 */
dommy.core.remove_style_BANG_ = (function() { 
var dommy$core$remove_style_BANG___delegate = function (elem,keywords){
var style = elem.style;
var seq__23414_23418 = cljs.core.seq.call(null,keywords);
var chunk__23415_23419 = null;
var count__23416_23420 = (0);
var i__23417_23421 = (0);
while(true){
if((i__23417_23421 < count__23416_23420)){
var kw_23422 = cljs.core._nth.call(null,chunk__23415_23419,i__23417_23421);
style.removeProperty(dommy.utils.as_str.call(null,kw_23422));

var G__23423 = seq__23414_23418;
var G__23424 = chunk__23415_23419;
var G__23425 = count__23416_23420;
var G__23426 = (i__23417_23421 + (1));
seq__23414_23418 = G__23423;
chunk__23415_23419 = G__23424;
count__23416_23420 = G__23425;
i__23417_23421 = G__23426;
continue;
} else {
var temp__4425__auto___23427 = cljs.core.seq.call(null,seq__23414_23418);
if(temp__4425__auto___23427){
var seq__23414_23428__$1 = temp__4425__auto___23427;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23414_23428__$1)){
var c__16992__auto___23429 = cljs.core.chunk_first.call(null,seq__23414_23428__$1);
var G__23430 = cljs.core.chunk_rest.call(null,seq__23414_23428__$1);
var G__23431 = c__16992__auto___23429;
var G__23432 = cljs.core.count.call(null,c__16992__auto___23429);
var G__23433 = (0);
seq__23414_23418 = G__23430;
chunk__23415_23419 = G__23431;
count__23416_23420 = G__23432;
i__23417_23421 = G__23433;
continue;
} else {
var kw_23434 = cljs.core.first.call(null,seq__23414_23428__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_23434));

var G__23435 = cljs.core.next.call(null,seq__23414_23428__$1);
var G__23436 = null;
var G__23437 = (0);
var G__23438 = (0);
seq__23414_23418 = G__23435;
chunk__23415_23419 = G__23436;
count__23416_23420 = G__23437;
i__23417_23421 = G__23438;
continue;
}
} else {
}
}
break;
}

return elem;
};
var dommy$core$remove_style_BANG_ = function (elem,var_args){
var keywords = null;
if (arguments.length > 1) {
var G__23439__i = 0, G__23439__a = new Array(arguments.length -  1);
while (G__23439__i < G__23439__a.length) {G__23439__a[G__23439__i] = arguments[G__23439__i + 1]; ++G__23439__i;}
  keywords = new cljs.core.IndexedSeq(G__23439__a,0);
} 
return dommy$core$remove_style_BANG___delegate.call(this,elem,keywords);};
dommy$core$remove_style_BANG_.cljs$lang$maxFixedArity = 1;
dommy$core$remove_style_BANG_.cljs$lang$applyTo = (function (arglist__23440){
var elem = cljs.core.first(arglist__23440);
var keywords = cljs.core.rest(arglist__23440);
return dommy$core$remove_style_BANG___delegate(elem,keywords);
});
dommy$core$remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$remove_style_BANG___delegate;
return dommy$core$remove_style_BANG_;
})()
;
/**
 * @param {...*} var_args
 */
dommy.core.set_px_BANG_ = (function() { 
var dommy$core$set_px_BANG___delegate = function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__23447_23453 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__23448_23454 = null;
var count__23449_23455 = (0);
var i__23450_23456 = (0);
while(true){
if((i__23450_23456 < count__23449_23455)){
var vec__23451_23457 = cljs.core._nth.call(null,chunk__23448_23454,i__23450_23456);
var k_23458 = cljs.core.nth.call(null,vec__23451_23457,(0),null);
var v_23459 = cljs.core.nth.call(null,vec__23451_23457,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_23458,[cljs.core.str(v_23459),cljs.core.str("px")].join(''));

var G__23460 = seq__23447_23453;
var G__23461 = chunk__23448_23454;
var G__23462 = count__23449_23455;
var G__23463 = (i__23450_23456 + (1));
seq__23447_23453 = G__23460;
chunk__23448_23454 = G__23461;
count__23449_23455 = G__23462;
i__23450_23456 = G__23463;
continue;
} else {
var temp__4425__auto___23464 = cljs.core.seq.call(null,seq__23447_23453);
if(temp__4425__auto___23464){
var seq__23447_23465__$1 = temp__4425__auto___23464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23447_23465__$1)){
var c__16992__auto___23466 = cljs.core.chunk_first.call(null,seq__23447_23465__$1);
var G__23467 = cljs.core.chunk_rest.call(null,seq__23447_23465__$1);
var G__23468 = c__16992__auto___23466;
var G__23469 = cljs.core.count.call(null,c__16992__auto___23466);
var G__23470 = (0);
seq__23447_23453 = G__23467;
chunk__23448_23454 = G__23468;
count__23449_23455 = G__23469;
i__23450_23456 = G__23470;
continue;
} else {
var vec__23452_23471 = cljs.core.first.call(null,seq__23447_23465__$1);
var k_23472 = cljs.core.nth.call(null,vec__23452_23471,(0),null);
var v_23473 = cljs.core.nth.call(null,vec__23452_23471,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_23472,[cljs.core.str(v_23473),cljs.core.str("px")].join(''));

var G__23474 = cljs.core.next.call(null,seq__23447_23465__$1);
var G__23475 = null;
var G__23476 = (0);
var G__23477 = (0);
seq__23447_23453 = G__23474;
chunk__23448_23454 = G__23475;
count__23449_23455 = G__23476;
i__23450_23456 = G__23477;
continue;
}
} else {
}
}
break;
}

return elem;
};
var dommy$core$set_px_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__23478__i = 0, G__23478__a = new Array(arguments.length -  1);
while (G__23478__i < G__23478__a.length) {G__23478__a[G__23478__i] = arguments[G__23478__i + 1]; ++G__23478__i;}
  kvs = new cljs.core.IndexedSeq(G__23478__a,0);
} 
return dommy$core$set_px_BANG___delegate.call(this,elem,kvs);};
dommy$core$set_px_BANG_.cljs$lang$maxFixedArity = 1;
dommy$core$set_px_BANG_.cljs$lang$applyTo = (function (arglist__23479){
var elem = cljs.core.first(arglist__23479);
var kvs = cljs.core.rest(arglist__23479);
return dommy$core$set_px_BANG___delegate(elem,kvs);
});
dommy$core$set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$set_px_BANG___delegate;
return dommy$core$set_px_BANG_;
})()
;
/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 * (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 * (set-attr! elem :id "some-id"
 * :name "some-name")
 * @param {...*} var_args
 */
dommy.core.set_attr_BANG_ = (function() {
var dommy$core$set_attr_BANG_ = null;
var dommy$core$set_attr_BANG___2 = (function (elem,k){
return dommy$core$set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});
var dommy$core$set_attr_BANG___3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__23488 = elem;
(G__23488[k__$1] = v);

return G__23488;
} else {
var G__23489 = elem;
G__23489.setAttribute(k__$1,v);

return G__23489;
}
} else {
return null;
}
});
var dommy$core$set_attr_BANG___4 = (function() { 
var G__23496__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__23490_23497 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__23491_23498 = null;
var count__23492_23499 = (0);
var i__23493_23500 = (0);
while(true){
if((i__23493_23500 < count__23492_23499)){
var vec__23494_23501 = cljs.core._nth.call(null,chunk__23491_23498,i__23493_23500);
var k_23502__$1 = cljs.core.nth.call(null,vec__23494_23501,(0),null);
var v_23503__$1 = cljs.core.nth.call(null,vec__23494_23501,(1),null);
dommy$core$set_attr_BANG_.call(null,elem,k_23502__$1,v_23503__$1);

var G__23504 = seq__23490_23497;
var G__23505 = chunk__23491_23498;
var G__23506 = count__23492_23499;
var G__23507 = (i__23493_23500 + (1));
seq__23490_23497 = G__23504;
chunk__23491_23498 = G__23505;
count__23492_23499 = G__23506;
i__23493_23500 = G__23507;
continue;
} else {
var temp__4425__auto___23508 = cljs.core.seq.call(null,seq__23490_23497);
if(temp__4425__auto___23508){
var seq__23490_23509__$1 = temp__4425__auto___23508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23490_23509__$1)){
var c__16992__auto___23510 = cljs.core.chunk_first.call(null,seq__23490_23509__$1);
var G__23511 = cljs.core.chunk_rest.call(null,seq__23490_23509__$1);
var G__23512 = c__16992__auto___23510;
var G__23513 = cljs.core.count.call(null,c__16992__auto___23510);
var G__23514 = (0);
seq__23490_23497 = G__23511;
chunk__23491_23498 = G__23512;
count__23492_23499 = G__23513;
i__23493_23500 = G__23514;
continue;
} else {
var vec__23495_23515 = cljs.core.first.call(null,seq__23490_23509__$1);
var k_23516__$1 = cljs.core.nth.call(null,vec__23495_23515,(0),null);
var v_23517__$1 = cljs.core.nth.call(null,vec__23495_23515,(1),null);
dommy$core$set_attr_BANG_.call(null,elem,k_23516__$1,v_23517__$1);

var G__23518 = cljs.core.next.call(null,seq__23490_23509__$1);
var G__23519 = null;
var G__23520 = (0);
var G__23521 = (0);
seq__23490_23497 = G__23518;
chunk__23491_23498 = G__23519;
count__23492_23499 = G__23520;
i__23493_23500 = G__23521;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__23496 = function (elem,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
var G__23522__i = 0, G__23522__a = new Array(arguments.length -  3);
while (G__23522__i < G__23522__a.length) {G__23522__a[G__23522__i] = arguments[G__23522__i + 3]; ++G__23522__i;}
  kvs = new cljs.core.IndexedSeq(G__23522__a,0);
} 
return G__23496__delegate.call(this,elem,k,v,kvs);};
G__23496.cljs$lang$maxFixedArity = 3;
G__23496.cljs$lang$applyTo = (function (arglist__23523){
var elem = cljs.core.first(arglist__23523);
arglist__23523 = cljs.core.next(arglist__23523);
var k = cljs.core.first(arglist__23523);
arglist__23523 = cljs.core.next(arglist__23523);
var v = cljs.core.first(arglist__23523);
var kvs = cljs.core.rest(arglist__23523);
return G__23496__delegate(elem,k,v,kvs);
});
G__23496.cljs$core$IFn$_invoke$arity$variadic = G__23496__delegate;
return G__23496;
})()
;
dommy$core$set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return dommy$core$set_attr_BANG___2.call(this,elem,k);
case 3:
return dommy$core$set_attr_BANG___3.call(this,elem,k,v);
default:
var G__23524 = null;
if (arguments.length > 3) {
var G__23525__i = 0, G__23525__a = new Array(arguments.length -  3);
while (G__23525__i < G__23525__a.length) {G__23525__a[G__23525__i] = arguments[G__23525__i + 3]; ++G__23525__i;}
G__23524 = new cljs.core.IndexedSeq(G__23525__a,0);
}
return dommy$core$set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, G__23524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$set_attr_BANG_.cljs$lang$maxFixedArity = 3;
dommy$core$set_attr_BANG_.cljs$lang$applyTo = dommy$core$set_attr_BANG___4.cljs$lang$applyTo;
dommy$core$set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$set_attr_BANG___2;
dommy$core$set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = dommy$core$set_attr_BANG___3;
dommy$core$set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return dommy$core$set_attr_BANG_;
})()
;
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 * @param {...*} var_args
 */
dommy.core.remove_attr_BANG_ = (function() {
var dommy$core$remove_attr_BANG_ = null;
var dommy$core$remove_attr_BANG___2 = (function (elem,k){
var k_23534__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_23534__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_23534__$1);
}

return elem;
});
var dommy$core$remove_attr_BANG___3 = (function() { 
var G__23535__delegate = function (elem,k,ks){
var seq__23530_23536 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__23531_23537 = null;
var count__23532_23538 = (0);
var i__23533_23539 = (0);
while(true){
if((i__23533_23539 < count__23532_23538)){
var k_23540__$1 = cljs.core._nth.call(null,chunk__23531_23537,i__23533_23539);
dommy$core$remove_attr_BANG_.call(null,elem,k_23540__$1);

var G__23541 = seq__23530_23536;
var G__23542 = chunk__23531_23537;
var G__23543 = count__23532_23538;
var G__23544 = (i__23533_23539 + (1));
seq__23530_23536 = G__23541;
chunk__23531_23537 = G__23542;
count__23532_23538 = G__23543;
i__23533_23539 = G__23544;
continue;
} else {
var temp__4425__auto___23545 = cljs.core.seq.call(null,seq__23530_23536);
if(temp__4425__auto___23545){
var seq__23530_23546__$1 = temp__4425__auto___23545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23530_23546__$1)){
var c__16992__auto___23547 = cljs.core.chunk_first.call(null,seq__23530_23546__$1);
var G__23548 = cljs.core.chunk_rest.call(null,seq__23530_23546__$1);
var G__23549 = c__16992__auto___23547;
var G__23550 = cljs.core.count.call(null,c__16992__auto___23547);
var G__23551 = (0);
seq__23530_23536 = G__23548;
chunk__23531_23537 = G__23549;
count__23532_23538 = G__23550;
i__23533_23539 = G__23551;
continue;
} else {
var k_23552__$1 = cljs.core.first.call(null,seq__23530_23546__$1);
dommy$core$remove_attr_BANG_.call(null,elem,k_23552__$1);

var G__23553 = cljs.core.next.call(null,seq__23530_23546__$1);
var G__23554 = null;
var G__23555 = (0);
var G__23556 = (0);
seq__23530_23536 = G__23553;
chunk__23531_23537 = G__23554;
count__23532_23538 = G__23555;
i__23533_23539 = G__23556;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__23535 = function (elem,k,var_args){
var ks = null;
if (arguments.length > 2) {
var G__23557__i = 0, G__23557__a = new Array(arguments.length -  2);
while (G__23557__i < G__23557__a.length) {G__23557__a[G__23557__i] = arguments[G__23557__i + 2]; ++G__23557__i;}
  ks = new cljs.core.IndexedSeq(G__23557__a,0);
} 
return G__23535__delegate.call(this,elem,k,ks);};
G__23535.cljs$lang$maxFixedArity = 2;
G__23535.cljs$lang$applyTo = (function (arglist__23558){
var elem = cljs.core.first(arglist__23558);
arglist__23558 = cljs.core.next(arglist__23558);
var k = cljs.core.first(arglist__23558);
var ks = cljs.core.rest(arglist__23558);
return G__23535__delegate(elem,k,ks);
});
G__23535.cljs$core$IFn$_invoke$arity$variadic = G__23535__delegate;
return G__23535;
})()
;
dommy$core$remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return dommy$core$remove_attr_BANG___2.call(this,elem,k);
default:
var G__23559 = null;
if (arguments.length > 2) {
var G__23560__i = 0, G__23560__a = new Array(arguments.length -  2);
while (G__23560__i < G__23560__a.length) {G__23560__a[G__23560__i] = arguments[G__23560__i + 2]; ++G__23560__i;}
G__23559 = new cljs.core.IndexedSeq(G__23560__a,0);
}
return dommy$core$remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, G__23559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
dommy$core$remove_attr_BANG_.cljs$lang$applyTo = dommy$core$remove_attr_BANG___3.cljs$lang$applyTo;
dommy$core$remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$remove_attr_BANG___2;
dommy$core$remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dommy$core$remove_attr_BANG_;
})()
;
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function() {
var dommy$core$toggle_attr_BANG_ = null;
var dommy$core$toggle_attr_BANG___2 = (function (elem,k){
return dommy$core$toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});
var dommy$core$toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});
dommy$core$toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return dommy$core$toggle_attr_BANG___2.call(this,elem,k);
case 3:
return dommy$core$toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$toggle_attr_BANG___2;
dommy$core$toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = dommy$core$toggle_attr_BANG___3;
return dommy$core$toggle_attr_BANG_;
})()
;
/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 * @param {...*} var_args
 */
dommy.core.add_class_BANG_ = (function() {
var dommy$core$add_class_BANG_ = null;
var dommy$core$add_class_BANG___2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4423__auto___23585 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___23585)){
var class_list_23586 = temp__4423__auto___23585;
var seq__23573_23587 = cljs.core.seq.call(null,classes__$1);
var chunk__23574_23588 = null;
var count__23575_23589 = (0);
var i__23576_23590 = (0);
while(true){
if((i__23576_23590 < count__23575_23589)){
var c_23591 = cljs.core._nth.call(null,chunk__23574_23588,i__23576_23590);
class_list_23586.add(c_23591);

var G__23592 = seq__23573_23587;
var G__23593 = chunk__23574_23588;
var G__23594 = count__23575_23589;
var G__23595 = (i__23576_23590 + (1));
seq__23573_23587 = G__23592;
chunk__23574_23588 = G__23593;
count__23575_23589 = G__23594;
i__23576_23590 = G__23595;
continue;
} else {
var temp__4425__auto___23596 = cljs.core.seq.call(null,seq__23573_23587);
if(temp__4425__auto___23596){
var seq__23573_23597__$1 = temp__4425__auto___23596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23573_23597__$1)){
var c__16992__auto___23598 = cljs.core.chunk_first.call(null,seq__23573_23597__$1);
var G__23599 = cljs.core.chunk_rest.call(null,seq__23573_23597__$1);
var G__23600 = c__16992__auto___23598;
var G__23601 = cljs.core.count.call(null,c__16992__auto___23598);
var G__23602 = (0);
seq__23573_23587 = G__23599;
chunk__23574_23588 = G__23600;
count__23575_23589 = G__23601;
i__23576_23590 = G__23602;
continue;
} else {
var c_23603 = cljs.core.first.call(null,seq__23573_23597__$1);
class_list_23586.add(c_23603);

var G__23604 = cljs.core.next.call(null,seq__23573_23597__$1);
var G__23605 = null;
var G__23606 = (0);
var G__23607 = (0);
seq__23573_23587 = G__23604;
chunk__23574_23588 = G__23605;
count__23575_23589 = G__23606;
i__23576_23590 = G__23607;
continue;
}
} else {
}
}
break;
}
} else {
var seq__23577_23608 = cljs.core.seq.call(null,classes__$1);
var chunk__23578_23609 = null;
var count__23579_23610 = (0);
var i__23580_23611 = (0);
while(true){
if((i__23580_23611 < count__23579_23610)){
var c_23612 = cljs.core._nth.call(null,chunk__23578_23609,i__23580_23611);
var class_name_23613 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_23613,c_23612))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_23613 === ""))?c_23612:[cljs.core.str(class_name_23613),cljs.core.str(" "),cljs.core.str(c_23612)].join('')));
}

var G__23614 = seq__23577_23608;
var G__23615 = chunk__23578_23609;
var G__23616 = count__23579_23610;
var G__23617 = (i__23580_23611 + (1));
seq__23577_23608 = G__23614;
chunk__23578_23609 = G__23615;
count__23579_23610 = G__23616;
i__23580_23611 = G__23617;
continue;
} else {
var temp__4425__auto___23618 = cljs.core.seq.call(null,seq__23577_23608);
if(temp__4425__auto___23618){
var seq__23577_23619__$1 = temp__4425__auto___23618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23577_23619__$1)){
var c__16992__auto___23620 = cljs.core.chunk_first.call(null,seq__23577_23619__$1);
var G__23621 = cljs.core.chunk_rest.call(null,seq__23577_23619__$1);
var G__23622 = c__16992__auto___23620;
var G__23623 = cljs.core.count.call(null,c__16992__auto___23620);
var G__23624 = (0);
seq__23577_23608 = G__23621;
chunk__23578_23609 = G__23622;
count__23579_23610 = G__23623;
i__23580_23611 = G__23624;
continue;
} else {
var c_23625 = cljs.core.first.call(null,seq__23577_23619__$1);
var class_name_23626 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_23626,c_23625))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_23626 === ""))?c_23625:[cljs.core.str(class_name_23626),cljs.core.str(" "),cljs.core.str(c_23625)].join('')));
}

var G__23627 = cljs.core.next.call(null,seq__23577_23619__$1);
var G__23628 = null;
var G__23629 = (0);
var G__23630 = (0);
seq__23577_23608 = G__23627;
chunk__23578_23609 = G__23628;
count__23579_23610 = G__23629;
i__23580_23611 = G__23630;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});
var dommy$core$add_class_BANG___3 = (function() { 
var G__23631__delegate = function (elem,classes,more_classes){
var seq__23581_23632 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__23582_23633 = null;
var count__23583_23634 = (0);
var i__23584_23635 = (0);
while(true){
if((i__23584_23635 < count__23583_23634)){
var c_23636 = cljs.core._nth.call(null,chunk__23582_23633,i__23584_23635);
dommy$core$add_class_BANG_.call(null,elem,c_23636);

var G__23637 = seq__23581_23632;
var G__23638 = chunk__23582_23633;
var G__23639 = count__23583_23634;
var G__23640 = (i__23584_23635 + (1));
seq__23581_23632 = G__23637;
chunk__23582_23633 = G__23638;
count__23583_23634 = G__23639;
i__23584_23635 = G__23640;
continue;
} else {
var temp__4425__auto___23641 = cljs.core.seq.call(null,seq__23581_23632);
if(temp__4425__auto___23641){
var seq__23581_23642__$1 = temp__4425__auto___23641;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23581_23642__$1)){
var c__16992__auto___23643 = cljs.core.chunk_first.call(null,seq__23581_23642__$1);
var G__23644 = cljs.core.chunk_rest.call(null,seq__23581_23642__$1);
var G__23645 = c__16992__auto___23643;
var G__23646 = cljs.core.count.call(null,c__16992__auto___23643);
var G__23647 = (0);
seq__23581_23632 = G__23644;
chunk__23582_23633 = G__23645;
count__23583_23634 = G__23646;
i__23584_23635 = G__23647;
continue;
} else {
var c_23648 = cljs.core.first.call(null,seq__23581_23642__$1);
dommy$core$add_class_BANG_.call(null,elem,c_23648);

var G__23649 = cljs.core.next.call(null,seq__23581_23642__$1);
var G__23650 = null;
var G__23651 = (0);
var G__23652 = (0);
seq__23581_23632 = G__23649;
chunk__23582_23633 = G__23650;
count__23583_23634 = G__23651;
i__23584_23635 = G__23652;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__23631 = function (elem,classes,var_args){
var more_classes = null;
if (arguments.length > 2) {
var G__23653__i = 0, G__23653__a = new Array(arguments.length -  2);
while (G__23653__i < G__23653__a.length) {G__23653__a[G__23653__i] = arguments[G__23653__i + 2]; ++G__23653__i;}
  more_classes = new cljs.core.IndexedSeq(G__23653__a,0);
} 
return G__23631__delegate.call(this,elem,classes,more_classes);};
G__23631.cljs$lang$maxFixedArity = 2;
G__23631.cljs$lang$applyTo = (function (arglist__23654){
var elem = cljs.core.first(arglist__23654);
arglist__23654 = cljs.core.next(arglist__23654);
var classes = cljs.core.first(arglist__23654);
var more_classes = cljs.core.rest(arglist__23654);
return G__23631__delegate(elem,classes,more_classes);
});
G__23631.cljs$core$IFn$_invoke$arity$variadic = G__23631__delegate;
return G__23631;
})()
;
dommy$core$add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return dommy$core$add_class_BANG___2.call(this,elem,classes);
default:
var G__23655 = null;
if (arguments.length > 2) {
var G__23656__i = 0, G__23656__a = new Array(arguments.length -  2);
while (G__23656__i < G__23656__a.length) {G__23656__a[G__23656__i] = arguments[G__23656__i + 2]; ++G__23656__i;}
G__23655 = new cljs.core.IndexedSeq(G__23656__a,0);
}
return dommy$core$add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, G__23655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$add_class_BANG_.cljs$lang$maxFixedArity = 2;
dommy$core$add_class_BANG_.cljs$lang$applyTo = dommy$core$add_class_BANG___3.cljs$lang$applyTo;
dommy$core$add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$add_class_BANG___2;
dommy$core$add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dommy$core$add_class_BANG_;
})()
;
/**
 * Remove `c` from `elem` class list
 * @param {...*} var_args
 */
dommy.core.remove_class_BANG_ = (function() {
var dommy$core$remove_class_BANG_ = null;
var dommy$core$remove_class_BANG___2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___23665 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___23665)){
var class_list_23666 = temp__4423__auto___23665;
class_list_23666.remove(c__$1);
} else {
var class_name_23667 = dommy.core.class$.call(null,elem);
var new_class_name_23668 = dommy.utils.remove_class_str.call(null,class_name_23667,c__$1);
if((class_name_23667 === new_class_name_23668)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_23668);
}
}

return elem;
});
var dommy$core$remove_class_BANG___3 = (function() { 
var G__23669__delegate = function (elem,class$,classes){
var seq__23661 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__23662 = null;
var count__23663 = (0);
var i__23664 = (0);
while(true){
if((i__23664 < count__23663)){
var c = cljs.core._nth.call(null,chunk__23662,i__23664);
dommy$core$remove_class_BANG_.call(null,elem,c);

var G__23670 = seq__23661;
var G__23671 = chunk__23662;
var G__23672 = count__23663;
var G__23673 = (i__23664 + (1));
seq__23661 = G__23670;
chunk__23662 = G__23671;
count__23663 = G__23672;
i__23664 = G__23673;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23661);
if(temp__4425__auto__){
var seq__23661__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23661__$1)){
var c__16992__auto__ = cljs.core.chunk_first.call(null,seq__23661__$1);
var G__23674 = cljs.core.chunk_rest.call(null,seq__23661__$1);
var G__23675 = c__16992__auto__;
var G__23676 = cljs.core.count.call(null,c__16992__auto__);
var G__23677 = (0);
seq__23661 = G__23674;
chunk__23662 = G__23675;
count__23663 = G__23676;
i__23664 = G__23677;
continue;
} else {
var c = cljs.core.first.call(null,seq__23661__$1);
dommy$core$remove_class_BANG_.call(null,elem,c);

var G__23678 = cljs.core.next.call(null,seq__23661__$1);
var G__23679 = null;
var G__23680 = (0);
var G__23681 = (0);
seq__23661 = G__23678;
chunk__23662 = G__23679;
count__23663 = G__23680;
i__23664 = G__23681;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__23669 = function (elem,class$,var_args){
var classes = null;
if (arguments.length > 2) {
var G__23682__i = 0, G__23682__a = new Array(arguments.length -  2);
while (G__23682__i < G__23682__a.length) {G__23682__a[G__23682__i] = arguments[G__23682__i + 2]; ++G__23682__i;}
  classes = new cljs.core.IndexedSeq(G__23682__a,0);
} 
return G__23669__delegate.call(this,elem,class$,classes);};
G__23669.cljs$lang$maxFixedArity = 2;
G__23669.cljs$lang$applyTo = (function (arglist__23683){
var elem = cljs.core.first(arglist__23683);
arglist__23683 = cljs.core.next(arglist__23683);
var class$ = cljs.core.first(arglist__23683);
var classes = cljs.core.rest(arglist__23683);
return G__23669__delegate(elem,class$,classes);
});
G__23669.cljs$core$IFn$_invoke$arity$variadic = G__23669__delegate;
return G__23669;
})()
;
dommy$core$remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return dommy$core$remove_class_BANG___2.call(this,elem,class$);
default:
var G__23684 = null;
if (arguments.length > 2) {
var G__23685__i = 0, G__23685__a = new Array(arguments.length -  2);
while (G__23685__i < G__23685__a.length) {G__23685__a[G__23685__i] = arguments[G__23685__i + 2]; ++G__23685__i;}
G__23684 = new cljs.core.IndexedSeq(G__23685__a,0);
}
return dommy$core$remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, G__23684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$remove_class_BANG_.cljs$lang$maxFixedArity = 2;
dommy$core$remove_class_BANG_.cljs$lang$applyTo = dommy$core$remove_class_BANG___3.cljs$lang$applyTo;
dommy$core$remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$remove_class_BANG___2;
dommy$core$remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dommy$core$remove_class_BANG_;
})()
;
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function() {
var dommy$core$toggle_class_BANG_ = null;
var dommy$core$toggle_class_BANG___2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___23686 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___23686)){
var class_list_23687 = temp__4423__auto___23686;
class_list_23687.toggle(c__$1);
} else {
dommy$core$toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});
var dommy$core$toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});
dommy$core$toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return dommy$core$toggle_class_BANG___2.call(this,elem,class$);
case 3:
return dommy$core$toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$toggle_class_BANG___2;
dommy$core$toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = dommy$core$toggle_class_BANG___3;
return dommy$core$toggle_class_BANG_;
})()
;
/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function() {
var dommy$core$toggle_BANG_ = null;
var dommy$core$toggle_BANG___1 = (function (elem){
return dommy$core$toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});
var dommy$core$toggle_BANG___2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});
dommy$core$toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return dommy$core$toggle_BANG___1.call(this,elem);
case 2:
return dommy$core$toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = dommy$core$toggle_BANG___1;
dommy$core$toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$toggle_BANG___2;
return dommy$core$toggle_BANG_;
})()
;
dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function() {
var dommy$core$create_element = null;
var dommy$core$create_element__1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});
var dommy$core$create_element__2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});
dommy$core$create_element = function(tag_ns,tag){
switch(arguments.length){
case 1:
return dommy$core$create_element__1.call(this,tag_ns);
case 2:
return dommy$core$create_element__2.call(this,tag_ns,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$create_element.cljs$core$IFn$_invoke$arity$1 = dommy$core$create_element__1;
dommy$core$create_element.cljs$core$IFn$_invoke$arity$2 = dommy$core$create_element__2;
return dommy$core$create_element;
})()
;
dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 * @param {...*} var_args
 */
dommy.core.append_BANG_ = (function() {
var dommy$core$append_BANG_ = null;
var dommy$core$append_BANG___2 = (function (parent,child){
var G__23693 = parent;
G__23693.appendChild(child);

return G__23693;
});
var dommy$core$append_BANG___3 = (function() { 
var G__23698__delegate = function (parent,child,more_children){
var seq__23694_23699 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__23695_23700 = null;
var count__23696_23701 = (0);
var i__23697_23702 = (0);
while(true){
if((i__23697_23702 < count__23696_23701)){
var c_23703 = cljs.core._nth.call(null,chunk__23695_23700,i__23697_23702);
dommy$core$append_BANG_.call(null,parent,c_23703);

var G__23704 = seq__23694_23699;
var G__23705 = chunk__23695_23700;
var G__23706 = count__23696_23701;
var G__23707 = (i__23697_23702 + (1));
seq__23694_23699 = G__23704;
chunk__23695_23700 = G__23705;
count__23696_23701 = G__23706;
i__23697_23702 = G__23707;
continue;
} else {
var temp__4425__auto___23708 = cljs.core.seq.call(null,seq__23694_23699);
if(temp__4425__auto___23708){
var seq__23694_23709__$1 = temp__4425__auto___23708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23694_23709__$1)){
var c__16992__auto___23710 = cljs.core.chunk_first.call(null,seq__23694_23709__$1);
var G__23711 = cljs.core.chunk_rest.call(null,seq__23694_23709__$1);
var G__23712 = c__16992__auto___23710;
var G__23713 = cljs.core.count.call(null,c__16992__auto___23710);
var G__23714 = (0);
seq__23694_23699 = G__23711;
chunk__23695_23700 = G__23712;
count__23696_23701 = G__23713;
i__23697_23702 = G__23714;
continue;
} else {
var c_23715 = cljs.core.first.call(null,seq__23694_23709__$1);
dommy$core$append_BANG_.call(null,parent,c_23715);

var G__23716 = cljs.core.next.call(null,seq__23694_23709__$1);
var G__23717 = null;
var G__23718 = (0);
var G__23719 = (0);
seq__23694_23699 = G__23716;
chunk__23695_23700 = G__23717;
count__23696_23701 = G__23718;
i__23697_23702 = G__23719;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__23698 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__23720__i = 0, G__23720__a = new Array(arguments.length -  2);
while (G__23720__i < G__23720__a.length) {G__23720__a[G__23720__i] = arguments[G__23720__i + 2]; ++G__23720__i;}
  more_children = new cljs.core.IndexedSeq(G__23720__a,0);
} 
return G__23698__delegate.call(this,parent,child,more_children);};
G__23698.cljs$lang$maxFixedArity = 2;
G__23698.cljs$lang$applyTo = (function (arglist__23721){
var parent = cljs.core.first(arglist__23721);
arglist__23721 = cljs.core.next(arglist__23721);
var child = cljs.core.first(arglist__23721);
var more_children = cljs.core.rest(arglist__23721);
return G__23698__delegate(parent,child,more_children);
});
G__23698.cljs$core$IFn$_invoke$arity$variadic = G__23698__delegate;
return G__23698;
})()
;
dommy$core$append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return dommy$core$append_BANG___2.call(this,parent,child);
default:
var G__23722 = null;
if (arguments.length > 2) {
var G__23723__i = 0, G__23723__a = new Array(arguments.length -  2);
while (G__23723__i < G__23723__a.length) {G__23723__a[G__23723__i] = arguments[G__23723__i + 2]; ++G__23723__i;}
G__23722 = new cljs.core.IndexedSeq(G__23723__a,0);
}
return dommy$core$append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__23722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$append_BANG_.cljs$lang$maxFixedArity = 2;
dommy$core$append_BANG_.cljs$lang$applyTo = dommy$core$append_BANG___3.cljs$lang$applyTo;
dommy$core$append_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$append_BANG___2;
dommy$core$append_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dommy$core$append_BANG_;
})()
;
/**
 * Prepend `child` to `parent`
 * @param {...*} var_args
 */
dommy.core.prepend_BANG_ = (function() {
var dommy$core$prepend_BANG_ = null;
var dommy$core$prepend_BANG___2 = (function (parent,child){
var G__23729 = parent;
G__23729.insertBefore(child,parent.firstChild);

return G__23729;
});
var dommy$core$prepend_BANG___3 = (function() { 
var G__23734__delegate = function (parent,child,more_children){
var seq__23730_23735 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__23731_23736 = null;
var count__23732_23737 = (0);
var i__23733_23738 = (0);
while(true){
if((i__23733_23738 < count__23732_23737)){
var c_23739 = cljs.core._nth.call(null,chunk__23731_23736,i__23733_23738);
dommy$core$prepend_BANG_.call(null,parent,c_23739);

var G__23740 = seq__23730_23735;
var G__23741 = chunk__23731_23736;
var G__23742 = count__23732_23737;
var G__23743 = (i__23733_23738 + (1));
seq__23730_23735 = G__23740;
chunk__23731_23736 = G__23741;
count__23732_23737 = G__23742;
i__23733_23738 = G__23743;
continue;
} else {
var temp__4425__auto___23744 = cljs.core.seq.call(null,seq__23730_23735);
if(temp__4425__auto___23744){
var seq__23730_23745__$1 = temp__4425__auto___23744;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23730_23745__$1)){
var c__16992__auto___23746 = cljs.core.chunk_first.call(null,seq__23730_23745__$1);
var G__23747 = cljs.core.chunk_rest.call(null,seq__23730_23745__$1);
var G__23748 = c__16992__auto___23746;
var G__23749 = cljs.core.count.call(null,c__16992__auto___23746);
var G__23750 = (0);
seq__23730_23735 = G__23747;
chunk__23731_23736 = G__23748;
count__23732_23737 = G__23749;
i__23733_23738 = G__23750;
continue;
} else {
var c_23751 = cljs.core.first.call(null,seq__23730_23745__$1);
dommy$core$prepend_BANG_.call(null,parent,c_23751);

var G__23752 = cljs.core.next.call(null,seq__23730_23745__$1);
var G__23753 = null;
var G__23754 = (0);
var G__23755 = (0);
seq__23730_23735 = G__23752;
chunk__23731_23736 = G__23753;
count__23732_23737 = G__23754;
i__23733_23738 = G__23755;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__23734 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__23756__i = 0, G__23756__a = new Array(arguments.length -  2);
while (G__23756__i < G__23756__a.length) {G__23756__a[G__23756__i] = arguments[G__23756__i + 2]; ++G__23756__i;}
  more_children = new cljs.core.IndexedSeq(G__23756__a,0);
} 
return G__23734__delegate.call(this,parent,child,more_children);};
G__23734.cljs$lang$maxFixedArity = 2;
G__23734.cljs$lang$applyTo = (function (arglist__23757){
var parent = cljs.core.first(arglist__23757);
arglist__23757 = cljs.core.next(arglist__23757);
var child = cljs.core.first(arglist__23757);
var more_children = cljs.core.rest(arglist__23757);
return G__23734__delegate(parent,child,more_children);
});
G__23734.cljs$core$IFn$_invoke$arity$variadic = G__23734__delegate;
return G__23734;
})()
;
dommy$core$prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return dommy$core$prepend_BANG___2.call(this,parent,child);
default:
var G__23758 = null;
if (arguments.length > 2) {
var G__23759__i = 0, G__23759__a = new Array(arguments.length -  2);
while (G__23759__i < G__23759__a.length) {G__23759__a[G__23759__i] = arguments[G__23759__i + 2]; ++G__23759__i;}
G__23758 = new cljs.core.IndexedSeq(G__23759__a,0);
}
return dommy$core$prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__23758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$prepend_BANG_.cljs$lang$maxFixedArity = 2;
dommy$core$prepend_BANG_.cljs$lang$applyTo = dommy$core$prepend_BANG___3.cljs$lang$applyTo;
dommy$core$prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$prepend_BANG___2;
dommy$core$prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dommy$core$prepend_BANG_;
})()
;
/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4423__auto___23760 = other.nextSibling;
if(cljs.core.truth_(temp__4423__auto___23760)){
var next_23761 = temp__4423__auto___23760;
dommy.core.insert_before_BANG_.call(null,elem,next_23761);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function() {
var dommy$core$remove_BANG_ = null;
var dommy$core$remove_BANG___1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

return dommy$core$remove_BANG_.call(null,p,elem);
});
var dommy$core$remove_BANG___2 = (function (p,elem){
var G__23763 = p;
G__23763.removeChild(elem);

return G__23763;
});
dommy$core$remove_BANG_ = function(p,elem){
switch(arguments.length){
case 1:
return dommy$core$remove_BANG___1.call(this,p);
case 2:
return dommy$core$remove_BANG___2.call(this,p,elem);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$remove_BANG_.cljs$core$IFn$_invoke$arity$1 = dommy$core$remove_BANG___1;
dommy$core$remove_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$remove_BANG___2;
return dommy$core$remove_BANG_;
})()
;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__23764){
var vec__23765 = p__23764;
var special_mouse_event = cljs.core.nth.call(null,vec__23765,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__23765,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__23765,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__23765,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__16207__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__16207__auto__)){
return or__16207__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__16195__auto__ = related_target;
if(cljs.core.truth_(and__16195__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__16195__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__23765,special_mouse_event,real_mouse_event))
});})(vec__23765,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__16195__auto__ = selected_target;
if(cljs.core.truth_(and__16195__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__16195__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__16207__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__16207__auto__)){
return or__16207__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * @param {...*} var_args
 */
dommy.core.update_event_listeners_BANG_ = (function() { 
var dommy$core$update_event_listeners_BANG___delegate = function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var dommy$core$update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__23766__i = 0, G__23766__a = new Array(arguments.length -  2);
while (G__23766__i < G__23766__a.length) {G__23766__a[G__23766__i] = arguments[G__23766__i + 2]; ++G__23766__i;}
  args = new cljs.core.IndexedSeq(G__23766__a,0);
} 
return dommy$core$update_event_listeners_BANG___delegate.call(this,elem,f,args);};
dommy$core$update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
dommy$core$update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__23767){
var elem = cljs.core.first(arglist__23767);
arglist__23767 = cljs.core.next(arglist__23767);
var f = cljs.core.first(arglist__23767);
var args = cljs.core.rest(arglist__23767);
return dommy$core$update_event_listeners_BANG___delegate(elem,f,args);
});
dommy$core$update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$update_event_listeners_BANG___delegate;
return dommy$core$update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 * (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 * (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 * (listen! some-elem :click click-handler :hover hover-handler)
 * @param {...*} var_args
 */
dommy.core.listen_BANG_ = (function() { 
var dommy$core$listen_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__23791_23814 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_23815 = cljs.core.nth.call(null,vec__23791_23814,(0),null);
var selector_23816 = cljs.core.nth.call(null,vec__23791_23814,(1),null);
var seq__23792_23817 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__23799_23818 = null;
var count__23800_23819 = (0);
var i__23801_23820 = (0);
while(true){
if((i__23801_23820 < count__23800_23819)){
var vec__23808_23821 = cljs.core._nth.call(null,chunk__23799_23818,i__23801_23820);
var orig_type_23822 = cljs.core.nth.call(null,vec__23808_23821,(0),null);
var f_23823 = cljs.core.nth.call(null,vec__23808_23821,(1),null);
var seq__23802_23824 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_23822,new cljs.core.PersistentArrayMap.fromArray([orig_type_23822,cljs.core.identity], true, false)));
var chunk__23804_23825 = null;
var count__23805_23826 = (0);
var i__23806_23827 = (0);
while(true){
if((i__23806_23827 < count__23805_23826)){
var vec__23809_23828 = cljs.core._nth.call(null,chunk__23804_23825,i__23806_23827);
var actual_type_23829 = cljs.core.nth.call(null,vec__23809_23828,(0),null);
var factory_23830 = cljs.core.nth.call(null,vec__23809_23828,(1),null);
var canonical_f_23831 = (cljs.core.truth_(selector_23816)?cljs.core.partial.call(null,dommy.core.live_listener,elem_23815,selector_23816):cljs.core.identity).call(null,factory_23830.call(null,f_23823));
dommy.core.update_event_listeners_BANG_.call(null,elem_23815,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23816,actual_type_23829,f_23823], null),canonical_f_23831);

if(cljs.core.truth_(elem_23815.addEventListener)){
elem_23815.addEventListener(cljs.core.name.call(null,actual_type_23829),canonical_f_23831);
} else {
elem_23815.attachEvent(cljs.core.name.call(null,actual_type_23829),canonical_f_23831);
}

var G__23832 = seq__23802_23824;
var G__23833 = chunk__23804_23825;
var G__23834 = count__23805_23826;
var G__23835 = (i__23806_23827 + (1));
seq__23802_23824 = G__23832;
chunk__23804_23825 = G__23833;
count__23805_23826 = G__23834;
i__23806_23827 = G__23835;
continue;
} else {
var temp__4425__auto___23836 = cljs.core.seq.call(null,seq__23802_23824);
if(temp__4425__auto___23836){
var seq__23802_23837__$1 = temp__4425__auto___23836;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23802_23837__$1)){
var c__16992__auto___23838 = cljs.core.chunk_first.call(null,seq__23802_23837__$1);
var G__23839 = cljs.core.chunk_rest.call(null,seq__23802_23837__$1);
var G__23840 = c__16992__auto___23838;
var G__23841 = cljs.core.count.call(null,c__16992__auto___23838);
var G__23842 = (0);
seq__23802_23824 = G__23839;
chunk__23804_23825 = G__23840;
count__23805_23826 = G__23841;
i__23806_23827 = G__23842;
continue;
} else {
var vec__23810_23843 = cljs.core.first.call(null,seq__23802_23837__$1);
var actual_type_23844 = cljs.core.nth.call(null,vec__23810_23843,(0),null);
var factory_23845 = cljs.core.nth.call(null,vec__23810_23843,(1),null);
var canonical_f_23846 = (cljs.core.truth_(selector_23816)?cljs.core.partial.call(null,dommy.core.live_listener,elem_23815,selector_23816):cljs.core.identity).call(null,factory_23845.call(null,f_23823));
dommy.core.update_event_listeners_BANG_.call(null,elem_23815,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23816,actual_type_23844,f_23823], null),canonical_f_23846);

if(cljs.core.truth_(elem_23815.addEventListener)){
elem_23815.addEventListener(cljs.core.name.call(null,actual_type_23844),canonical_f_23846);
} else {
elem_23815.attachEvent(cljs.core.name.call(null,actual_type_23844),canonical_f_23846);
}

var G__23847 = cljs.core.next.call(null,seq__23802_23837__$1);
var G__23848 = null;
var G__23849 = (0);
var G__23850 = (0);
seq__23802_23824 = G__23847;
chunk__23804_23825 = G__23848;
count__23805_23826 = G__23849;
i__23806_23827 = G__23850;
continue;
}
} else {
}
}
break;
}

var G__23851 = seq__23792_23817;
var G__23852 = chunk__23799_23818;
var G__23853 = count__23800_23819;
var G__23854 = (i__23801_23820 + (1));
seq__23792_23817 = G__23851;
chunk__23799_23818 = G__23852;
count__23800_23819 = G__23853;
i__23801_23820 = G__23854;
continue;
} else {
var temp__4425__auto___23855 = cljs.core.seq.call(null,seq__23792_23817);
if(temp__4425__auto___23855){
var seq__23792_23856__$1 = temp__4425__auto___23855;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23792_23856__$1)){
var c__16992__auto___23857 = cljs.core.chunk_first.call(null,seq__23792_23856__$1);
var G__23858 = cljs.core.chunk_rest.call(null,seq__23792_23856__$1);
var G__23859 = c__16992__auto___23857;
var G__23860 = cljs.core.count.call(null,c__16992__auto___23857);
var G__23861 = (0);
seq__23792_23817 = G__23858;
chunk__23799_23818 = G__23859;
count__23800_23819 = G__23860;
i__23801_23820 = G__23861;
continue;
} else {
var vec__23811_23862 = cljs.core.first.call(null,seq__23792_23856__$1);
var orig_type_23863 = cljs.core.nth.call(null,vec__23811_23862,(0),null);
var f_23864 = cljs.core.nth.call(null,vec__23811_23862,(1),null);
var seq__23793_23865 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_23863,new cljs.core.PersistentArrayMap.fromArray([orig_type_23863,cljs.core.identity], true, false)));
var chunk__23795_23866 = null;
var count__23796_23867 = (0);
var i__23797_23868 = (0);
while(true){
if((i__23797_23868 < count__23796_23867)){
var vec__23812_23869 = cljs.core._nth.call(null,chunk__23795_23866,i__23797_23868);
var actual_type_23870 = cljs.core.nth.call(null,vec__23812_23869,(0),null);
var factory_23871 = cljs.core.nth.call(null,vec__23812_23869,(1),null);
var canonical_f_23872 = (cljs.core.truth_(selector_23816)?cljs.core.partial.call(null,dommy.core.live_listener,elem_23815,selector_23816):cljs.core.identity).call(null,factory_23871.call(null,f_23864));
dommy.core.update_event_listeners_BANG_.call(null,elem_23815,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23816,actual_type_23870,f_23864], null),canonical_f_23872);

if(cljs.core.truth_(elem_23815.addEventListener)){
elem_23815.addEventListener(cljs.core.name.call(null,actual_type_23870),canonical_f_23872);
} else {
elem_23815.attachEvent(cljs.core.name.call(null,actual_type_23870),canonical_f_23872);
}

var G__23873 = seq__23793_23865;
var G__23874 = chunk__23795_23866;
var G__23875 = count__23796_23867;
var G__23876 = (i__23797_23868 + (1));
seq__23793_23865 = G__23873;
chunk__23795_23866 = G__23874;
count__23796_23867 = G__23875;
i__23797_23868 = G__23876;
continue;
} else {
var temp__4425__auto___23877__$1 = cljs.core.seq.call(null,seq__23793_23865);
if(temp__4425__auto___23877__$1){
var seq__23793_23878__$1 = temp__4425__auto___23877__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23793_23878__$1)){
var c__16992__auto___23879 = cljs.core.chunk_first.call(null,seq__23793_23878__$1);
var G__23880 = cljs.core.chunk_rest.call(null,seq__23793_23878__$1);
var G__23881 = c__16992__auto___23879;
var G__23882 = cljs.core.count.call(null,c__16992__auto___23879);
var G__23883 = (0);
seq__23793_23865 = G__23880;
chunk__23795_23866 = G__23881;
count__23796_23867 = G__23882;
i__23797_23868 = G__23883;
continue;
} else {
var vec__23813_23884 = cljs.core.first.call(null,seq__23793_23878__$1);
var actual_type_23885 = cljs.core.nth.call(null,vec__23813_23884,(0),null);
var factory_23886 = cljs.core.nth.call(null,vec__23813_23884,(1),null);
var canonical_f_23887 = (cljs.core.truth_(selector_23816)?cljs.core.partial.call(null,dommy.core.live_listener,elem_23815,selector_23816):cljs.core.identity).call(null,factory_23886.call(null,f_23864));
dommy.core.update_event_listeners_BANG_.call(null,elem_23815,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23816,actual_type_23885,f_23864], null),canonical_f_23887);

if(cljs.core.truth_(elem_23815.addEventListener)){
elem_23815.addEventListener(cljs.core.name.call(null,actual_type_23885),canonical_f_23887);
} else {
elem_23815.attachEvent(cljs.core.name.call(null,actual_type_23885),canonical_f_23887);
}

var G__23888 = cljs.core.next.call(null,seq__23793_23878__$1);
var G__23889 = null;
var G__23890 = (0);
var G__23891 = (0);
seq__23793_23865 = G__23888;
chunk__23795_23866 = G__23889;
count__23796_23867 = G__23890;
i__23797_23868 = G__23891;
continue;
}
} else {
}
}
break;
}

var G__23892 = cljs.core.next.call(null,seq__23792_23856__$1);
var G__23893 = null;
var G__23894 = (0);
var G__23895 = (0);
seq__23792_23817 = G__23892;
chunk__23799_23818 = G__23893;
count__23800_23819 = G__23894;
i__23801_23820 = G__23895;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var dommy$core$listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__23896__i = 0, G__23896__a = new Array(arguments.length -  1);
while (G__23896__i < G__23896__a.length) {G__23896__a[G__23896__i] = arguments[G__23896__i + 1]; ++G__23896__i;}
  type_fs = new cljs.core.IndexedSeq(G__23896__a,0);
} 
return dommy$core$listen_BANG___delegate.call(this,elem_sel,type_fs);};
dommy$core$listen_BANG_.cljs$lang$maxFixedArity = 1;
dommy$core$listen_BANG_.cljs$lang$applyTo = (function (arglist__23897){
var elem_sel = cljs.core.first(arglist__23897);
var type_fs = cljs.core.rest(arglist__23897);
return dommy$core$listen_BANG___delegate(elem_sel,type_fs);
});
dommy$core$listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$listen_BANG___delegate;
return dommy$core$listen_BANG_;
})()
;
/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 * The following forms are allowed, and will remove all handlers
 * that match the parameters passed in:
 * 
 * (unlisten! [elem :.selector] :click event-listener)
 * 
 * (unlisten! [elem :.selector]
 * :click event-listener
 * :mouseover other-event-listener)
 * @param {...*} var_args
 */
dommy.core.unlisten_BANG_ = (function() { 
var dommy$core$unlisten_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__23921_23944 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_23945 = cljs.core.nth.call(null,vec__23921_23944,(0),null);
var selector_23946 = cljs.core.nth.call(null,vec__23921_23944,(1),null);
var seq__23922_23947 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__23929_23948 = null;
var count__23930_23949 = (0);
var i__23931_23950 = (0);
while(true){
if((i__23931_23950 < count__23930_23949)){
var vec__23938_23951 = cljs.core._nth.call(null,chunk__23929_23948,i__23931_23950);
var orig_type_23952 = cljs.core.nth.call(null,vec__23938_23951,(0),null);
var f_23953 = cljs.core.nth.call(null,vec__23938_23951,(1),null);
var seq__23932_23954 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_23952,new cljs.core.PersistentArrayMap.fromArray([orig_type_23952,cljs.core.identity], true, false)));
var chunk__23934_23955 = null;
var count__23935_23956 = (0);
var i__23936_23957 = (0);
while(true){
if((i__23936_23957 < count__23935_23956)){
var vec__23939_23958 = cljs.core._nth.call(null,chunk__23934_23955,i__23936_23957);
var actual_type_23959 = cljs.core.nth.call(null,vec__23939_23958,(0),null);
var __23960 = cljs.core.nth.call(null,vec__23939_23958,(1),null);
var keys_23961 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23946,actual_type_23959,f_23953], null);
var canonical_f_23962 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23945),keys_23961);
dommy.core.update_event_listeners_BANG_.call(null,elem_23945,dommy.utils.dissoc_in,keys_23961);

if(cljs.core.truth_(elem_23945.removeEventListener)){
elem_23945.removeEventListener(cljs.core.name.call(null,actual_type_23959),canonical_f_23962);
} else {
elem_23945.detachEvent(cljs.core.name.call(null,actual_type_23959),canonical_f_23962);
}

var G__23963 = seq__23932_23954;
var G__23964 = chunk__23934_23955;
var G__23965 = count__23935_23956;
var G__23966 = (i__23936_23957 + (1));
seq__23932_23954 = G__23963;
chunk__23934_23955 = G__23964;
count__23935_23956 = G__23965;
i__23936_23957 = G__23966;
continue;
} else {
var temp__4425__auto___23967 = cljs.core.seq.call(null,seq__23932_23954);
if(temp__4425__auto___23967){
var seq__23932_23968__$1 = temp__4425__auto___23967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23932_23968__$1)){
var c__16992__auto___23969 = cljs.core.chunk_first.call(null,seq__23932_23968__$1);
var G__23970 = cljs.core.chunk_rest.call(null,seq__23932_23968__$1);
var G__23971 = c__16992__auto___23969;
var G__23972 = cljs.core.count.call(null,c__16992__auto___23969);
var G__23973 = (0);
seq__23932_23954 = G__23970;
chunk__23934_23955 = G__23971;
count__23935_23956 = G__23972;
i__23936_23957 = G__23973;
continue;
} else {
var vec__23940_23974 = cljs.core.first.call(null,seq__23932_23968__$1);
var actual_type_23975 = cljs.core.nth.call(null,vec__23940_23974,(0),null);
var __23976 = cljs.core.nth.call(null,vec__23940_23974,(1),null);
var keys_23977 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23946,actual_type_23975,f_23953], null);
var canonical_f_23978 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23945),keys_23977);
dommy.core.update_event_listeners_BANG_.call(null,elem_23945,dommy.utils.dissoc_in,keys_23977);

if(cljs.core.truth_(elem_23945.removeEventListener)){
elem_23945.removeEventListener(cljs.core.name.call(null,actual_type_23975),canonical_f_23978);
} else {
elem_23945.detachEvent(cljs.core.name.call(null,actual_type_23975),canonical_f_23978);
}

var G__23979 = cljs.core.next.call(null,seq__23932_23968__$1);
var G__23980 = null;
var G__23981 = (0);
var G__23982 = (0);
seq__23932_23954 = G__23979;
chunk__23934_23955 = G__23980;
count__23935_23956 = G__23981;
i__23936_23957 = G__23982;
continue;
}
} else {
}
}
break;
}

var G__23983 = seq__23922_23947;
var G__23984 = chunk__23929_23948;
var G__23985 = count__23930_23949;
var G__23986 = (i__23931_23950 + (1));
seq__23922_23947 = G__23983;
chunk__23929_23948 = G__23984;
count__23930_23949 = G__23985;
i__23931_23950 = G__23986;
continue;
} else {
var temp__4425__auto___23987 = cljs.core.seq.call(null,seq__23922_23947);
if(temp__4425__auto___23987){
var seq__23922_23988__$1 = temp__4425__auto___23987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23922_23988__$1)){
var c__16992__auto___23989 = cljs.core.chunk_first.call(null,seq__23922_23988__$1);
var G__23990 = cljs.core.chunk_rest.call(null,seq__23922_23988__$1);
var G__23991 = c__16992__auto___23989;
var G__23992 = cljs.core.count.call(null,c__16992__auto___23989);
var G__23993 = (0);
seq__23922_23947 = G__23990;
chunk__23929_23948 = G__23991;
count__23930_23949 = G__23992;
i__23931_23950 = G__23993;
continue;
} else {
var vec__23941_23994 = cljs.core.first.call(null,seq__23922_23988__$1);
var orig_type_23995 = cljs.core.nth.call(null,vec__23941_23994,(0),null);
var f_23996 = cljs.core.nth.call(null,vec__23941_23994,(1),null);
var seq__23923_23997 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_23995,new cljs.core.PersistentArrayMap.fromArray([orig_type_23995,cljs.core.identity], true, false)));
var chunk__23925_23998 = null;
var count__23926_23999 = (0);
var i__23927_24000 = (0);
while(true){
if((i__23927_24000 < count__23926_23999)){
var vec__23942_24001 = cljs.core._nth.call(null,chunk__23925_23998,i__23927_24000);
var actual_type_24002 = cljs.core.nth.call(null,vec__23942_24001,(0),null);
var __24003 = cljs.core.nth.call(null,vec__23942_24001,(1),null);
var keys_24004 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23946,actual_type_24002,f_23996], null);
var canonical_f_24005 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23945),keys_24004);
dommy.core.update_event_listeners_BANG_.call(null,elem_23945,dommy.utils.dissoc_in,keys_24004);

if(cljs.core.truth_(elem_23945.removeEventListener)){
elem_23945.removeEventListener(cljs.core.name.call(null,actual_type_24002),canonical_f_24005);
} else {
elem_23945.detachEvent(cljs.core.name.call(null,actual_type_24002),canonical_f_24005);
}

var G__24006 = seq__23923_23997;
var G__24007 = chunk__23925_23998;
var G__24008 = count__23926_23999;
var G__24009 = (i__23927_24000 + (1));
seq__23923_23997 = G__24006;
chunk__23925_23998 = G__24007;
count__23926_23999 = G__24008;
i__23927_24000 = G__24009;
continue;
} else {
var temp__4425__auto___24010__$1 = cljs.core.seq.call(null,seq__23923_23997);
if(temp__4425__auto___24010__$1){
var seq__23923_24011__$1 = temp__4425__auto___24010__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23923_24011__$1)){
var c__16992__auto___24012 = cljs.core.chunk_first.call(null,seq__23923_24011__$1);
var G__24013 = cljs.core.chunk_rest.call(null,seq__23923_24011__$1);
var G__24014 = c__16992__auto___24012;
var G__24015 = cljs.core.count.call(null,c__16992__auto___24012);
var G__24016 = (0);
seq__23923_23997 = G__24013;
chunk__23925_23998 = G__24014;
count__23926_23999 = G__24015;
i__23927_24000 = G__24016;
continue;
} else {
var vec__23943_24017 = cljs.core.first.call(null,seq__23923_24011__$1);
var actual_type_24018 = cljs.core.nth.call(null,vec__23943_24017,(0),null);
var __24019 = cljs.core.nth.call(null,vec__23943_24017,(1),null);
var keys_24020 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23946,actual_type_24018,f_23996], null);
var canonical_f_24021 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23945),keys_24020);
dommy.core.update_event_listeners_BANG_.call(null,elem_23945,dommy.utils.dissoc_in,keys_24020);

if(cljs.core.truth_(elem_23945.removeEventListener)){
elem_23945.removeEventListener(cljs.core.name.call(null,actual_type_24018),canonical_f_24021);
} else {
elem_23945.detachEvent(cljs.core.name.call(null,actual_type_24018),canonical_f_24021);
}

var G__24022 = cljs.core.next.call(null,seq__23923_24011__$1);
var G__24023 = null;
var G__24024 = (0);
var G__24025 = (0);
seq__23923_23997 = G__24022;
chunk__23925_23998 = G__24023;
count__23926_23999 = G__24024;
i__23927_24000 = G__24025;
continue;
}
} else {
}
}
break;
}

var G__24026 = cljs.core.next.call(null,seq__23922_23988__$1);
var G__24027 = null;
var G__24028 = (0);
var G__24029 = (0);
seq__23922_23947 = G__24026;
chunk__23929_23948 = G__24027;
count__23930_23949 = G__24028;
i__23931_23950 = G__24029;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var dommy$core$unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__24030__i = 0, G__24030__a = new Array(arguments.length -  1);
while (G__24030__i < G__24030__a.length) {G__24030__a[G__24030__i] = arguments[G__24030__i + 1]; ++G__24030__i;}
  type_fs = new cljs.core.IndexedSeq(G__24030__a,0);
} 
return dommy$core$unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
dommy$core$unlisten_BANG_.cljs$lang$maxFixedArity = 1;
dommy$core$unlisten_BANG_.cljs$lang$applyTo = (function (arglist__24031){
var elem_sel = cljs.core.first(arglist__24031);
var type_fs = cljs.core.rest(arglist__24031);
return dommy$core$unlisten_BANG___delegate(elem_sel,type_fs);
});
dommy$core$unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$unlisten_BANG___delegate;
return dommy$core$unlisten_BANG_;
})()
;
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 * @param {...*} var_args
 */
dommy.core.listen_once_BANG_ = (function() { 
var dommy$core$listen_once_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__24039_24046 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_24047 = cljs.core.nth.call(null,vec__24039_24046,(0),null);
var selector_24048 = cljs.core.nth.call(null,vec__24039_24046,(1),null);
var seq__24040_24049 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__24041_24050 = null;
var count__24042_24051 = (0);
var i__24043_24052 = (0);
while(true){
if((i__24043_24052 < count__24042_24051)){
var vec__24044_24053 = cljs.core._nth.call(null,chunk__24041_24050,i__24043_24052);
var type_24054 = cljs.core.nth.call(null,vec__24044_24053,(0),null);
var f_24055 = cljs.core.nth.call(null,vec__24044_24053,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_24054,((function (seq__24040_24049,chunk__24041_24050,count__24042_24051,i__24043_24052,vec__24044_24053,type_24054,f_24055,vec__24039_24046,elem_24047,selector_24048){
return (function dommy$core$listen_once_BANG__$_this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_24054,dommy$core$listen_once_BANG__$_this_fn);

return f_24055.call(null,e);
});})(seq__24040_24049,chunk__24041_24050,count__24042_24051,i__24043_24052,vec__24044_24053,type_24054,f_24055,vec__24039_24046,elem_24047,selector_24048))
);

var G__24056 = seq__24040_24049;
var G__24057 = chunk__24041_24050;
var G__24058 = count__24042_24051;
var G__24059 = (i__24043_24052 + (1));
seq__24040_24049 = G__24056;
chunk__24041_24050 = G__24057;
count__24042_24051 = G__24058;
i__24043_24052 = G__24059;
continue;
} else {
var temp__4425__auto___24060 = cljs.core.seq.call(null,seq__24040_24049);
if(temp__4425__auto___24060){
var seq__24040_24061__$1 = temp__4425__auto___24060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24040_24061__$1)){
var c__16992__auto___24062 = cljs.core.chunk_first.call(null,seq__24040_24061__$1);
var G__24063 = cljs.core.chunk_rest.call(null,seq__24040_24061__$1);
var G__24064 = c__16992__auto___24062;
var G__24065 = cljs.core.count.call(null,c__16992__auto___24062);
var G__24066 = (0);
seq__24040_24049 = G__24063;
chunk__24041_24050 = G__24064;
count__24042_24051 = G__24065;
i__24043_24052 = G__24066;
continue;
} else {
var vec__24045_24067 = cljs.core.first.call(null,seq__24040_24061__$1);
var type_24068 = cljs.core.nth.call(null,vec__24045_24067,(0),null);
var f_24069 = cljs.core.nth.call(null,vec__24045_24067,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_24068,((function (seq__24040_24049,chunk__24041_24050,count__24042_24051,i__24043_24052,vec__24045_24067,type_24068,f_24069,seq__24040_24061__$1,temp__4425__auto___24060,vec__24039_24046,elem_24047,selector_24048){
return (function dommy$core$listen_once_BANG__$_this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_24068,dommy$core$listen_once_BANG__$_this_fn);

return f_24069.call(null,e);
});})(seq__24040_24049,chunk__24041_24050,count__24042_24051,i__24043_24052,vec__24045_24067,type_24068,f_24069,seq__24040_24061__$1,temp__4425__auto___24060,vec__24039_24046,elem_24047,selector_24048))
);

var G__24070 = cljs.core.next.call(null,seq__24040_24061__$1);
var G__24071 = null;
var G__24072 = (0);
var G__24073 = (0);
seq__24040_24049 = G__24070;
chunk__24041_24050 = G__24071;
count__24042_24051 = G__24072;
i__24043_24052 = G__24073;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var dommy$core$listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__24074__i = 0, G__24074__a = new Array(arguments.length -  1);
while (G__24074__i < G__24074__a.length) {G__24074__a[G__24074__i] = arguments[G__24074__i + 1]; ++G__24074__i;}
  type_fs = new cljs.core.IndexedSeq(G__24074__a,0);
} 
return dommy$core$listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
dommy$core$listen_once_BANG_.cljs$lang$maxFixedArity = 1;
dommy$core$listen_once_BANG_.cljs$lang$applyTo = (function (arglist__24075){
var elem_sel = cljs.core.first(arglist__24075);
var type_fs = cljs.core.rest(arglist__24075);
return dommy$core$listen_once_BANG___delegate(elem_sel,type_fs);
});
dommy$core$listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$listen_once_BANG___delegate;
return dommy$core$listen_once_BANG_;
})()
;

//# sourceMappingURL=core.js.map