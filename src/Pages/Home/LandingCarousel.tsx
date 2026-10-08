import { Carousel } from "../../Components";
import { ILandingCarouselSlide } from "../../Interfaces";
import { CarouselItem } from "../../Types";
import landingCarouselData from "../../assets/Data/LandingCarouselSlide.json";

export function LandingCarousel(): React.JSX.Element {
  const data = landingCarouselData as ILandingCarouselSlide[];
  const transformedData: CarouselItem[] = data.map((slide) => ({
    id: slide.id.toString(),
    title: slide.title,
    backgroundImage: slide.image,
    description: slide.description,
  }));
  return (
    <Carousel
      ariaLabel="Featured Content"
      autoPlayInterval={5000}
      items={transformedData}
      initialIndex={0}
      loop={true}
      className="landing-carousel"
      onSlideChange={(index) => console.log("Slide changed to:", index)}
    >
      {/* {data.map((slide) => (
        <div key={slide.id}>
          <img src={slide.image} alt={slide.title} />
          <h2>{slide.title}</h2>
          <p>{slide.description}</p>
        </div>
      ))} */}
    </Carousel>
  );
}
