(ns zkimcom.site
  (:require [vee.ops :as ops]
            [dommy.core :refer-macros [sel1]]
            [clojure.string :as str]
            [reagent.core :as reagent]
            [cljs.core.async :as async
             :refer [<! >! chan close! sliding-buffer put! take! alts! timeout pipe mult tap]]
            [clojure.string :as str]
            [cljsjs.d3 :as d3])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(enable-console-print!)

(defn $svg []
  [:svg
   #_[:circle {:cx "50%" :cy "50%" :r "20%" :fill "yellow"}]])

(defn mk-tick [nodes data]
  (fn [e]
    #_(.data data (into-array [{:cx 10 :cy 10}]))))

(defn init []
  (reagent/render-component
    [$svg]
    (sel1 :.badge-animation))
  (let [nodes (->> (range 10)
                   (map #(hash-map
                           :index %
                           :cx (* 100 (rand))
                           :cy (* 100 (rand)))))
        data (-> js/d3
                 (.selectAll "svg")
                 (.selectAll ".node")
                 (.data (into-array nodes)))
        force (-> (.. js/d3 -layout force)
                  (.nodes nodes)
                  (.size #js [300 300]))
        node (-> data
                 (.enter)
                 (.append "circle")
                 (.attr "cx" (fn [d] (:cx d)))
                 (.attr "cy" (fn [d] (:cy d)))
                 (.attr "fill" "green")
                 (.attr "stroke" "blue")
                 (.attr "r" (fn [d] "20"))
                 (.call (.-drag force)))]
    (-> js/d3
        (.selectAll "svg")
        (.selectAll ".node")
        #_(.exit)
        (.remove))
    (-> force
        (.on "tick" (mk-tick nodes data))
        (.start))))

(defn reload-hook [] (init))

#_(defonce start (init))
