import React, { useEffect, useState, useRef } from "react";
import Visualiser from "./control/Visualiser";
import Control from "./control/Control";
import { bubbleSort } from "./algorithm/bubble_sort";
import { heapSort } from "./algorithm/heap_sort";
import { insertionSort } from "./algorithm/insertion_sort";
import { MergeSort } from "./algorithm/merge_sort";
import { quickSort } from "./algorithm/quick_sort";
import { selectionSort } from "./algorithm/selection_sort";

function App() {
  const [array, setArray] = useState([]);
  const [userInuptArray, setUserInuptArray] = useState('');
  const [speed, setSpeed] = useState(100);
  const [isSorting, setIsSorting] = useState(false);
  const [selectedSorting, setSelectedSorting] = useState('');
  
  const timeoutsRef = useRef([]);

  useEffect(() => {
    if (!userInuptArray) return;
    const userInput = userInuptArray.split(',');
    const filteredInput = userInput
      .filter(item => item.trim() !== '' && !isNaN(item))
      .map(item => Math.min(Number(item), 500));
    setArray([...filteredInput]);
  }, [userInuptArray]);

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    timeoutsRef.current = [];
  };

  const reSet = () => {
    clearAllTimeouts();
    setArray([]);
    setSelectedSorting('');
    setUserInuptArray('');
    setIsSorting(false);
    
    const bars = document.getElementsByClassName('bar');
    for (let bar of bars) {
      bar.style.backgroundColor = '#5fb8fd';
    }
  };

  const handleSorting = (e) => {
    const sortingMethod = e.target.value;
    if (!sortingMethod || array.length === 0) return;
    
    setSelectedSorting(sortingMethod);
    setIsSorting(true);
    let animations = [];
    const arrayCopy = [...array];
    switch (sortingMethod) {
      case 'bubbleSort':
        animations = bubbleSort(arrayCopy);
        runUnifiedAnimation(animations);
        break;
      case "mergeSort":
        runUnifiedAnimation(MergeSort(arrayCopy));
        break;
      case "selectionSort":
        animations = selectionSort(arrayCopy);
        runUnifiedAnimation(animations);
        break;
      case "heapSort":
        runUnifiedAnimation(heapSort(arrayCopy));
        break;
      case "insertionSort":
        runUnifiedAnimation(insertionSort(arrayCopy));
        break;
      case "quickSort":
        runUnifiedAnimation(quickSort(arrayCopy));
        break;
      default:
        break;
    }
  };

  const runUnifiedAnimation = (animations) => {
    const bars = document.getElementsByClassName("bar");
    
    animations.forEach(([type, ...args], i) => {
      const timeout = setTimeout(() => {
        if (type === "compare") {
          const [idx1, idx2] = args;
          if (bars[idx1]) bars[idx1].style.backgroundColor = "yellow";
          if (bars[idx2]) bars[idx2].style.backgroundColor = "yellow";
        } else if (type === "uncompare") {
          const [idx1, idx2] = args;
          if (bars[idx1]) bars[idx1].style.backgroundColor = "#5fb8fd";
          if (bars[idx2]) bars[idx2].style.backgroundColor = "#5fb8fd";
        } else if (type === "swap" || type === "overwrite") {
          if (type === "swap") {
            const [idx1, val1, idx2, val2] = args;
            updateBar(idx1, val1, "red");
            updateBar(idx2, val2, "red");
          } else {
            const [idx, val] = args;
            updateBar(idx, val, "red");
          }
        }
      }, i * speed);
      timeoutsRef.current.push(timeout);
    });

    const finalTimeout = setTimeout(() => {
      for (let j = 0; j < bars.length; j++) {
        const t = setTimeout(() => {
          bars[j].style.backgroundColor = "green";
        }, j * (speed / 4));
        timeoutsRef.current.push(t);
      }
      setIsSorting(false);
    }, animations.length * speed);
    timeoutsRef.current.push(finalTimeout);
  };

  const updateBar = (idx, height, color) => {
    const bars = document.getElementsByClassName("bar");
    if (!bars[idx]) return;
    bars[idx].style.height = `${height}px`;
    bars[idx].innerText = height;
    bars[idx].style.backgroundColor = color;
    
    const t = setTimeout(() => {
      if (bars[idx]) bars[idx].style.backgroundColor = "#5fb8fd";
    }, speed * 0.8);
    timeoutsRef.current.push(t);
  };

  return (
    <div className="App">
      <h1>Sort Visualizer</h1>
      <Control
        handleNewArrayGenrate={() => { reSet(); const newArr = Array.from({ length: 15 }, () => Math.floor(Math.random() * 400) + 10); setArray(newArr); }}
        handleSorting={handleSorting}
        userInuptArray={userInuptArray}
        setUserInuptArray={setUserInuptArray}
        setSpeed={setSpeed}
        reSet={reSet}
        isSorting={isSorting}
        selectedSorting={selectedSorting}
      />
      <Visualiser array={array} />
    </div>
  );
}

export default App;