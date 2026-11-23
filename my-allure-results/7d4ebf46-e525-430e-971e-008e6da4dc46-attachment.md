# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: POMtwo\pom2test.spec.js >> End to end
- Location: tests\POMtwo\pom2test.spec.js:8:1

# Error details

```
ReferenceError: expect is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e10]: Swag Labs
        - button "Cart, 1 items" [ref=e13]:
          - generic [ref=e14]: "1"
      - generic [ref=e15]: "Checkout: Overview"
    - main [ref=e17]:
      - generic [ref=e18]:
        - generic [ref=e19]:
          - generic [ref=e20]: QTY
          - generic [ref=e21]: Description
          - generic [ref=e22]:
            - generic [ref=e23]: "1"
            - generic [ref=e24]:
              - button "View details for Sauce Labs Backpack" [ref=e25] [cursor=pointer]:
                - generic [ref=e26]: Sauce Labs Backpack
              - generic [ref=e27]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
              - generic [ref=e28]: $29.99
        - generic [ref=e30]:
          - generic [ref=e31]: "Payment Information:"
          - generic [ref=e32]: "SauceCard #31337"
          - generic [ref=e33]: "Shipping Information:"
          - generic [ref=e34]: Free Pony Express Delivery!
          - generic [ref=e35]: Price Total
          - generic [ref=e36]: "Item total: $29.99"
          - generic [ref=e37]: "Tax: $2.40"
          - generic [ref=e38]: "Total: $32.39"
          - generic [ref=e39]:
            - button "Cancel" [ref=e40] [cursor=pointer]
            - button "Finish" [ref=e41] [cursor=pointer]
  - contentinfo [ref=e42]:
    - list [ref=e43]:
      - listitem [ref=e44]:
        - link "X" [ref=e45] [cursor=pointer]:
          - /url: https://x.com/saucelabs
      - listitem [ref=e46]:
        - link "Facebook" [ref=e47] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e48]:
        - link "LinkedIn" [ref=e49] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e50]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | 
  2  | 
  3  | class summaryPage 
  4  | 
  5  | {
  6  |     constructor(page)
  7  |     {
  8  |         this.page=page;
  9  |         this.subtotal=page.locator('.summary_subtotal_label')
  10 |         this.finishbtn=page.locator('#finish')
  11 |     }
  12 |     async summaryDetails()
  13 |     {
  14 |         const itemtotal=this.subtotal.textContent()
  15 |         console.log("Item total is ",itemtotal)
> 16 |         await expect(itemtotal).toContain('Item total :$')
     |         ^ ReferenceError: expect is not defined
  17 | 
  18 |     }
  19 |     async clickFinish()
  20 |     {
  21 |         await this.finishbtn.click()
  22 |     }
  23 | }
  24 | module.exports= summaryPage
```