const zero = [
  ["   ___   "],
  ["  / _ \\  "],
  [" | | | | "],
  [" | |_| | "],
  ["  \\___/  "]
]
const one = [
  ["  _  "],
  [" / | "],
  [" | | "],
  [" | | "],
  [" |_| "]
]
const two =[
  ["  ____   "],
  [" |___ \\  "],
  ["   __) | "],
  ["  / __/  "],
  [" |_____| "]
]
const three = [
  ["  _____  "],
  [" |___ /  "],
  ["   |_ \\  "],
  ["  ___) | "],
  [" |____/  "]
]
const four = [
  ["  _  _  "],
  [" | || | "],
  [" | || | "],
  [" |__  | "],
  ["    |_| "]
]
const five = [
  ["  ____   "],
  [" | ___|  "],
  [" |___ \\  "],
  ["  ___) | "],
  [" |____/  "]
]
const six = [
  ["   __    "],
  ["  / /_   "],
  [" |  _ \\  "],
  [" | (_) | "],
  ["  \\___/  "]
]
const seven = [
  ["  _____  "], 
  [" |___  | "],
  ["    / /  "],
  ["   / /   "],
  ["  /_/    "]
]
const eight = [
  ["   ___   "],
  ["  ( _ )  "],
  ["  / _ \\  "],
  [" | (_) | "],
  ["  \\___/  "]
]
const nine = [
  ["   ___    "],
  ["  / _ \\   "],
  [" | (_) |  "],
  ["  \\__, |  "],
  ["    /_/   "]
]
const dots = [
  ["   "],
  [" _ "],
  ["(_)"],
  [" _ "],
  ["(_)"]
]
const numbers = [zero,one,two,three,four,five,six,seven,eight,nine]

function toBlock(number1, number2) {
  let result = []
  number1.forEach(line => {
    result.push(line)
  })
  number2.forEach((line,idx) => {
    result[idx] = result[idx].concat(line)
  })
  return result
}

function pretty(block) {
  return block
    .reduce(function(acc, line) {
      return acc.concat([line.join("")]);
    }, [])
    .join("\n");
}

function concatBlocks(...blocks) {
  if (blocks.length === 0) {
    return EMPTY_BLOCK;
  }

  var result = blocks[0];

  for (var i = 1; i < blocks.length; i ++) {
    result = toBlock(result, blocks[i]);
  }

  return result;
}

function clock(){
  let time = new Date()
  let hours = time.getHours()
  let minutes = time.getMinutes()
  let seconds = time.getSeconds()

  let hoursSplit = []
  let minutesSplit = [] 
  let secondsSplit = []
  if(hours/10 >= 1){
    hoursSplit.push(Math.floor(hours/10))
    hoursSplit.push(hours%10)
  } else {
    hoursSplit.push(0)
    hoursSplit.push(hours)
  }
  if(minutes/10 >= 1){
    minutesSplit.push(Math.floor(minutes/10))
    minutesSplit.push(minutes%10)
  }else {
    minutesSplit.push(0)
    minutesSplit.push(minutes)
  }
  if(seconds/10 >= 1){
    secondsSplit.push(Math.floor(seconds/10))
    secondsSplit.push(seconds%10)
  }else {
    secondsSplit.push(0)
    secondsSplit.push(seconds)
  }
  const finalTime = hoursSplit.concat(minutesSplit,secondsSplit)
  const h = toBlock(numbers[finalTime[0]],numbers[finalTime[1]])
  const m = toBlock(numbers[finalTime[2]],numbers[finalTime[3]])
  const s = toBlock(numbers[finalTime[4]],numbers[finalTime[5]])
  let res = concatBlocks(h,dots,m,dots,s)

  console.log(pretty(res))
  setTimeout(console.clear, 999)
  setTimeout(clock,1000)

}
console.clear()
clock()
