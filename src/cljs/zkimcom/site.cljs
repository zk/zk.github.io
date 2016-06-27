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

(defn tick [nodes delta]
  (->> nodes
       (map
         (fn [{:keys [index y] :as n}]
           (assoc n
             :cy (*
                   (.sin js/Math
                     (*
                       y
                       js/Math.PI
                       2))))))))

(defn init []
  (let [!nodes (rea/atom
                 (->> (range 10)
                      (map-indexed #(hash-map
                                      :index %1
                                      :x (/ %2 10)
                                      :y 0.5))))]
    (swap! !nodes tick 0)
    (rea/render-component
      [$svg !nodes]
      (sel1 :.badge-animation))))

(defn reload-hook [] (init))

(defonce start (init))
