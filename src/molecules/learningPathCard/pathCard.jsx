import './pathCard.css'
import React from 'react'
import Text from '../../atoms/text';
import playImgWhole from '../../img/paths/playPathCard.svg'
import playImgYours from '../../img/paths/playPathCardYours.svg'
const PathCard = ({type, pathObject}) =>{
    const stylingObject ={
        titleColor: type=="whole"? "#C19D72": "#523E53",
        descriptionColor: type=="whole"? "#C1BECE": "#7B6674",
        classModifier:  `${type}`,
    }
    const playImg = type == "whole"? playImgWhole: playImgYours;
    return(
        <div className = "path-card__container">
            
            <div className ={`path-card__content path-card__content--${stylingObject.classModifier}`}>
                <div className ="path-card__image"></div>
                <div className ="path-card__description">
                    <Text content = {pathObject.nombre_ruta}  fontSize="30px" color= {stylingObject.titleColor} fontWeight="bold"/>
                    <Text content = {pathObject.descripcion_ruta} fontSize="17px" color= {stylingObject.descriptionColor} fontWeight="bold"/>
                    <Text content = {`Dificultad ${pathObject.dificultad} | ${pathObject.cantidad_temas} temas`} fontSize="17px" color= {stylingObject.descriptionColor} fontWeight="bold"/>
                </div>
            </div>
            <div className ={`path-card__button-container path-card__button-container--${stylingObject.classModifier}`}>
                <img className ="path-card__button-click" src={playImg}/>
            </div>
            
        </div>
    );
}

export default PathCard;