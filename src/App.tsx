import DocumentSearchContainer from "./components/home/document-search/DocumentSearchContainer";

export default function App() {
	return (
		<div className='min-h-screen flex flex-col'>
			{/* Header */}
			<header className='sticky top-0 z-10 border-b border-gray-300 bg-white/80 shadow-xs'>
				<div className='px-4 py-4 text-center'>
					<h1 className='text-2xl font-semibold tracking-tight'>
						Legal Document Search
					</h1>
					<p className='text-sm text-gray-600'>
						Ask a question and get a summary of the legal documents.
					</p>
				</div>
			</header>

			{/* Main */}
			<main className='px-4 py-8 grow'>
				<DocumentSearchContainer />
			</main>

			{/* Footer */}
			<footer className='px-4 py-5 text-center text-sm text-gray-500 border-t border-gray-300'>
				© {new Date().getFullYear()} Legal Document Search. All rights reserved.
			</footer>
		</div>
	);
}
