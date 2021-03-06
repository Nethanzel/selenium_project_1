// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
require('selenium-webdriver/chrome')
require('chromedriver')

describe('Input validations', function() {
  this.timeout(15000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Input validations', async function() {
    await driver.get("http://zero.webappsecurity.com/")
    await driver.manage().window().setRect(1166, 620)
    await driver.findElement(By.css("#feedback > div")).click()
    await driver.findElement(By.id("name")).click()
    await driver.findElement(By.id("name")).sendKeys("005454000045445")
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("invalid mail direction")
    await driver.findElement(By.id("subject")).click()
    await driver.findElement(By.id("subject")).sendKeys("456456")
    await driver.findElement(By.id("comment")).click()
    await driver.findElement(By.id("comment")).sendKeys("464565464")
    await driver.findElement(By.name("submit")).click()
    await driver.findElement(By.css(".offset3")).click()
  })
})
