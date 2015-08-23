// Compiled by ClojureScript 0.0-3165 {}
goog.provide('vee.ops');
goog.require('cljs.core');
goog.require('vee.util');
goog.require('cljs.core.async');

vee.ops.Dispatcher = (function (){var obj24129 = {};
return obj24129;
})();

vee.ops.send = (function() {
var vee$ops$send = null;
var vee$ops$send__2 = (function (this$,op){
if((function (){var and__16195__auto__ = this$;
if(and__16195__auto__){
return this$.vee$ops$Dispatcher$send$arity$2;
} else {
return and__16195__auto__;
}
})()){
return this$.vee$ops$Dispatcher$send$arity$2(this$,op);
} else {
var x__16843__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16207__auto__ = (vee.ops.send[goog.typeOf(x__16843__auto__)]);
if(or__16207__auto__){
return or__16207__auto__;
} else {
var or__16207__auto____$1 = (vee.ops.send["_"]);
if(or__16207__auto____$1){
return or__16207__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Dispatcher.send",this$);
}
}
})().call(null,this$,op);
}
});
var vee$ops$send__3 = (function (this$,op,data){
if((function (){var and__16195__auto__ = this$;
if(and__16195__auto__){
return this$.vee$ops$Dispatcher$send$arity$3;
} else {
return and__16195__auto__;
}
})()){
return this$.vee$ops$Dispatcher$send$arity$3(this$,op,data);
} else {
var x__16843__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16207__auto__ = (vee.ops.send[goog.typeOf(x__16843__auto__)]);
if(or__16207__auto__){
return or__16207__auto__;
} else {
var or__16207__auto____$1 = (vee.ops.send["_"]);
if(or__16207__auto____$1){
return or__16207__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Dispatcher.send",this$);
}
}
})().call(null,this$,op,data);
}
});
vee$ops$send = function(this$,op,data){
switch(arguments.length){
case 2:
return vee$ops$send__2.call(this,this$,op);
case 3:
return vee$ops$send__3.call(this,this$,op,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vee$ops$send.cljs$core$IFn$_invoke$arity$2 = vee$ops$send__2;
vee$ops$send.cljs$core$IFn$_invoke$arity$3 = vee$ops$send__3;
return vee$ops$send;
})()
;

vee.ops.bind_BANG_ = (function vee$ops$bind_BANG_(this$,kw__GT_f){
if((function (){var and__16195__auto__ = this$;
if(and__16195__auto__){
return this$.vee$ops$Dispatcher$bind_BANG_$arity$2;
} else {
return and__16195__auto__;
}
})()){
return this$.vee$ops$Dispatcher$bind_BANG_$arity$2(this$,kw__GT_f);
} else {
var x__16843__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16207__auto__ = (vee.ops.bind_BANG_[goog.typeOf(x__16843__auto__)]);
if(or__16207__auto__){
return or__16207__auto__;
} else {
var or__16207__auto____$1 = (vee.ops.bind_BANG_["_"]);
if(or__16207__auto____$1){
return or__16207__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Dispatcher.bind!",this$);
}
}
})().call(null,this$,kw__GT_f);
}
});

vee.ops.unbind_BANG_ = (function vee$ops$unbind_BANG_(this$,kws){
if((function (){var and__16195__auto__ = this$;
if(and__16195__auto__){
return this$.vee$ops$Dispatcher$unbind_BANG_$arity$2;
} else {
return and__16195__auto__;
}
})()){
return this$.vee$ops$Dispatcher$unbind_BANG_$arity$2(this$,kws);
} else {
var x__16843__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16207__auto__ = (vee.ops.unbind_BANG_[goog.typeOf(x__16843__auto__)]);
if(or__16207__auto__){
return or__16207__auto__;
} else {
var or__16207__auto____$1 = (vee.ops.unbind_BANG_["_"]);
if(or__16207__auto____$1){
return or__16207__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Dispatcher.unbind!",this$);
}
}
})().call(null,this$,kws);
}
});

vee.ops.set_ctx_BANG_ = (function vee$ops$set_ctx_BANG_(this$,ctx){
if((function (){var and__16195__auto__ = this$;
if(and__16195__auto__){
return this$.vee$ops$Dispatcher$set_ctx_BANG_$arity$2;
} else {
return and__16195__auto__;
}
})()){
return this$.vee$ops$Dispatcher$set_ctx_BANG_$arity$2(this$,ctx);
} else {
var x__16843__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16207__auto__ = (vee.ops.set_ctx_BANG_[goog.typeOf(x__16843__auto__)]);
if(or__16207__auto__){
return or__16207__auto__;
} else {
var or__16207__auto____$1 = (vee.ops.set_ctx_BANG_["_"]);
if(or__16207__auto____$1){
return or__16207__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Dispatcher.set-ctx!",this$);
}
}
})().call(null,this$,ctx);
}
});

vee.ops.stop = (function vee$ops$stop(this$){
if((function (){var and__16195__auto__ = this$;
if(and__16195__auto__){
return this$.vee$ops$Dispatcher$stop$arity$1;
} else {
return and__16195__auto__;
}
})()){
return this$.vee$ops$Dispatcher$stop$arity$1(this$);
} else {
var x__16843__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16207__auto__ = (vee.ops.stop[goog.typeOf(x__16843__auto__)]);
if(or__16207__auto__){
return or__16207__auto__;
} else {
var or__16207__auto____$1 = (vee.ops.stop["_"]);
if(or__16207__auto____$1){
return or__16207__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Dispatcher.stop",this$);
}
}
})().call(null,this$);
}
});

/**
 * @param {...*} var_args
 */
vee.ops.dispatcher = (function() { 
var vee$ops$dispatcher__delegate = function (p__24131){
var vec__24195 = p__24131;
var initial_context = cljs.core.nth.call(null,vec__24195,(0),null);
var _BANG_handlers = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var _BANG_ctx = cljs.core.atom.call(null,initial_context);
var ch = cljs.core.async.chan.call(null);
var c__18684__auto___24258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18684__auto___24258,_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context){
return (function (){
var f__18685__auto__ = (function (){var switch__18628__auto__ = ((function (c__18684__auto___24258,_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context){
return (function (state_24226){
var state_val_24227 = (state_24226[(1)]);
if((state_val_24227 === (7))){
var inst_24221 = (state_24226[(2)]);
var inst_24222 = cljs.core.println.call(null,"[vee.ops] Stopping dispatcher");
var state_24226__$1 = (function (){var statearr_24228 = state_24226;
(statearr_24228[(7)] = inst_24221);

return statearr_24228;
})();
var statearr_24229_24259 = state_24226__$1;
(statearr_24229_24259[(2)] = inst_24222);

(statearr_24229_24259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24227 === (1))){
var state_24226__$1 = state_24226;
var statearr_24230_24260 = state_24226__$1;
(statearr_24230_24260[(2)] = null);

(statearr_24230_24260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24227 === (4))){
var inst_24198 = (state_24226[(8)]);
var inst_24198__$1 = (state_24226[(2)]);
var state_24226__$1 = (function (){var statearr_24231 = state_24226;
(statearr_24231[(8)] = inst_24198__$1);

return statearr_24231;
})();
if(cljs.core.truth_(inst_24198__$1)){
var statearr_24232_24261 = state_24226__$1;
(statearr_24232_24261[(1)] = (5));

} else {
var statearr_24233_24262 = state_24226__$1;
(statearr_24233_24262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24227 === (13))){
var inst_24217 = (state_24226[(2)]);
var state_24226__$1 = (function (){var statearr_24234 = state_24226;
(statearr_24234[(9)] = inst_24217);

return statearr_24234;
})();
var statearr_24235_24263 = state_24226__$1;
(statearr_24235_24263[(2)] = null);

(statearr_24235_24263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24227 === (6))){
var state_24226__$1 = state_24226;
var statearr_24236_24264 = state_24226__$1;
(statearr_24236_24264[(2)] = null);

(statearr_24236_24264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24227 === (3))){
var inst_24224 = (state_24226[(2)]);
var state_24226__$1 = state_24226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24226__$1,inst_24224);
} else {
if((state_val_24227 === (12))){
var inst_24198 = (state_24226[(8)]);
var inst_24215 = cljs.core.println.call(null,"[vee.ops] No handler for op",inst_24198);
var state_24226__$1 = state_24226;
var statearr_24237_24265 = state_24226__$1;
(statearr_24237_24265[(2)] = inst_24215);

(statearr_24237_24265[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24227 === (2))){
var state_24226__$1 = state_24226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24226__$1,(4),ch);
} else {
if((state_val_24227 === (11))){
var inst_24198 = (state_24226[(8)]);
var inst_24205 = (state_24226[(10)]);
var inst_24207 = (state_24226[(11)]);
var inst_24209 = cljs.core.println.call(null,"[vee.ops] Dispatching",inst_24205);
var inst_24210 = cljs.core.deref.call(null,_BANG_ctx);
var inst_24211 = new cljs.core.Keyword("vee.ops","data","vee.ops/data",100868837).cljs$core$IFn$_invoke$arity$1(inst_24198);
var inst_24212 = cljs.core.merge.call(null,inst_24210,inst_24211);
var inst_24213 = inst_24207.call(null,inst_24212);
var state_24226__$1 = (function (){var statearr_24238 = state_24226;
(statearr_24238[(12)] = inst_24209);

return statearr_24238;
})();
var statearr_24239_24266 = state_24226__$1;
(statearr_24239_24266[(2)] = inst_24213);

(statearr_24239_24266[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24227 === (9))){
var inst_24198 = (state_24226[(8)]);
var inst_24203 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(inst_24198);
var state_24226__$1 = state_24226;
var statearr_24240_24267 = state_24226__$1;
(statearr_24240_24267[(2)] = inst_24203);

(statearr_24240_24267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24227 === (5))){
var inst_24200 = (state_24226[(13)]);
var inst_24198 = (state_24226[(8)]);
var inst_24200__$1 = new cljs.core.Keyword("vee.ops","op","vee.ops/op",-2086238729).cljs$core$IFn$_invoke$arity$1(inst_24198);
var state_24226__$1 = (function (){var statearr_24241 = state_24226;
(statearr_24241[(13)] = inst_24200__$1);

return statearr_24241;
})();
if(cljs.core.truth_(inst_24200__$1)){
var statearr_24242_24268 = state_24226__$1;
(statearr_24242_24268[(1)] = (8));

} else {
var statearr_24243_24269 = state_24226__$1;
(statearr_24243_24269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24227 === (10))){
var inst_24205 = (state_24226[(10)]);
var inst_24207 = (state_24226[(11)]);
var inst_24205__$1 = (state_24226[(2)]);
var inst_24206 = cljs.core.deref.call(null,_BANG_handlers);
var inst_24207__$1 = cljs.core.get.call(null,inst_24206,inst_24205__$1);
var state_24226__$1 = (function (){var statearr_24244 = state_24226;
(statearr_24244[(10)] = inst_24205__$1);

(statearr_24244[(11)] = inst_24207__$1);

return statearr_24244;
})();
if(cljs.core.truth_(inst_24207__$1)){
var statearr_24245_24270 = state_24226__$1;
(statearr_24245_24270[(1)] = (11));

} else {
var statearr_24246_24271 = state_24226__$1;
(statearr_24246_24271[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24227 === (8))){
var inst_24200 = (state_24226[(13)]);
var state_24226__$1 = state_24226;
var statearr_24247_24272 = state_24226__$1;
(statearr_24247_24272[(2)] = inst_24200);

(statearr_24247_24272[(1)] = (10));


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
});})(c__18684__auto___24258,_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context))
;
return ((function (switch__18628__auto__,c__18684__auto___24258,_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context){
return (function() {
var vee$ops$dispatcher_$_state_machine__18629__auto__ = null;
var vee$ops$dispatcher_$_state_machine__18629__auto____0 = (function (){
var statearr_24251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24251[(0)] = vee$ops$dispatcher_$_state_machine__18629__auto__);

(statearr_24251[(1)] = (1));

return statearr_24251;
});
var vee$ops$dispatcher_$_state_machine__18629__auto____1 = (function (state_24226){
while(true){
var ret_value__18630__auto__ = (function (){try{while(true){
var result__18631__auto__ = switch__18628__auto__.call(null,state_24226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18631__auto__;
}
break;
}
}catch (e24252){if((e24252 instanceof Object)){
var ex__18632__auto__ = e24252;
var statearr_24253_24273 = state_24226;
(statearr_24253_24273[(5)] = ex__18632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24274 = state_24226;
state_24226 = G__24274;
continue;
} else {
return ret_value__18630__auto__;
}
break;
}
});
vee$ops$dispatcher_$_state_machine__18629__auto__ = function(state_24226){
switch(arguments.length){
case 0:
return vee$ops$dispatcher_$_state_machine__18629__auto____0.call(this);
case 1:
return vee$ops$dispatcher_$_state_machine__18629__auto____1.call(this,state_24226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vee$ops$dispatcher_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$0 = vee$ops$dispatcher_$_state_machine__18629__auto____0;
vee$ops$dispatcher_$_state_machine__18629__auto__.cljs$core$IFn$_invoke$arity$1 = vee$ops$dispatcher_$_state_machine__18629__auto____1;
return vee$ops$dispatcher_$_state_machine__18629__auto__;
})()
;})(switch__18628__auto__,c__18684__auto___24258,_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context))
})();
var state__18686__auto__ = (function (){var statearr_24254 = f__18685__auto__.call(null);
(statearr_24254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18684__auto___24258);

return statearr_24254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18686__auto__);
});})(c__18684__auto___24258,_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context))
);


if(typeof vee.ops.t24255 !== 'undefined'){
} else {

/**
* @constructor
*/
vee.ops.t24255 = (function (dispatcher,p__24131,vec__24195,initial_context,_BANG_handlers,_BANG_ctx,ch,meta24256){
this.dispatcher = dispatcher;
this.p__24131 = p__24131;
this.vec__24195 = vec__24195;
this.initial_context = initial_context;
this._BANG_handlers = _BANG_handlers;
this._BANG_ctx = _BANG_ctx;
this.ch = ch;
this.meta24256 = meta24256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
vee.ops.t24255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context){
return (function (_24257,meta24256__$1){
var self__ = this;
var _24257__$1 = this;
return (new vee.ops.t24255(self__.dispatcher,self__.p__24131,self__.vec__24195,self__.initial_context,self__._BANG_handlers,self__._BANG_ctx,self__.ch,meta24256__$1));
});})(_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context))
;

vee.ops.t24255.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context){
return (function (_24257){
var self__ = this;
var _24257__$1 = this;
return self__.meta24256;
});})(_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context))
;

vee.ops.t24255.prototype.vee$ops$Dispatcher$ = true;

vee.ops.t24255.prototype.vee$ops$Dispatcher$send$arity$2 = ((function (_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context){
return (function (_,op){
var self__ = this;
var ___$1 = this;
return cljs.core.async.put_BANG_.call(null,self__.ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("vee.ops","op","vee.ops/op",-2086238729),op], null));
});})(_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context))
;

vee.ops.t24255.prototype.vee$ops$Dispatcher$send$arity$3 = ((function (_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context){
return (function (_,op,data){
var self__ = this;
var ___$1 = this;
return cljs.core.async.put_BANG_.call(null,self__.ch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("vee.ops","op","vee.ops/op",-2086238729),op,new cljs.core.Keyword("vee.ops","data","vee.ops/data",100868837),data], null));
});})(_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context))
;

vee.ops.t24255.prototype.vee$ops$Dispatcher$bind_BANG_$arity$2 = ((function (_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context){
return (function (_,kw__GT_f){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__._BANG_handlers,cljs.core.merge,kw__GT_f);
});})(_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context))
;

vee.ops.t24255.prototype.vee$ops$Dispatcher$unbind_BANG_$arity$2 = ((function (_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context){
return (function (_,kws){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__._BANG_handlers,((function (___$1,_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context){
return (function (p1__24130_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__24130_SHARP_,kws);
});})(___$1,_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context))
);
});})(_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context))
;

vee.ops.t24255.prototype.vee$ops$Dispatcher$set_ctx_BANG_$arity$2 = ((function (_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context){
return (function (_,ctx){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__._BANG_ctx,ctx);
});})(_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context))
;

vee.ops.t24255.prototype.vee$ops$Dispatcher$stop$arity$1 = ((function (_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.close_BANG_.call(null,self__.ch);
});})(_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context))
;

vee.ops.t24255.cljs$lang$type = true;

vee.ops.t24255.cljs$lang$ctorStr = "vee.ops/t24255";

vee.ops.t24255.cljs$lang$ctorPrWriter = ((function (_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context){
return (function (this__16786__auto__,writer__16787__auto__,opt__16788__auto__){
return cljs.core._write.call(null,writer__16787__auto__,"vee.ops/t24255");
});})(_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context))
;

vee.ops.__GT_t24255 = ((function (_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context){
return (function vee$ops$dispatcher_$___GT_t24255(dispatcher__$1,p__24131__$1,vec__24195__$1,initial_context__$1,_BANG_handlers__$1,_BANG_ctx__$1,ch__$1,meta24256){
return (new vee.ops.t24255(dispatcher__$1,p__24131__$1,vec__24195__$1,initial_context__$1,_BANG_handlers__$1,_BANG_ctx__$1,ch__$1,meta24256));
});})(_BANG_handlers,_BANG_ctx,ch,vec__24195,initial_context))
;

}

return (new vee.ops.t24255(vee$ops$dispatcher,p__24131,vec__24195,initial_context,_BANG_handlers,_BANG_ctx,ch,cljs.core.PersistentArrayMap.EMPTY));
};
var vee$ops$dispatcher = function (var_args){
var p__24131 = null;
if (arguments.length > 0) {
var G__24275__i = 0, G__24275__a = new Array(arguments.length -  0);
while (G__24275__i < G__24275__a.length) {G__24275__a[G__24275__i] = arguments[G__24275__i + 0]; ++G__24275__i;}
  p__24131 = new cljs.core.IndexedSeq(G__24275__a,0);
} 
return vee$ops$dispatcher__delegate.call(this,p__24131);};
vee$ops$dispatcher.cljs$lang$maxFixedArity = 0;
vee$ops$dispatcher.cljs$lang$applyTo = (function (arglist__24276){
var p__24131 = cljs.core.seq(arglist__24276);
return vee$ops$dispatcher__delegate(p__24131);
});
vee$ops$dispatcher.cljs$core$IFn$_invoke$arity$variadic = vee$ops$dispatcher__delegate;
return vee$ops$dispatcher;
})()
;
vee.ops.data = (function vee$ops$data(op){
return new cljs.core.Keyword("vee.ops","data","vee.ops/data",100868837).cljs$core$IFn$_invoke$arity$1(op);
});
vee.ops.op = (function vee$ops$op(p__24277){
var map__24279 = p__24277;
var map__24279__$1 = ((cljs.core.seq_QMARK_.call(null,map__24279))?cljs.core.apply.call(null,cljs.core.hash_map,map__24279):map__24279);
var op__$1 = cljs.core.get.call(null,map__24279__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var op_id = cljs.core.get.call(null,map__24279__$1,new cljs.core.Keyword(null,"op-id","op-id",793559773));
var data = cljs.core.get.call(null,map__24279__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var on_ack = cljs.core.get.call(null,map__24279__$1,new cljs.core.Keyword(null,"on-ack","on-ack",-1841493414));
var on_error = cljs.core.get.call(null,map__24279__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var auth = cljs.core.get.call(null,map__24279__$1,new cljs.core.Keyword(null,"auth","auth",1389754926));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("vee.ops","op","vee.ops/op",-2086238729),op__$1,new cljs.core.Keyword("vee.ops","data","vee.ops/data",100868837),data,new cljs.core.Keyword("vee.ops","op-id","vee.ops/op-id",590063411),(function (){var or__16207__auto__ = op_id;
if(cljs.core.truth_(or__16207__auto__)){
return or__16207__auto__;
} else {
return vee.util.uuid.call(null);
}
})(),new cljs.core.Keyword("vee.ops","on-ack","vee.ops/on-ack",1985719752),on_ack,new cljs.core.Keyword("vee.ops","auth","vee.ops/auth",-147609204),auth,new cljs.core.Keyword("vee.ops","on-error","vee.ops/on-error",1931735428),on_error], null);
});

//# sourceMappingURL=ops.js.map