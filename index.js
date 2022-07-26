// Write your solution here
const cats = ["Milo", "Otis", "Garfield"]; 


function arrayMethods() {
  
  
    cats.push("Milo", "Otis", "Garfield");
  };

  function destructivelyAppendCat() {
    cats.push("Ralph");
  };

  function destructivelyPrependCat() {
    cats.unshift("Bob");
  };

  function destructivelyRemoveLastCat() {
    cats.pop();
  };

  function destructivelyRemoveFirstCat() {
    cats.shift();
  };

  function appendCat(newCat) {
    const cats2 = [...cats, newCat]; 
    return cats2; 
    }

    function prependCat(newCat) {
        const cats2 = [newCat, ...cats];
        return cats2;
    }

    function removeLastCat() {
        const cats2 = [...cats]
        cats2.pop();
        return cats2; 
    }

    function removeFirstCat() {
        const cats2 = [...cats]
        cats2.shift();
        return cats2; 
    }



   
    