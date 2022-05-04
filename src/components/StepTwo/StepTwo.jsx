import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal';
import './StepTwo.css'
import step21 from '../../image/step21.png'
import step22 from '../../image/step22.png'
import step23 from '../../image/step23.png'
import step24 from '../../image/step24.png'

const StepTwo = () => (
    <section className='steptwo'>
        <div className='steptwo_container'>
            <p className='steptwo_step'>шаг №2.</p>
            <h4 className='steptwo_main_title'>Детальное инструментальное обследованиe</h4>
            <p className='stepone_content__text steptwo_content__text'>Мы понимаем насколько важны сроки и сколько может стоить день задержки. Поэтому Вы никогда не услышите от нас слов “надо подождать пару дней, пока освободится арендное оборудование”<br/> - мы укомплектованы всем необходимым </p>
        </div>
        <div className='steptwo_scroll' style={{ width: '100vw'}}>
            <HorizontalScroll style={{ height: '358px', width: '100vw' }}>
                <div className='marginer_left'></div>
                <div className='steptwo_item'>
                    <img className='steptwo_image' src={step21}></img>
                    <p className='steptwo_text'>Локатор арматуры “Profoscope”</p>
                </div>
                <div className='steptwo_item'>
                    <p className='steptwo_text'>Измеритель прочности бетона “ОНИКС-1”</p>
                </div>
                <div className='steptwo_item'>
                    <p className='steptwo_text'>Прибор ультразвукового действия “ПУЛЬСАР-2”</p>
                </div>
                <div className='steptwo_item'>
                    <p className='steptwo_text'>Измеритель прочности бетона “Молоток Шмидта”</p>
                </div>
                <div className='steptwo_item'>
                    <p className='steptwo_text'>Локатор арматуры “Profoscope”</p>
                </div>
                <div className='marginer_right'></div>
            </HorizontalScroll>
        </div>
    </section>

)

export default StepTwo