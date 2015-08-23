(ns figwheel.connect (:require [figwheel.client] [zkimcom.site] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dev", :on-jsload (fn [& x] (if js/zkimcom.site.reload-hook (apply js/zkimcom.site.reload-hook x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'zkimcom.site/reload-hook' is missing"))), :websocket-url "ws://localhost:3449/figwheel-ws"})

