class Person {
  name: string
  job: string

  constructor(name: string, job: string) {
    this.name = name
    this.job = job
  }

  introduce(): string {
    return `${this.name}は${this.job}`
  }
}

let tom = new Person('tom', 'エンジニア')
console.log(tom.introduce())

tom.introduce = function (): string {
  return '上書き'
}

console.log(tom.introduce())