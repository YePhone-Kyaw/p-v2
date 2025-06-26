// A dedicated component for the slider arrows
const CustomArrow = ({ type, onClick }) => {
  const isNext = type === 'next';
  return (
    <button
      className={`absolute top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-teal-600/30 text-teal-300 hover:bg-teal-400/40
                  ${isNext ? 'right-0 sm:-right-8' : 'left-0 sm:-left-8'}`}
      onClick={onClick}
      aria-label={isNext ? "Next Project" : "Previous Project"}
    >
      {isNext ? (
        // Simple SVG for right arrow
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      ) : (
        // Simple SVG for left arrow
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      )}
    </button>
  );
};

export default CustomArrow;