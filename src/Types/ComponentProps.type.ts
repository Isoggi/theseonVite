export type CarouselItem = {
  /** Unique identifier for the slide */
  id: string;
  /** Optional title shown on the slide */
  title?: string;
  /** URL for the slide background image */
  backgroundImage?: string;
  /** Optional description or content shown on the slide */
  description?: string;
  /** Arbitrary content shown on the slide; can be string or React node */
  data?: React.ReactNode;
};

export type CarouselProps = {
  /** Optional children slides; used when `items` is not provided */
  children?: React.ReactNode;
  /** Items to render as slides. When provided, items are used instead of children. */
  items?: CarouselItem[];
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
