import { cn } from "clsx-for-tailwind";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
	variant?: "primary" | "success" | "warning" | "danger";
};
export default function Badge({
	className,
	variant = "primary",
	...props
}: Props) {
	return (
		<span
			className={cn(
				"inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
				{
					"bg-blue-50 text-blue-700 border-blue-200": variant === "primary",
					"bg-emerald-50 text-emerald-700 border-emerald-200":
						variant === "success",
					"bg-amber-50 text-amber-700 border-amber-200": variant === "warning",
					"bg-red-50 text-red-700 border-red-200": variant === "danger",
				},
				className
			)}
			{...props}
		/>
	);
}
