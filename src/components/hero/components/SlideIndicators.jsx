import PropTypes from "prop-types";

export default function SlideIndicators({ slideCount, activeIndex, onSelect }) {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: slideCount }).map((_, index) => (
        <button
          key={`hero-indicator-${index}`}
          type="button"
          aria-label={`Go to slide ${index + 1}`}
          onClick={() => onSelect(index)}
          className={`h-3 w-3 rounded-full transition-all duration-200 ${
            index === activeIndex ? "bg-white scale-125" : "bg-white/40"
          }`}
        />
      ))}
    </div>
  );
}

SlideIndicators.propTypes = {
  slideCount: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};
