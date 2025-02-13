import { test, expect } from '@playwright/test'

test('dialogBox 弹窗的宽度和最大高度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#dialog-width')

  const dialogBox = page.locator('.tiny-dialog-box')
  await page.getByRole('button', { name: /30%/ }).click()
  await expect(dialogBox.first()).toHaveCSS('max-height', '200px')
  await page.getByRole('button', { name: 'Close' }).click()
  await page.getByRole('button', { name: /60%/ }).click()
  await expect(dialogBox.nth(1)).toBeVisible()
})
