// Validation utilities for forms

export interface ValidationRule {
  validate: (value: any) => boolean
  message: string
}

export interface ValidationRules {
  [key: string]: ValidationRule[]
}

// Required validation
export const required = (message = 'This field is required'): ValidationRule => ({
  validate: (value) => {
    if (typeof value === 'string') return value.trim().length > 0
    return value !== null && value !== undefined
  },
  message,
})

// Email validation
export const email = (message = 'Please enter a valid email'): ValidationRule => ({
  validate: (value) => {
    if (!value) return true // Optional by default
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(value)
  },
  message,
})

// Min length validation
export const minLength = (min: number, message?: string): ValidationRule => ({
  validate: (value) => {
    if (!value) return true
    return value.length >= min
  },
  message: message || `Must be at least ${min} characters`,
})

// Max length validation
export const maxLength = (max: number, message?: string): ValidationRule => ({
  validate: (value) => {
    if (!value) return true
    return value.length <= max
  },
  message: message || `Must be no more than ${max} characters`,
})

// Min value validation (for numbers)
export const minValue = (min: number, message?: string): ValidationRule => ({
  validate: (value) => {
    if (!value && value !== 0) return true
    return parseFloat(value) >= min
  },
  message: message || `Must be at least ${min}`,
})

// Max value validation (for numbers)
export const maxValue = (max: number, message?: string): ValidationRule => ({
  validate: (value) => {
    if (!value && value !== 0) return true
    return parseFloat(value) <= max
  },
  message: message || `Must be no more than ${max}`,
})

// URL validation
export const url = (message = 'Please enter a valid URL'): ValidationRule => ({
  validate: (value) => {
    if (!value) return true
    try {
      new URL(value)
      return true
    } catch {
      return false
    }
  },
  message,
})

// Phone validation (basic)
export const phone = (message = 'Please enter a valid phone number'): ValidationRule => ({
  validate: (value) => {
    if (!value) return true
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/
    return phoneRegex.test(value)
  },
  message,
})

// Password strength validation
export const password = (message = 'Password must be at least 6 characters'): ValidationRule => ({
  validate: (value) => {
    if (!value) return true
    return value.length >= 6
  },
  message,
})

// Match another field
export const matches = (field: string, message?: string): ValidationRule => ({
  validate: (value, values) => {
    if (!value) return true
    return value === values[field]
  },
  message: message || `Must match ${field}`,
})

// Custom validator
export const custom = (fn: (value: any) => boolean, message: string): ValidationRule => ({
  validate: fn,
  message,
})

// Validate a single value against rules
export function validateField(value: any, rules: ValidationRule[]): string | null {
  for (const rule of rules) {
    if (!rule.validate(value)) {
      return rule.message
    }
  }
  return null
}

// Validate entire form
export function validateForm(values: Record<string, any>, rules: ValidationRules): Record<string, string> {
  const errors: Record<string, string> = {}

  for (const field in rules) {
    const error = validateField(values[field], rules[field])
    if (error) {
      errors[field] = error
    }
  }

  return errors
}

// Check if form has any errors
export function hasErrors(errors: Record<string, string>): boolean {
  return Object.keys(errors).length > 0
}

// Common validation rules for reuse
export const jobFormRules: ValidationRules = {
  title: [required(), minLength(5), maxLength(100)],
  description: [required(), minLength(20), maxLength(2000)],
  quantity: [required(), minValue(1)],
  deadline: [required()],
  budgetMin: [required(), minValue(1)],
  budgetMax: [required(), minValue(1)],
}

export const bidFormRules: ValidationRules = {
  price: [required(), minValue(1)],
  turnaroundDays: [required(), minValue(1), maxValue(365)],
  portfolioLink: [url('Please enter a valid URL')],
}

export const loginFormRules: ValidationRules = {
  email: [required(), email()],
  password: [required(), minLength(6)],
}

export const signupFormRules: ValidationRules = {
  displayName: [required(), minLength(2), maxLength(50)],
  email: [required(), email()],
  password: [required(), minLength(6)],
  confirmPassword: [required(), matches('password', 'Passwords must match')],
}
