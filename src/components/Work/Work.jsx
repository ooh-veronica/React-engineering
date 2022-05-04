import React from 'react'
import './Work.css'
import tv from '../../image/tv.svg'

function Work() {
  return (
    <section className='work container'>
        <div className='description_container'> 
            <div className='work_description'>
                <h3>
                Мы работаем быстро и наши отчеты проходят согласование с первого раза
                </h3>
                <p>Над вашим объектом работает целая команда:3 ГИПа (главных инженеров проектов) с опытом работы от 6 лет и 2 штатных сотрудника для камеральных работ</p>
            </div>
        </div>
        <div className='work_image'>
            <img src={tv}></img>
        </div>
        <div className='pluses_container'> 
            <div className='work_pluses'>
                <h4>Вы и Ваши архитекторы получаете:</h4>
                <ul className='work_list'>
                    <li className='work_item'>
                        <p className='work_item__text'>Отчет на который на 100% можно положиться </p>
                    </li>
                    <li className='work_item'>
                        <p className='work_item__text'>Экономию времени и прогнозируемость сроков</p>
                    </li>
                    <li className='work_item'>
                        <p className='work_item__text'>Предварительные результаты сразу на месте</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Work