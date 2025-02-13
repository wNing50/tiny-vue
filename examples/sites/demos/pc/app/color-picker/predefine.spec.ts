import { test, expect } from '@playwright/test'

test('测试预定义颜色', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-picker#predefine')
  await page.getByRole('button', { name: 'Toggle predefine visibility' }).click()
  await page.locator('.tiny-color-picker__inner').click()
  await expect(page.getByRole('button', { name: '预定义颜色' })).toBeVisible()
  await page.getByRole('button', { name: '预定义颜色' }).click()
  await expect(page.locator('.tiny-color-select-panel__predefine > div:nth-child(8)')).toBeVisible()
  await page.getByText('取消选择预定义颜色 Append predefine').click()
  await page.getByText('取消选择预定义颜色 Append predefine').click()
  await page.getByText('取消选择预定义颜色 Append predefine').click()
  await page.getByRole('button', { name: '选择' }).click()
  await page.getByRole('button', { name: 'Append predefine color' }).click()
  await page.locator('.tiny-color-picker__inner').click()
  await page.getByRole('button', { name: '预定义颜色' }).click()
  await expect(page.locator('.tiny-color-select-panel__predefine > div:nth-child(9)')).toBeVisible()
  await page.getByRole('button', { name: '选择' }).click()
  await page.getByRole('button', { name: 'Pop predefine color' }).click()
  await page.locator('.tiny-color-picker').click()
  await page.getByRole('button', { name: '预定义颜色' }).click()
  await expect(page.locator('.tiny-color-select-panel__predefine > div:nth-child(9)')).not.toBeVisible()
  await expect(page.locator('.tiny-color-select-panel__predefine > div:nth-child(8)')).toBeVisible()
  await page.locator('.tiny-color-select-panel__predefine > div:nth-child(8)').click()
  await page.getByRole('button', { name: '选择' }).click()
  await page.locator('.tiny-color-picker__inner').click()
  await page.getByText('取消选择预定义颜色 Append predefine').click()
})
