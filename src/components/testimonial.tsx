import React from "react";
import Slider from "react-slick";

import TestimonialEl from "./misc/testimonialEl";

const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 2700,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};

function Testimonial() {
    return (
        <React.Fragment>
            <div className="testimonial-container">
                <b>O que dizem sobre a Jactos Fibra:</b>

                <Slider {...sliderSettings} className='testimonial-slider'>
                    <TestimonialEl name="João Pereira" testimonial="A Jactos Fibra transformou minha experiência de navegação. A internet é extremamente rápida e estável." />
                    <TestimonialEl name="Maria Souza" testimonial="O suporte técnico é incrível, sempre disponível e eficiente. Recomendo a todos!" />
                    <TestimonialEl name="Carlos Silva" testimonial="Desde a instalação até o atendimento ao cliente, a Jactos Fibra superou minhas expectativas." />
                    <TestimonialEl name="Fernanda Oliveira" testimonial="A melhor internet que já usei. Perfeita para minha empresa." />
                    <TestimonialEl name="João Pereira" testimonial="A Jactos Fibra transformou minha experiência de navegação. A internet é extremamente rápida e estável." />
                    <TestimonialEl name="Maria Souza" testimonial="O suporte técnico é incrível, sempre disponível e eficiente. Recomendo a todos!" />
                    <TestimonialEl name="Carlos Silva" testimonial="Desde a instalação até o atendimento ao cliente, a Jactos Fibra superou minhas expectativas." />
                    <TestimonialEl name="Fernanda Oliveira" testimonial="A melhor internet que já usei. Perfeita para minha empresa." />
                </Slider>
            </div>
        </React.Fragment>
    )
}

export default Testimonial;