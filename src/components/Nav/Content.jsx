import React from 'react'
import video from '../../image/video.png'

const Content = () => (
    <div className='nav_content'>
        <div className='nav_main__container'>
            <div className='nav_main__content'>
                <h2 className='nav_title'>Независимое обследование зданий и сооружений</h2>
                <p>антенн, труб, теплосетей, канализаций и других объектов строительства</p>
            </div>
            <div className='nav_main__get'>
                <button className='button nav_button'>получить коммерческое</button>
                <p>Отправьте техзадание и получите коммерческое предложени в течении 15 минут на свой email или в мессенджер</p>

            </div>
        </div>
        <div className='nav_main_block container'>
            <div className='nav_main__list'>
                <ul className='nav_list'>
                    <li className='nav_item1 nav_item'>
                        <p>Начинаем работать без аванса</p>
                    </li>
                    <li className='nav_item2 nav_item'>
                        <p>Предоставляем отсрочку платежа</p>
                    </li>
                    <li className='nav_item3 nav_item'>
                        <p>Всегда называем справедливую цену</p>
                    </li>
                </ul>
                <div className='nav_video'>
                    <img src={video}></img>
                </div>
            </div>

        </div>
    </div>
)

export default Content