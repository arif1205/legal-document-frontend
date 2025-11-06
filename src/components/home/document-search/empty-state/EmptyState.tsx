import { cn } from "clsx-for-tailwind";
import { Search } from "lucide-react";

const EmptyState = ({ className }: { className?: string }) => {
	return (
		<div className={cn("mt-16 text-center text-gray-500", className)}>
			<div className='mx-auto h-14 w-14 rounded-2xl border bg-white flex items-center justify-center'>
				<Search size={20} className='text-gray-400' />
			</div>
			<h2 className='mt-4 text-lg font-medium text-gray-800'>
				Start with a question
			</h2>
			<p className='mt-1 text-sm'>
				Try “termination for material breach” or “governing law”.
			</p>
		</div>
	);
};

export default EmptyState;
