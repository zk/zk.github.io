// Compiled by ClojureScript 0.0-3165 {}
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function clojure$set$bubble_max_key(k,coll){

var max = cljs.core.apply.call(null,cljs.core.max_key,k,coll);
return cljs.core.cons.call(null,max,cljs.core.remove.call(null,((function (max){
return (function (p1__29364_SHARP_){
return (max === p1__29364_SHARP_);
});})(max))
,coll));
});
/**
 * Return a set that is the union of the input sets
 * @param {...*} var_args
 */
clojure.set.union = (function() {
var clojure$set$union = null;
var clojure$set$union__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var clojure$set$union__1 = (function (s1){
return s1;
});
var clojure$set$union__2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});
var clojure$set$union__3 = (function() { 
var G__29365__delegate = function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
};
var G__29365 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__29366__i = 0, G__29366__a = new Array(arguments.length -  2);
while (G__29366__i < G__29366__a.length) {G__29366__a[G__29366__i] = arguments[G__29366__i + 2]; ++G__29366__i;}
  sets = new cljs.core.IndexedSeq(G__29366__a,0);
} 
return G__29365__delegate.call(this,s1,s2,sets);};
G__29365.cljs$lang$maxFixedArity = 2;
G__29365.cljs$lang$applyTo = (function (arglist__29367){
var s1 = cljs.core.first(arglist__29367);
arglist__29367 = cljs.core.next(arglist__29367);
var s2 = cljs.core.first(arglist__29367);
var sets = cljs.core.rest(arglist__29367);
return G__29365__delegate(s1,s2,sets);
});
G__29365.cljs$core$IFn$_invoke$arity$variadic = G__29365__delegate;
return G__29365;
})()
;
clojure$set$union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 0:
return clojure$set$union__0.call(this);
case 1:
return clojure$set$union__1.call(this,s1);
case 2:
return clojure$set$union__2.call(this,s1,s2);
default:
var G__29368 = null;
if (arguments.length > 2) {
var G__29369__i = 0, G__29369__a = new Array(arguments.length -  2);
while (G__29369__i < G__29369__a.length) {G__29369__a[G__29369__i] = arguments[G__29369__i + 2]; ++G__29369__i;}
G__29368 = new cljs.core.IndexedSeq(G__29369__a,0);
}
return clojure$set$union__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__29368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$union.cljs$lang$maxFixedArity = 2;
clojure$set$union.cljs$lang$applyTo = clojure$set$union__3.cljs$lang$applyTo;
clojure$set$union.cljs$core$IFn$_invoke$arity$0 = clojure$set$union__0;
clojure$set$union.cljs$core$IFn$_invoke$arity$1 = clojure$set$union__1;
clojure$set$union.cljs$core$IFn$_invoke$arity$2 = clojure$set$union__2;
clojure$set$union.cljs$core$IFn$_invoke$arity$variadic = clojure$set$union__3.cljs$core$IFn$_invoke$arity$variadic;
return clojure$set$union;
})()
;
/**
 * Return a set that is the intersection of the input sets
 * @param {...*} var_args
 */
clojure.set.intersection = (function() {
var clojure$set$intersection = null;
var clojure$set$intersection__1 = (function (s1){
return s1;
});
var clojure$set$intersection__2 = (function (s1,s2){
while(true){
if((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))){
var G__29371 = s2;
var G__29372 = s1;
s1 = G__29371;
s2 = G__29372;
continue;
} else {
return cljs.core.reduce.call(null,((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return result;
} else {
return cljs.core.disj.call(null,result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});
var clojure$set$intersection__3 = (function() { 
var G__29373__delegate = function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,(function (p1__29370_SHARP_){
return (- cljs.core.count.call(null,p1__29370_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,clojure$set$intersection,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
};
var G__29373 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__29374__i = 0, G__29374__a = new Array(arguments.length -  2);
while (G__29374__i < G__29374__a.length) {G__29374__a[G__29374__i] = arguments[G__29374__i + 2]; ++G__29374__i;}
  sets = new cljs.core.IndexedSeq(G__29374__a,0);
} 
return G__29373__delegate.call(this,s1,s2,sets);};
G__29373.cljs$lang$maxFixedArity = 2;
G__29373.cljs$lang$applyTo = (function (arglist__29375){
var s1 = cljs.core.first(arglist__29375);
arglist__29375 = cljs.core.next(arglist__29375);
var s2 = cljs.core.first(arglist__29375);
var sets = cljs.core.rest(arglist__29375);
return G__29373__delegate(s1,s2,sets);
});
G__29373.cljs$core$IFn$_invoke$arity$variadic = G__29373__delegate;
return G__29373;
})()
;
clojure$set$intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return clojure$set$intersection__1.call(this,s1);
case 2:
return clojure$set$intersection__2.call(this,s1,s2);
default:
var G__29376 = null;
if (arguments.length > 2) {
var G__29377__i = 0, G__29377__a = new Array(arguments.length -  2);
while (G__29377__i < G__29377__a.length) {G__29377__a[G__29377__i] = arguments[G__29377__i + 2]; ++G__29377__i;}
G__29376 = new cljs.core.IndexedSeq(G__29377__a,0);
}
return clojure$set$intersection__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__29376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$intersection.cljs$lang$maxFixedArity = 2;
clojure$set$intersection.cljs$lang$applyTo = clojure$set$intersection__3.cljs$lang$applyTo;
clojure$set$intersection.cljs$core$IFn$_invoke$arity$1 = clojure$set$intersection__1;
clojure$set$intersection.cljs$core$IFn$_invoke$arity$2 = clojure$set$intersection__2;
clojure$set$intersection.cljs$core$IFn$_invoke$arity$variadic = clojure$set$intersection__3.cljs$core$IFn$_invoke$arity$variadic;
return clojure$set$intersection;
})()
;
/**
 * Return a set that is the first set without elements of the remaining sets
 * @param {...*} var_args
 */
clojure.set.difference = (function() {
var clojure$set$difference = null;
var clojure$set$difference__1 = (function (s1){
return s1;
});
var clojure$set$difference__2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,(function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return cljs.core.disj.call(null,result,item);
} else {
return result;
}
}),s1,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.disj,s1,s2);
}
});
var clojure$set$difference__3 = (function() { 
var G__29378__delegate = function (s1,s2,sets){
return cljs.core.reduce.call(null,clojure$set$difference,s1,cljs.core.conj.call(null,sets,s2));
};
var G__29378 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__29379__i = 0, G__29379__a = new Array(arguments.length -  2);
while (G__29379__i < G__29379__a.length) {G__29379__a[G__29379__i] = arguments[G__29379__i + 2]; ++G__29379__i;}
  sets = new cljs.core.IndexedSeq(G__29379__a,0);
} 
return G__29378__delegate.call(this,s1,s2,sets);};
G__29378.cljs$lang$maxFixedArity = 2;
G__29378.cljs$lang$applyTo = (function (arglist__29380){
var s1 = cljs.core.first(arglist__29380);
arglist__29380 = cljs.core.next(arglist__29380);
var s2 = cljs.core.first(arglist__29380);
var sets = cljs.core.rest(arglist__29380);
return G__29378__delegate(s1,s2,sets);
});
G__29378.cljs$core$IFn$_invoke$arity$variadic = G__29378__delegate;
return G__29378;
})()
;
clojure$set$difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return clojure$set$difference__1.call(this,s1);
case 2:
return clojure$set$difference__2.call(this,s1,s2);
default:
var G__29381 = null;
if (arguments.length > 2) {
var G__29382__i = 0, G__29382__a = new Array(arguments.length -  2);
while (G__29382__i < G__29382__a.length) {G__29382__a[G__29382__i] = arguments[G__29382__i + 2]; ++G__29382__i;}
G__29381 = new cljs.core.IndexedSeq(G__29382__a,0);
}
return clojure$set$difference__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__29381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$difference.cljs$lang$maxFixedArity = 2;
clojure$set$difference.cljs$lang$applyTo = clojure$set$difference__3.cljs$lang$applyTo;
clojure$set$difference.cljs$core$IFn$_invoke$arity$1 = clojure$set$difference__1;
clojure$set$difference.cljs$core$IFn$_invoke$arity$2 = clojure$set$difference__2;
clojure$set$difference.cljs$core$IFn$_invoke$arity$variadic = clojure$set$difference__3.cljs$core$IFn$_invoke$arity$variadic;
return clojure$set$difference;
})()
;
/**
 * Returns a set of the elements for which pred is true
 */
clojure.set.select = (function clojure$set$select(pred,xset){
return cljs.core.reduce.call(null,(function (s,k){
if(cljs.core.truth_(pred.call(null,k))){
return s;
} else {
return cljs.core.disj.call(null,s,k);
}
}),xset,xset);
});
/**
 * Returns a rel of the elements of xrel with only the keys in ks
 */
clojure.set.project = (function clojure$set$project(xrel,ks){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__29383_SHARP_){
return cljs.core.select_keys.call(null,p1__29383_SHARP_,ks);
}),xrel));
});
/**
 * Returns the map with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename_keys = (function clojure$set$rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__29386){
var vec__29387 = p__29386;
var old = cljs.core.nth.call(null,vec__29387,(0),null);
var new$ = cljs.core.nth.call(null,vec__29387,(1),null);
if(cljs.core.contains_QMARK_.call(null,map,old)){
return cljs.core.assoc.call(null,m,new$,cljs.core.get.call(null,map,old));
} else {
return m;
}
}),cljs.core.apply.call(null,cljs.core.dissoc,map,cljs.core.keys.call(null,kmap)),kmap);
});
/**
 * Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename = (function clojure$set$rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__29388_SHARP_){
return clojure.set.rename_keys.call(null,p1__29388_SHARP_,kmap);
}),xrel));
});
/**
 * Returns a map of the distinct values of ks in the xrel mapped to a
 * set of the maps in xrel with the corresponding values of ks.
 */
clojure.set.index = (function clojure$set$index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik = cljs.core.select_keys.call(null,x,ks);
return cljs.core.assoc.call(null,m,ik,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
 * Returns the map with the vals mapped to the keys.
 */
clojure.set.map_invert = (function clojure$set$map_invert(m){
return cljs.core.reduce.call(null,(function (m__$1,p__29391){
var vec__29392 = p__29391;
var k = cljs.core.nth.call(null,vec__29392,(0),null);
var v = cljs.core.nth.call(null,vec__29392,(1),null);
return cljs.core.assoc.call(null,m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * When passed 2 rels, returns the rel corresponding to the natural
 * join. When passed an additional keymap, joins on the corresponding
 * keys.
 */
clojure.set.join = (function() {
var clojure$set$join = null;
var clojure$set$join__2 = (function (xrel,yrel){
if((cljs.core.seq.call(null,xrel)) && (cljs.core.seq.call(null,yrel))){
var ks = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__29399 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.call(null,vec__29399,(0),null);
var s = cljs.core.nth.call(null,vec__29399,(1),null);
var idx = clojure.set.index.call(null,r,ks);
return cljs.core.reduce.call(null,((function (ks,vec__29399,r,s,idx){
return (function (ret,x){
var found = idx.call(null,cljs.core.select_keys.call(null,x,ks));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,ks,vec__29399,r,s,idx){
return (function (p1__29393_SHARP_,p2__29394_SHARP_){
return cljs.core.conj.call(null,p1__29393_SHARP_,cljs.core.merge.call(null,p2__29394_SHARP_,x));
});})(found,ks,vec__29399,r,s,idx))
,ret,found);
} else {
return ret;
}
});})(ks,vec__29399,r,s,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});
var clojure$set$join__3 = (function (xrel,yrel,km){
var vec__29400 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert.call(null,km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.call(null,vec__29400,(0),null);
var s = cljs.core.nth.call(null,vec__29400,(1),null);
var k = cljs.core.nth.call(null,vec__29400,(2),null);
var idx = clojure.set.index.call(null,r,cljs.core.vals.call(null,k));
return cljs.core.reduce.call(null,((function (vec__29400,r,s,k,idx){
return (function (ret,x){
var found = idx.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k)),k));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,vec__29400,r,s,k,idx){
return (function (p1__29395_SHARP_,p2__29396_SHARP_){
return cljs.core.conj.call(null,p1__29395_SHARP_,cljs.core.merge.call(null,p2__29396_SHARP_,x));
});})(found,vec__29400,r,s,k,idx))
,ret,found);
} else {
return ret;
}
});})(vec__29400,r,s,k,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
});
clojure$set$join = function(xrel,yrel,km){
switch(arguments.length){
case 2:
return clojure$set$join__2.call(this,xrel,yrel);
case 3:
return clojure$set$join__3.call(this,xrel,yrel,km);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$join.cljs$core$IFn$_invoke$arity$2 = clojure$set$join__2;
clojure$set$join.cljs$core$IFn$_invoke$arity$3 = clojure$set$join__3;
return clojure$set$join;
})()
;
/**
 * Is set1 a subset of set2?
 */
clojure.set.subset_QMARK_ = (function clojure$set$subset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__29401_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__29401_SHARP_);
}),set1));
});
/**
 * Is set1 a superset of set2?
 */
clojure.set.superset_QMARK_ = (function clojure$set$superset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__29402_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__29402_SHARP_);
}),set2));
});

//# sourceMappingURL=set.js.map