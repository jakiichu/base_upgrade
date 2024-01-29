import {DetailedHTMLProps, forwardRef, InputHTMLAttributes, LegacyRef} from "react";

interface ITextFieldClassNameProps {
    label: string
    input: string
}

interface ITextFieldProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'className'> {
    className?: ITextFieldClassNameProps
    label?: string
    error?: string
}

const TextField = forwardRef(
    ({
         label,
         className,
         error,
         ...props
     }: ITextFieldProps, ref: LegacyRef<HTMLInputElement>) => {
        const labelClassName = className?.label
        const inputClassName = className?.label
        const id = props.id ?? crypto.randomUUID()

        return (
            <div>
                {label && <label htmlFor={id} className={labelClassName}>{label}</label>}
                <input
                    ref={ref}
                    id={id}
                    className={`block rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1  ${error ? "ring-red-600 text-red-600" : 'ring-blue-700'} ${inputClassName}`}
                    {...props}
                />
                {error && <p className="text-xs leading-6 text-red-600">{error}</p>}
            </div>
        );
    })

export default TextField;