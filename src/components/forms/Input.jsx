/**
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void } onChange
 */

export function Input({placeholder, value, onChange}) {
return <div>
    <input
        className="border-gray-500 border-1 rounded-md p-1 "
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        />
    </div>
}