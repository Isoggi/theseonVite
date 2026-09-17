import { Button, makeStyles, tokens } from "@fluentui/react-components";
import * as React from "react";

const useStyles = makeStyles({
  root: {
    position: "relative",
    width: "100%",
  },
  viewport: {
    overflow: "hidden",
    width: "100%",
  },
  slider: {
    display: "flex",
    transitionDuration: "300ms",
    transitionProperty: "transform",
    transitionTimingFunction: "ease-in-out",
  },
  slide: {
    flex: "0 0 100%",
    minWidth: 0,
  },
  controls: {
    alignItems: "center",
    display: "flex",
    gap: tokens.spacingHorizontalS,
    justifyContent: "center",
    marginTop: tokens.spacingVerticalM,
  },
  indicators: {
    display: "flex",
    gap: tokens.spacingHorizontalXS,
  },
  indicator: {
    minWidth: "32px",
  },
  status: {
    color: tokens.colorNeutralForeground2,
    fontSize: tokens.fontSizeBase200,
  },
});

export type CarouselProps = {
  children: React.ReactNode;
  /** The index of the first slide shown. */
  initialIndex?: number;
  /** Automatically advance slides at this interval, in milliseconds. */
  autoPlayInterval?: number;
  /** Continue at the first slide after reaching the last slide. */
  loop?: boolean;
  /** Accessible name for the carousel region. */
  ariaLabel?: string;
  className?: string;
  onSlideChange?: (index: number) => void;
};

function getValidIndex(index: number, slideCount: number): number {
  return Math.min(Math.max(index, 0), Math.max(slideCount - 1, 0));
}

export function Carousel({
  children,
  initialIndex = 0,
  autoPlayInterval,
  loop = true,
  ariaLabel = "Carousel",
  className,
  onSlideChange,
}: CarouselProps): React.JSX.Element {
  const classes = useStyles();
  const slides = React.Children.toArray(children);
  const [activeIndex, setActiveIndex] = React.useState(() =>
    getValidIndex(initialIndex, slides.length),
  );

  const goToSlide = React.useCallback(
    (index: number) => {
      if (slides.length === 0) {
        return;
      }

      const nextIndex = loop
        ? (index + slides.length) % slides.length
        : getValidIndex(index, slides.length);

      setActiveIndex(nextIndex);
      onSlideChange?.(nextIndex);
    },
    [loop, onSlideChange, slides.length],
  );

  React.useEffect(() => {
    if (!autoPlayInterval || slides.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      goToSlide(activeIndex + 1);
    }, autoPlayInterval);

    return () => window.clearInterval(timer);
  }, [activeIndex, autoPlayInterval, goToSlide, slides.length]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToSlide(activeIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goToSlide(activeIndex + 1);
    }
  };

  if (slides.length === 0) {
    return <div className={className} />;
  }

  const isFirstSlide = activeIndex === 0;
  const isLastSlide = activeIndex === slides.length - 1;

  return (
    <section
      aria-label={ariaLabel}
      aria-roledescription="carousel"
      className={`${classes.root} ${className ?? ""}`.trim()}
      onKeyDown={handleKeyDown}
    >
      <div className={classes.viewport}>
        <div
          className={classes.slider}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          aria-live={autoPlayInterval ? "off" : "polite"}
        >
          {slides.map((slide, index) => (
            <div
              aria-hidden={index !== activeIndex}
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
              className={classes.slide}
              key={index}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className={classes.controls}>
        <Button
          aria-label="Previous slide"
          disabled={!loop && isFirstSlide}
          onClick={() => goToSlide(activeIndex - 1)}
        >
          Previous
        </Button>
        <div className={classes.indicators} role="tablist" aria-label="Slides">
          {slides.map((_, index) => (
            <Button
              appearance={index === activeIndex ? "primary" : "subtle"}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === activeIndex}
              className={classes.indicator}
              key={index}
              onClick={() => goToSlide(index)}
              role="tab"
            >
              {index + 1}
            </Button>
          ))}
        </div>
        <Button
          aria-label="Next slide"
          disabled={!loop && isLastSlide}
          onClick={() => goToSlide(activeIndex + 1)}
        >
          Next
        </Button>
      </div>
      <div className={classes.status} aria-live="polite">
        Slide {activeIndex + 1} of {slides.length}
      </div>
    </section>
  );
}

export default Carousel;
