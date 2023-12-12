(ns day-2.core
  (:gen-class)
  (:require [day-2.data :as DData]))

(defn part1 [& args]
  (println "Part 1: " args)
  (DData/GetData))

(defn -main [& args]
  (println "Welcome to my project! These are your args:" args)
  (part1 args))