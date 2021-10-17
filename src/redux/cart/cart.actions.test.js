const cart_actions = require("./cart.actions")
// @ponicode
describe("cart_actions.toggleCartHidden", () => {
    test("0", () => {
        let callFunction = () => {
            cart_actions.toggleCartHidden()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("cart_actions.addItem", () => {
    test("0", () => {
        let callFunction = () => {
            cart_actions.addItem("ISO 22000")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            cart_actions.addItem("label_3")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            cart_actions.addItem("AOP")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            cart_actions.addItem("label_2")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            cart_actions.addItem("ISO 9001")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            cart_actions.addItem(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("cart_actions.removeItem", () => {
    test("0", () => {
        let callFunction = () => {
            cart_actions.removeItem("ISO 9001")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            cart_actions.removeItem("label_2")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            cart_actions.removeItem("ISO 22000")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            cart_actions.removeItem("AOP")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            cart_actions.removeItem("label_1")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            cart_actions.removeItem(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("cart_actions.clearItemFromCart", () => {
    test("0", () => {
        let callFunction = () => {
            cart_actions.clearItemFromCart("label_1")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            cart_actions.clearItemFromCart("ISO 22000")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            cart_actions.clearItemFromCart("AOP")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            cart_actions.clearItemFromCart("label_3")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            cart_actions.clearItemFromCart("label_2")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            cart_actions.clearItemFromCart(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
