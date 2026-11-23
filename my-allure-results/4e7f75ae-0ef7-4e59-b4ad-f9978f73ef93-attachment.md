# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PartAssign5\login.spec.js >> QA Brains Login Module >> Verify login with invalid credentials @regression @login
- Location: tests\PartAssign5\login.spec.js:24:5

# Error details

```
Test timeout of 40000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - link "logo (Practice Site)" [ref=e6] [cursor=pointer]:
        - /url: /ecommerce
        - img "logo" [ref=e7]
        - generic [ref=e8]: (Practice Site)
    - generic [ref=e10]:
      - link "Back to home" [ref=e11] [cursor=pointer]:
        - /url: /
      - generic [ref=e14]:
        - heading "Login" [level=2] [ref=e15]
        - alert [ref=e16]:
          - generic [ref=e17]:
            - generic [ref=e18]:
              - heading "Accepted email:" [level=4] [ref=e19]
              - list [ref=e20]:
                - listitem [ref=e21]: test@qabrains.com
                - listitem [ref=e22]: practice@qabrains.com
                - listitem [ref=e23]: student@qabrains.com
            - generic [ref=e24]:
              - heading "Password:" [level=4] [ref=e25]
              - list [ref=e26]:
                - listitem [ref=e27]: Password123
                - listitem [ref=e28]: Password123
                - listitem [ref=e29]: Password123
        - generic [ref=e30]:
          - generic [ref=e31]:
            - generic [ref=e32]:
              - generic [ref=e33]: Email*
              - textbox "Email*" [ref=e35]:
                - /placeholder: eg. user@user.com
                - text: wrong@gmail.com
            - generic [ref=e36]:
              - generic [ref=e37]: Password*
              - generic [ref=e38]:
                - textbox "Password*" [ref=e39]:
                  - /placeholder: "*******"
                  - text: Wrong123
                - button [ref=e40] [cursor=pointer]
          - button "Login" [ref=e47] [cursor=pointer]
  - region "Notifications alt+T"
  - alert [ref=e50]
```