import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util'
/// <reference types="@testing-library/jest-dom" />

if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder
}
if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder as any
}
