import { Carousel } from "../../Components/Carousel.component";

const slides = [
  "Welcome to theseOn",
  "Explore our latest articles",
  "View our portfolio",
];

export function LandingCarousel(): React.JSX.Element {
  return (
    <Carousel ariaLabel="Featured content" autoPlayInterval={5000}>
      {slides.map((slide) => (
        <div key={slide}>{slide}</div>
      ))}
    </Carousel>
  );
}
