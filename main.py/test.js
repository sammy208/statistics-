
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
















































































