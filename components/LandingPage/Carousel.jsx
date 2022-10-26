import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
// import { Card } from '../Card/Card';

const courses = [
    {
        src: 'https://picsum.photos/id/123/1200/400',
        altText: 'Slide 1',
        caption: 'Slide 1',
        key: 1,
      },
      {
        src: 'https://picsum.photos/id/456/1200/400',
        altText: 'Slide 2',
        caption: 'Slide 2',
        key: 2,
      },
      {
        src: 'https://picsum.photos/id/678/1200/400',
        altText: 'Slide 3',
        caption: 'Slide 3',
        key: 3,
      },
];

const CoursesCarousel = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = courses.map(() => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={courses.src}
      >
        <img src={courses.src} alt={courses.altText} />
        <CarouselCaption
          captionText={courses.caption}
          captionHeader={courses.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <section className="bg-slate-100 lg:px-9 lg:mx-2 py-6">
        <div className="px-12 lg:text-start text-center text-h3 ">
            <p>Cursos populares</p>
        </div>

        <div className="flex md:items-center px-12 py-8 font-semibold">
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            {...args}
            >
            <CarouselIndicators
                items={courses}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
            </Carousel>
        </div>
      </section>
  );
}

export { CoursesCarousel };