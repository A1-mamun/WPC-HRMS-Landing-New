import ReviewCarousel from "../../components/home/reviews-carousel";

const Reviews = () => {
  return (
    <section className="padding-responsive">
      <div className="bg-bg-primary px-4 py-6 lg:px-8 lg:py-10 rounded-3xl ">
        <h1 className="text-white-70 text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-jura my-2 md:my-3 lg:my-4">
          Pioneering Tech to Startups: <br />
          WhiteCode&apos;s Trail of Success Stories.
        </h1>
        <ReviewCarousel />
      </div>
    </section>
  );
};

export default Reviews;
