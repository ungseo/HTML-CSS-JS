    const users = [
      { name: 'John', age: 31, isMarried: true, balance: 100, },
      { name: 'Sarah', age: 22, isMarried: false, balance: 200, },
      { name: 'Ashley', age: 25, isMarried: true, balance: 300, },
      { name: 'Robert', age: 27, isMarried: false, balance: 400, },
      { name: 'Tom', age: 35, isMarried: true, balance: 500, },
    ]
    
    users.forEach (ele => console.log(ele.name));

    let married = users.filter (ele => ele.isMarried == true)
    console.log(married)

    const tom = users.find (ele => ele.name === 'Tom')
    console.log(tom)

    const newUsers = users.map (function(ele) {
      ele.isAlive = true
      return ele
    })


    console.log(newUsers)
    const totalBalance = users.reduce ((acc, ele) => acc + ele.balance, 0)

    console.log(totalBalance)
