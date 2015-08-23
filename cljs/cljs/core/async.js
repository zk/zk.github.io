// Compiled by ClojureScript 0.0-3165 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t24433 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24433 = (function (fn_handler,f,meta24434){
this.fn_handler = fn_handler;
this.f = f;
this.meta24434 = meta24434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24435,meta24434__$1){
var self__ = this;
var _24435__$1 = this;
return (new cljs.core.async.t24433(self__.fn_handler,self__.f,meta24434__$1));
});

cljs.core.async.t24433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24435){
var self__ = this;
var _24435__$1 = this;
return self__.meta24434;
});

cljs.core.async.t24433.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24433.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t24433.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t24433.cljs$lang$type = true;

cljs.core.async.t24433.cljs$lang$ctorStr = "cljs.core.async/t24433";

cljs.core.async.t24433.cljs$lang$ctorPrWriter = (function (this__16786__auto__,writer__16787__auto__,opt__16788__auto__){
return cljs.core._write.call(null,writer__16787__auto__,"cljs.core.async/t24433");
});

cljs.core.async.__GT_t24433 = (function cljs$core$async$fn_handler_$___GT_t24433(fn_handler__$1,f__$1,meta24434){
return (new cljs.core.async.t24433(fn_handler__$1,f__$1,meta24434));
});

}

return (new cljs.core.async.t24433(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__24437 = buff;
if(G__24437){
var bit__16881__auto__ = null;
if(cljs.core.truth_((function (){var or__16207__auto__ = bit__16881__auto__;
if(cljs.core.truth_(or__16207__auto__)){
return or__16207__auto__;
} else {
return G__24437.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__24437.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24437);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24437);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function() {
var cljs$core$async$chan = null;
var cljs$core$async$chan__0 = (function (){
return cljs$core$async$chan.call(null,null);
});
var cljs$core$async$chan__1 = (function (buf_or_n){
return cljs$core$async$chan.call(null,buf_or_n,null,null);
});
var cljs$core$async$chan__2 = (function (buf_or_n,xform){
return cljs$core$async$chan.call(null,buf_or_n,xform,null);
});
var cljs$core$async$chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
cljs$core$async$chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return cljs$core$async$chan__0.call(this);
case 1:
return cljs$core$async$chan__1.call(this,buf_or_n);
case 2:
return cljs$core$async$chan__2.call(this,buf_or_n,xform);
case 3:
return cljs$core$async$chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$chan__0;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$chan__1;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$chan__2;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$chan__3;
return cljs$core$async$chan;
})()
;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function() {
var cljs$core$async$take_BANG_ = null;
var cljs$core$async$take_BANG___2 = (function (port,fn1){
return cljs$core$async$take_BANG_.call(null,port,fn1,true);
});
var cljs$core$async$take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24438 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24438);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24438,ret){
return (function (){
return fn1.call(null,val_24438);
});})(val_24438,ret))
);
}
} else {
}

return null;
});
cljs$core$async$take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$take_BANG___2.call(this,port,fn1);
case 3:
return cljs$core$async$take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take_BANG___2;
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take_BANG___3;
return cljs$core$async$take_BANG_;
})()
;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function() {
var cljs$core$async$put_BANG_ = null;
var cljs$core$async$put_BANG___2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var cljs$core$async$put_BANG___3 = (function (port,val,fn1){
return cljs$core$async$put_BANG_.call(null,port,val,fn1,true);
});
var cljs$core$async$put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});
cljs$core$async$put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$put_BANG___2.call(this,port,val);
case 3:
return cljs$core$async$put_BANG___3.call(this,port,val,fn1);
case 4:
return cljs$core$async$put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$put_BANG___2;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$put_BANG___3;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$put_BANG___4;
return cljs$core$async$put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17092__auto___24439 = n;
var x_24440 = (0);
while(true){
if((x_24440 < n__17092__auto___24439)){
(a[x_24440] = (0));

var G__24441 = (x_24440 + (1));
x_24440 = G__24441;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24442 = (i + (1));
i = G__24442;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t24446 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24446 = (function (alt_flag,flag,meta24447){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24447 = meta24447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24448,meta24447__$1){
var self__ = this;
var _24448__$1 = this;
return (new cljs.core.async.t24446(self__.alt_flag,self__.flag,meta24447__$1));
});})(flag))
;

cljs.core.async.t24446.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24448){
var self__ = this;
var _24448__$1 = this;
return self__.meta24447;
});})(flag))
;

cljs.core.async.t24446.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24446.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t24446.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t24446.cljs$lang$type = true;

cljs.core.async.t24446.cljs$lang$ctorStr = "cljs.core.async/t24446";

cljs.core.async.t24446.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16786__auto__,writer__16787__auto__,opt__16788__auto__){
return cljs.core._write.call(null,writer__16787__auto__,"cljs.core.async/t24446");
});})(flag))
;

cljs.core.async.__GT_t24446 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t24446(alt_flag__$1,flag__$1,meta24447){
return (new cljs.core.async.t24446(alt_flag__$1,flag__$1,meta24447));
});})(flag))
;

}

return (new cljs.core.async.t24446(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t24452 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24452 = (function (alt_handler,flag,cb,meta24453){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24453 = meta24453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24454,meta24453__$1){
var self__ = this;
var _24454__$1 = this;
return (new cljs.core.async.t24452(self__.alt_handler,self__.flag,self__.cb,meta24453__$1));
});

cljs.core.async.t24452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24454){
var self__ = this;
var _24454__$1 = this;
return self__.meta24453;
});

cljs.core.async.t24452.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24452.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t24452.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t24452.cljs$lang$type = true;

cljs.core.async.t24452.cljs$lang$ctorStr = "cljs.core.async/t24452";

cljs.core.async.t24452.cljs$lang$ctorPrWriter = (function (this__16786__auto__,writer__16787__auto__,opt__16788__auto__){
return cljs.core._write.call(null,writer__16787__auto__,"cljs.core.async/t24452");
});

cljs.core.async.__GT_t24452 = (function cljs$core$async$alt_handler_$___GT_t24452(alt_handler__$1,flag__$1,cb__$1,meta24453){
return (new cljs.core.async.t24452(alt_handler__$1,flag__$1,cb__$1,meta24453));
});

}

return (new cljs.core.async.t24452(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24455_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24455_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24456_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24456_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16207__auto__ = wport;
if(cljs.core.truth_(or__16207__auto__)){
return or__16207__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24457 = (i + (1));
i = G__24457;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16207__auto__ = ret;
if(cljs.core.truth_(or__16207__auto__)){
return or__16207__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16195__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16195__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16195__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 * @param {...*} var_args
 */
cljs.core.async.alts_BANG_ = (function() { 
var cljs$core$async$alts_BANG___delegate = function (ports,p__24458){
var map__24460 = p__24458;
var map__24460__$1 = ((cljs.core.seq_QMARK_.call(null,map__24460))?cljs.core.apply.call(null,cljs.core.hash_map,map__24460):map__24460);
var opts = map__24460__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__24458 = null;
if (arguments.length > 1) {
var G__24461__i = 0, G__24461__a = new Array(arguments.length -  1);
while (G__24461__i < G__24461__a.length) {G__24461__a[G__24461__i] = arguments[G__24461__i + 1]; ++G__24461__i;}
  p__24458 = new cljs.core.IndexedSeq(G__24461__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__24458);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__24462){
var ports = cljs.core.first(arglist__24462);
var p__24458 = cljs.core.rest(arglist__24462);
return cljs$core$async$alts_BANG___delegate(ports,p__24458);
});
cljs$core$async$alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$alts_BANG___delegate;
return cljs$core$async$alts_BANG_;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function() {
var cljs$core$async$pipe = null;
var cljs$core$async$pipe__2 = (function (from,to){
return cljs$core$async$pipe.call(null,from,to,true);
});
var cljs$core$async$pipe__3 = (function (from,to,close_QMARK_){
var c__18684__auto___24557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto___24557){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto___24557){
return (function (state_24533){
var state_val_24534 = (state_24533[(1)]);
if((state_val_24534 === (7))){
var inst_24529 = (state_24533[(2)]);
var state_24533__$1 = state_24533;
var statearr_24535_24558 = state_24533__$1;
(statearr_24535_24558[(2)] = inst_24529);

(statearr_24535_24558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24534 === (1))){
var state_24533__$1 = state_24533;
var statearr_24536_24559 = state_24533__$1;
(statearr_24536_24559[(2)] = null);

(statearr_24536_24559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24534 === (4))){
var inst_24512 = (state_24533[(7)]);
var inst_24512__$1 = (state_24533[(2)]);
var inst_24513 = (inst_24512__$1 == null);
var state_24533__$1 = (function (){var statearr_24537 = state_24533;
(statearr_24537[(7)] = inst_24512__$1);

return statearr_24537;
})();
if(cljs.core.truth_(inst_24513)){
var statearr_24538_24560 = state_24533__$1;
(statearr_24538_24560[(1)] = (5));

} else {
var statearr_24539_24561 = state_24533__$1;
(statearr_24539_24561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24534 === (13))){
var state_24533__$1 = state_24533;
var statearr_24540_24562 = state_24533__$1;
(statearr_24540_24562[(2)] = null);

(statearr_24540_24562[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24534 === (6))){
var inst_24512 = (state_24533[(7)]);
var state_24533__$1 = state_24533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24533__$1,(11),to,inst_24512);
} else {
if((state_val_24534 === (3))){
var inst_24531 = (state_24533[(2)]);
var state_24533__$1 = state_24533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24533__$1,inst_24531);
} else {
if((state_val_24534 === (12))){
var state_24533__$1 = state_24533;
var statearr_24541_24563 = state_24533__$1;
(statearr_24541_24563[(2)] = null);

(statearr_24541_24563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24534 === (2))){
var state_24533__$1 = state_24533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24533__$1,(4),from);
} else {
if((state_val_24534 === (11))){
var inst_24522 = (state_24533[(2)]);
var state_24533__$1 = state_24533;
if(cljs.core.truth_(inst_24522)){
var statearr_24542_24564 = state_24533__$1;
(statearr_24542_24564[(1)] = (12));

} else {
var statearr_24543_24565 = state_24533__$1;
(statearr_24543_24565[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24534 === (9))){
var state_24533__$1 = state_24533;
var statearr_24544_24566 = state_24533__$1;
(statearr_24544_24566[(2)] = null);

(statearr_24544_24566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24534 === (5))){
var state_24533__$1 = state_24533;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24545_24567 = state_24533__$1;
(statearr_24545_24567[(1)] = (8));

} else {
var statearr_24546_24568 = state_24533__$1;
(statearr_24546_24568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24534 === (14))){
var inst_24527 = (state_24533[(2)]);
var state_24533__$1 = state_24533;
var statearr_24547_24569 = state_24533__$1;
(statearr_24547_24569[(2)] = inst_24527);

(statearr_24547_24569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24534 === (10))){
var inst_24519 = (state_24533[(2)]);
var state_24533__$1 = state_24533;
var statearr_24548_24570 = state_24533__$1;
(statearr_24548_24570[(2)] = inst_24519);

(statearr_24548_24570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24534 === (8))){
var inst_24516 = cljs.core.async.close_BANG_.call(null,to);
var state_24533__$1 = state_24533;
var statearr_24549_24571 = state_24533__$1;
(statearr_24549_24571[(2)] = inst_24516);

(statearr_24549_24571[(1)] = (10));


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
});})(c__18684__auto___24557))
;
return ((function (switch__18628__auto__,c__18684__auto___24557){
return (function() {
var cljs$core$async$pipe_$_state_machine__18629__auto__ = null;
var cljs$core$async$pipe_$_state_machine__18629__auto____0 = (function (){
var statearr_24553 = [null,null,null,null,null,null,null,null];
(statearr_24553[(0)] = cljs$core$async$pipe_$_state_machine__18629__auto__);

(statearr_24553[(1)] = (1));

return statearr_24553;
});
var cljs$core$async$pipe_$_state_machine__18629__auto____1 = (function (state_24533){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_24533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e24554){if((e24554 instanceof Object)){
var ex__18632__auto__ = e24554;
var statearr_24555_24572 = state_24533;
(statearr_24555_24572[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24573 = state_24533;
state_24533 = G__24573;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__18629__auto__ = function(state_24533){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__18629__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__18629__auto____1.call(this,state_24533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__18629__auto____0;
cljs$core$async$pipe_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__18629__auto____1;
return cljs$core$async$pipe_$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto___24557))
})();
var state__18686__auto__ = (function (){var statearr_24556 = f__18685__auto__.call(null);
(statearr_24556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto___24557);

return statearr_24556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto___24557))
);


return to;
});
cljs$core$async$pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$pipe__2.call(this,from,to);
case 3:
return cljs$core$async$pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pipe__2;
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pipe__3;
return cljs$core$async$pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24757){
var vec__24758 = p__24757;
var v = cljs.core.nth.call(null,vec__24758,(0),null);
var p = cljs.core.nth.call(null,vec__24758,(1),null);
var job = vec__24758;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18684__auto___24940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto___24940,res,vec__24758,v,p,job,jobs,results){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto___24940,res,vec__24758,v,p,job,jobs,results){
return (function (state_24763){
var state_val_24764 = (state_24763[(1)]);
if((state_val_24764 === (1))){
var state_24763__$1 = state_24763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24763__$1,(2),res,v);
} else {
if((state_val_24764 === (2))){
var inst_24760 = (state_24763[(2)]);
var inst_24761 = cljs.core.async.close_BANG_.call(null,res);
var state_24763__$1 = (function (){var statearr_24765 = state_24763;
(statearr_24765[(7)] = inst_24760);

return statearr_24765;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24763__$1,inst_24761);
} else {
return null;
}
}
});})(c__18684__auto___24940,res,vec__24758,v,p,job,jobs,results))
;
return ((function (switch__18628__auto__,c__18684__auto___24940,res,vec__24758,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____0 = (function (){
var statearr_24769 = [null,null,null,null,null,null,null,null];
(statearr_24769[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__);

(statearr_24769[(1)] = (1));

return statearr_24769;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____1 = (function (state_24763){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_24763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e24770){if((e24770 instanceof Object)){
var ex__18632__auto__ = e24770;
var statearr_24771_24941 = state_24763;
(statearr_24771_24941[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24942 = state_24763;
state_24763 = G__24942;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__ = function(state_24763){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____1.call(this,state_24763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto___24940,res,vec__24758,v,p,job,jobs,results))
})();
var state__18686__auto__ = (function (){var statearr_24772 = f__18685__auto__.call(null);
(statearr_24772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto___24940);

return statearr_24772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto___24940,res,vec__24758,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24773){
var vec__24774 = p__24773;
var v = cljs.core.nth.call(null,vec__24774,(0),null);
var p = cljs.core.nth.call(null,vec__24774,(1),null);
var job = vec__24774;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17092__auto___24943 = n;
var __24944 = (0);
while(true){
if((__24944 < n__17092__auto___24943)){
var G__24775_24945 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24775_24945) {
case "compute":
var c__18684__auto___24947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24944,c__18684__auto___24947,G__24775_24945,n__17092__auto___24943,jobs,results,process,async){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (__24944,c__18684__auto___24947,G__24775_24945,n__17092__auto___24943,jobs,results,process,async){
return (function (state_24788){
var state_val_24789 = (state_24788[(1)]);
if((state_val_24789 === (1))){
var state_24788__$1 = state_24788;
var statearr_24790_24948 = state_24788__$1;
(statearr_24790_24948[(2)] = null);

(statearr_24790_24948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (2))){
var state_24788__$1 = state_24788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24788__$1,(4),jobs);
} else {
if((state_val_24789 === (3))){
var inst_24786 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24788__$1,inst_24786);
} else {
if((state_val_24789 === (4))){
var inst_24778 = (state_24788[(2)]);
var inst_24779 = process.call(null,inst_24778);
var state_24788__$1 = state_24788;
if(cljs.core.truth_(inst_24779)){
var statearr_24791_24949 = state_24788__$1;
(statearr_24791_24949[(1)] = (5));

} else {
var statearr_24792_24950 = state_24788__$1;
(statearr_24792_24950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (5))){
var state_24788__$1 = state_24788;
var statearr_24793_24951 = state_24788__$1;
(statearr_24793_24951[(2)] = null);

(statearr_24793_24951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (6))){
var state_24788__$1 = state_24788;
var statearr_24794_24952 = state_24788__$1;
(statearr_24794_24952[(2)] = null);

(statearr_24794_24952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (7))){
var inst_24784 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
var statearr_24795_24953 = state_24788__$1;
(statearr_24795_24953[(2)] = inst_24784);

(statearr_24795_24953[(1)] = (3));


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
});})(__24944,c__18684__auto___24947,G__24775_24945,n__17092__auto___24943,jobs,results,process,async))
;
return ((function (__24944,switch__18628__auto__,c__18684__auto___24947,G__24775_24945,n__17092__auto___24943,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____0 = (function (){
var statearr_24799 = [null,null,null,null,null,null,null];
(statearr_24799[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__);

(statearr_24799[(1)] = (1));

return statearr_24799;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____1 = (function (state_24788){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_24788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e24800){if((e24800 instanceof Object)){
var ex__18632__auto__ = e24800;
var statearr_24801_24954 = state_24788;
(statearr_24801_24954[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24955 = state_24788;
state_24788 = G__24955;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__ = function(state_24788){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____1.call(this,state_24788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__;
})()
;})(__24944,switch__18628__auto__,c__18684__auto___24947,G__24775_24945,n__17092__auto___24943,jobs,results,process,async))
})();
var state__18686__auto__ = (function (){var statearr_24802 = f__18685__auto__.call(null);
(statearr_24802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto___24947);

return statearr_24802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(__24944,c__18684__auto___24947,G__24775_24945,n__17092__auto___24943,jobs,results,process,async))
);


break;
case "async":
var c__18684__auto___24956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24944,c__18684__auto___24956,G__24775_24945,n__17092__auto___24943,jobs,results,process,async){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (__24944,c__18684__auto___24956,G__24775_24945,n__17092__auto___24943,jobs,results,process,async){
return (function (state_24815){
var state_val_24816 = (state_24815[(1)]);
if((state_val_24816 === (1))){
var state_24815__$1 = state_24815;
var statearr_24817_24957 = state_24815__$1;
(statearr_24817_24957[(2)] = null);

(statearr_24817_24957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24816 === (2))){
var state_24815__$1 = state_24815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24815__$1,(4),jobs);
} else {
if((state_val_24816 === (3))){
var inst_24813 = (state_24815[(2)]);
var state_24815__$1 = state_24815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24815__$1,inst_24813);
} else {
if((state_val_24816 === (4))){
var inst_24805 = (state_24815[(2)]);
var inst_24806 = async.call(null,inst_24805);
var state_24815__$1 = state_24815;
if(cljs.core.truth_(inst_24806)){
var statearr_24818_24958 = state_24815__$1;
(statearr_24818_24958[(1)] = (5));

} else {
var statearr_24819_24959 = state_24815__$1;
(statearr_24819_24959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24816 === (5))){
var state_24815__$1 = state_24815;
var statearr_24820_24960 = state_24815__$1;
(statearr_24820_24960[(2)] = null);

(statearr_24820_24960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24816 === (6))){
var state_24815__$1 = state_24815;
var statearr_24821_24961 = state_24815__$1;
(statearr_24821_24961[(2)] = null);

(statearr_24821_24961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24816 === (7))){
var inst_24811 = (state_24815[(2)]);
var state_24815__$1 = state_24815;
var statearr_24822_24962 = state_24815__$1;
(statearr_24822_24962[(2)] = inst_24811);

(statearr_24822_24962[(1)] = (3));


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
});})(__24944,c__18684__auto___24956,G__24775_24945,n__17092__auto___24943,jobs,results,process,async))
;
return ((function (__24944,switch__18628__auto__,c__18684__auto___24956,G__24775_24945,n__17092__auto___24943,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____0 = (function (){
var statearr_24826 = [null,null,null,null,null,null,null];
(statearr_24826[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__);

(statearr_24826[(1)] = (1));

return statearr_24826;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____1 = (function (state_24815){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_24815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e24827){if((e24827 instanceof Object)){
var ex__18632__auto__ = e24827;
var statearr_24828_24963 = state_24815;
(statearr_24828_24963[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24964 = state_24815;
state_24815 = G__24964;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__ = function(state_24815){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____1.call(this,state_24815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__;
})()
;})(__24944,switch__18628__auto__,c__18684__auto___24956,G__24775_24945,n__17092__auto___24943,jobs,results,process,async))
})();
var state__18686__auto__ = (function (){var statearr_24829 = f__18685__auto__.call(null);
(statearr_24829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto___24956);

return statearr_24829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(__24944,c__18684__auto___24956,G__24775_24945,n__17092__auto___24943,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24965 = (__24944 + (1));
__24944 = G__24965;
continue;
} else {
}
break;
}

var c__18684__auto___24966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto___24966,jobs,results,process,async){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto___24966,jobs,results,process,async){
return (function (state_24851){
var state_val_24852 = (state_24851[(1)]);
if((state_val_24852 === (1))){
var state_24851__$1 = state_24851;
var statearr_24853_24967 = state_24851__$1;
(statearr_24853_24967[(2)] = null);

(statearr_24853_24967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24852 === (2))){
var state_24851__$1 = state_24851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24851__$1,(4),from);
} else {
if((state_val_24852 === (3))){
var inst_24849 = (state_24851[(2)]);
var state_24851__$1 = state_24851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24851__$1,inst_24849);
} else {
if((state_val_24852 === (4))){
var inst_24832 = (state_24851[(7)]);
var inst_24832__$1 = (state_24851[(2)]);
var inst_24833 = (inst_24832__$1 == null);
var state_24851__$1 = (function (){var statearr_24854 = state_24851;
(statearr_24854[(7)] = inst_24832__$1);

return statearr_24854;
})();
if(cljs.core.truth_(inst_24833)){
var statearr_24855_24968 = state_24851__$1;
(statearr_24855_24968[(1)] = (5));

} else {
var statearr_24856_24969 = state_24851__$1;
(statearr_24856_24969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24852 === (5))){
var inst_24835 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24851__$1 = state_24851;
var statearr_24857_24970 = state_24851__$1;
(statearr_24857_24970[(2)] = inst_24835);

(statearr_24857_24970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24852 === (6))){
var inst_24832 = (state_24851[(7)]);
var inst_24837 = (state_24851[(8)]);
var inst_24837__$1 = cljs.core.async.chan.call(null,(1));
var inst_24838 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24839 = [inst_24832,inst_24837__$1];
var inst_24840 = (new cljs.core.PersistentVector(null,2,(5),inst_24838,inst_24839,null));
var state_24851__$1 = (function (){var statearr_24858 = state_24851;
(statearr_24858[(8)] = inst_24837__$1);

return statearr_24858;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24851__$1,(8),jobs,inst_24840);
} else {
if((state_val_24852 === (7))){
var inst_24847 = (state_24851[(2)]);
var state_24851__$1 = state_24851;
var statearr_24859_24971 = state_24851__$1;
(statearr_24859_24971[(2)] = inst_24847);

(statearr_24859_24971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24852 === (8))){
var inst_24837 = (state_24851[(8)]);
var inst_24842 = (state_24851[(2)]);
var state_24851__$1 = (function (){var statearr_24860 = state_24851;
(statearr_24860[(9)] = inst_24842);

return statearr_24860;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24851__$1,(9),results,inst_24837);
} else {
if((state_val_24852 === (9))){
var inst_24844 = (state_24851[(2)]);
var state_24851__$1 = (function (){var statearr_24861 = state_24851;
(statearr_24861[(10)] = inst_24844);

return statearr_24861;
})();
var statearr_24862_24972 = state_24851__$1;
(statearr_24862_24972[(2)] = null);

(statearr_24862_24972[(1)] = (2));


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
});})(c__18684__auto___24966,jobs,results,process,async))
;
return ((function (switch__18628__auto__,c__18684__auto___24966,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____0 = (function (){
var statearr_24866 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24866[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__);

(statearr_24866[(1)] = (1));

return statearr_24866;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____1 = (function (state_24851){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_24851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e24867){if((e24867 instanceof Object)){
var ex__18632__auto__ = e24867;
var statearr_24868_24973 = state_24851;
(statearr_24868_24973[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24974 = state_24851;
state_24851 = G__24974;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__ = function(state_24851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____1.call(this,state_24851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto___24966,jobs,results,process,async))
})();
var state__18686__auto__ = (function (){var statearr_24869 = f__18685__auto__.call(null);
(statearr_24869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto___24966);

return statearr_24869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto___24966,jobs,results,process,async))
);


var c__18684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto__,jobs,results,process,async){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto__,jobs,results,process,async){
return (function (state_24907){
var state_val_24908 = (state_24907[(1)]);
if((state_val_24908 === (7))){
var inst_24903 = (state_24907[(2)]);
var state_24907__$1 = state_24907;
var statearr_24909_24975 = state_24907__$1;
(statearr_24909_24975[(2)] = inst_24903);

(statearr_24909_24975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (20))){
var state_24907__$1 = state_24907;
var statearr_24910_24976 = state_24907__$1;
(statearr_24910_24976[(2)] = null);

(statearr_24910_24976[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (1))){
var state_24907__$1 = state_24907;
var statearr_24911_24977 = state_24907__$1;
(statearr_24911_24977[(2)] = null);

(statearr_24911_24977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (4))){
var inst_24872 = (state_24907[(7)]);
var inst_24872__$1 = (state_24907[(2)]);
var inst_24873 = (inst_24872__$1 == null);
var state_24907__$1 = (function (){var statearr_24912 = state_24907;
(statearr_24912[(7)] = inst_24872__$1);

return statearr_24912;
})();
if(cljs.core.truth_(inst_24873)){
var statearr_24913_24978 = state_24907__$1;
(statearr_24913_24978[(1)] = (5));

} else {
var statearr_24914_24979 = state_24907__$1;
(statearr_24914_24979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (15))){
var inst_24885 = (state_24907[(8)]);
var state_24907__$1 = state_24907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24907__$1,(18),to,inst_24885);
} else {
if((state_val_24908 === (21))){
var inst_24898 = (state_24907[(2)]);
var state_24907__$1 = state_24907;
var statearr_24915_24980 = state_24907__$1;
(statearr_24915_24980[(2)] = inst_24898);

(statearr_24915_24980[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (13))){
var inst_24900 = (state_24907[(2)]);
var state_24907__$1 = (function (){var statearr_24916 = state_24907;
(statearr_24916[(9)] = inst_24900);

return statearr_24916;
})();
var statearr_24917_24981 = state_24907__$1;
(statearr_24917_24981[(2)] = null);

(statearr_24917_24981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (6))){
var inst_24872 = (state_24907[(7)]);
var state_24907__$1 = state_24907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24907__$1,(11),inst_24872);
} else {
if((state_val_24908 === (17))){
var inst_24893 = (state_24907[(2)]);
var state_24907__$1 = state_24907;
if(cljs.core.truth_(inst_24893)){
var statearr_24918_24982 = state_24907__$1;
(statearr_24918_24982[(1)] = (19));

} else {
var statearr_24919_24983 = state_24907__$1;
(statearr_24919_24983[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (3))){
var inst_24905 = (state_24907[(2)]);
var state_24907__$1 = state_24907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24907__$1,inst_24905);
} else {
if((state_val_24908 === (12))){
var inst_24882 = (state_24907[(10)]);
var state_24907__$1 = state_24907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24907__$1,(14),inst_24882);
} else {
if((state_val_24908 === (2))){
var state_24907__$1 = state_24907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24907__$1,(4),results);
} else {
if((state_val_24908 === (19))){
var state_24907__$1 = state_24907;
var statearr_24920_24984 = state_24907__$1;
(statearr_24920_24984[(2)] = null);

(statearr_24920_24984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (11))){
var inst_24882 = (state_24907[(2)]);
var state_24907__$1 = (function (){var statearr_24921 = state_24907;
(statearr_24921[(10)] = inst_24882);

return statearr_24921;
})();
var statearr_24922_24985 = state_24907__$1;
(statearr_24922_24985[(2)] = null);

(statearr_24922_24985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (9))){
var state_24907__$1 = state_24907;
var statearr_24923_24986 = state_24907__$1;
(statearr_24923_24986[(2)] = null);

(statearr_24923_24986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (5))){
var state_24907__$1 = state_24907;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24924_24987 = state_24907__$1;
(statearr_24924_24987[(1)] = (8));

} else {
var statearr_24925_24988 = state_24907__$1;
(statearr_24925_24988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (14))){
var inst_24887 = (state_24907[(11)]);
var inst_24885 = (state_24907[(8)]);
var inst_24885__$1 = (state_24907[(2)]);
var inst_24886 = (inst_24885__$1 == null);
var inst_24887__$1 = cljs.core.not.call(null,inst_24886);
var state_24907__$1 = (function (){var statearr_24926 = state_24907;
(statearr_24926[(11)] = inst_24887__$1);

(statearr_24926[(8)] = inst_24885__$1);

return statearr_24926;
})();
if(inst_24887__$1){
var statearr_24927_24989 = state_24907__$1;
(statearr_24927_24989[(1)] = (15));

} else {
var statearr_24928_24990 = state_24907__$1;
(statearr_24928_24990[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (16))){
var inst_24887 = (state_24907[(11)]);
var state_24907__$1 = state_24907;
var statearr_24929_24991 = state_24907__$1;
(statearr_24929_24991[(2)] = inst_24887);

(statearr_24929_24991[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (10))){
var inst_24879 = (state_24907[(2)]);
var state_24907__$1 = state_24907;
var statearr_24930_24992 = state_24907__$1;
(statearr_24930_24992[(2)] = inst_24879);

(statearr_24930_24992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (18))){
var inst_24890 = (state_24907[(2)]);
var state_24907__$1 = state_24907;
var statearr_24931_24993 = state_24907__$1;
(statearr_24931_24993[(2)] = inst_24890);

(statearr_24931_24993[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (8))){
var inst_24876 = cljs.core.async.close_BANG_.call(null,to);
var state_24907__$1 = state_24907;
var statearr_24932_24994 = state_24907__$1;
(statearr_24932_24994[(2)] = inst_24876);

(statearr_24932_24994[(1)] = (10));


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
});})(c__18684__auto__,jobs,results,process,async))
;
return ((function (switch__18628__auto__,c__18684__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____0 = (function (){
var statearr_24936 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24936[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__);

(statearr_24936[(1)] = (1));

return statearr_24936;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____1 = (function (state_24907){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_24907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e24937){if((e24937 instanceof Object)){
var ex__18632__auto__ = e24937;
var statearr_24938_24995 = state_24907;
(statearr_24938_24995[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24996 = state_24907;
state_24907 = G__24996;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__ = function(state_24907){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____1.call(this,state_24907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18629__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto__,jobs,results,process,async))
})();
var state__18686__auto__ = (function (){var statearr_24939 = f__18685__auto__.call(null);
(statearr_24939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto__);

return statearr_24939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto__,jobs,results,process,async))
);

return c__18684__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function() {
var cljs$core$async$pipeline_async = null;
var cljs$core$async$pipeline_async__4 = (function (n,to,af,from){
return cljs$core$async$pipeline_async.call(null,n,to,af,from,true);
});
var cljs$core$async$pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
cljs$core$async$pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline_async__4.call(this,n,to,af,from);
case 5:
return cljs$core$async$pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline_async__4;
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline_async__5;
return cljs$core$async$pipeline_async;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function() {
var cljs$core$async$pipeline = null;
var cljs$core$async$pipeline__4 = (function (n,to,xf,from){
return cljs$core$async$pipeline.call(null,n,to,xf,from,true);
});
var cljs$core$async$pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return cljs$core$async$pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var cljs$core$async$pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
cljs$core$async$pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline__4.call(this,n,to,xf,from);
case 5:
return cljs$core$async$pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return cljs$core$async$pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline__4;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline__5;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$6 = cljs$core$async$pipeline__6;
return cljs$core$async$pipeline;
})()
;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function() {
var cljs$core$async$split = null;
var cljs$core$async$split__2 = (function (p,ch){
return cljs$core$async$split.call(null,p,ch,null,null);
});
var cljs$core$async$split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18684__auto___25097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto___25097,tc,fc){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto___25097,tc,fc){
return (function (state_25072){
var state_val_25073 = (state_25072[(1)]);
if((state_val_25073 === (7))){
var inst_25068 = (state_25072[(2)]);
var state_25072__$1 = state_25072;
var statearr_25074_25098 = state_25072__$1;
(statearr_25074_25098[(2)] = inst_25068);

(statearr_25074_25098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (1))){
var state_25072__$1 = state_25072;
var statearr_25075_25099 = state_25072__$1;
(statearr_25075_25099[(2)] = null);

(statearr_25075_25099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (4))){
var inst_25049 = (state_25072[(7)]);
var inst_25049__$1 = (state_25072[(2)]);
var inst_25050 = (inst_25049__$1 == null);
var state_25072__$1 = (function (){var statearr_25076 = state_25072;
(statearr_25076[(7)] = inst_25049__$1);

return statearr_25076;
})();
if(cljs.core.truth_(inst_25050)){
var statearr_25077_25100 = state_25072__$1;
(statearr_25077_25100[(1)] = (5));

} else {
var statearr_25078_25101 = state_25072__$1;
(statearr_25078_25101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (13))){
var state_25072__$1 = state_25072;
var statearr_25079_25102 = state_25072__$1;
(statearr_25079_25102[(2)] = null);

(statearr_25079_25102[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (6))){
var inst_25049 = (state_25072[(7)]);
var inst_25055 = p.call(null,inst_25049);
var state_25072__$1 = state_25072;
if(cljs.core.truth_(inst_25055)){
var statearr_25080_25103 = state_25072__$1;
(statearr_25080_25103[(1)] = (9));

} else {
var statearr_25081_25104 = state_25072__$1;
(statearr_25081_25104[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (3))){
var inst_25070 = (state_25072[(2)]);
var state_25072__$1 = state_25072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25072__$1,inst_25070);
} else {
if((state_val_25073 === (12))){
var state_25072__$1 = state_25072;
var statearr_25082_25105 = state_25072__$1;
(statearr_25082_25105[(2)] = null);

(statearr_25082_25105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (2))){
var state_25072__$1 = state_25072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25072__$1,(4),ch);
} else {
if((state_val_25073 === (11))){
var inst_25049 = (state_25072[(7)]);
var inst_25059 = (state_25072[(2)]);
var state_25072__$1 = state_25072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25072__$1,(8),inst_25059,inst_25049);
} else {
if((state_val_25073 === (9))){
var state_25072__$1 = state_25072;
var statearr_25083_25106 = state_25072__$1;
(statearr_25083_25106[(2)] = tc);

(statearr_25083_25106[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (5))){
var inst_25052 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25053 = cljs.core.async.close_BANG_.call(null,fc);
var state_25072__$1 = (function (){var statearr_25084 = state_25072;
(statearr_25084[(8)] = inst_25052);

return statearr_25084;
})();
var statearr_25085_25107 = state_25072__$1;
(statearr_25085_25107[(2)] = inst_25053);

(statearr_25085_25107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (14))){
var inst_25066 = (state_25072[(2)]);
var state_25072__$1 = state_25072;
var statearr_25086_25108 = state_25072__$1;
(statearr_25086_25108[(2)] = inst_25066);

(statearr_25086_25108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (10))){
var state_25072__$1 = state_25072;
var statearr_25087_25109 = state_25072__$1;
(statearr_25087_25109[(2)] = fc);

(statearr_25087_25109[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (8))){
var inst_25061 = (state_25072[(2)]);
var state_25072__$1 = state_25072;
if(cljs.core.truth_(inst_25061)){
var statearr_25088_25110 = state_25072__$1;
(statearr_25088_25110[(1)] = (12));

} else {
var statearr_25089_25111 = state_25072__$1;
(statearr_25089_25111[(1)] = (13));

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
});})(c__18684__auto___25097,tc,fc))
;
return ((function (switch__18628__auto__,c__18684__auto___25097,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__18629__auto__ = null;
var cljs$core$async$split_$_state_machine__18629__auto____0 = (function (){
var statearr_25093 = [null,null,null,null,null,null,null,null,null];
(statearr_25093[(0)] = cljs$core$async$split_$_state_machine__18629__auto__);

(statearr_25093[(1)] = (1));

return statearr_25093;
});
var cljs$core$async$split_$_state_machine__18629__auto____1 = (function (state_25072){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_25072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e25094){if((e25094 instanceof Object)){
var ex__18632__auto__ = e25094;
var statearr_25095_25112 = state_25072;
(statearr_25095_25112[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25113 = state_25072;
state_25072 = G__25113;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__18629__auto__ = function(state_25072){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__18629__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__18629__auto____1.call(this,state_25072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__18629__auto____0;
cljs$core$async$split_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__18629__auto____1;
return cljs$core$async$split_$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto___25097,tc,fc))
})();
var state__18686__auto__ = (function (){var statearr_25096 = f__18685__auto__.call(null);
(statearr_25096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto___25097);

return statearr_25096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto___25097,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
cljs$core$async$split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$split__2.call(this,p,ch);
case 4:
return cljs$core$async$split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$split__2;
cljs$core$async$split.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$split__4;
return cljs$core$async$split;
})()
;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto__){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto__){
return (function (state_25160){
var state_val_25161 = (state_25160[(1)]);
if((state_val_25161 === (1))){
var inst_25146 = init;
var state_25160__$1 = (function (){var statearr_25162 = state_25160;
(statearr_25162[(7)] = inst_25146);

return statearr_25162;
})();
var statearr_25163_25178 = state_25160__$1;
(statearr_25163_25178[(2)] = null);

(statearr_25163_25178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (2))){
var state_25160__$1 = state_25160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25160__$1,(4),ch);
} else {
if((state_val_25161 === (3))){
var inst_25158 = (state_25160[(2)]);
var state_25160__$1 = state_25160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25160__$1,inst_25158);
} else {
if((state_val_25161 === (4))){
var inst_25149 = (state_25160[(8)]);
var inst_25149__$1 = (state_25160[(2)]);
var inst_25150 = (inst_25149__$1 == null);
var state_25160__$1 = (function (){var statearr_25164 = state_25160;
(statearr_25164[(8)] = inst_25149__$1);

return statearr_25164;
})();
if(cljs.core.truth_(inst_25150)){
var statearr_25165_25179 = state_25160__$1;
(statearr_25165_25179[(1)] = (5));

} else {
var statearr_25166_25180 = state_25160__$1;
(statearr_25166_25180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (5))){
var inst_25146 = (state_25160[(7)]);
var state_25160__$1 = state_25160;
var statearr_25167_25181 = state_25160__$1;
(statearr_25167_25181[(2)] = inst_25146);

(statearr_25167_25181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (6))){
var inst_25146 = (state_25160[(7)]);
var inst_25149 = (state_25160[(8)]);
var inst_25153 = f.call(null,inst_25146,inst_25149);
var inst_25146__$1 = inst_25153;
var state_25160__$1 = (function (){var statearr_25168 = state_25160;
(statearr_25168[(7)] = inst_25146__$1);

return statearr_25168;
})();
var statearr_25169_25182 = state_25160__$1;
(statearr_25169_25182[(2)] = null);

(statearr_25169_25182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (7))){
var inst_25156 = (state_25160[(2)]);
var state_25160__$1 = state_25160;
var statearr_25170_25183 = state_25160__$1;
(statearr_25170_25183[(2)] = inst_25156);

(statearr_25170_25183[(1)] = (3));


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
});})(c__18684__auto__))
;
return ((function (switch__18628__auto__,c__18684__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18629__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18629__auto____0 = (function (){
var statearr_25174 = [null,null,null,null,null,null,null,null,null];
(statearr_25174[(0)] = cljs$core$async$reduce_$_state_machine__18629__auto__);

(statearr_25174[(1)] = (1));

return statearr_25174;
});
var cljs$core$async$reduce_$_state_machine__18629__auto____1 = (function (state_25160){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_25160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e25175){if((e25175 instanceof Object)){
var ex__18632__auto__ = e25175;
var statearr_25176_25184 = state_25160;
(statearr_25176_25184[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25185 = state_25160;
state_25160 = G__25185;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18629__auto__ = function(state_25160){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18629__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18629__auto____1.call(this,state_25160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18629__auto____0;
cljs$core$async$reduce_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18629__auto____1;
return cljs$core$async$reduce_$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto__))
})();
var state__18686__auto__ = (function (){var statearr_25177 = f__18685__auto__.call(null);
(statearr_25177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto__);

return statearr_25177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto__))
);

return c__18684__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function() {
var cljs$core$async$onto_chan = null;
var cljs$core$async$onto_chan__2 = (function (ch,coll){
return cljs$core$async$onto_chan.call(null,ch,coll,true);
});
var cljs$core$async$onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__18684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto__){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto__){
return (function (state_25259){
var state_val_25260 = (state_25259[(1)]);
if((state_val_25260 === (7))){
var inst_25241 = (state_25259[(2)]);
var state_25259__$1 = state_25259;
var statearr_25261_25284 = state_25259__$1;
(statearr_25261_25284[(2)] = inst_25241);

(statearr_25261_25284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (1))){
var inst_25235 = cljs.core.seq.call(null,coll);
var inst_25236 = inst_25235;
var state_25259__$1 = (function (){var statearr_25262 = state_25259;
(statearr_25262[(7)] = inst_25236);

return statearr_25262;
})();
var statearr_25263_25285 = state_25259__$1;
(statearr_25263_25285[(2)] = null);

(statearr_25263_25285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (4))){
var inst_25236 = (state_25259[(7)]);
var inst_25239 = cljs.core.first.call(null,inst_25236);
var state_25259__$1 = state_25259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25259__$1,(7),ch,inst_25239);
} else {
if((state_val_25260 === (13))){
var inst_25253 = (state_25259[(2)]);
var state_25259__$1 = state_25259;
var statearr_25264_25286 = state_25259__$1;
(statearr_25264_25286[(2)] = inst_25253);

(statearr_25264_25286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (6))){
var inst_25244 = (state_25259[(2)]);
var state_25259__$1 = state_25259;
if(cljs.core.truth_(inst_25244)){
var statearr_25265_25287 = state_25259__$1;
(statearr_25265_25287[(1)] = (8));

} else {
var statearr_25266_25288 = state_25259__$1;
(statearr_25266_25288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (3))){
var inst_25257 = (state_25259[(2)]);
var state_25259__$1 = state_25259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25259__$1,inst_25257);
} else {
if((state_val_25260 === (12))){
var state_25259__$1 = state_25259;
var statearr_25267_25289 = state_25259__$1;
(statearr_25267_25289[(2)] = null);

(statearr_25267_25289[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (2))){
var inst_25236 = (state_25259[(7)]);
var state_25259__$1 = state_25259;
if(cljs.core.truth_(inst_25236)){
var statearr_25268_25290 = state_25259__$1;
(statearr_25268_25290[(1)] = (4));

} else {
var statearr_25269_25291 = state_25259__$1;
(statearr_25269_25291[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (11))){
var inst_25250 = cljs.core.async.close_BANG_.call(null,ch);
var state_25259__$1 = state_25259;
var statearr_25270_25292 = state_25259__$1;
(statearr_25270_25292[(2)] = inst_25250);

(statearr_25270_25292[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (9))){
var state_25259__$1 = state_25259;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25271_25293 = state_25259__$1;
(statearr_25271_25293[(1)] = (11));

} else {
var statearr_25272_25294 = state_25259__$1;
(statearr_25272_25294[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (5))){
var inst_25236 = (state_25259[(7)]);
var state_25259__$1 = state_25259;
var statearr_25273_25295 = state_25259__$1;
(statearr_25273_25295[(2)] = inst_25236);

(statearr_25273_25295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (10))){
var inst_25255 = (state_25259[(2)]);
var state_25259__$1 = state_25259;
var statearr_25274_25296 = state_25259__$1;
(statearr_25274_25296[(2)] = inst_25255);

(statearr_25274_25296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (8))){
var inst_25236 = (state_25259[(7)]);
var inst_25246 = cljs.core.next.call(null,inst_25236);
var inst_25236__$1 = inst_25246;
var state_25259__$1 = (function (){var statearr_25275 = state_25259;
(statearr_25275[(7)] = inst_25236__$1);

return statearr_25275;
})();
var statearr_25276_25297 = state_25259__$1;
(statearr_25276_25297[(2)] = null);

(statearr_25276_25297[(1)] = (2));


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
});})(c__18684__auto__))
;
return ((function (switch__18628__auto__,c__18684__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__18629__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__18629__auto____0 = (function (){
var statearr_25280 = [null,null,null,null,null,null,null,null];
(statearr_25280[(0)] = cljs$core$async$onto_chan_$_state_machine__18629__auto__);

(statearr_25280[(1)] = (1));

return statearr_25280;
});
var cljs$core$async$onto_chan_$_state_machine__18629__auto____1 = (function (state_25259){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_25259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e25281){if((e25281 instanceof Object)){
var ex__18632__auto__ = e25281;
var statearr_25282_25298 = state_25259;
(statearr_25282_25298[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25299 = state_25259;
state_25259 = G__25299;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__18629__auto__ = function(state_25259){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__18629__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__18629__auto____1.call(this,state_25259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__18629__auto____0;
cljs$core$async$onto_chan_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__18629__auto____1;
return cljs$core$async$onto_chan_$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto__))
})();
var state__18686__auto__ = (function (){var statearr_25283 = f__18685__auto__.call(null);
(statearr_25283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto__);

return statearr_25283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto__))
);

return c__18684__auto__;
});
cljs$core$async$onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$onto_chan__2.call(this,ch,coll);
case 3:
return cljs$core$async$onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$onto_chan__2;
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$onto_chan__3;
return cljs$core$async$onto_chan;
})()
;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj25301 = {};
return obj25301;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__16195__auto__ = _;
if(and__16195__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__16195__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16843__auto__ = (((_ == null))?null:_);
return (function (){var or__16207__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16843__auto__)]);
if(or__16207__auto__){
return or__16207__auto__;
} else {
var or__16207__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__16207__auto____$1){
return or__16207__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj25303 = {};
return obj25303;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__16195__auto__ = m;
if(and__16195__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__16195__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16843__auto__ = (((m == null))?null:m);
return (function (){var or__16207__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16843__auto__)]);
if(or__16207__auto__){
return or__16207__auto__;
} else {
var or__16207__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__16207__auto____$1){
return or__16207__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__16195__auto__ = m;
if(and__16195__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__16195__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16843__auto__ = (((m == null))?null:m);
return (function (){var or__16207__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16843__auto__)]);
if(or__16207__auto__){
return or__16207__auto__;
} else {
var or__16207__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__16207__auto____$1){
return or__16207__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__16195__auto__ = m;
if(and__16195__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__16195__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16843__auto__ = (((m == null))?null:m);
return (function (){var or__16207__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16843__auto__)]);
if(or__16207__auto__){
return or__16207__auto__;
} else {
var or__16207__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__16207__auto____$1){
return or__16207__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t25525 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25525 = (function (mult,ch,cs,meta25526){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25526 = meta25526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25527,meta25526__$1){
var self__ = this;
var _25527__$1 = this;
return (new cljs.core.async.t25525(self__.mult,self__.ch,self__.cs,meta25526__$1));
});})(cs))
;

cljs.core.async.t25525.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25527){
var self__ = this;
var _25527__$1 = this;
return self__.meta25526;
});})(cs))
;

cljs.core.async.t25525.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25525.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t25525.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t25525.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t25525.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t25525.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t25525.cljs$lang$type = true;

cljs.core.async.t25525.cljs$lang$ctorStr = "cljs.core.async/t25525";

cljs.core.async.t25525.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16786__auto__,writer__16787__auto__,opt__16788__auto__){
return cljs.core._write.call(null,writer__16787__auto__,"cljs.core.async/t25525");
});})(cs))
;

cljs.core.async.__GT_t25525 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t25525(mult__$1,ch__$1,cs__$1,meta25526){
return (new cljs.core.async.t25525(mult__$1,ch__$1,cs__$1,meta25526));
});})(cs))
;

}

return (new cljs.core.async.t25525(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18684__auto___25746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto___25746,cs,m,dchan,dctr,done){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto___25746,cs,m,dchan,dctr,done){
return (function (state_25658){
var state_val_25659 = (state_25658[(1)]);
if((state_val_25659 === (7))){
var inst_25654 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
var statearr_25660_25747 = state_25658__$1;
(statearr_25660_25747[(2)] = inst_25654);

(statearr_25660_25747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (20))){
var inst_25559 = (state_25658[(7)]);
var inst_25569 = cljs.core.first.call(null,inst_25559);
var inst_25570 = cljs.core.nth.call(null,inst_25569,(0),null);
var inst_25571 = cljs.core.nth.call(null,inst_25569,(1),null);
var state_25658__$1 = (function (){var statearr_25661 = state_25658;
(statearr_25661[(8)] = inst_25570);

return statearr_25661;
})();
if(cljs.core.truth_(inst_25571)){
var statearr_25662_25748 = state_25658__$1;
(statearr_25662_25748[(1)] = (22));

} else {
var statearr_25663_25749 = state_25658__$1;
(statearr_25663_25749[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (27))){
var inst_25530 = (state_25658[(9)]);
var inst_25601 = (state_25658[(10)]);
var inst_25606 = (state_25658[(11)]);
var inst_25599 = (state_25658[(12)]);
var inst_25606__$1 = cljs.core._nth.call(null,inst_25599,inst_25601);
var inst_25607 = cljs.core.async.put_BANG_.call(null,inst_25606__$1,inst_25530,done);
var state_25658__$1 = (function (){var statearr_25664 = state_25658;
(statearr_25664[(11)] = inst_25606__$1);

return statearr_25664;
})();
if(cljs.core.truth_(inst_25607)){
var statearr_25665_25750 = state_25658__$1;
(statearr_25665_25750[(1)] = (30));

} else {
var statearr_25666_25751 = state_25658__$1;
(statearr_25666_25751[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (1))){
var state_25658__$1 = state_25658;
var statearr_25667_25752 = state_25658__$1;
(statearr_25667_25752[(2)] = null);

(statearr_25667_25752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (24))){
var inst_25559 = (state_25658[(7)]);
var inst_25576 = (state_25658[(2)]);
var inst_25577 = cljs.core.next.call(null,inst_25559);
var inst_25539 = inst_25577;
var inst_25540 = null;
var inst_25541 = (0);
var inst_25542 = (0);
var state_25658__$1 = (function (){var statearr_25668 = state_25658;
(statearr_25668[(13)] = inst_25539);

(statearr_25668[(14)] = inst_25541);

(statearr_25668[(15)] = inst_25542);

(statearr_25668[(16)] = inst_25540);

(statearr_25668[(17)] = inst_25576);

return statearr_25668;
})();
var statearr_25669_25753 = state_25658__$1;
(statearr_25669_25753[(2)] = null);

(statearr_25669_25753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (39))){
var state_25658__$1 = state_25658;
var statearr_25673_25754 = state_25658__$1;
(statearr_25673_25754[(2)] = null);

(statearr_25673_25754[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (4))){
var inst_25530 = (state_25658[(9)]);
var inst_25530__$1 = (state_25658[(2)]);
var inst_25531 = (inst_25530__$1 == null);
var state_25658__$1 = (function (){var statearr_25674 = state_25658;
(statearr_25674[(9)] = inst_25530__$1);

return statearr_25674;
})();
if(cljs.core.truth_(inst_25531)){
var statearr_25675_25755 = state_25658__$1;
(statearr_25675_25755[(1)] = (5));

} else {
var statearr_25676_25756 = state_25658__$1;
(statearr_25676_25756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (15))){
var inst_25539 = (state_25658[(13)]);
var inst_25541 = (state_25658[(14)]);
var inst_25542 = (state_25658[(15)]);
var inst_25540 = (state_25658[(16)]);
var inst_25555 = (state_25658[(2)]);
var inst_25556 = (inst_25542 + (1));
var tmp25670 = inst_25539;
var tmp25671 = inst_25541;
var tmp25672 = inst_25540;
var inst_25539__$1 = tmp25670;
var inst_25540__$1 = tmp25672;
var inst_25541__$1 = tmp25671;
var inst_25542__$1 = inst_25556;
var state_25658__$1 = (function (){var statearr_25677 = state_25658;
(statearr_25677[(18)] = inst_25555);

(statearr_25677[(13)] = inst_25539__$1);

(statearr_25677[(14)] = inst_25541__$1);

(statearr_25677[(15)] = inst_25542__$1);

(statearr_25677[(16)] = inst_25540__$1);

return statearr_25677;
})();
var statearr_25678_25757 = state_25658__$1;
(statearr_25678_25757[(2)] = null);

(statearr_25678_25757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (21))){
var inst_25580 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
var statearr_25682_25758 = state_25658__$1;
(statearr_25682_25758[(2)] = inst_25580);

(statearr_25682_25758[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (31))){
var inst_25606 = (state_25658[(11)]);
var inst_25610 = done.call(null,null);
var inst_25611 = cljs.core.async.untap_STAR_.call(null,m,inst_25606);
var state_25658__$1 = (function (){var statearr_25683 = state_25658;
(statearr_25683[(19)] = inst_25610);

return statearr_25683;
})();
var statearr_25684_25759 = state_25658__$1;
(statearr_25684_25759[(2)] = inst_25611);

(statearr_25684_25759[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (32))){
var inst_25598 = (state_25658[(20)]);
var inst_25600 = (state_25658[(21)]);
var inst_25601 = (state_25658[(10)]);
var inst_25599 = (state_25658[(12)]);
var inst_25613 = (state_25658[(2)]);
var inst_25614 = (inst_25601 + (1));
var tmp25679 = inst_25598;
var tmp25680 = inst_25600;
var tmp25681 = inst_25599;
var inst_25598__$1 = tmp25679;
var inst_25599__$1 = tmp25681;
var inst_25600__$1 = tmp25680;
var inst_25601__$1 = inst_25614;
var state_25658__$1 = (function (){var statearr_25685 = state_25658;
(statearr_25685[(20)] = inst_25598__$1);

(statearr_25685[(21)] = inst_25600__$1);

(statearr_25685[(10)] = inst_25601__$1);

(statearr_25685[(22)] = inst_25613);

(statearr_25685[(12)] = inst_25599__$1);

return statearr_25685;
})();
var statearr_25686_25760 = state_25658__$1;
(statearr_25686_25760[(2)] = null);

(statearr_25686_25760[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (40))){
var inst_25626 = (state_25658[(23)]);
var inst_25630 = done.call(null,null);
var inst_25631 = cljs.core.async.untap_STAR_.call(null,m,inst_25626);
var state_25658__$1 = (function (){var statearr_25687 = state_25658;
(statearr_25687[(24)] = inst_25630);

return statearr_25687;
})();
var statearr_25688_25761 = state_25658__$1;
(statearr_25688_25761[(2)] = inst_25631);

(statearr_25688_25761[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (33))){
var inst_25617 = (state_25658[(25)]);
var inst_25619 = cljs.core.chunked_seq_QMARK_.call(null,inst_25617);
var state_25658__$1 = state_25658;
if(inst_25619){
var statearr_25689_25762 = state_25658__$1;
(statearr_25689_25762[(1)] = (36));

} else {
var statearr_25690_25763 = state_25658__$1;
(statearr_25690_25763[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (13))){
var inst_25549 = (state_25658[(26)]);
var inst_25552 = cljs.core.async.close_BANG_.call(null,inst_25549);
var state_25658__$1 = state_25658;
var statearr_25691_25764 = state_25658__$1;
(statearr_25691_25764[(2)] = inst_25552);

(statearr_25691_25764[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (22))){
var inst_25570 = (state_25658[(8)]);
var inst_25573 = cljs.core.async.close_BANG_.call(null,inst_25570);
var state_25658__$1 = state_25658;
var statearr_25692_25765 = state_25658__$1;
(statearr_25692_25765[(2)] = inst_25573);

(statearr_25692_25765[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (36))){
var inst_25617 = (state_25658[(25)]);
var inst_25621 = cljs.core.chunk_first.call(null,inst_25617);
var inst_25622 = cljs.core.chunk_rest.call(null,inst_25617);
var inst_25623 = cljs.core.count.call(null,inst_25621);
var inst_25598 = inst_25622;
var inst_25599 = inst_25621;
var inst_25600 = inst_25623;
var inst_25601 = (0);
var state_25658__$1 = (function (){var statearr_25693 = state_25658;
(statearr_25693[(20)] = inst_25598);

(statearr_25693[(21)] = inst_25600);

(statearr_25693[(10)] = inst_25601);

(statearr_25693[(12)] = inst_25599);

return statearr_25693;
})();
var statearr_25694_25766 = state_25658__$1;
(statearr_25694_25766[(2)] = null);

(statearr_25694_25766[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (41))){
var inst_25617 = (state_25658[(25)]);
var inst_25633 = (state_25658[(2)]);
var inst_25634 = cljs.core.next.call(null,inst_25617);
var inst_25598 = inst_25634;
var inst_25599 = null;
var inst_25600 = (0);
var inst_25601 = (0);
var state_25658__$1 = (function (){var statearr_25695 = state_25658;
(statearr_25695[(20)] = inst_25598);

(statearr_25695[(21)] = inst_25600);

(statearr_25695[(10)] = inst_25601);

(statearr_25695[(27)] = inst_25633);

(statearr_25695[(12)] = inst_25599);

return statearr_25695;
})();
var statearr_25696_25767 = state_25658__$1;
(statearr_25696_25767[(2)] = null);

(statearr_25696_25767[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (43))){
var state_25658__$1 = state_25658;
var statearr_25697_25768 = state_25658__$1;
(statearr_25697_25768[(2)] = null);

(statearr_25697_25768[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (29))){
var inst_25642 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
var statearr_25698_25769 = state_25658__$1;
(statearr_25698_25769[(2)] = inst_25642);

(statearr_25698_25769[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (44))){
var inst_25651 = (state_25658[(2)]);
var state_25658__$1 = (function (){var statearr_25699 = state_25658;
(statearr_25699[(28)] = inst_25651);

return statearr_25699;
})();
var statearr_25700_25770 = state_25658__$1;
(statearr_25700_25770[(2)] = null);

(statearr_25700_25770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (6))){
var inst_25590 = (state_25658[(29)]);
var inst_25589 = cljs.core.deref.call(null,cs);
var inst_25590__$1 = cljs.core.keys.call(null,inst_25589);
var inst_25591 = cljs.core.count.call(null,inst_25590__$1);
var inst_25592 = cljs.core.reset_BANG_.call(null,dctr,inst_25591);
var inst_25597 = cljs.core.seq.call(null,inst_25590__$1);
var inst_25598 = inst_25597;
var inst_25599 = null;
var inst_25600 = (0);
var inst_25601 = (0);
var state_25658__$1 = (function (){var statearr_25701 = state_25658;
(statearr_25701[(20)] = inst_25598);

(statearr_25701[(21)] = inst_25600);

(statearr_25701[(10)] = inst_25601);

(statearr_25701[(29)] = inst_25590__$1);

(statearr_25701[(30)] = inst_25592);

(statearr_25701[(12)] = inst_25599);

return statearr_25701;
})();
var statearr_25702_25771 = state_25658__$1;
(statearr_25702_25771[(2)] = null);

(statearr_25702_25771[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (28))){
var inst_25598 = (state_25658[(20)]);
var inst_25617 = (state_25658[(25)]);
var inst_25617__$1 = cljs.core.seq.call(null,inst_25598);
var state_25658__$1 = (function (){var statearr_25703 = state_25658;
(statearr_25703[(25)] = inst_25617__$1);

return statearr_25703;
})();
if(inst_25617__$1){
var statearr_25704_25772 = state_25658__$1;
(statearr_25704_25772[(1)] = (33));

} else {
var statearr_25705_25773 = state_25658__$1;
(statearr_25705_25773[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (25))){
var inst_25600 = (state_25658[(21)]);
var inst_25601 = (state_25658[(10)]);
var inst_25603 = (inst_25601 < inst_25600);
var inst_25604 = inst_25603;
var state_25658__$1 = state_25658;
if(cljs.core.truth_(inst_25604)){
var statearr_25706_25774 = state_25658__$1;
(statearr_25706_25774[(1)] = (27));

} else {
var statearr_25707_25775 = state_25658__$1;
(statearr_25707_25775[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (34))){
var state_25658__$1 = state_25658;
var statearr_25708_25776 = state_25658__$1;
(statearr_25708_25776[(2)] = null);

(statearr_25708_25776[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (17))){
var state_25658__$1 = state_25658;
var statearr_25709_25777 = state_25658__$1;
(statearr_25709_25777[(2)] = null);

(statearr_25709_25777[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (3))){
var inst_25656 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25658__$1,inst_25656);
} else {
if((state_val_25659 === (12))){
var inst_25585 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
var statearr_25710_25778 = state_25658__$1;
(statearr_25710_25778[(2)] = inst_25585);

(statearr_25710_25778[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (2))){
var state_25658__$1 = state_25658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25658__$1,(4),ch);
} else {
if((state_val_25659 === (23))){
var state_25658__$1 = state_25658;
var statearr_25711_25779 = state_25658__$1;
(statearr_25711_25779[(2)] = null);

(statearr_25711_25779[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (35))){
var inst_25640 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
var statearr_25712_25780 = state_25658__$1;
(statearr_25712_25780[(2)] = inst_25640);

(statearr_25712_25780[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (19))){
var inst_25559 = (state_25658[(7)]);
var inst_25563 = cljs.core.chunk_first.call(null,inst_25559);
var inst_25564 = cljs.core.chunk_rest.call(null,inst_25559);
var inst_25565 = cljs.core.count.call(null,inst_25563);
var inst_25539 = inst_25564;
var inst_25540 = inst_25563;
var inst_25541 = inst_25565;
var inst_25542 = (0);
var state_25658__$1 = (function (){var statearr_25713 = state_25658;
(statearr_25713[(13)] = inst_25539);

(statearr_25713[(14)] = inst_25541);

(statearr_25713[(15)] = inst_25542);

(statearr_25713[(16)] = inst_25540);

return statearr_25713;
})();
var statearr_25714_25781 = state_25658__$1;
(statearr_25714_25781[(2)] = null);

(statearr_25714_25781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (11))){
var inst_25539 = (state_25658[(13)]);
var inst_25559 = (state_25658[(7)]);
var inst_25559__$1 = cljs.core.seq.call(null,inst_25539);
var state_25658__$1 = (function (){var statearr_25715 = state_25658;
(statearr_25715[(7)] = inst_25559__$1);

return statearr_25715;
})();
if(inst_25559__$1){
var statearr_25716_25782 = state_25658__$1;
(statearr_25716_25782[(1)] = (16));

} else {
var statearr_25717_25783 = state_25658__$1;
(statearr_25717_25783[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (9))){
var inst_25587 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
var statearr_25718_25784 = state_25658__$1;
(statearr_25718_25784[(2)] = inst_25587);

(statearr_25718_25784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (5))){
var inst_25537 = cljs.core.deref.call(null,cs);
var inst_25538 = cljs.core.seq.call(null,inst_25537);
var inst_25539 = inst_25538;
var inst_25540 = null;
var inst_25541 = (0);
var inst_25542 = (0);
var state_25658__$1 = (function (){var statearr_25719 = state_25658;
(statearr_25719[(13)] = inst_25539);

(statearr_25719[(14)] = inst_25541);

(statearr_25719[(15)] = inst_25542);

(statearr_25719[(16)] = inst_25540);

return statearr_25719;
})();
var statearr_25720_25785 = state_25658__$1;
(statearr_25720_25785[(2)] = null);

(statearr_25720_25785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (14))){
var state_25658__$1 = state_25658;
var statearr_25721_25786 = state_25658__$1;
(statearr_25721_25786[(2)] = null);

(statearr_25721_25786[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (45))){
var inst_25648 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
var statearr_25722_25787 = state_25658__$1;
(statearr_25722_25787[(2)] = inst_25648);

(statearr_25722_25787[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (26))){
var inst_25590 = (state_25658[(29)]);
var inst_25644 = (state_25658[(2)]);
var inst_25645 = cljs.core.seq.call(null,inst_25590);
var state_25658__$1 = (function (){var statearr_25723 = state_25658;
(statearr_25723[(31)] = inst_25644);

return statearr_25723;
})();
if(inst_25645){
var statearr_25724_25788 = state_25658__$1;
(statearr_25724_25788[(1)] = (42));

} else {
var statearr_25725_25789 = state_25658__$1;
(statearr_25725_25789[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (16))){
var inst_25559 = (state_25658[(7)]);
var inst_25561 = cljs.core.chunked_seq_QMARK_.call(null,inst_25559);
var state_25658__$1 = state_25658;
if(inst_25561){
var statearr_25726_25790 = state_25658__$1;
(statearr_25726_25790[(1)] = (19));

} else {
var statearr_25727_25791 = state_25658__$1;
(statearr_25727_25791[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (38))){
var inst_25637 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
var statearr_25728_25792 = state_25658__$1;
(statearr_25728_25792[(2)] = inst_25637);

(statearr_25728_25792[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (30))){
var state_25658__$1 = state_25658;
var statearr_25729_25793 = state_25658__$1;
(statearr_25729_25793[(2)] = null);

(statearr_25729_25793[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (10))){
var inst_25542 = (state_25658[(15)]);
var inst_25540 = (state_25658[(16)]);
var inst_25548 = cljs.core._nth.call(null,inst_25540,inst_25542);
var inst_25549 = cljs.core.nth.call(null,inst_25548,(0),null);
var inst_25550 = cljs.core.nth.call(null,inst_25548,(1),null);
var state_25658__$1 = (function (){var statearr_25730 = state_25658;
(statearr_25730[(26)] = inst_25549);

return statearr_25730;
})();
if(cljs.core.truth_(inst_25550)){
var statearr_25731_25794 = state_25658__$1;
(statearr_25731_25794[(1)] = (13));

} else {
var statearr_25732_25795 = state_25658__$1;
(statearr_25732_25795[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (18))){
var inst_25583 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
var statearr_25733_25796 = state_25658__$1;
(statearr_25733_25796[(2)] = inst_25583);

(statearr_25733_25796[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (42))){
var state_25658__$1 = state_25658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25658__$1,(45),dchan);
} else {
if((state_val_25659 === (37))){
var inst_25530 = (state_25658[(9)]);
var inst_25626 = (state_25658[(23)]);
var inst_25617 = (state_25658[(25)]);
var inst_25626__$1 = cljs.core.first.call(null,inst_25617);
var inst_25627 = cljs.core.async.put_BANG_.call(null,inst_25626__$1,inst_25530,done);
var state_25658__$1 = (function (){var statearr_25734 = state_25658;
(statearr_25734[(23)] = inst_25626__$1);

return statearr_25734;
})();
if(cljs.core.truth_(inst_25627)){
var statearr_25735_25797 = state_25658__$1;
(statearr_25735_25797[(1)] = (39));

} else {
var statearr_25736_25798 = state_25658__$1;
(statearr_25736_25798[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (8))){
var inst_25541 = (state_25658[(14)]);
var inst_25542 = (state_25658[(15)]);
var inst_25544 = (inst_25542 < inst_25541);
var inst_25545 = inst_25544;
var state_25658__$1 = state_25658;
if(cljs.core.truth_(inst_25545)){
var statearr_25737_25799 = state_25658__$1;
(statearr_25737_25799[(1)] = (10));

} else {
var statearr_25738_25800 = state_25658__$1;
(statearr_25738_25800[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__18684__auto___25746,cs,m,dchan,dctr,done))
;
return ((function (switch__18628__auto__,c__18684__auto___25746,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18629__auto__ = null;
var cljs$core$async$mult_$_state_machine__18629__auto____0 = (function (){
var statearr_25742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25742[(0)] = cljs$core$async$mult_$_state_machine__18629__auto__);

(statearr_25742[(1)] = (1));

return statearr_25742;
});
var cljs$core$async$mult_$_state_machine__18629__auto____1 = (function (state_25658){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_25658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e25743){if((e25743 instanceof Object)){
var ex__18632__auto__ = e25743;
var statearr_25744_25801 = state_25658;
(statearr_25744_25801[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25802 = state_25658;
state_25658 = G__25802;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18629__auto__ = function(state_25658){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18629__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18629__auto____1.call(this,state_25658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18629__auto____0;
cljs$core$async$mult_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18629__auto____1;
return cljs$core$async$mult_$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto___25746,cs,m,dchan,dctr,done))
})();
var state__18686__auto__ = (function (){var statearr_25745 = f__18685__auto__.call(null);
(statearr_25745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto___25746);

return statearr_25745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto___25746,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function() {
var cljs$core$async$tap = null;
var cljs$core$async$tap__2 = (function (mult,ch){
return cljs$core$async$tap.call(null,mult,ch,true);
});
var cljs$core$async$tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
cljs$core$async$tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$tap__2.call(this,mult,ch);
case 3:
return cljs$core$async$tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$tap__2;
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$tap__3;
return cljs$core$async$tap;
})()
;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj25804 = {};
return obj25804;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__16195__auto__ = m;
if(and__16195__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__16195__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16843__auto__ = (((m == null))?null:m);
return (function (){var or__16207__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16843__auto__)]);
if(or__16207__auto__){
return or__16207__auto__;
} else {
var or__16207__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__16207__auto____$1){
return or__16207__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__16195__auto__ = m;
if(and__16195__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__16195__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16843__auto__ = (((m == null))?null:m);
return (function (){var or__16207__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16843__auto__)]);
if(or__16207__auto__){
return or__16207__auto__;
} else {
var or__16207__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__16207__auto____$1){
return or__16207__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__16195__auto__ = m;
if(and__16195__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__16195__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16843__auto__ = (((m == null))?null:m);
return (function (){var or__16207__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16843__auto__)]);
if(or__16207__auto__){
return or__16207__auto__;
} else {
var or__16207__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__16207__auto____$1){
return or__16207__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__16195__auto__ = m;
if(and__16195__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__16195__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16843__auto__ = (((m == null))?null:m);
return (function (){var or__16207__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16843__auto__)]);
if(or__16207__auto__){
return or__16207__auto__;
} else {
var or__16207__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__16207__auto____$1){
return or__16207__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__16195__auto__ = m;
if(and__16195__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__16195__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16843__auto__ = (((m == null))?null:m);
return (function (){var or__16207__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16843__auto__)]);
if(or__16207__auto__){
return or__16207__auto__;
} else {
var or__16207__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__16207__auto____$1){
return or__16207__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
 * @param {...*} var_args
 */
cljs.core.async.ioc_alts_BANG_ = (function() { 
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25805){
var map__25810 = p__25805;
var map__25810__$1 = ((cljs.core.seq_QMARK_.call(null,map__25810))?cljs.core.apply.call(null,cljs.core.hash_map,map__25810):map__25810);
var opts = map__25810__$1;
var statearr_25811_25814 = state;
(statearr_25811_25814[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25810,map__25810__$1,opts){
return (function (val){
var statearr_25812_25815 = state;
(statearr_25812_25815[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25810,map__25810__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25813_25816 = state;
(statearr_25813_25816[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25805 = null;
if (arguments.length > 3) {
var G__25817__i = 0, G__25817__a = new Array(arguments.length -  3);
while (G__25817__i < G__25817__a.length) {G__25817__a[G__25817__i] = arguments[G__25817__i + 3]; ++G__25817__i;}
  p__25805 = new cljs.core.IndexedSeq(G__25817__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25805);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25818){
var state = cljs.core.first(arglist__25818);
arglist__25818 = cljs.core.next(arglist__25818);
var cont_block = cljs.core.first(arglist__25818);
arglist__25818 = cljs.core.next(arglist__25818);
var ports = cljs.core.first(arglist__25818);
var p__25805 = cljs.core.rest(arglist__25818);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__25805);
});
cljs$core$async$ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$ioc_alts_BANG___delegate;
return cljs$core$async$ioc_alts_BANG_;
})()
;
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t25938 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25938 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25939){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25939 = meta25939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25940,meta25939__$1){
var self__ = this;
var _25940__$1 = this;
return (new cljs.core.async.t25938(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25939__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25938.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25940){
var self__ = this;
var _25940__$1 = this;
return self__.meta25939;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25938.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25938.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25938.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t25938.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25938.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25938.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25938.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25938.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25938.cljs$lang$type = true;

cljs.core.async.t25938.cljs$lang$ctorStr = "cljs.core.async/t25938";

cljs.core.async.t25938.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16786__auto__,writer__16787__auto__,opt__16788__auto__){
return cljs.core._write.call(null,writer__16787__auto__,"cljs.core.async/t25938");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t25938 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t25938(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25939){
return (new cljs.core.async.t25938(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25939));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t25938(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18684__auto___26057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto___26057,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto___26057,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26010){
var state_val_26011 = (state_26010[(1)]);
if((state_val_26011 === (7))){
var inst_25954 = (state_26010[(7)]);
var inst_25959 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25954);
var state_26010__$1 = state_26010;
var statearr_26012_26058 = state_26010__$1;
(statearr_26012_26058[(2)] = inst_25959);

(statearr_26012_26058[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26011 === (20))){
var inst_25969 = (state_26010[(8)]);
var state_26010__$1 = state_26010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26010__$1,(23),out,inst_25969);
} else {
if((state_val_26011 === (1))){
var inst_25944 = (state_26010[(9)]);
var inst_25944__$1 = calc_state.call(null);
var inst_25945 = cljs.core.seq_QMARK_.call(null,inst_25944__$1);
var state_26010__$1 = (function (){var statearr_26013 = state_26010;
(statearr_26013[(9)] = inst_25944__$1);

return statearr_26013;
})();
if(inst_25945){
var statearr_26014_26059 = state_26010__$1;
(statearr_26014_26059[(1)] = (2));

} else {
var statearr_26015_26060 = state_26010__$1;
(statearr_26015_26060[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26011 === (24))){
var inst_25962 = (state_26010[(10)]);
var inst_25954 = inst_25962;
var state_26010__$1 = (function (){var statearr_26016 = state_26010;
(statearr_26016[(7)] = inst_25954);

return statearr_26016;
})();
var statearr_26017_26061 = state_26010__$1;
(statearr_26017_26061[(2)] = null);

(statearr_26017_26061[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26011 === (4))){
var inst_25944 = (state_26010[(9)]);
var inst_25950 = (state_26010[(2)]);
var inst_25951 = cljs.core.get.call(null,inst_25950,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25952 = cljs.core.get.call(null,inst_25950,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25953 = cljs.core.get.call(null,inst_25950,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25954 = inst_25944;
var state_26010__$1 = (function (){var statearr_26018 = state_26010;
(statearr_26018[(7)] = inst_25954);

(statearr_26018[(11)] = inst_25951);

(statearr_26018[(12)] = inst_25952);

(statearr_26018[(13)] = inst_25953);

return statearr_26018;
})();
var statearr_26019_26062 = state_26010__$1;
(statearr_26019_26062[(2)] = null);

(statearr_26019_26062[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26011 === (15))){
var state_26010__$1 = state_26010;
var statearr_26020_26063 = state_26010__$1;
(statearr_26020_26063[(2)] = null);

(statearr_26020_26063[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26011 === (21))){
var inst_25962 = (state_26010[(10)]);
var inst_25954 = inst_25962;
var state_26010__$1 = (function (){var statearr_26021 = state_26010;
(statearr_26021[(7)] = inst_25954);

return statearr_26021;
})();
var statearr_26022_26064 = state_26010__$1;
(statearr_26022_26064[(2)] = null);

(statearr_26022_26064[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26011 === (13))){
var inst_26006 = (state_26010[(2)]);
var state_26010__$1 = state_26010;
var statearr_26023_26065 = state_26010__$1;
(statearr_26023_26065[(2)] = inst_26006);

(statearr_26023_26065[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26011 === (22))){
var inst_26004 = (state_26010[(2)]);
var state_26010__$1 = state_26010;
var statearr_26024_26066 = state_26010__$1;
(statearr_26024_26066[(2)] = inst_26004);

(statearr_26024_26066[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26011 === (6))){
var inst_26008 = (state_26010[(2)]);
var state_26010__$1 = state_26010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26010__$1,inst_26008);
} else {
if((state_val_26011 === (25))){
var state_26010__$1 = state_26010;
var statearr_26025_26067 = state_26010__$1;
(statearr_26025_26067[(2)] = null);

(statearr_26025_26067[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26011 === (17))){
var inst_25984 = (state_26010[(14)]);
var state_26010__$1 = state_26010;
var statearr_26026_26068 = state_26010__$1;
(statearr_26026_26068[(2)] = inst_25984);

(statearr_26026_26068[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26011 === (3))){
var inst_25944 = (state_26010[(9)]);
var state_26010__$1 = state_26010;
var statearr_26027_26069 = state_26010__$1;
(statearr_26027_26069[(2)] = inst_25944);

(statearr_26027_26069[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26011 === (12))){
var inst_25984 = (state_26010[(14)]);
var inst_25970 = (state_26010[(15)]);
var inst_25963 = (state_26010[(16)]);
var inst_25984__$1 = inst_25963.call(null,inst_25970);
var state_26010__$1 = (function (){var statearr_26028 = state_26010;
(statearr_26028[(14)] = inst_25984__$1);

return statearr_26028;
})();
if(cljs.core.truth_(inst_25984__$1)){
var statearr_26029_26070 = state_26010__$1;
(statearr_26029_26070[(1)] = (17));

} else {
var statearr_26030_26071 = state_26010__$1;
(statearr_26030_26071[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26011 === (2))){
var inst_25944 = (state_26010[(9)]);
var inst_25947 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25944);
var state_26010__$1 = state_26010;
var statearr_26031_26072 = state_26010__$1;
(statearr_26031_26072[(2)] = inst_25947);

(statearr_26031_26072[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26011 === (23))){
var inst_25995 = (state_26010[(2)]);
var state_26010__$1 = state_26010;
if(cljs.core.truth_(inst_25995)){
var statearr_26032_26073 = state_26010__$1;
(statearr_26032_26073[(1)] = (24));

} else {
var statearr_26033_26074 = state_26010__$1;
(statearr_26033_26074[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26011 === (19))){
var inst_25992 = (state_26010[(2)]);
var state_26010__$1 = state_26010;
if(cljs.core.truth_(inst_25992)){
var statearr_26034_26075 = state_26010__$1;
(statearr_26034_26075[(1)] = (20));

} else {
var statearr_26035_26076 = state_26010__$1;
(statearr_26035_26076[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26011 === (11))){
var inst_25969 = (state_26010[(8)]);
var inst_25975 = (inst_25969 == null);
var state_26010__$1 = state_26010;
if(cljs.core.truth_(inst_25975)){
var statearr_26036_26077 = state_26010__$1;
(statearr_26036_26077[(1)] = (14));

} else {
var statearr_26037_26078 = state_26010__$1;
(statearr_26037_26078[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26011 === (9))){
var inst_25962 = (state_26010[(10)]);
var inst_25962__$1 = (state_26010[(2)]);
var inst_25963 = cljs.core.get.call(null,inst_25962__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25964 = cljs.core.get.call(null,inst_25962__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25965 = cljs.core.get.call(null,inst_25962__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26010__$1 = (function (){var statearr_26038 = state_26010;
(statearr_26038[(17)] = inst_25964);

(statearr_26038[(10)] = inst_25962__$1);

(statearr_26038[(16)] = inst_25963);

return statearr_26038;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26010__$1,(10),inst_25965);
} else {
if((state_val_26011 === (5))){
var inst_25954 = (state_26010[(7)]);
var inst_25957 = cljs.core.seq_QMARK_.call(null,inst_25954);
var state_26010__$1 = state_26010;
if(inst_25957){
var statearr_26039_26079 = state_26010__$1;
(statearr_26039_26079[(1)] = (7));

} else {
var statearr_26040_26080 = state_26010__$1;
(statearr_26040_26080[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26011 === (14))){
var inst_25970 = (state_26010[(15)]);
var inst_25977 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25970);
var state_26010__$1 = state_26010;
var statearr_26041_26081 = state_26010__$1;
(statearr_26041_26081[(2)] = inst_25977);

(statearr_26041_26081[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26011 === (26))){
var inst_26000 = (state_26010[(2)]);
var state_26010__$1 = state_26010;
var statearr_26042_26082 = state_26010__$1;
(statearr_26042_26082[(2)] = inst_26000);

(statearr_26042_26082[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26011 === (16))){
var inst_25980 = (state_26010[(2)]);
var inst_25981 = calc_state.call(null);
var inst_25954 = inst_25981;
var state_26010__$1 = (function (){var statearr_26043 = state_26010;
(statearr_26043[(7)] = inst_25954);

(statearr_26043[(18)] = inst_25980);

return statearr_26043;
})();
var statearr_26044_26083 = state_26010__$1;
(statearr_26044_26083[(2)] = null);

(statearr_26044_26083[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26011 === (10))){
var inst_25969 = (state_26010[(8)]);
var inst_25970 = (state_26010[(15)]);
var inst_25968 = (state_26010[(2)]);
var inst_25969__$1 = cljs.core.nth.call(null,inst_25968,(0),null);
var inst_25970__$1 = cljs.core.nth.call(null,inst_25968,(1),null);
var inst_25971 = (inst_25969__$1 == null);
var inst_25972 = cljs.core._EQ_.call(null,inst_25970__$1,change);
var inst_25973 = (inst_25971) || (inst_25972);
var state_26010__$1 = (function (){var statearr_26045 = state_26010;
(statearr_26045[(8)] = inst_25969__$1);

(statearr_26045[(15)] = inst_25970__$1);

return statearr_26045;
})();
if(cljs.core.truth_(inst_25973)){
var statearr_26046_26084 = state_26010__$1;
(statearr_26046_26084[(1)] = (11));

} else {
var statearr_26047_26085 = state_26010__$1;
(statearr_26047_26085[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26011 === (18))){
var inst_25964 = (state_26010[(17)]);
var inst_25970 = (state_26010[(15)]);
var inst_25963 = (state_26010[(16)]);
var inst_25987 = cljs.core.empty_QMARK_.call(null,inst_25963);
var inst_25988 = inst_25964.call(null,inst_25970);
var inst_25989 = cljs.core.not.call(null,inst_25988);
var inst_25990 = (inst_25987) && (inst_25989);
var state_26010__$1 = state_26010;
var statearr_26048_26086 = state_26010__$1;
(statearr_26048_26086[(2)] = inst_25990);

(statearr_26048_26086[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26011 === (8))){
var inst_25954 = (state_26010[(7)]);
var state_26010__$1 = state_26010;
var statearr_26049_26087 = state_26010__$1;
(statearr_26049_26087[(2)] = inst_25954);

(statearr_26049_26087[(1)] = (9));


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
});})(c__18684__auto___26057,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18628__auto__,c__18684__auto___26057,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18629__auto__ = null;
var cljs$core$async$mix_$_state_machine__18629__auto____0 = (function (){
var statearr_26053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26053[(0)] = cljs$core$async$mix_$_state_machine__18629__auto__);

(statearr_26053[(1)] = (1));

return statearr_26053;
});
var cljs$core$async$mix_$_state_machine__18629__auto____1 = (function (state_26010){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_26010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e26054){if((e26054 instanceof Object)){
var ex__18632__auto__ = e26054;
var statearr_26055_26088 = state_26010;
(statearr_26055_26088[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26089 = state_26010;
state_26010 = G__26089;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18629__auto__ = function(state_26010){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18629__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18629__auto____1.call(this,state_26010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18629__auto____0;
cljs$core$async$mix_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18629__auto____1;
return cljs$core$async$mix_$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto___26057,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18686__auto__ = (function (){var statearr_26056 = f__18685__auto__.call(null);
(statearr_26056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto___26057);

return statearr_26056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto___26057,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj26091 = {};
return obj26091;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__16195__auto__ = p;
if(and__16195__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__16195__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16843__auto__ = (((p == null))?null:p);
return (function (){var or__16207__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16843__auto__)]);
if(or__16207__auto__){
return or__16207__auto__;
} else {
var or__16207__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__16207__auto____$1){
return or__16207__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__16195__auto__ = p;
if(and__16195__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__16195__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16843__auto__ = (((p == null))?null:p);
return (function (){var or__16207__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16843__auto__)]);
if(or__16207__auto__){
return or__16207__auto__;
} else {
var or__16207__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__16207__auto____$1){
return or__16207__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var cljs$core$async$unsub_all_STAR_ = null;
var cljs$core$async$unsub_all_STAR___1 = (function (p){
if((function (){var and__16195__auto__ = p;
if(and__16195__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__16195__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16843__auto__ = (((p == null))?null:p);
return (function (){var or__16207__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16843__auto__)]);
if(or__16207__auto__){
return or__16207__auto__;
} else {
var or__16207__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16207__auto____$1){
return or__16207__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var cljs$core$async$unsub_all_STAR___2 = (function (p,v){
if((function (){var and__16195__auto__ = p;
if(and__16195__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__16195__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16843__auto__ = (((p == null))?null:p);
return (function (){var or__16207__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16843__auto__)]);
if(or__16207__auto__){
return or__16207__auto__;
} else {
var or__16207__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16207__auto____$1){
return or__16207__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
cljs$core$async$unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all_STAR___1.call(this,p);
case 2:
return cljs$core$async$unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all_STAR___1;
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all_STAR___2;
return cljs$core$async$unsub_all_STAR_;
})()
;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function() {
var cljs$core$async$pub = null;
var cljs$core$async$pub__2 = (function (ch,topic_fn){
return cljs$core$async$pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var cljs$core$async$pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16207__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16207__auto__)){
return or__16207__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16207__auto__,mults){
return (function (p1__26092_SHARP_){
if(cljs.core.truth_(p1__26092_SHARP_.call(null,topic))){
return p1__26092_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26092_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16207__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t26215 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26215 = (function (pub,ch,topic_fn,buf_fn,mults,ensure_mult,meta26216){
this.pub = pub;
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26216 = meta26216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26217,meta26216__$1){
var self__ = this;
var _26217__$1 = this;
return (new cljs.core.async.t26215(self__.pub,self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26216__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t26215.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26217){
var self__ = this;
var _26217__$1 = this;
return self__.meta26216;
});})(mults,ensure_mult))
;

cljs.core.async.t26215.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26215.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t26215.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t26215.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t26215.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t26215.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t26215.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t26215.cljs$lang$type = true;

cljs.core.async.t26215.cljs$lang$ctorStr = "cljs.core.async/t26215";

cljs.core.async.t26215.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16786__auto__,writer__16787__auto__,opt__16788__auto__){
return cljs.core._write.call(null,writer__16787__auto__,"cljs.core.async/t26215");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t26215 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t26215(pub__$1,ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26216){
return (new cljs.core.async.t26215(pub__$1,ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26216));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t26215(cljs$core$async$pub,ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18684__auto___26337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto___26337,mults,ensure_mult,p){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto___26337,mults,ensure_mult,p){
return (function (state_26289){
var state_val_26290 = (state_26289[(1)]);
if((state_val_26290 === (7))){
var inst_26285 = (state_26289[(2)]);
var state_26289__$1 = state_26289;
var statearr_26291_26338 = state_26289__$1;
(statearr_26291_26338[(2)] = inst_26285);

(statearr_26291_26338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (20))){
var state_26289__$1 = state_26289;
var statearr_26292_26339 = state_26289__$1;
(statearr_26292_26339[(2)] = null);

(statearr_26292_26339[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (1))){
var state_26289__$1 = state_26289;
var statearr_26293_26340 = state_26289__$1;
(statearr_26293_26340[(2)] = null);

(statearr_26293_26340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (24))){
var inst_26268 = (state_26289[(7)]);
var inst_26277 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26268);
var state_26289__$1 = state_26289;
var statearr_26294_26341 = state_26289__$1;
(statearr_26294_26341[(2)] = inst_26277);

(statearr_26294_26341[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (4))){
var inst_26220 = (state_26289[(8)]);
var inst_26220__$1 = (state_26289[(2)]);
var inst_26221 = (inst_26220__$1 == null);
var state_26289__$1 = (function (){var statearr_26295 = state_26289;
(statearr_26295[(8)] = inst_26220__$1);

return statearr_26295;
})();
if(cljs.core.truth_(inst_26221)){
var statearr_26296_26342 = state_26289__$1;
(statearr_26296_26342[(1)] = (5));

} else {
var statearr_26297_26343 = state_26289__$1;
(statearr_26297_26343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (15))){
var inst_26262 = (state_26289[(2)]);
var state_26289__$1 = state_26289;
var statearr_26298_26344 = state_26289__$1;
(statearr_26298_26344[(2)] = inst_26262);

(statearr_26298_26344[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (21))){
var inst_26282 = (state_26289[(2)]);
var state_26289__$1 = (function (){var statearr_26299 = state_26289;
(statearr_26299[(9)] = inst_26282);

return statearr_26299;
})();
var statearr_26300_26345 = state_26289__$1;
(statearr_26300_26345[(2)] = null);

(statearr_26300_26345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (13))){
var inst_26244 = (state_26289[(10)]);
var inst_26246 = cljs.core.chunked_seq_QMARK_.call(null,inst_26244);
var state_26289__$1 = state_26289;
if(inst_26246){
var statearr_26301_26346 = state_26289__$1;
(statearr_26301_26346[(1)] = (16));

} else {
var statearr_26302_26347 = state_26289__$1;
(statearr_26302_26347[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (22))){
var inst_26274 = (state_26289[(2)]);
var state_26289__$1 = state_26289;
if(cljs.core.truth_(inst_26274)){
var statearr_26303_26348 = state_26289__$1;
(statearr_26303_26348[(1)] = (23));

} else {
var statearr_26304_26349 = state_26289__$1;
(statearr_26304_26349[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (6))){
var inst_26270 = (state_26289[(11)]);
var inst_26268 = (state_26289[(7)]);
var inst_26220 = (state_26289[(8)]);
var inst_26268__$1 = topic_fn.call(null,inst_26220);
var inst_26269 = cljs.core.deref.call(null,mults);
var inst_26270__$1 = cljs.core.get.call(null,inst_26269,inst_26268__$1);
var state_26289__$1 = (function (){var statearr_26305 = state_26289;
(statearr_26305[(11)] = inst_26270__$1);

(statearr_26305[(7)] = inst_26268__$1);

return statearr_26305;
})();
if(cljs.core.truth_(inst_26270__$1)){
var statearr_26306_26350 = state_26289__$1;
(statearr_26306_26350[(1)] = (19));

} else {
var statearr_26307_26351 = state_26289__$1;
(statearr_26307_26351[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (25))){
var inst_26279 = (state_26289[(2)]);
var state_26289__$1 = state_26289;
var statearr_26308_26352 = state_26289__$1;
(statearr_26308_26352[(2)] = inst_26279);

(statearr_26308_26352[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (17))){
var inst_26244 = (state_26289[(10)]);
var inst_26253 = cljs.core.first.call(null,inst_26244);
var inst_26254 = cljs.core.async.muxch_STAR_.call(null,inst_26253);
var inst_26255 = cljs.core.async.close_BANG_.call(null,inst_26254);
var inst_26256 = cljs.core.next.call(null,inst_26244);
var inst_26230 = inst_26256;
var inst_26231 = null;
var inst_26232 = (0);
var inst_26233 = (0);
var state_26289__$1 = (function (){var statearr_26309 = state_26289;
(statearr_26309[(12)] = inst_26231);

(statearr_26309[(13)] = inst_26230);

(statearr_26309[(14)] = inst_26255);

(statearr_26309[(15)] = inst_26232);

(statearr_26309[(16)] = inst_26233);

return statearr_26309;
})();
var statearr_26310_26353 = state_26289__$1;
(statearr_26310_26353[(2)] = null);

(statearr_26310_26353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (3))){
var inst_26287 = (state_26289[(2)]);
var state_26289__$1 = state_26289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26289__$1,inst_26287);
} else {
if((state_val_26290 === (12))){
var inst_26264 = (state_26289[(2)]);
var state_26289__$1 = state_26289;
var statearr_26311_26354 = state_26289__$1;
(statearr_26311_26354[(2)] = inst_26264);

(statearr_26311_26354[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (2))){
var state_26289__$1 = state_26289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26289__$1,(4),ch);
} else {
if((state_val_26290 === (23))){
var state_26289__$1 = state_26289;
var statearr_26312_26355 = state_26289__$1;
(statearr_26312_26355[(2)] = null);

(statearr_26312_26355[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (19))){
var inst_26270 = (state_26289[(11)]);
var inst_26220 = (state_26289[(8)]);
var inst_26272 = cljs.core.async.muxch_STAR_.call(null,inst_26270);
var state_26289__$1 = state_26289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26289__$1,(22),inst_26272,inst_26220);
} else {
if((state_val_26290 === (11))){
var inst_26230 = (state_26289[(13)]);
var inst_26244 = (state_26289[(10)]);
var inst_26244__$1 = cljs.core.seq.call(null,inst_26230);
var state_26289__$1 = (function (){var statearr_26313 = state_26289;
(statearr_26313[(10)] = inst_26244__$1);

return statearr_26313;
})();
if(inst_26244__$1){
var statearr_26314_26356 = state_26289__$1;
(statearr_26314_26356[(1)] = (13));

} else {
var statearr_26315_26357 = state_26289__$1;
(statearr_26315_26357[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (9))){
var inst_26266 = (state_26289[(2)]);
var state_26289__$1 = state_26289;
var statearr_26316_26358 = state_26289__$1;
(statearr_26316_26358[(2)] = inst_26266);

(statearr_26316_26358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (5))){
var inst_26227 = cljs.core.deref.call(null,mults);
var inst_26228 = cljs.core.vals.call(null,inst_26227);
var inst_26229 = cljs.core.seq.call(null,inst_26228);
var inst_26230 = inst_26229;
var inst_26231 = null;
var inst_26232 = (0);
var inst_26233 = (0);
var state_26289__$1 = (function (){var statearr_26317 = state_26289;
(statearr_26317[(12)] = inst_26231);

(statearr_26317[(13)] = inst_26230);

(statearr_26317[(15)] = inst_26232);

(statearr_26317[(16)] = inst_26233);

return statearr_26317;
})();
var statearr_26318_26359 = state_26289__$1;
(statearr_26318_26359[(2)] = null);

(statearr_26318_26359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (14))){
var state_26289__$1 = state_26289;
var statearr_26322_26360 = state_26289__$1;
(statearr_26322_26360[(2)] = null);

(statearr_26322_26360[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (16))){
var inst_26244 = (state_26289[(10)]);
var inst_26248 = cljs.core.chunk_first.call(null,inst_26244);
var inst_26249 = cljs.core.chunk_rest.call(null,inst_26244);
var inst_26250 = cljs.core.count.call(null,inst_26248);
var inst_26230 = inst_26249;
var inst_26231 = inst_26248;
var inst_26232 = inst_26250;
var inst_26233 = (0);
var state_26289__$1 = (function (){var statearr_26323 = state_26289;
(statearr_26323[(12)] = inst_26231);

(statearr_26323[(13)] = inst_26230);

(statearr_26323[(15)] = inst_26232);

(statearr_26323[(16)] = inst_26233);

return statearr_26323;
})();
var statearr_26324_26361 = state_26289__$1;
(statearr_26324_26361[(2)] = null);

(statearr_26324_26361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (10))){
var inst_26231 = (state_26289[(12)]);
var inst_26230 = (state_26289[(13)]);
var inst_26232 = (state_26289[(15)]);
var inst_26233 = (state_26289[(16)]);
var inst_26238 = cljs.core._nth.call(null,inst_26231,inst_26233);
var inst_26239 = cljs.core.async.muxch_STAR_.call(null,inst_26238);
var inst_26240 = cljs.core.async.close_BANG_.call(null,inst_26239);
var inst_26241 = (inst_26233 + (1));
var tmp26319 = inst_26231;
var tmp26320 = inst_26230;
var tmp26321 = inst_26232;
var inst_26230__$1 = tmp26320;
var inst_26231__$1 = tmp26319;
var inst_26232__$1 = tmp26321;
var inst_26233__$1 = inst_26241;
var state_26289__$1 = (function (){var statearr_26325 = state_26289;
(statearr_26325[(12)] = inst_26231__$1);

(statearr_26325[(17)] = inst_26240);

(statearr_26325[(13)] = inst_26230__$1);

(statearr_26325[(15)] = inst_26232__$1);

(statearr_26325[(16)] = inst_26233__$1);

return statearr_26325;
})();
var statearr_26326_26362 = state_26289__$1;
(statearr_26326_26362[(2)] = null);

(statearr_26326_26362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (18))){
var inst_26259 = (state_26289[(2)]);
var state_26289__$1 = state_26289;
var statearr_26327_26363 = state_26289__$1;
(statearr_26327_26363[(2)] = inst_26259);

(statearr_26327_26363[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (8))){
var inst_26232 = (state_26289[(15)]);
var inst_26233 = (state_26289[(16)]);
var inst_26235 = (inst_26233 < inst_26232);
var inst_26236 = inst_26235;
var state_26289__$1 = state_26289;
if(cljs.core.truth_(inst_26236)){
var statearr_26328_26364 = state_26289__$1;
(statearr_26328_26364[(1)] = (10));

} else {
var statearr_26329_26365 = state_26289__$1;
(statearr_26329_26365[(1)] = (11));

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
});})(c__18684__auto___26337,mults,ensure_mult,p))
;
return ((function (switch__18628__auto__,c__18684__auto___26337,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__18629__auto__ = null;
var cljs$core$async$pub_$_state_machine__18629__auto____0 = (function (){
var statearr_26333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26333[(0)] = cljs$core$async$pub_$_state_machine__18629__auto__);

(statearr_26333[(1)] = (1));

return statearr_26333;
});
var cljs$core$async$pub_$_state_machine__18629__auto____1 = (function (state_26289){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_26289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e26334){if((e26334 instanceof Object)){
var ex__18632__auto__ = e26334;
var statearr_26335_26366 = state_26289;
(statearr_26335_26366[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26367 = state_26289;
state_26289 = G__26367;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__18629__auto__ = function(state_26289){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__18629__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__18629__auto____1.call(this,state_26289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__18629__auto____0;
cljs$core$async$pub_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__18629__auto____1;
return cljs$core$async$pub_$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto___26337,mults,ensure_mult,p))
})();
var state__18686__auto__ = (function (){var statearr_26336 = f__18685__auto__.call(null);
(statearr_26336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto___26337);

return statearr_26336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto___26337,mults,ensure_mult,p))
);


return p;
});
cljs$core$async$pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return cljs$core$async$pub__2.call(this,ch,topic_fn);
case 3:
return cljs$core$async$pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pub__2;
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pub__3;
return cljs$core$async$pub;
})()
;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function() {
var cljs$core$async$sub = null;
var cljs$core$async$sub__3 = (function (p,topic,ch){
return cljs$core$async$sub.call(null,p,topic,ch,true);
});
var cljs$core$async$sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
cljs$core$async$sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return cljs$core$async$sub__3.call(this,p,topic,ch);
case 4:
return cljs$core$async$sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$sub__3;
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$sub__4;
return cljs$core$async$sub;
})()
;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function() {
var cljs$core$async$unsub_all = null;
var cljs$core$async$unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var cljs$core$async$unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
cljs$core$async$unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all__1.call(this,p);
case 2:
return cljs$core$async$unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all__1;
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all__2;
return cljs$core$async$unsub_all;
})()
;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function() {
var cljs$core$async$map = null;
var cljs$core$async$map__2 = (function (f,chs){
return cljs$core$async$map.call(null,f,chs,null);
});
var cljs$core$async$map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18684__auto___26504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto___26504,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto___26504,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26474){
var state_val_26475 = (state_26474[(1)]);
if((state_val_26475 === (7))){
var state_26474__$1 = state_26474;
var statearr_26476_26505 = state_26474__$1;
(statearr_26476_26505[(2)] = null);

(statearr_26476_26505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (1))){
var state_26474__$1 = state_26474;
var statearr_26477_26506 = state_26474__$1;
(statearr_26477_26506[(2)] = null);

(statearr_26477_26506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (4))){
var inst_26438 = (state_26474[(7)]);
var inst_26440 = (inst_26438 < cnt);
var state_26474__$1 = state_26474;
if(cljs.core.truth_(inst_26440)){
var statearr_26478_26507 = state_26474__$1;
(statearr_26478_26507[(1)] = (6));

} else {
var statearr_26479_26508 = state_26474__$1;
(statearr_26479_26508[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (15))){
var inst_26470 = (state_26474[(2)]);
var state_26474__$1 = state_26474;
var statearr_26480_26509 = state_26474__$1;
(statearr_26480_26509[(2)] = inst_26470);

(statearr_26480_26509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (13))){
var inst_26463 = cljs.core.async.close_BANG_.call(null,out);
var state_26474__$1 = state_26474;
var statearr_26481_26510 = state_26474__$1;
(statearr_26481_26510[(2)] = inst_26463);

(statearr_26481_26510[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (6))){
var state_26474__$1 = state_26474;
var statearr_26482_26511 = state_26474__$1;
(statearr_26482_26511[(2)] = null);

(statearr_26482_26511[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (3))){
var inst_26472 = (state_26474[(2)]);
var state_26474__$1 = state_26474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26474__$1,inst_26472);
} else {
if((state_val_26475 === (12))){
var inst_26460 = (state_26474[(8)]);
var inst_26460__$1 = (state_26474[(2)]);
var inst_26461 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26460__$1);
var state_26474__$1 = (function (){var statearr_26483 = state_26474;
(statearr_26483[(8)] = inst_26460__$1);

return statearr_26483;
})();
if(cljs.core.truth_(inst_26461)){
var statearr_26484_26512 = state_26474__$1;
(statearr_26484_26512[(1)] = (13));

} else {
var statearr_26485_26513 = state_26474__$1;
(statearr_26485_26513[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (2))){
var inst_26437 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26438 = (0);
var state_26474__$1 = (function (){var statearr_26486 = state_26474;
(statearr_26486[(9)] = inst_26437);

(statearr_26486[(7)] = inst_26438);

return statearr_26486;
})();
var statearr_26487_26514 = state_26474__$1;
(statearr_26487_26514[(2)] = null);

(statearr_26487_26514[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (11))){
var inst_26438 = (state_26474[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26474,(10),Object,null,(9));
var inst_26447 = chs__$1.call(null,inst_26438);
var inst_26448 = done.call(null,inst_26438);
var inst_26449 = cljs.core.async.take_BANG_.call(null,inst_26447,inst_26448);
var state_26474__$1 = state_26474;
var statearr_26488_26515 = state_26474__$1;
(statearr_26488_26515[(2)] = inst_26449);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26474__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (9))){
var inst_26438 = (state_26474[(7)]);
var inst_26451 = (state_26474[(2)]);
var inst_26452 = (inst_26438 + (1));
var inst_26438__$1 = inst_26452;
var state_26474__$1 = (function (){var statearr_26489 = state_26474;
(statearr_26489[(7)] = inst_26438__$1);

(statearr_26489[(10)] = inst_26451);

return statearr_26489;
})();
var statearr_26490_26516 = state_26474__$1;
(statearr_26490_26516[(2)] = null);

(statearr_26490_26516[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (5))){
var inst_26458 = (state_26474[(2)]);
var state_26474__$1 = (function (){var statearr_26491 = state_26474;
(statearr_26491[(11)] = inst_26458);

return statearr_26491;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26474__$1,(12),dchan);
} else {
if((state_val_26475 === (14))){
var inst_26460 = (state_26474[(8)]);
var inst_26465 = cljs.core.apply.call(null,f,inst_26460);
var state_26474__$1 = state_26474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26474__$1,(16),out,inst_26465);
} else {
if((state_val_26475 === (16))){
var inst_26467 = (state_26474[(2)]);
var state_26474__$1 = (function (){var statearr_26492 = state_26474;
(statearr_26492[(12)] = inst_26467);

return statearr_26492;
})();
var statearr_26493_26517 = state_26474__$1;
(statearr_26493_26517[(2)] = null);

(statearr_26493_26517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (10))){
var inst_26442 = (state_26474[(2)]);
var inst_26443 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26474__$1 = (function (){var statearr_26494 = state_26474;
(statearr_26494[(13)] = inst_26442);

return statearr_26494;
})();
var statearr_26495_26518 = state_26474__$1;
(statearr_26495_26518[(2)] = inst_26443);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26474__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (8))){
var inst_26456 = (state_26474[(2)]);
var state_26474__$1 = state_26474;
var statearr_26496_26519 = state_26474__$1;
(statearr_26496_26519[(2)] = inst_26456);

(statearr_26496_26519[(1)] = (5));


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
});})(c__18684__auto___26504,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18628__auto__,c__18684__auto___26504,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__18629__auto__ = null;
var cljs$core$async$map_$_state_machine__18629__auto____0 = (function (){
var statearr_26500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26500[(0)] = cljs$core$async$map_$_state_machine__18629__auto__);

(statearr_26500[(1)] = (1));

return statearr_26500;
});
var cljs$core$async$map_$_state_machine__18629__auto____1 = (function (state_26474){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_26474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e26501){if((e26501 instanceof Object)){
var ex__18632__auto__ = e26501;
var statearr_26502_26520 = state_26474;
(statearr_26502_26520[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26521 = state_26474;
state_26474 = G__26521;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__18629__auto__ = function(state_26474){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__18629__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__18629__auto____1.call(this,state_26474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__18629__auto____0;
cljs$core$async$map_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__18629__auto____1;
return cljs$core$async$map_$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto___26504,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18686__auto__ = (function (){var statearr_26503 = f__18685__auto__.call(null);
(statearr_26503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto___26504);

return statearr_26503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto___26504,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
cljs$core$async$map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$map__2.call(this,f,chs);
case 3:
return cljs$core$async$map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$map__2;
cljs$core$async$map.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$map__3;
return cljs$core$async$map;
})()
;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function() {
var cljs$core$async$merge = null;
var cljs$core$async$merge__1 = (function (chs){
return cljs$core$async$merge.call(null,chs,null);
});
var cljs$core$async$merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18684__auto___26629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto___26629,out){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto___26629,out){
return (function (state_26605){
var state_val_26606 = (state_26605[(1)]);
if((state_val_26606 === (7))){
var inst_26585 = (state_26605[(7)]);
var inst_26584 = (state_26605[(8)]);
var inst_26584__$1 = (state_26605[(2)]);
var inst_26585__$1 = cljs.core.nth.call(null,inst_26584__$1,(0),null);
var inst_26586 = cljs.core.nth.call(null,inst_26584__$1,(1),null);
var inst_26587 = (inst_26585__$1 == null);
var state_26605__$1 = (function (){var statearr_26607 = state_26605;
(statearr_26607[(9)] = inst_26586);

(statearr_26607[(7)] = inst_26585__$1);

(statearr_26607[(8)] = inst_26584__$1);

return statearr_26607;
})();
if(cljs.core.truth_(inst_26587)){
var statearr_26608_26630 = state_26605__$1;
(statearr_26608_26630[(1)] = (8));

} else {
var statearr_26609_26631 = state_26605__$1;
(statearr_26609_26631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (1))){
var inst_26576 = cljs.core.vec.call(null,chs);
var inst_26577 = inst_26576;
var state_26605__$1 = (function (){var statearr_26610 = state_26605;
(statearr_26610[(10)] = inst_26577);

return statearr_26610;
})();
var statearr_26611_26632 = state_26605__$1;
(statearr_26611_26632[(2)] = null);

(statearr_26611_26632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (4))){
var inst_26577 = (state_26605[(10)]);
var state_26605__$1 = state_26605;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26605__$1,(7),inst_26577);
} else {
if((state_val_26606 === (6))){
var inst_26601 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
var statearr_26612_26633 = state_26605__$1;
(statearr_26612_26633[(2)] = inst_26601);

(statearr_26612_26633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (3))){
var inst_26603 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26605__$1,inst_26603);
} else {
if((state_val_26606 === (2))){
var inst_26577 = (state_26605[(10)]);
var inst_26579 = cljs.core.count.call(null,inst_26577);
var inst_26580 = (inst_26579 > (0));
var state_26605__$1 = state_26605;
if(cljs.core.truth_(inst_26580)){
var statearr_26614_26634 = state_26605__$1;
(statearr_26614_26634[(1)] = (4));

} else {
var statearr_26615_26635 = state_26605__$1;
(statearr_26615_26635[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (11))){
var inst_26577 = (state_26605[(10)]);
var inst_26594 = (state_26605[(2)]);
var tmp26613 = inst_26577;
var inst_26577__$1 = tmp26613;
var state_26605__$1 = (function (){var statearr_26616 = state_26605;
(statearr_26616[(10)] = inst_26577__$1);

(statearr_26616[(11)] = inst_26594);

return statearr_26616;
})();
var statearr_26617_26636 = state_26605__$1;
(statearr_26617_26636[(2)] = null);

(statearr_26617_26636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (9))){
var inst_26585 = (state_26605[(7)]);
var state_26605__$1 = state_26605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26605__$1,(11),out,inst_26585);
} else {
if((state_val_26606 === (5))){
var inst_26599 = cljs.core.async.close_BANG_.call(null,out);
var state_26605__$1 = state_26605;
var statearr_26618_26637 = state_26605__$1;
(statearr_26618_26637[(2)] = inst_26599);

(statearr_26618_26637[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (10))){
var inst_26597 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
var statearr_26619_26638 = state_26605__$1;
(statearr_26619_26638[(2)] = inst_26597);

(statearr_26619_26638[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (8))){
var inst_26586 = (state_26605[(9)]);
var inst_26577 = (state_26605[(10)]);
var inst_26585 = (state_26605[(7)]);
var inst_26584 = (state_26605[(8)]);
var inst_26589 = (function (){var cs = inst_26577;
var vec__26582 = inst_26584;
var v = inst_26585;
var c = inst_26586;
return ((function (cs,vec__26582,v,c,inst_26586,inst_26577,inst_26585,inst_26584,state_val_26606,c__18684__auto___26629,out){
return (function (p1__26522_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26522_SHARP_);
});
;})(cs,vec__26582,v,c,inst_26586,inst_26577,inst_26585,inst_26584,state_val_26606,c__18684__auto___26629,out))
})();
var inst_26590 = cljs.core.filterv.call(null,inst_26589,inst_26577);
var inst_26577__$1 = inst_26590;
var state_26605__$1 = (function (){var statearr_26620 = state_26605;
(statearr_26620[(10)] = inst_26577__$1);

return statearr_26620;
})();
var statearr_26621_26639 = state_26605__$1;
(statearr_26621_26639[(2)] = null);

(statearr_26621_26639[(1)] = (2));


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
});})(c__18684__auto___26629,out))
;
return ((function (switch__18628__auto__,c__18684__auto___26629,out){
return (function() {
var cljs$core$async$merge_$_state_machine__18629__auto__ = null;
var cljs$core$async$merge_$_state_machine__18629__auto____0 = (function (){
var statearr_26625 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26625[(0)] = cljs$core$async$merge_$_state_machine__18629__auto__);

(statearr_26625[(1)] = (1));

return statearr_26625;
});
var cljs$core$async$merge_$_state_machine__18629__auto____1 = (function (state_26605){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_26605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e26626){if((e26626 instanceof Object)){
var ex__18632__auto__ = e26626;
var statearr_26627_26640 = state_26605;
(statearr_26627_26640[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26641 = state_26605;
state_26605 = G__26641;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__18629__auto__ = function(state_26605){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__18629__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__18629__auto____1.call(this,state_26605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__18629__auto____0;
cljs$core$async$merge_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__18629__auto____1;
return cljs$core$async$merge_$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto___26629,out))
})();
var state__18686__auto__ = (function (){var statearr_26628 = f__18685__auto__.call(null);
(statearr_26628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto___26629);

return statearr_26628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto___26629,out))
);


return out;
});
cljs$core$async$merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$merge__1.call(this,chs);
case 2:
return cljs$core$async$merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge__1;
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$merge__2;
return cljs$core$async$merge;
})()
;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function() {
var cljs$core$async$take = null;
var cljs$core$async$take__2 = (function (n,ch){
return cljs$core$async$take.call(null,n,ch,null);
});
var cljs$core$async$take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18684__auto___26734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto___26734,out){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto___26734,out){
return (function (state_26711){
var state_val_26712 = (state_26711[(1)]);
if((state_val_26712 === (7))){
var inst_26693 = (state_26711[(7)]);
var inst_26693__$1 = (state_26711[(2)]);
var inst_26694 = (inst_26693__$1 == null);
var inst_26695 = cljs.core.not.call(null,inst_26694);
var state_26711__$1 = (function (){var statearr_26713 = state_26711;
(statearr_26713[(7)] = inst_26693__$1);

return statearr_26713;
})();
if(inst_26695){
var statearr_26714_26735 = state_26711__$1;
(statearr_26714_26735[(1)] = (8));

} else {
var statearr_26715_26736 = state_26711__$1;
(statearr_26715_26736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (1))){
var inst_26688 = (0);
var state_26711__$1 = (function (){var statearr_26716 = state_26711;
(statearr_26716[(8)] = inst_26688);

return statearr_26716;
})();
var statearr_26717_26737 = state_26711__$1;
(statearr_26717_26737[(2)] = null);

(statearr_26717_26737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (4))){
var state_26711__$1 = state_26711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26711__$1,(7),ch);
} else {
if((state_val_26712 === (6))){
var inst_26706 = (state_26711[(2)]);
var state_26711__$1 = state_26711;
var statearr_26718_26738 = state_26711__$1;
(statearr_26718_26738[(2)] = inst_26706);

(statearr_26718_26738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (3))){
var inst_26708 = (state_26711[(2)]);
var inst_26709 = cljs.core.async.close_BANG_.call(null,out);
var state_26711__$1 = (function (){var statearr_26719 = state_26711;
(statearr_26719[(9)] = inst_26708);

return statearr_26719;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26711__$1,inst_26709);
} else {
if((state_val_26712 === (2))){
var inst_26688 = (state_26711[(8)]);
var inst_26690 = (inst_26688 < n);
var state_26711__$1 = state_26711;
if(cljs.core.truth_(inst_26690)){
var statearr_26720_26739 = state_26711__$1;
(statearr_26720_26739[(1)] = (4));

} else {
var statearr_26721_26740 = state_26711__$1;
(statearr_26721_26740[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (11))){
var inst_26688 = (state_26711[(8)]);
var inst_26698 = (state_26711[(2)]);
var inst_26699 = (inst_26688 + (1));
var inst_26688__$1 = inst_26699;
var state_26711__$1 = (function (){var statearr_26722 = state_26711;
(statearr_26722[(10)] = inst_26698);

(statearr_26722[(8)] = inst_26688__$1);

return statearr_26722;
})();
var statearr_26723_26741 = state_26711__$1;
(statearr_26723_26741[(2)] = null);

(statearr_26723_26741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (9))){
var state_26711__$1 = state_26711;
var statearr_26724_26742 = state_26711__$1;
(statearr_26724_26742[(2)] = null);

(statearr_26724_26742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (5))){
var state_26711__$1 = state_26711;
var statearr_26725_26743 = state_26711__$1;
(statearr_26725_26743[(2)] = null);

(statearr_26725_26743[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (10))){
var inst_26703 = (state_26711[(2)]);
var state_26711__$1 = state_26711;
var statearr_26726_26744 = state_26711__$1;
(statearr_26726_26744[(2)] = inst_26703);

(statearr_26726_26744[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (8))){
var inst_26693 = (state_26711[(7)]);
var state_26711__$1 = state_26711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26711__$1,(11),out,inst_26693);
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
});})(c__18684__auto___26734,out))
;
return ((function (switch__18628__auto__,c__18684__auto___26734,out){
return (function() {
var cljs$core$async$take_$_state_machine__18629__auto__ = null;
var cljs$core$async$take_$_state_machine__18629__auto____0 = (function (){
var statearr_26730 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26730[(0)] = cljs$core$async$take_$_state_machine__18629__auto__);

(statearr_26730[(1)] = (1));

return statearr_26730;
});
var cljs$core$async$take_$_state_machine__18629__auto____1 = (function (state_26711){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_26711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e26731){if((e26731 instanceof Object)){
var ex__18632__auto__ = e26731;
var statearr_26732_26745 = state_26711;
(statearr_26732_26745[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26746 = state_26711;
state_26711 = G__26746;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__18629__auto__ = function(state_26711){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__18629__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__18629__auto____1.call(this,state_26711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__18629__auto____0;
cljs$core$async$take_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__18629__auto____1;
return cljs$core$async$take_$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto___26734,out))
})();
var state__18686__auto__ = (function (){var statearr_26733 = f__18685__auto__.call(null);
(statearr_26733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto___26734);

return statearr_26733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto___26734,out))
);


return out;
});
cljs$core$async$take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$take__2.call(this,n,ch);
case 3:
return cljs$core$async$take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take__2;
cljs$core$async$take.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take__3;
return cljs$core$async$take;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t26754 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26754 = (function (map_LT_,f,ch,meta26755){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26755 = meta26755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26756,meta26755__$1){
var self__ = this;
var _26756__$1 = this;
return (new cljs.core.async.t26754(self__.map_LT_,self__.f,self__.ch,meta26755__$1));
});

cljs.core.async.t26754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26756){
var self__ = this;
var _26756__$1 = this;
return self__.meta26755;
});

cljs.core.async.t26754.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26754.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26754.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t26754.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26754.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t26757 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26757 = (function (map_LT_,f,ch,meta26755,_,fn1,meta26758){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26755 = meta26755;
this._ = _;
this.fn1 = fn1;
this.meta26758 = meta26758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26759,meta26758__$1){
var self__ = this;
var _26759__$1 = this;
return (new cljs.core.async.t26757(self__.map_LT_,self__.f,self__.ch,self__.meta26755,self__._,self__.fn1,meta26758__$1));
});})(___$1))
;

cljs.core.async.t26757.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26759){
var self__ = this;
var _26759__$1 = this;
return self__.meta26758;
});})(___$1))
;

cljs.core.async.t26757.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26757.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t26757.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26747_SHARP_){
return f1.call(null,(((p1__26747_SHARP_ == null))?null:self__.f.call(null,p1__26747_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t26757.cljs$lang$type = true;

cljs.core.async.t26757.cljs$lang$ctorStr = "cljs.core.async/t26757";

cljs.core.async.t26757.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16786__auto__,writer__16787__auto__,opt__16788__auto__){
return cljs.core._write.call(null,writer__16787__auto__,"cljs.core.async/t26757");
});})(___$1))
;

cljs.core.async.__GT_t26757 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t26757(map_LT___$1,f__$1,ch__$1,meta26755__$1,___$2,fn1__$1,meta26758){
return (new cljs.core.async.t26757(map_LT___$1,f__$1,ch__$1,meta26755__$1,___$2,fn1__$1,meta26758));
});})(___$1))
;

}

return (new cljs.core.async.t26757(self__.map_LT_,self__.f,self__.ch,self__.meta26755,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16195__auto__ = ret;
if(cljs.core.truth_(and__16195__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16195__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t26754.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26754.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t26754.cljs$lang$type = true;

cljs.core.async.t26754.cljs$lang$ctorStr = "cljs.core.async/t26754";

cljs.core.async.t26754.cljs$lang$ctorPrWriter = (function (this__16786__auto__,writer__16787__auto__,opt__16788__auto__){
return cljs.core._write.call(null,writer__16787__auto__,"cljs.core.async/t26754");
});

cljs.core.async.__GT_t26754 = (function cljs$core$async$map_LT__$___GT_t26754(map_LT___$1,f__$1,ch__$1,meta26755){
return (new cljs.core.async.t26754(map_LT___$1,f__$1,ch__$1,meta26755));
});

}

return (new cljs.core.async.t26754(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t26763 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26763 = (function (map_GT_,f,ch,meta26764){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26764 = meta26764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26765,meta26764__$1){
var self__ = this;
var _26765__$1 = this;
return (new cljs.core.async.t26763(self__.map_GT_,self__.f,self__.ch,meta26764__$1));
});

cljs.core.async.t26763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26765){
var self__ = this;
var _26765__$1 = this;
return self__.meta26764;
});

cljs.core.async.t26763.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26763.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26763.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26763.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t26763.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26763.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t26763.cljs$lang$type = true;

cljs.core.async.t26763.cljs$lang$ctorStr = "cljs.core.async/t26763";

cljs.core.async.t26763.cljs$lang$ctorPrWriter = (function (this__16786__auto__,writer__16787__auto__,opt__16788__auto__){
return cljs.core._write.call(null,writer__16787__auto__,"cljs.core.async/t26763");
});

cljs.core.async.__GT_t26763 = (function cljs$core$async$map_GT__$___GT_t26763(map_GT___$1,f__$1,ch__$1,meta26764){
return (new cljs.core.async.t26763(map_GT___$1,f__$1,ch__$1,meta26764));
});

}

return (new cljs.core.async.t26763(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t26769 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26769 = (function (filter_GT_,p,ch,meta26770){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26770 = meta26770;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26771,meta26770__$1){
var self__ = this;
var _26771__$1 = this;
return (new cljs.core.async.t26769(self__.filter_GT_,self__.p,self__.ch,meta26770__$1));
});

cljs.core.async.t26769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26771){
var self__ = this;
var _26771__$1 = this;
return self__.meta26770;
});

cljs.core.async.t26769.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26769.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26769.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t26769.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26769.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t26769.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26769.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t26769.cljs$lang$type = true;

cljs.core.async.t26769.cljs$lang$ctorStr = "cljs.core.async/t26769";

cljs.core.async.t26769.cljs$lang$ctorPrWriter = (function (this__16786__auto__,writer__16787__auto__,opt__16788__auto__){
return cljs.core._write.call(null,writer__16787__auto__,"cljs.core.async/t26769");
});

cljs.core.async.__GT_t26769 = (function cljs$core$async$filter_GT__$___GT_t26769(filter_GT___$1,p__$1,ch__$1,meta26770){
return (new cljs.core.async.t26769(filter_GT___$1,p__$1,ch__$1,meta26770));
});

}

return (new cljs.core.async.t26769(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function() {
var cljs$core$async$filter_LT_ = null;
var cljs$core$async$filter_LT___2 = (function (p,ch){
return cljs$core$async$filter_LT_.call(null,p,ch,null);
});
var cljs$core$async$filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18684__auto___26854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto___26854,out){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto___26854,out){
return (function (state_26833){
var state_val_26834 = (state_26833[(1)]);
if((state_val_26834 === (7))){
var inst_26829 = (state_26833[(2)]);
var state_26833__$1 = state_26833;
var statearr_26835_26855 = state_26833__$1;
(statearr_26835_26855[(2)] = inst_26829);

(statearr_26835_26855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (1))){
var state_26833__$1 = state_26833;
var statearr_26836_26856 = state_26833__$1;
(statearr_26836_26856[(2)] = null);

(statearr_26836_26856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (4))){
var inst_26815 = (state_26833[(7)]);
var inst_26815__$1 = (state_26833[(2)]);
var inst_26816 = (inst_26815__$1 == null);
var state_26833__$1 = (function (){var statearr_26837 = state_26833;
(statearr_26837[(7)] = inst_26815__$1);

return statearr_26837;
})();
if(cljs.core.truth_(inst_26816)){
var statearr_26838_26857 = state_26833__$1;
(statearr_26838_26857[(1)] = (5));

} else {
var statearr_26839_26858 = state_26833__$1;
(statearr_26839_26858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (6))){
var inst_26815 = (state_26833[(7)]);
var inst_26820 = p.call(null,inst_26815);
var state_26833__$1 = state_26833;
if(cljs.core.truth_(inst_26820)){
var statearr_26840_26859 = state_26833__$1;
(statearr_26840_26859[(1)] = (8));

} else {
var statearr_26841_26860 = state_26833__$1;
(statearr_26841_26860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (3))){
var inst_26831 = (state_26833[(2)]);
var state_26833__$1 = state_26833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26833__$1,inst_26831);
} else {
if((state_val_26834 === (2))){
var state_26833__$1 = state_26833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26833__$1,(4),ch);
} else {
if((state_val_26834 === (11))){
var inst_26823 = (state_26833[(2)]);
var state_26833__$1 = state_26833;
var statearr_26842_26861 = state_26833__$1;
(statearr_26842_26861[(2)] = inst_26823);

(statearr_26842_26861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (9))){
var state_26833__$1 = state_26833;
var statearr_26843_26862 = state_26833__$1;
(statearr_26843_26862[(2)] = null);

(statearr_26843_26862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (5))){
var inst_26818 = cljs.core.async.close_BANG_.call(null,out);
var state_26833__$1 = state_26833;
var statearr_26844_26863 = state_26833__$1;
(statearr_26844_26863[(2)] = inst_26818);

(statearr_26844_26863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (10))){
var inst_26826 = (state_26833[(2)]);
var state_26833__$1 = (function (){var statearr_26845 = state_26833;
(statearr_26845[(8)] = inst_26826);

return statearr_26845;
})();
var statearr_26846_26864 = state_26833__$1;
(statearr_26846_26864[(2)] = null);

(statearr_26846_26864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (8))){
var inst_26815 = (state_26833[(7)]);
var state_26833__$1 = state_26833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26833__$1,(11),out,inst_26815);
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
});})(c__18684__auto___26854,out))
;
return ((function (switch__18628__auto__,c__18684__auto___26854,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__18629__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__18629__auto____0 = (function (){
var statearr_26850 = [null,null,null,null,null,null,null,null,null];
(statearr_26850[(0)] = cljs$core$async$filter_LT__$_state_machine__18629__auto__);

(statearr_26850[(1)] = (1));

return statearr_26850;
});
var cljs$core$async$filter_LT__$_state_machine__18629__auto____1 = (function (state_26833){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_26833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e26851){if((e26851 instanceof Object)){
var ex__18632__auto__ = e26851;
var statearr_26852_26865 = state_26833;
(statearr_26852_26865[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26866 = state_26833;
state_26833 = G__26866;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__18629__auto__ = function(state_26833){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__18629__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__18629__auto____1.call(this,state_26833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__18629__auto____0;
cljs$core$async$filter_LT__$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__18629__auto____1;
return cljs$core$async$filter_LT__$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto___26854,out))
})();
var state__18686__auto__ = (function (){var statearr_26853 = f__18685__auto__.call(null);
(statearr_26853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto___26854);

return statearr_26853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto___26854,out))
);


return out;
});
cljs$core$async$filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$filter_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$filter_LT___2;
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$filter_LT___3;
return cljs$core$async$filter_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function() {
var cljs$core$async$remove_LT_ = null;
var cljs$core$async$remove_LT___2 = (function (p,ch){
return cljs$core$async$remove_LT_.call(null,p,ch,null);
});
var cljs$core$async$remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
cljs$core$async$remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$remove_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$remove_LT___2;
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$remove_LT___3;
return cljs$core$async$remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto__){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto__){
return (function (state_27032){
var state_val_27033 = (state_27032[(1)]);
if((state_val_27033 === (7))){
var inst_27028 = (state_27032[(2)]);
var state_27032__$1 = state_27032;
var statearr_27034_27075 = state_27032__$1;
(statearr_27034_27075[(2)] = inst_27028);

(statearr_27034_27075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (20))){
var inst_26998 = (state_27032[(7)]);
var inst_27009 = (state_27032[(2)]);
var inst_27010 = cljs.core.next.call(null,inst_26998);
var inst_26984 = inst_27010;
var inst_26985 = null;
var inst_26986 = (0);
var inst_26987 = (0);
var state_27032__$1 = (function (){var statearr_27035 = state_27032;
(statearr_27035[(8)] = inst_26984);

(statearr_27035[(9)] = inst_26987);

(statearr_27035[(10)] = inst_27009);

(statearr_27035[(11)] = inst_26985);

(statearr_27035[(12)] = inst_26986);

return statearr_27035;
})();
var statearr_27036_27076 = state_27032__$1;
(statearr_27036_27076[(2)] = null);

(statearr_27036_27076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (1))){
var state_27032__$1 = state_27032;
var statearr_27037_27077 = state_27032__$1;
(statearr_27037_27077[(2)] = null);

(statearr_27037_27077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (4))){
var inst_26973 = (state_27032[(13)]);
var inst_26973__$1 = (state_27032[(2)]);
var inst_26974 = (inst_26973__$1 == null);
var state_27032__$1 = (function (){var statearr_27038 = state_27032;
(statearr_27038[(13)] = inst_26973__$1);

return statearr_27038;
})();
if(cljs.core.truth_(inst_26974)){
var statearr_27039_27078 = state_27032__$1;
(statearr_27039_27078[(1)] = (5));

} else {
var statearr_27040_27079 = state_27032__$1;
(statearr_27040_27079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (15))){
var state_27032__$1 = state_27032;
var statearr_27044_27080 = state_27032__$1;
(statearr_27044_27080[(2)] = null);

(statearr_27044_27080[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (21))){
var state_27032__$1 = state_27032;
var statearr_27045_27081 = state_27032__$1;
(statearr_27045_27081[(2)] = null);

(statearr_27045_27081[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (13))){
var inst_26984 = (state_27032[(8)]);
var inst_26987 = (state_27032[(9)]);
var inst_26985 = (state_27032[(11)]);
var inst_26986 = (state_27032[(12)]);
var inst_26994 = (state_27032[(2)]);
var inst_26995 = (inst_26987 + (1));
var tmp27041 = inst_26984;
var tmp27042 = inst_26985;
var tmp27043 = inst_26986;
var inst_26984__$1 = tmp27041;
var inst_26985__$1 = tmp27042;
var inst_26986__$1 = tmp27043;
var inst_26987__$1 = inst_26995;
var state_27032__$1 = (function (){var statearr_27046 = state_27032;
(statearr_27046[(8)] = inst_26984__$1);

(statearr_27046[(9)] = inst_26987__$1);

(statearr_27046[(14)] = inst_26994);

(statearr_27046[(11)] = inst_26985__$1);

(statearr_27046[(12)] = inst_26986__$1);

return statearr_27046;
})();
var statearr_27047_27082 = state_27032__$1;
(statearr_27047_27082[(2)] = null);

(statearr_27047_27082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (22))){
var state_27032__$1 = state_27032;
var statearr_27048_27083 = state_27032__$1;
(statearr_27048_27083[(2)] = null);

(statearr_27048_27083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (6))){
var inst_26973 = (state_27032[(13)]);
var inst_26982 = f.call(null,inst_26973);
var inst_26983 = cljs.core.seq.call(null,inst_26982);
var inst_26984 = inst_26983;
var inst_26985 = null;
var inst_26986 = (0);
var inst_26987 = (0);
var state_27032__$1 = (function (){var statearr_27049 = state_27032;
(statearr_27049[(8)] = inst_26984);

(statearr_27049[(9)] = inst_26987);

(statearr_27049[(11)] = inst_26985);

(statearr_27049[(12)] = inst_26986);

return statearr_27049;
})();
var statearr_27050_27084 = state_27032__$1;
(statearr_27050_27084[(2)] = null);

(statearr_27050_27084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (17))){
var inst_26998 = (state_27032[(7)]);
var inst_27002 = cljs.core.chunk_first.call(null,inst_26998);
var inst_27003 = cljs.core.chunk_rest.call(null,inst_26998);
var inst_27004 = cljs.core.count.call(null,inst_27002);
var inst_26984 = inst_27003;
var inst_26985 = inst_27002;
var inst_26986 = inst_27004;
var inst_26987 = (0);
var state_27032__$1 = (function (){var statearr_27051 = state_27032;
(statearr_27051[(8)] = inst_26984);

(statearr_27051[(9)] = inst_26987);

(statearr_27051[(11)] = inst_26985);

(statearr_27051[(12)] = inst_26986);

return statearr_27051;
})();
var statearr_27052_27085 = state_27032__$1;
(statearr_27052_27085[(2)] = null);

(statearr_27052_27085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (3))){
var inst_27030 = (state_27032[(2)]);
var state_27032__$1 = state_27032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27032__$1,inst_27030);
} else {
if((state_val_27033 === (12))){
var inst_27018 = (state_27032[(2)]);
var state_27032__$1 = state_27032;
var statearr_27053_27086 = state_27032__$1;
(statearr_27053_27086[(2)] = inst_27018);

(statearr_27053_27086[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (2))){
var state_27032__$1 = state_27032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27032__$1,(4),in$);
} else {
if((state_val_27033 === (23))){
var inst_27026 = (state_27032[(2)]);
var state_27032__$1 = state_27032;
var statearr_27054_27087 = state_27032__$1;
(statearr_27054_27087[(2)] = inst_27026);

(statearr_27054_27087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (19))){
var inst_27013 = (state_27032[(2)]);
var state_27032__$1 = state_27032;
var statearr_27055_27088 = state_27032__$1;
(statearr_27055_27088[(2)] = inst_27013);

(statearr_27055_27088[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (11))){
var inst_26998 = (state_27032[(7)]);
var inst_26984 = (state_27032[(8)]);
var inst_26998__$1 = cljs.core.seq.call(null,inst_26984);
var state_27032__$1 = (function (){var statearr_27056 = state_27032;
(statearr_27056[(7)] = inst_26998__$1);

return statearr_27056;
})();
if(inst_26998__$1){
var statearr_27057_27089 = state_27032__$1;
(statearr_27057_27089[(1)] = (14));

} else {
var statearr_27058_27090 = state_27032__$1;
(statearr_27058_27090[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (9))){
var inst_27020 = (state_27032[(2)]);
var inst_27021 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27032__$1 = (function (){var statearr_27059 = state_27032;
(statearr_27059[(15)] = inst_27020);

return statearr_27059;
})();
if(cljs.core.truth_(inst_27021)){
var statearr_27060_27091 = state_27032__$1;
(statearr_27060_27091[(1)] = (21));

} else {
var statearr_27061_27092 = state_27032__$1;
(statearr_27061_27092[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (5))){
var inst_26976 = cljs.core.async.close_BANG_.call(null,out);
var state_27032__$1 = state_27032;
var statearr_27062_27093 = state_27032__$1;
(statearr_27062_27093[(2)] = inst_26976);

(statearr_27062_27093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (14))){
var inst_26998 = (state_27032[(7)]);
var inst_27000 = cljs.core.chunked_seq_QMARK_.call(null,inst_26998);
var state_27032__$1 = state_27032;
if(inst_27000){
var statearr_27063_27094 = state_27032__$1;
(statearr_27063_27094[(1)] = (17));

} else {
var statearr_27064_27095 = state_27032__$1;
(statearr_27064_27095[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (16))){
var inst_27016 = (state_27032[(2)]);
var state_27032__$1 = state_27032;
var statearr_27065_27096 = state_27032__$1;
(statearr_27065_27096[(2)] = inst_27016);

(statearr_27065_27096[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (10))){
var inst_26987 = (state_27032[(9)]);
var inst_26985 = (state_27032[(11)]);
var inst_26992 = cljs.core._nth.call(null,inst_26985,inst_26987);
var state_27032__$1 = state_27032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27032__$1,(13),out,inst_26992);
} else {
if((state_val_27033 === (18))){
var inst_26998 = (state_27032[(7)]);
var inst_27007 = cljs.core.first.call(null,inst_26998);
var state_27032__$1 = state_27032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27032__$1,(20),out,inst_27007);
} else {
if((state_val_27033 === (8))){
var inst_26987 = (state_27032[(9)]);
var inst_26986 = (state_27032[(12)]);
var inst_26989 = (inst_26987 < inst_26986);
var inst_26990 = inst_26989;
var state_27032__$1 = state_27032;
if(cljs.core.truth_(inst_26990)){
var statearr_27066_27097 = state_27032__$1;
(statearr_27066_27097[(1)] = (10));

} else {
var statearr_27067_27098 = state_27032__$1;
(statearr_27067_27098[(1)] = (11));

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
});})(c__18684__auto__))
;
return ((function (switch__18628__auto__,c__18684__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18629__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18629__auto____0 = (function (){
var statearr_27071 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27071[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18629__auto__);

(statearr_27071[(1)] = (1));

return statearr_27071;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18629__auto____1 = (function (state_27032){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_27032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e27072){if((e27072 instanceof Object)){
var ex__18632__auto__ = e27072;
var statearr_27073_27099 = state_27032;
(statearr_27073_27099[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27100 = state_27032;
state_27032 = G__27100;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18629__auto__ = function(state_27032){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18629__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18629__auto____1.call(this,state_27032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18629__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18629__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto__))
})();
var state__18686__auto__ = (function (){var statearr_27074 = f__18685__auto__.call(null);
(statearr_27074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto__);

return statearr_27074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto__))
);

return c__18684__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function() {
var cljs$core$async$mapcat_LT_ = null;
var cljs$core$async$mapcat_LT___2 = (function (f,in$){
return cljs$core$async$mapcat_LT_.call(null,f,in$,null);
});
var cljs$core$async$mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
cljs$core$async$mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_LT___2.call(this,f,in$);
case 3:
return cljs$core$async$mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_LT___2;
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_LT___3;
return cljs$core$async$mapcat_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function() {
var cljs$core$async$mapcat_GT_ = null;
var cljs$core$async$mapcat_GT___2 = (function (f,out){
return cljs$core$async$mapcat_GT_.call(null,f,out,null);
});
var cljs$core$async$mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
cljs$core$async$mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_GT___2.call(this,f,out);
case 3:
return cljs$core$async$mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_GT___2;
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_GT___3;
return cljs$core$async$mapcat_GT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function() {
var cljs$core$async$unique = null;
var cljs$core$async$unique__1 = (function (ch){
return cljs$core$async$unique.call(null,ch,null);
});
var cljs$core$async$unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18684__auto___27197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto___27197,out){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto___27197,out){
return (function (state_27172){
var state_val_27173 = (state_27172[(1)]);
if((state_val_27173 === (7))){
var inst_27167 = (state_27172[(2)]);
var state_27172__$1 = state_27172;
var statearr_27174_27198 = state_27172__$1;
(statearr_27174_27198[(2)] = inst_27167);

(statearr_27174_27198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27173 === (1))){
var inst_27149 = null;
var state_27172__$1 = (function (){var statearr_27175 = state_27172;
(statearr_27175[(7)] = inst_27149);

return statearr_27175;
})();
var statearr_27176_27199 = state_27172__$1;
(statearr_27176_27199[(2)] = null);

(statearr_27176_27199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27173 === (4))){
var inst_27152 = (state_27172[(8)]);
var inst_27152__$1 = (state_27172[(2)]);
var inst_27153 = (inst_27152__$1 == null);
var inst_27154 = cljs.core.not.call(null,inst_27153);
var state_27172__$1 = (function (){var statearr_27177 = state_27172;
(statearr_27177[(8)] = inst_27152__$1);

return statearr_27177;
})();
if(inst_27154){
var statearr_27178_27200 = state_27172__$1;
(statearr_27178_27200[(1)] = (5));

} else {
var statearr_27179_27201 = state_27172__$1;
(statearr_27179_27201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27173 === (6))){
var state_27172__$1 = state_27172;
var statearr_27180_27202 = state_27172__$1;
(statearr_27180_27202[(2)] = null);

(statearr_27180_27202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27173 === (3))){
var inst_27169 = (state_27172[(2)]);
var inst_27170 = cljs.core.async.close_BANG_.call(null,out);
var state_27172__$1 = (function (){var statearr_27181 = state_27172;
(statearr_27181[(9)] = inst_27169);

return statearr_27181;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27172__$1,inst_27170);
} else {
if((state_val_27173 === (2))){
var state_27172__$1 = state_27172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27172__$1,(4),ch);
} else {
if((state_val_27173 === (11))){
var inst_27152 = (state_27172[(8)]);
var inst_27161 = (state_27172[(2)]);
var inst_27149 = inst_27152;
var state_27172__$1 = (function (){var statearr_27182 = state_27172;
(statearr_27182[(7)] = inst_27149);

(statearr_27182[(10)] = inst_27161);

return statearr_27182;
})();
var statearr_27183_27203 = state_27172__$1;
(statearr_27183_27203[(2)] = null);

(statearr_27183_27203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27173 === (9))){
var inst_27152 = (state_27172[(8)]);
var state_27172__$1 = state_27172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27172__$1,(11),out,inst_27152);
} else {
if((state_val_27173 === (5))){
var inst_27149 = (state_27172[(7)]);
var inst_27152 = (state_27172[(8)]);
var inst_27156 = cljs.core._EQ_.call(null,inst_27152,inst_27149);
var state_27172__$1 = state_27172;
if(inst_27156){
var statearr_27185_27204 = state_27172__$1;
(statearr_27185_27204[(1)] = (8));

} else {
var statearr_27186_27205 = state_27172__$1;
(statearr_27186_27205[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27173 === (10))){
var inst_27164 = (state_27172[(2)]);
var state_27172__$1 = state_27172;
var statearr_27187_27206 = state_27172__$1;
(statearr_27187_27206[(2)] = inst_27164);

(statearr_27187_27206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27173 === (8))){
var inst_27149 = (state_27172[(7)]);
var tmp27184 = inst_27149;
var inst_27149__$1 = tmp27184;
var state_27172__$1 = (function (){var statearr_27188 = state_27172;
(statearr_27188[(7)] = inst_27149__$1);

return statearr_27188;
})();
var statearr_27189_27207 = state_27172__$1;
(statearr_27189_27207[(2)] = null);

(statearr_27189_27207[(1)] = (2));


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
});})(c__18684__auto___27197,out))
;
return ((function (switch__18628__auto__,c__18684__auto___27197,out){
return (function() {
var cljs$core$async$unique_$_state_machine__18629__auto__ = null;
var cljs$core$async$unique_$_state_machine__18629__auto____0 = (function (){
var statearr_27193 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27193[(0)] = cljs$core$async$unique_$_state_machine__18629__auto__);

(statearr_27193[(1)] = (1));

return statearr_27193;
});
var cljs$core$async$unique_$_state_machine__18629__auto____1 = (function (state_27172){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_27172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e27194){if((e27194 instanceof Object)){
var ex__18632__auto__ = e27194;
var statearr_27195_27208 = state_27172;
(statearr_27195_27208[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27209 = state_27172;
state_27172 = G__27209;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__18629__auto__ = function(state_27172){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__18629__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__18629__auto____1.call(this,state_27172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__18629__auto____0;
cljs$core$async$unique_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__18629__auto____1;
return cljs$core$async$unique_$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto___27197,out))
})();
var state__18686__auto__ = (function (){var statearr_27196 = f__18685__auto__.call(null);
(statearr_27196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto___27197);

return statearr_27196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto___27197,out))
);


return out;
});
cljs$core$async$unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$unique__1.call(this,ch);
case 2:
return cljs$core$async$unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique__1;
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unique__2;
return cljs$core$async$unique;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function() {
var cljs$core$async$partition = null;
var cljs$core$async$partition__2 = (function (n,ch){
return cljs$core$async$partition.call(null,n,ch,null);
});
var cljs$core$async$partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18684__auto___27344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto___27344,out){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto___27344,out){
return (function (state_27314){
var state_val_27315 = (state_27314[(1)]);
if((state_val_27315 === (7))){
var inst_27310 = (state_27314[(2)]);
var state_27314__$1 = state_27314;
var statearr_27316_27345 = state_27314__$1;
(statearr_27316_27345[(2)] = inst_27310);

(statearr_27316_27345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (1))){
var inst_27277 = (new Array(n));
var inst_27278 = inst_27277;
var inst_27279 = (0);
var state_27314__$1 = (function (){var statearr_27317 = state_27314;
(statearr_27317[(7)] = inst_27278);

(statearr_27317[(8)] = inst_27279);

return statearr_27317;
})();
var statearr_27318_27346 = state_27314__$1;
(statearr_27318_27346[(2)] = null);

(statearr_27318_27346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (4))){
var inst_27282 = (state_27314[(9)]);
var inst_27282__$1 = (state_27314[(2)]);
var inst_27283 = (inst_27282__$1 == null);
var inst_27284 = cljs.core.not.call(null,inst_27283);
var state_27314__$1 = (function (){var statearr_27319 = state_27314;
(statearr_27319[(9)] = inst_27282__$1);

return statearr_27319;
})();
if(inst_27284){
var statearr_27320_27347 = state_27314__$1;
(statearr_27320_27347[(1)] = (5));

} else {
var statearr_27321_27348 = state_27314__$1;
(statearr_27321_27348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (15))){
var inst_27304 = (state_27314[(2)]);
var state_27314__$1 = state_27314;
var statearr_27322_27349 = state_27314__$1;
(statearr_27322_27349[(2)] = inst_27304);

(statearr_27322_27349[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (13))){
var state_27314__$1 = state_27314;
var statearr_27323_27350 = state_27314__$1;
(statearr_27323_27350[(2)] = null);

(statearr_27323_27350[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (6))){
var inst_27279 = (state_27314[(8)]);
var inst_27300 = (inst_27279 > (0));
var state_27314__$1 = state_27314;
if(cljs.core.truth_(inst_27300)){
var statearr_27324_27351 = state_27314__$1;
(statearr_27324_27351[(1)] = (12));

} else {
var statearr_27325_27352 = state_27314__$1;
(statearr_27325_27352[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (3))){
var inst_27312 = (state_27314[(2)]);
var state_27314__$1 = state_27314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27314__$1,inst_27312);
} else {
if((state_val_27315 === (12))){
var inst_27278 = (state_27314[(7)]);
var inst_27302 = cljs.core.vec.call(null,inst_27278);
var state_27314__$1 = state_27314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27314__$1,(15),out,inst_27302);
} else {
if((state_val_27315 === (2))){
var state_27314__$1 = state_27314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27314__$1,(4),ch);
} else {
if((state_val_27315 === (11))){
var inst_27294 = (state_27314[(2)]);
var inst_27295 = (new Array(n));
var inst_27278 = inst_27295;
var inst_27279 = (0);
var state_27314__$1 = (function (){var statearr_27326 = state_27314;
(statearr_27326[(7)] = inst_27278);

(statearr_27326[(10)] = inst_27294);

(statearr_27326[(8)] = inst_27279);

return statearr_27326;
})();
var statearr_27327_27353 = state_27314__$1;
(statearr_27327_27353[(2)] = null);

(statearr_27327_27353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (9))){
var inst_27278 = (state_27314[(7)]);
var inst_27292 = cljs.core.vec.call(null,inst_27278);
var state_27314__$1 = state_27314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27314__$1,(11),out,inst_27292);
} else {
if((state_val_27315 === (5))){
var inst_27278 = (state_27314[(7)]);
var inst_27282 = (state_27314[(9)]);
var inst_27287 = (state_27314[(11)]);
var inst_27279 = (state_27314[(8)]);
var inst_27286 = (inst_27278[inst_27279] = inst_27282);
var inst_27287__$1 = (inst_27279 + (1));
var inst_27288 = (inst_27287__$1 < n);
var state_27314__$1 = (function (){var statearr_27328 = state_27314;
(statearr_27328[(11)] = inst_27287__$1);

(statearr_27328[(12)] = inst_27286);

return statearr_27328;
})();
if(cljs.core.truth_(inst_27288)){
var statearr_27329_27354 = state_27314__$1;
(statearr_27329_27354[(1)] = (8));

} else {
var statearr_27330_27355 = state_27314__$1;
(statearr_27330_27355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (14))){
var inst_27307 = (state_27314[(2)]);
var inst_27308 = cljs.core.async.close_BANG_.call(null,out);
var state_27314__$1 = (function (){var statearr_27332 = state_27314;
(statearr_27332[(13)] = inst_27307);

return statearr_27332;
})();
var statearr_27333_27356 = state_27314__$1;
(statearr_27333_27356[(2)] = inst_27308);

(statearr_27333_27356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (10))){
var inst_27298 = (state_27314[(2)]);
var state_27314__$1 = state_27314;
var statearr_27334_27357 = state_27314__$1;
(statearr_27334_27357[(2)] = inst_27298);

(statearr_27334_27357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (8))){
var inst_27278 = (state_27314[(7)]);
var inst_27287 = (state_27314[(11)]);
var tmp27331 = inst_27278;
var inst_27278__$1 = tmp27331;
var inst_27279 = inst_27287;
var state_27314__$1 = (function (){var statearr_27335 = state_27314;
(statearr_27335[(7)] = inst_27278__$1);

(statearr_27335[(8)] = inst_27279);

return statearr_27335;
})();
var statearr_27336_27358 = state_27314__$1;
(statearr_27336_27358[(2)] = null);

(statearr_27336_27358[(1)] = (2));


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
});})(c__18684__auto___27344,out))
;
return ((function (switch__18628__auto__,c__18684__auto___27344,out){
return (function() {
var cljs$core$async$partition_$_state_machine__18629__auto__ = null;
var cljs$core$async$partition_$_state_machine__18629__auto____0 = (function (){
var statearr_27340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27340[(0)] = cljs$core$async$partition_$_state_machine__18629__auto__);

(statearr_27340[(1)] = (1));

return statearr_27340;
});
var cljs$core$async$partition_$_state_machine__18629__auto____1 = (function (state_27314){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_27314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e27341){if((e27341 instanceof Object)){
var ex__18632__auto__ = e27341;
var statearr_27342_27359 = state_27314;
(statearr_27342_27359[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27360 = state_27314;
state_27314 = G__27360;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__18629__auto__ = function(state_27314){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__18629__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__18629__auto____1.call(this,state_27314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__18629__auto____0;
cljs$core$async$partition_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__18629__auto____1;
return cljs$core$async$partition_$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto___27344,out))
})();
var state__18686__auto__ = (function (){var statearr_27343 = f__18685__auto__.call(null);
(statearr_27343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto___27344);

return statearr_27343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto___27344,out))
);


return out;
});
cljs$core$async$partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition__2.call(this,n,ch);
case 3:
return cljs$core$async$partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition__2;
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition__3;
return cljs$core$async$partition;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function() {
var cljs$core$async$partition_by = null;
var cljs$core$async$partition_by__2 = (function (f,ch){
return cljs$core$async$partition_by.call(null,f,ch,null);
});
var cljs$core$async$partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18684__auto___27503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto___27503,out){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto___27503,out){
return (function (state_27473){
var state_val_27474 = (state_27473[(1)]);
if((state_val_27474 === (7))){
var inst_27469 = (state_27473[(2)]);
var state_27473__$1 = state_27473;
var statearr_27475_27504 = state_27473__$1;
(statearr_27475_27504[(2)] = inst_27469);

(statearr_27475_27504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27474 === (1))){
var inst_27432 = [];
var inst_27433 = inst_27432;
var inst_27434 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27473__$1 = (function (){var statearr_27476 = state_27473;
(statearr_27476[(7)] = inst_27433);

(statearr_27476[(8)] = inst_27434);

return statearr_27476;
})();
var statearr_27477_27505 = state_27473__$1;
(statearr_27477_27505[(2)] = null);

(statearr_27477_27505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27474 === (4))){
var inst_27437 = (state_27473[(9)]);
var inst_27437__$1 = (state_27473[(2)]);
var inst_27438 = (inst_27437__$1 == null);
var inst_27439 = cljs.core.not.call(null,inst_27438);
var state_27473__$1 = (function (){var statearr_27478 = state_27473;
(statearr_27478[(9)] = inst_27437__$1);

return statearr_27478;
})();
if(inst_27439){
var statearr_27479_27506 = state_27473__$1;
(statearr_27479_27506[(1)] = (5));

} else {
var statearr_27480_27507 = state_27473__$1;
(statearr_27480_27507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27474 === (15))){
var inst_27463 = (state_27473[(2)]);
var state_27473__$1 = state_27473;
var statearr_27481_27508 = state_27473__$1;
(statearr_27481_27508[(2)] = inst_27463);

(statearr_27481_27508[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27474 === (13))){
var state_27473__$1 = state_27473;
var statearr_27482_27509 = state_27473__$1;
(statearr_27482_27509[(2)] = null);

(statearr_27482_27509[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27474 === (6))){
var inst_27433 = (state_27473[(7)]);
var inst_27458 = inst_27433.length;
var inst_27459 = (inst_27458 > (0));
var state_27473__$1 = state_27473;
if(cljs.core.truth_(inst_27459)){
var statearr_27483_27510 = state_27473__$1;
(statearr_27483_27510[(1)] = (12));

} else {
var statearr_27484_27511 = state_27473__$1;
(statearr_27484_27511[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27474 === (3))){
var inst_27471 = (state_27473[(2)]);
var state_27473__$1 = state_27473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27473__$1,inst_27471);
} else {
if((state_val_27474 === (12))){
var inst_27433 = (state_27473[(7)]);
var inst_27461 = cljs.core.vec.call(null,inst_27433);
var state_27473__$1 = state_27473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27473__$1,(15),out,inst_27461);
} else {
if((state_val_27474 === (2))){
var state_27473__$1 = state_27473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27473__$1,(4),ch);
} else {
if((state_val_27474 === (11))){
var inst_27437 = (state_27473[(9)]);
var inst_27441 = (state_27473[(10)]);
var inst_27451 = (state_27473[(2)]);
var inst_27452 = [];
var inst_27453 = inst_27452.push(inst_27437);
var inst_27433 = inst_27452;
var inst_27434 = inst_27441;
var state_27473__$1 = (function (){var statearr_27485 = state_27473;
(statearr_27485[(7)] = inst_27433);

(statearr_27485[(11)] = inst_27451);

(statearr_27485[(8)] = inst_27434);

(statearr_27485[(12)] = inst_27453);

return statearr_27485;
})();
var statearr_27486_27512 = state_27473__$1;
(statearr_27486_27512[(2)] = null);

(statearr_27486_27512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27474 === (9))){
var inst_27433 = (state_27473[(7)]);
var inst_27449 = cljs.core.vec.call(null,inst_27433);
var state_27473__$1 = state_27473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27473__$1,(11),out,inst_27449);
} else {
if((state_val_27474 === (5))){
var inst_27437 = (state_27473[(9)]);
var inst_27434 = (state_27473[(8)]);
var inst_27441 = (state_27473[(10)]);
var inst_27441__$1 = f.call(null,inst_27437);
var inst_27442 = cljs.core._EQ_.call(null,inst_27441__$1,inst_27434);
var inst_27443 = cljs.core.keyword_identical_QMARK_.call(null,inst_27434,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27444 = (inst_27442) || (inst_27443);
var state_27473__$1 = (function (){var statearr_27487 = state_27473;
(statearr_27487[(10)] = inst_27441__$1);

return statearr_27487;
})();
if(cljs.core.truth_(inst_27444)){
var statearr_27488_27513 = state_27473__$1;
(statearr_27488_27513[(1)] = (8));

} else {
var statearr_27489_27514 = state_27473__$1;
(statearr_27489_27514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27474 === (14))){
var inst_27466 = (state_27473[(2)]);
var inst_27467 = cljs.core.async.close_BANG_.call(null,out);
var state_27473__$1 = (function (){var statearr_27491 = state_27473;
(statearr_27491[(13)] = inst_27466);

return statearr_27491;
})();
var statearr_27492_27515 = state_27473__$1;
(statearr_27492_27515[(2)] = inst_27467);

(statearr_27492_27515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27474 === (10))){
var inst_27456 = (state_27473[(2)]);
var state_27473__$1 = state_27473;
var statearr_27493_27516 = state_27473__$1;
(statearr_27493_27516[(2)] = inst_27456);

(statearr_27493_27516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27474 === (8))){
var inst_27437 = (state_27473[(9)]);
var inst_27433 = (state_27473[(7)]);
var inst_27441 = (state_27473[(10)]);
var inst_27446 = inst_27433.push(inst_27437);
var tmp27490 = inst_27433;
var inst_27433__$1 = tmp27490;
var inst_27434 = inst_27441;
var state_27473__$1 = (function (){var statearr_27494 = state_27473;
(statearr_27494[(14)] = inst_27446);

(statearr_27494[(7)] = inst_27433__$1);

(statearr_27494[(8)] = inst_27434);

return statearr_27494;
})();
var statearr_27495_27517 = state_27473__$1;
(statearr_27495_27517[(2)] = null);

(statearr_27495_27517[(1)] = (2));


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
});})(c__18684__auto___27503,out))
;
return ((function (switch__18628__auto__,c__18684__auto___27503,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__18629__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__18629__auto____0 = (function (){
var statearr_27499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27499[(0)] = cljs$core$async$partition_by_$_state_machine__18629__auto__);

(statearr_27499[(1)] = (1));

return statearr_27499;
});
var cljs$core$async$partition_by_$_state_machine__18629__auto____1 = (function (state_27473){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_27473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e27500){if((e27500 instanceof Object)){
var ex__18632__auto__ = e27500;
var statearr_27501_27518 = state_27473;
(statearr_27501_27518[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27519 = state_27473;
state_27473 = G__27519;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__18629__auto__ = function(state_27473){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__18629__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__18629__auto____1.call(this,state_27473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__18629__auto____0;
cljs$core$async$partition_by_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__18629__auto____1;
return cljs$core$async$partition_by_$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto___27503,out))
})();
var state__18686__auto__ = (function (){var statearr_27502 = f__18685__auto__.call(null);
(statearr_27502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto___27503);

return statearr_27502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto___27503,out))
);


return out;
});
cljs$core$async$partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition_by__2.call(this,f,ch);
case 3:
return cljs$core$async$partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition_by__2;
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition_by__3;
return cljs$core$async$partition_by;
})()
;

//# sourceMappingURL=async.js.map