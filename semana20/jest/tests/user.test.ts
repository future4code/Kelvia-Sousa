import { performPurchase, User } from "../src/user"

describe("check if a user can make a purchase ", () => {
  test("Testing balance greater than value", () => {
    const user: User = {
      name: "Kelli",
      balance: 1000
    }
  
    const result = performPurchase(user, 550)
    
    expect(result).toEqual({
      name: "Kelli",
      balance: 450
    })
  })
  test("Testing balance greater than value", () => {
    const user: User = {
      name: "Kelli",
      balance: 5000
    }
  
    const result = performPurchase(user, 5000)
    
    expect(result).toEqual({
      ...user,
      balance: 0
    })
  })
  test("Testing balance greater than value", () => {
    const user: User = {
      name: "Kelli",
      balance: 300
    }
  
    const result = performPurchase(user, 500)
    expect(result).not.toBeDefined()
  })
})