import { test, expect } from '@playwright/test'

test('测试禁用状态是否生效', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#dynamic-disabled')

  const demo = page.locator('#dynamic-disabled')
  const switchBtn = demo.locator('.tiny-switch')
  const ghostBtn = demo.getByRole('button', { name: '幽灵按钮' })

  await switchBtn.click()
  await expect(demo.locator('.tiny-button').first()).toBeDisabled()
  await expect(demo.locator('.tiny-button').first()).toHaveCSS('background-color', 'rgb(240, 240, 240)')
  await expect(demo.locator('.tiny-button').first()).toHaveCSS('color', 'rgb(194, 194, 194)')
  await expect(demo.locator('.tiny-button').first()).toHaveCSS('border-bottom-color', 'rgb(240, 240, 240)')
  await expect(demo.getByRole('button', { name: '次要按钮' }).first()).toBeDisabled()
  await expect(demo.getByRole('button', { name: '主要按钮' }).first()).toBeDisabled()
  await expect(demo.getByRole('button', { name: '成功按钮' }).first()).toBeDisabled()
  await expect(ghostBtn).toHaveCSS('color', 'rgb(194, 194, 194)')
  await expect(ghostBtn).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  await expect(ghostBtn).toHaveCSS('border-bottom-color', 'rgb(219, 219, 219)')

  await switchBtn.click()
  await expect(demo.locator('.tiny-button').first()).not.toBeDisabled()
  await expect(demo.getByRole('button', { name: '次要按钮' }).first()).not.toBeDisabled()
  await expect(demo.getByRole('button', { name: '主要按钮' }).first()).not.toBeDisabled()
  await expect(demo.getByRole('button', { name: '成功按钮' }).first()).not.toBeDisabled()
})
