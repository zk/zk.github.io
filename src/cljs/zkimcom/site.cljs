(ns zkimcom.site
  (:require [vee.ops :as ops]
            [dommy.core :refer-macros [sel1]]
            [clojure.string :as str]
            [reagent.core :as rea]
            [cljs.core.async :as async
             :refer [<! >! chan close! sliding-buffer put! take! alts! timeout pipe mult tap]]
            [clojure.string :as str]
            [cljsjs.d3 :as d3])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(enable-console-print!)

(defn $svg [!nodes]
  [:svg
   (for [{:keys [index cx cy]} @!nodes]
     ^{:key index} [:circle {:cx cx :cy cy :r 20 :fill "green"}])])

(defn tick [delta !nodes]
  (swap! !nodes
    (fn [ns]
      (->> ns
           (map
             (fn [{:keys [index] :as n}]
               (assoc n
                 :cy (+ (*
                          (.sin js/Math
                            (*
                              (/ index 10)
                              js/Math.PI
                              2))
                          100)
                       150))))))))

(defn init []
  (let [!nodes (rea/atom (->> (range 10)
                              (map-indexed #(hash-map
                                              :index %1
                                              :cx (+ 10 (* 30 %2))
                                              :cy 30))))]
    (tick 0 !nodes)
    (rea/render-component
      [$svg !nodes]
      (sel1 :.badge-animation))))

(defn reload-hook [] (init))

(defonce start (init))
