import { cn } from "clsx-for-tailwind";
import { format } from "date-fns";
import { Loader2, Search } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { generate } from "../../../lib/api/legal-documents/legalDocuments.api.lib";
import type { GenerateResponse } from "../../../types";
import Textfield from "../../form-fields/Textfield";
import ListSkeleton from "../../ui/skeletons/ListSkeleton";
import ResultCard from "../search-result/ResultCard";
import EmptyState from "./empty-state/EmptyState";

const DocumentSearchContainer = () => {
	const [query, setQuery] = useState("");
	const [data, setData] = useState<GenerateResponse["data"] | null>(null);
	const [loading, setLoading] = useState(false);
	const [lastSearchedAt, setLastSearchedAt] = useState<Date | null>(null);

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		const q = query.trim();
		if (!q) {
			setData(null);
			return;
		}
		setLoading(true);
		setData(null);

		try {
			const res = await generate(q);
			if (!res.success) throw new Error(res.error);
			setData(res.data ?? null);
			setLastSearchedAt(new Date());
			toast.success("Results loaded", {
				duration: 3000,
			});
		} catch (err: unknown) {
			toast.error((err as Error)?.message ?? "Something went wrong");
		} finally {
			setLoading(false);
		}
	}

	return (
		<div>
			{/* Search box */}
			<form onSubmit={onSubmit} className='space-y-2'>
				<div className='relative max-w-3xl mx-auto'>
					<Search
						className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
						size={18}
					/>
					<Textfield
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder='e.g., termination clause breach'
						className='pl-10 pr-36'
					/>
					<button
						type='submit'
						disabled={loading}
						className={cn(
							"absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-3 py-2 text-sm font-medium text-white",
							"bg-indigo-600 transition hover:bg-indigo-700",
							loading && "opacity-60 cursor-not-allowed"
						)}>
						{loading ? (
							<span className='flex items-center gap-1'>
								<Loader2 className='animate-spin' size={16} /> Searching…
							</span>
						) : (
							"Search"
						)}
					</button>
				</div>
				<div className='max-w-3xl mx-auto'>
					{lastSearchedAt && (
						<p className='text-xs text-gray-600'>
							Last searched: {format(lastSearchedAt, "MMM d, yyyy h:mm a")}
						</p>
					)}
				</div>
			</form>

			{/* Loading state */}
			{loading && (
				<div className='max-w-3xl mx-auto py-4'>
					<ListSkeleton items={3} />
				</div>
			)}

			{/* Empty state */}
			{!loading && !data && <EmptyState />}

			{/* Results */}
			{!loading && data && (
				<section className='mt-8 space-y-4 max-w-3xl mx-auto'>
					<div className='rounded-xl border bg-white py-3 px-5 border-gray-300'>
						<h2 className='text-base font-semibold'>Summary</h2>
						<p className='mt-1 text-gray-700'>{data.summary}</p>
					</div>

					<div className='space-y-3'>
						<h3 className='px-1 text-base font-semibold'>Matches</h3>
						{data.matches.length ? (
							data.matches.map((data) => (
								<ResultCard key={data.docId} data={data} />
							))
						) : (
							<div className='rounded-xl border bg-white p-5 text-sm text-gray-500 border-gray-300'>
								No matches found. Try with a different text.
							</div>
						)}
					</div>
				</section>
			)}
		</div>
	);
};

export default DocumentSearchContainer;
