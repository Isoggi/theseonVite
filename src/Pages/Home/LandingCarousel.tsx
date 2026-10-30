import { Carousel } from "../../Components";
import { ILandingCarouselSlide } from "../../Interfaces";
import { CarouselItem } from "../../Types";
import { LandingCarouselSlide } from "../../assets/Data";

export default function LandingCarousel(): React.JSX.Element {
  const data = LandingCarouselSlide as ILandingCarouselSlide[];
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
      showControls={true}
      showIconControls={true}
      showControlsMeta={false}
    ></Carousel>
  );
}
