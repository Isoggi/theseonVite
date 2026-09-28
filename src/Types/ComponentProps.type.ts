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
