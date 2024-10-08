import React from 'react';
import arrow from '../components/img/1.jpg';
import arrow2 from '../components/img/2.jpg';
import arrow3 from '../components/img/3.jpg';

function Body() {
  return (
    <main>
      <section id="features">
        <h2>Особенности</h2>
        <p>Мы не обманываем своих клиентов.</p>
      </section>
      <section id="pricing">
        <h2>Цены</h2>
        <p>Доступные планы и цены.</p>
      </section>
      <section id="gallery">
        <h2>Галерея</h2>
        <div className="gallery-images">
          <div><img src={arrow} alt="Описание изображения 1" /></div>
          <div><img src={arrow2} alt="Описание изображения 2" /></div>
          <div><img src={arrow3} alt="Описание изображения 3" /></div>
        </div>
      </section>
      <section id="testimonials">
        <h2>Отзывы</h2>
        <blockquote>Это был невероятный опыт!</blockquote>
        <p>- Дима</p>
        <blockquote>Я обязательно вернусь снова.</blockquote>
        <p>- Миша</p>
      </section>
      <section id="faq">
        <h2>Часто задаваемые вопросы</h2>
        <p><strong>Вы обманываете:</strong> Да, мы делаем это открыто, поэтому это не обман.</p>
      </section>
      <section id="contact">
        <h2>Свяжитесь с нами</h2>
        <p>Телефон: 88005553535</p>
      </section>
    </main>
  );
}

export default Body;

