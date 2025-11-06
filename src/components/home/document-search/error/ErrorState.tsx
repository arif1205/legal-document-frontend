import { AlertCircle } from "lucide-react";

const ErrorState = ({ title }: { title: string }) => {
	return (
		<div className='bg-red-50 border border-red-400 rounded-xl py-2 flex items-center gap-2 px-4'>
			<div className='flex items-center justify-center'>
				<AlertCircle size={20} className='text-red-400' />
			</div>
			<h2 className='text-base font-medium text-red-700'>{title}</h2>
		</div>
	);
};

export default ErrorState;
