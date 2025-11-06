import { cn } from "clsx-for-tailwind";
export default function ListSkeleton({
	className,
	items = 3,
}: {
	className?: string;
	items?: number;
}) {
	return (
		<div className={cn("animate-pulse space-y-2", className)}>
			{Array.from({ length: items }).map((_, index) => (
				<div
					key={index}
					className='flex flex-col space-y-2 border rounded-xl p-4 border-gray-300'>
					{/* Title skeleton */}
					<div className='h-4 w-1/3 rounded bg-gray-200' />
					{/* Description line 1 */}
					<div className='h-3 w-full rounded bg-gray-200/80' />
					{/* Description line 2 */}
					<div className='h-3 w-5/6 rounded bg-gray-200/70' />
				</div>
			))}
		</div>
	);
}
