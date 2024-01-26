import {DetailedHTMLProps, InputHTMLAttributes} from "react";

interface ITextFieldClassNameProps {
    label: string
    input: string
}

interface ITextFieldProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'className'>{
    className?: ITextFieldClassNameProps
    label?: string
}

const TextField = ({ label, className,...props}:  ITextFieldProps) => {
    const labelClassName = className?.label
    const inputClassName= className?.label
    const id= props.id ?? crypto.randomUUID()

    return (
        <div>
            {label && <label htmlFor={id} className={labelClassName}>{label}</label>}
                <input
                    id={id}
                    className={`block rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-blue-700 ${inputClassName}`}
                    {...props}
                />
        </div>
    );
};

export default TextField;