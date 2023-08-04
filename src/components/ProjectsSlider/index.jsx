import { createRef } from "react";
import Projects from "@components/Projects";
import ArrowBackIcon from "@icons/icon-arrow-back.svg";
import ArrowForwardIcon from "@icons/icon-arrow-forward.svg";
import "./styles.css";

const ProjectsSlider = () => {
  const projectsContainerRef = createRef();
  let slideInterval;

  const onSlideBack = () => {
    slideInterval = setInterval(
      () => (projectsContainerRef.current.scrollLeft -= 10),
      12
    );
  };

  const onSlideForward = () => {
    slideInterval = setInterval(
      () => (projectsContainerRef.current.scrollLeft += 10),
      12
    );
  };

  const onStopSlide = () => clearInterval(slideInterval);

  return (
    <div className="projects_slider">
      <button
        onMouseDown={onSlideBack}
        onMouseUp={onStopSlide}
        onTouchStart={onSlideBack}
        onTouchEnd={onStopSlide}
        onTouchCancel={onStopSlide}
        className="projects__slide-back"
        aria-label="slide projects back"
      >
        {<ArrowBackIcon />}
      </button>

      <Projects projectsContainerRef={projectsContainerRef} />

      <button
        onMouseDown={onSlideForward}
        onMouseUp={onStopSlide}
        onTouchStart={onSlideForward}
        onTouchEnd={onStopSlide}
        onTouchCancel={onStopSlide}
        className="projects__slide-forward"
        aria-label="slide projects forward"
      >
        {<ArrowForwardIcon />}
      </button>
    </div>
  );
};

export default ProjectsSlider;
