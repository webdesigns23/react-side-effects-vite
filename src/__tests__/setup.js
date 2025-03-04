import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import 'whatwg-fetch' // Fixes fetch issues in CodeGrade
import { Blob } from 'node:buffer' // Required for Node 16 in CodeGrade

afterEach(() => {
  cleanup()
})
