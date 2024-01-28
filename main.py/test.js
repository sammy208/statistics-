
// const age = 15;
// if (age >= 15) {
//     console.log('person eligible for discount')
// } else {
//     console.log('person not eligibe for discount')
// }
// console.log ('Thank you for petronizing us')

// function sum(x, y) {
//     return x + y;
// }
// console.log(sum(1, 3))

//console.log("Hello")

// let company
// company = "Samstudio"
// console.log(company)

// const First_name ="Samuel", Last_name = "Ndubuisi"

// console.log(First_name, Last_name)

//premitive
// const name = 'John';
// const age = 34;
// const istall = true;
// const house =null
// const Relationship = undefined

//concactenation 
// console.log(" My Name is " + name + " and I'm " + age + "Years old");
// console.log(`My name is ${name} and I'm ${age} Years old`)

// const New = "Hello word"
// console.log(New.lenght)

// console.log("Hello world".length)

// console.log("Hello world".toUpperCase())
//  console.log("Hello world".substring(8))

//  Array



// const Score = [23, 34, 40]
//  console.log(Array.isArray (Score)) 
//  console.log(Score[1])
// Score.push(90)
// Score.unshift(73)
// Score.pop()
// console.log(Score.indexOf(34))
// console.log(Score)
/*
const Person = {
    name:"John",
    age: 34,
    isTall: true,  
    adress: {
        street: "NO 1 genesys street",
        city: "Enugu"
    }
}

console.log(Person.adress.city)
// */

// console.log("Addition         ", 1+1)
// console.log("subtraction      ", 5-4)
// console.log("Multiplication   ", 3*2)
// console.log("Division         ", 100/5)
// console.log("Remainder        ", 14%5)
// console.log("Exponential      ", 3**3)

// console.log("NOT  ", !true)
// console.log("AND  ", 1 && 0)
// console.log("OR   ", 1 || 1)
// console.log("Nullish coalesing" , 0 ?? 3)


// flow control
// const score =55
// if(score <= 100 ){}




// let SportsStoreProduct = [
//     {name : "Nike shoes", price : 120},
//     {name : "Anta Jersey", price : 40},
//     {name : "Basketball shoes", price : 90}
// ];

//Acessing elements in the array of objects
// console.log("Product 1: " + sportsStoreProducts[0].name + ", Price: $" + sportsStoreProducts[0].price);
// console.log("Product 2: " + sportsStoreProducts[1].name + ", Price: $" + sportsStoreProducts[1].price);
// console.log("Product 3: " + sportsStoreProducts[2].name + ", Price: $" + sportsStoreProducts[2].price);





// // class 
// class Human{
//     numberofeyes=2
//     haircolor="black"
    
//     static numberofleg = 2

//     cry () {
//         console.log("I am crying")
//     }
//     displayself(){
//         console.log(this)
//     }
// }
// const human  = new Human()

// human.haircolor = 'grey'
// human.numberofeyes = 1
// Human.numberofleg = 12
// // console.log(human, Human)
// human.displayself(this)

/*
const circle = (radius) => {
    const proto ={
        type: 'Circle',
        // code
    }
    return Object.assign(Object.create(proto),
    {radius})
}

const square = (lenght) => {
    const proto ={
        type: 'square',
        // code
    }
    return Object.assign(Object.create(proto),
    {lenght})
}
*/
class Myclass{
    static classproperties = "Class Property";
    static classMethod() {
        return `calling class method with $ {Myclass.classproperty}`;
    }
}

console.log(`Classproperty: ${Myclass.classMethod}`);

const result = Myclass.classMethod();

console.log(result);


class DescriptiveStatistics {
    constructor(data) {
      this.data = data;
    }
  
    // Measures of Central Tendency
    mean() {
      const sum = this.data.reduce((acc, value) => acc + value, 0);
      return sum / this.data.length;
    }
  
    median() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const middle = Math.floor(sortedData.length / 2);
      
      if (sortedData.length % 2 === 0) {
        return (sortedData[middle - 1] + sortedData[middle]) / 2;
      } else {
        return sortedData[middle];
      }
    }
  
    mode() {
      const frequencyMap = {};
      this.data.forEach(value => {
        frequencyMap[value] = (frequencyMap[value] || 0) + 1;
      });
  
      let maxFrequency = 0;
      let modes = [];
      for (const value in frequencyMap) {
        if (frequencyMap[value] > maxFrequency) {
          maxFrequency = frequencyMap[value];
          modes = [Number(value)];
        } else if (frequencyMap[value] === maxFrequency) {
          modes.push(Number(value));
        }
      }
  
      return modes;
    }
  
    // Measures of Dispersion
    range() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      return sortedData[sortedData.length - 1] - sortedData[0];
    }
  
    variance() {
      const meanValue = this.mean();
      const squaredDifferences = this.data.map(value => Math.pow(value - meanValue, 2));
      const sumSquaredDiff = squaredDifferences.reduce((acc, value) => acc + value, 0);
      return sumSquaredDiff / this.data.length;
    }
  
    standardDeviation() {
      return Math.sqrt(this.variance());
    }
  
    quartiles() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const middle = Math.floor(sortedData.length / 2);
      
      const lowerHalf = sortedData.slice(0, middle);
      const upperHalf = sortedData.slice(sortedData.length % 2 === 0 ? middle : middle + 1);
  
      return [this.median(lowerHalf), this.median(sortedData), this.median(upperHalf)];
    }
  
    interquartileRange() {
      const [Q1, Q3] = this.quartiles();
      return Q3 - Q1;
    }
  }
  
  // Example Usage
  const data = [12, 18, 14, 10, 16, 20, 13, 11, 15, 17];
  const stats = new DescriptiveStatistics(data);
  
  console.log('Mean:', stats.mean());
  console.log('Median:', stats.median());
  console.log('Mode:', stats.mode());
  console.log('Range:', stats.range());
  console.log('Variance:', stats.variance());
  console.log('Standard Deviation:', stats.standardDeviation());
  console.log('Quartiles:', stats.quartiles());
  console.log('Interquartile Range:', stats.interquartileRange());
















































































