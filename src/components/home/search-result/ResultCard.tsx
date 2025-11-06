import { cn } from "clsx-for-tailwind";
import { FileText } from "lucide-react";
import Badge from "../../ui/badge/Badge";
import type { Match } from "../../../types";

export default function ResultCard({ data }: { data: Match }) {
	const scorePct = Math.round(Math.min(1, Math.max(0, data.score)) * 100); // normalize to 0..100
	const risk =
		scorePct >= 70
			? { label: "High", variant: "success" as const }
			: scorePct >= 40
			? { label: "Medium", variant: "primary" as const }
			: { label: "Low", variant: "warning" as const };

	return (
		<article
			className={cn(
				"group relative rounded-xl border bg-white p-4 transition border-gray-300",
				"hover:shadow-sm hover:border-gray-300"
			)}>
			<div className='flex items-start justify-between gap-3'>
				<div className='flex items-center gap-2'>
					<div className='grid h-9 w-9 place-content-center rounded-lg border bg-gray-50 text-gray-600 border-gray-300'>
						<FileText size={18} />
					</div>
					<h4 className='text-sm font-semibold'>{data.title}</h4>
				</div>
				<Badge variant={risk.variant}>{risk.label}</Badge>
			</div>

			<p className='mt-2 text-sm text-gray-600'>{data.text}</p>
		</article>
	);
}
