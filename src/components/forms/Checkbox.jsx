/**
 * Checkbox avec un libellé sur la droite
 * @param {boolean} checked
 * @param {(v:boolean) => void} onChange
 * @param {string} label
 * @param {string} id
 */

export function Checkbox({checked, onChange, label, id}) {
return <div>
    <input
        className="mr-1"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        id={id}
        />
    <label htmlFor={id}>{label}</label>
</div>
}