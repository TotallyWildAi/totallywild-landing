import { ChangeEvent } from 'react'

interface FloatingInputProps {
  label: string
  name: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  type?: string
  textarea?: boolean
  rows?: number
  required?: boolean
  autoComplete?: string
}

/**
 * Floating-label field from the vision template. The float mechanism is
 * pure CSS (:placeholder-shown with a single-space placeholder), so it
 * works in prerendered HTML before hydration.
 */
export default function FloatingInput({
  label,
  name,
  value,
  onChange,
  type = 'text',
  textarea = false,
  rows = 5,
  required = false,
  autoComplete,
}: FloatingInputProps) {
  return (
    <div className="float-wrap">
      {textarea ? (
        <textarea
          className="float-input"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder=" "
          rows={rows}
          required={required}
          style={{ resize: 'vertical' }}
        />
      ) : (
        <input
          className="float-input"
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder=" "
          required={required}
          autoComplete={autoComplete}
        />
      )}
      <label className="float-label" htmlFor={name}>
        {label}
      </label>
    </div>
  )
}
