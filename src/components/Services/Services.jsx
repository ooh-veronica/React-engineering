import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import './Services.css';
import one from '../../image/one.png';
import two from '../../image/two.png';
import three from '../../image/tree.png';
import four from '../../image/four.png';
import bar from '../../image/progress bar.png';

const Services = () => (
    <section className="services">
      <p className="services_main__title">Услуги</p>
      <h3>
        Выполняем как комплексное обследование, так и отдельные виды работ
      </h3>
      <div className='scroll_container' style={{ width: '100vw'}}>
        <HorizontalScroll pageLock={true} reverseScroll={true} className='scroll' style={{ height: '444px', width: '100vw' }}>
          <div className='marginer_left'></div>
          <div className="services_item">
            <img className="services_image" src={one}></img>
            <h5>Общее обследование</h5>
            <p className="services_text">
              Экспертиза отдельных конструкций, обмерные работы, определение
              прочности, расчет несущей способности и т.д.
            </p>
            <p className="services_title">Подробнее</p>
          </div>
          <div className="services_item">
            <img className="services_image" src={two}></img>
            <h5>Тепловизионная съемка</h5>
            <p className="services_text">
              Исследование системы отопления, вентиляции и кондиционирования, а
              также оценка энергоэффективности здания
            </p>
            <p className="services_title">Подробнее</p>
          </div>
          <div className="services_item">
            <img className="services_image" src={three}></img>
            <h5>Телеинспекция инженерных сетей</h5>
            <p className="services_text">
              Цветная телевизионная съемка внутренней поверхности любых
              протяженных объектов до 250 метров
            </p>
            <p className="services_title">Подробнее</p>
          </div>
          <div className="services_item">
            <img className="services_image" src={four}></img>
            <h5>Тахеометрическая съемка</h5>
            <p className="services_text">
              Построение чертежей при помощи лазера, который с точностью до
              микрона определяет расположение объектов в пространстве
            </p>
            <p className="services_title">Подробнее</p>
          </div>
          <div className='marginer_right'></div>
        </HorizontalScroll>
      </div>
      <img className="progress_bar" src={bar}></img>
    </section>
);

export default Services;
