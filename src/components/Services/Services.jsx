import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import { Scrollbars } from 'react-custom-scrollbars';
import './Services.css'
import one from '../../image/one.png'
import two from '../../image/two.png'
import three from '../../image/tree.png'
import four from '../../image/four.png'
import bar from '../../image/progress bar.png'

function Services() {

    

  return (
    <section className='services'>
        <p className='services_main__title'>Услуги</p>
        <h3>Выполняем как комплексное обследование, так и отдельные виды работ</h3>
            <HorizontalScroll style={{ height: "444px" }} className='services_list'>
                <div className="services_item">
                    <img className='services_image' src={one}></img>
                    <h5>Общее обследование</h5>
                    <p className='services_text'>Экспертиза отдельных конструкций, обмерные работы, определение прочности, расчет несущей способности и т.д.</p>
                    <p className='services_title'>Подробнее</p>
                </div>
                <div  className="services_item">
                    <img className='services_image' src={two}></img>
                    <h5>Тепловизионная съемка</h5>
                    <p className='services_text'>Исследование системы отопления, вентиляции и кондиционирования, а также оценка энергоэффективности здания</p>
                    <p className='services_title'>Подробнее</p>
                </div>
                <div className="services_item">
                    <img className='services_image' src={three}></img>
                    <h5>Телеинспекция инженерных сетей</h5>
                    <p className='services_text'>Цветная телевизионная съемка внутренней поверхности любых протяженных объектов до 250 метров</p>
                    <p className='services_title'>Подробнее</p>
                </div>
                <div className="services_item">
                    <img className='services_image' src={four}></img>
                    <h5>Тахеометрическая съемка</h5>
                    <p className='services_text'>Построение чертежей при помощи лазера, который с точностью до микрона определяет расположение объектов в пространстве</p>
                    <p className='services_title'>Подробнее</p>
                </div>
                <div className="services_item">
                    <img className='services_image' src={four}></img>
                    <h5>Тахеометрическая съемка</h5>
                    <p className='services_text'>Построение чертежей при помощи лазера, который с точностью до микрона определяет расположение объектов в пространстве</p>
                    <p className='services_title'>Подробнее</p>
                </div>
                <div className="services_item">
                    <img className='services_image' src={four}></img>
                    <h5>Тахеометрическая съемка</h5>
                    <p className='services_text'>Построение чертежей при помощи лазера, который с точностью до микрона определяет расположение объектов в пространстве</p>
                    <p className='services_title'>Подробнее</p>
                </div>
            </HorizontalScroll>
                
            <img className='progress_bar' src={bar}></img>
    </section>
  )
}

export default Services

