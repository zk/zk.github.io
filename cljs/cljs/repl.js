// Compiled by ClojureScript 0.0-3165 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28658_28670 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28659_28671 = null;
var count__28660_28672 = (0);
var i__28661_28673 = (0);
while(true){
if((i__28661_28673 < count__28660_28672)){
var f_28674 = cljs.core._nth.call(null,chunk__28659_28671,i__28661_28673);
cljs.core.println.call(null,"  ",f_28674);

var G__28675 = seq__28658_28670;
var G__28676 = chunk__28659_28671;
var G__28677 = count__28660_28672;
var G__28678 = (i__28661_28673 + (1));
seq__28658_28670 = G__28675;
chunk__28659_28671 = G__28676;
count__28660_28672 = G__28677;
i__28661_28673 = G__28678;
continue;
} else {
var temp__4425__auto___28679 = cljs.core.seq.call(null,seq__28658_28670);
if(temp__4425__auto___28679){
var seq__28658_28680__$1 = temp__4425__auto___28679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28658_28680__$1)){
var c__16992__auto___28681 = cljs.core.chunk_first.call(null,seq__28658_28680__$1);
var G__28682 = cljs.core.chunk_rest.call(null,seq__28658_28680__$1);
var G__28683 = c__16992__auto___28681;
var G__28684 = cljs.core.count.call(null,c__16992__auto___28681);
var G__28685 = (0);
seq__28658_28670 = G__28682;
chunk__28659_28671 = G__28683;
count__28660_28672 = G__28684;
i__28661_28673 = G__28685;
continue;
} else {
var f_28686 = cljs.core.first.call(null,seq__28658_28680__$1);
cljs.core.println.call(null,"  ",f_28686);

var G__28687 = cljs.core.next.call(null,seq__28658_28680__$1);
var G__28688 = null;
var G__28689 = (0);
var G__28690 = (0);
seq__28658_28670 = G__28687;
chunk__28659_28671 = G__28688;
count__28660_28672 = G__28689;
i__28661_28673 = G__28690;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__16207__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16207__auto__)){
return or__16207__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28662 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28663 = null;
var count__28664 = (0);
var i__28665 = (0);
while(true){
if((i__28665 < count__28664)){
var vec__28666 = cljs.core._nth.call(null,chunk__28663,i__28665);
var name = cljs.core.nth.call(null,vec__28666,(0),null);
var map__28667 = cljs.core.nth.call(null,vec__28666,(1),null);
var map__28667__$1 = ((cljs.core.seq_QMARK_.call(null,map__28667))?cljs.core.apply.call(null,cljs.core.hash_map,map__28667):map__28667);
var doc = cljs.core.get.call(null,map__28667__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28667__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28691 = seq__28662;
var G__28692 = chunk__28663;
var G__28693 = count__28664;
var G__28694 = (i__28665 + (1));
seq__28662 = G__28691;
chunk__28663 = G__28692;
count__28664 = G__28693;
i__28665 = G__28694;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28662);
if(temp__4425__auto__){
var seq__28662__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28662__$1)){
var c__16992__auto__ = cljs.core.chunk_first.call(null,seq__28662__$1);
var G__28695 = cljs.core.chunk_rest.call(null,seq__28662__$1);
var G__28696 = c__16992__auto__;
var G__28697 = cljs.core.count.call(null,c__16992__auto__);
var G__28698 = (0);
seq__28662 = G__28695;
chunk__28663 = G__28696;
count__28664 = G__28697;
i__28665 = G__28698;
continue;
} else {
var vec__28668 = cljs.core.first.call(null,seq__28662__$1);
var name = cljs.core.nth.call(null,vec__28668,(0),null);
var map__28669 = cljs.core.nth.call(null,vec__28668,(1),null);
var map__28669__$1 = ((cljs.core.seq_QMARK_.call(null,map__28669))?cljs.core.apply.call(null,cljs.core.hash_map,map__28669):map__28669);
var doc = cljs.core.get.call(null,map__28669__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28669__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28699 = cljs.core.next.call(null,seq__28662__$1);
var G__28700 = null;
var G__28701 = (0);
var G__28702 = (0);
seq__28662 = G__28699;
chunk__28663 = G__28700;
count__28664 = G__28701;
i__28665 = G__28702;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map