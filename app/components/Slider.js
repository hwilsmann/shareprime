'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Slider = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    url: '',
  });

  const [slides, setSlides] = useState([
    {
      title: "Lorem Ipsum dolor sit amet consectetur",
      description: "Duis nec sagittis neque, a molestie arcu. Donec mauris sapien, tristique ac lorem non, condimentum placerat odio. Donec semper arcu sit amet malesuada tristique. Integer euismod efficitur quam, nec semper ex bibendum in. Ut ac sagittis diam, et accumsan ante. Cras vel rutrum neque. Nullam neque nisl, tristique id venenatis ac, convallis vitae urna.",
      image: 'https://placehold.jp/650x492.jpg',
      url: 'https://www.google.com.br/',
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSlide = { ...formData };

    setSlides((prevSlides) => [...prevSlides, newSlide]);

    setFormData({
      title: '',
      description: '',
      image: '',
      url: '',
    });

    toast.success('Slide adicionado com sucesso!');
  };

  return (
    <div className='section-wrapper'>
      <ToastContainer
        position="bottom-center"
      />

      <div className='swiper-container' id='slider'>
        <Swiper
          autoHeight={true}
          watchSlidesProgress={true}
          modules={[Navigation, Pagination]}
          navigation={{ nextEl: '.swiper-button.-next', prevEl: '.swiper-button.-prev' }}
          pagination={{ clickable: true }}
          speed={1000}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Slide {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="swiper-button -prev" type='button'>
          <svg viewBox="0 0 14 24" fill="none"><path d="M12 2L2 12L12 22" stroke="#ffb500" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>

        <button className="swiper-button -next" type='button'>
          <svg viewBox="0 0 14 24" fill="none"><path d="M2 2L12 12L2 22" stroke="#ffb500" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>

      <form className='form' id='register' onSubmit={handleSubmit}>
        <h2>Cadastro</h2>

        <div className='field'>
          <label className='label'>Título*</label>

          <input className='input' name='title' type='text' value={formData.title} onChange={handleInputChange} required />
        </div>
        <div className='field'>
          <label className='label'>Descrição*</label>

          <textarea className='textarea' name='description' rows={16} value={formData.description} onChange={handleInputChange} required />
        </div>
        <div className='field'>
          <label className='label'>URL (Imagem)*</label>

          <input className='input' name='image' type='text' value={formData.image} onChange={handleInputChange} required />
        </div>
        <div className='field'>
          <label className='label'>URL (Direcionamento)*</label>

          <input className='input' name='url' type='text' value={formData.url} onChange={handleInputChange} required />
        </div>
        
        <button className='button -button' type="submit">Adicionar</button>
      </form>
    </div>
  );
};

const Slide = ({ title, description, image, url }) => {
  return (
    <a className='anchor' href={url} target='_blank'>
      <div className='left'>
        <div className='description'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>

      <div className='right'>
        <picture className='picture'>
          <Image
            alt=''
            src={image}
            width={650}
            height={492}
            priority
          />
        </picture>
      </div>
    </a>
  );
};

export default Slider;

