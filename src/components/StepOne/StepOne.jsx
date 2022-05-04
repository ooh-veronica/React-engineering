import React from 'react'
import './StepOne.css'
import unsplash from '../../image/unsplash.png'
import photoreview from '../../image/photoreview.svg'

function StepOne() {
  return (
    <section>
        <div className='stepOne'>
            <p className='stepone_title'>
                Мы работаем в комплексе
            </p>
            <p className='stepone_text'>чтобы Вы не тратили время на поиск и организацию множества подрядчиков</p>
            <div  className='stepone_container'>
                <div  className='stepone_image'>
                    <img src={unsplash}></img>
                </div>
                <div className='stepone_content'>
                    <h4 className='stepone_main_title'>Подготовительные работы</h4>
                    <p className='stepone_content__text'>Мы осматриваем здание, делаем замеры и проверяем наличие визуально заметных дефектов: трещин, коррозии, повреждения фундамента и т.д. </p>
                    <div>
                        <div className='review'>
                            <img src={photoreview}></img>
                            <p className='stepone_content__review'>“Задача этого этапа получить максимально полное представление о конструкции здания, условиях его эксплуатации и возможных слабых местах“</p>
                        </div>
                        <p className='stepone_content__author'>АЛЕКСЕЙ, обследователь и главный инженер проектов</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default StepOne