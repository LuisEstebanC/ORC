import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Mira nuestros asombrosos productos!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src='/images/hair.jpg'
                        text='Cuidado del pelo '
                        label='Ver mas'
                        path='/About'
                        />
                         <CardItem 
                        src='/images/img-14.jpg'
                        text='Productos organicos! '
                        label='Ver mas'
                        path='/About'
                        />
                          <CardItem 
                        src='/images/img-15.jpg'
                        text='Cuidado de la piel '
                        label='Ver mas'
                        path='/About'
                        />
                         <CardItem 
                        src='/images/img-16.jpg'
                        text='Aceites organicos! '
                        label='Ver mas'
                        path='/About'
                        />
                           
                    </ul>   
                   
                </div>
            </div>
        </div>
    );
    
};

export default Cards;
