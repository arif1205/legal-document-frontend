import { cn } from "clsx-for-tailwind";
import { type ChangeEventHandler } from "react";

const Textfield = ({
	value,
	onChange,
	placeholder,
	className,
}: {
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	placeholder?: string;
	className?: string;
}) => {
	return (
		<div>
			<input
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className={cn(
					"w-full rounded-xl border bg-white py-3 px-4 text-sm outline-none transition",
					"placeholder:text-gray-400",
					"border-gray-400",
					"focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500",
					className
				)}
			/>
		</div>
	);
};

export default Textfield;
