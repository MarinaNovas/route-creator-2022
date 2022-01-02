
import { useContext, useEffect, useState, useCallback } from 'react';
import { LanguageContext } from './context/Context';
import { nanoid } from 'nanoid';
import shuffle from 'lodash.shuffle';


const apikey = '8cd86709-0417-4e3e-bfe9-79ae038970be';


const pointIcons = shuffle([
  'islands#blueCircleDotIcon',
  'islands#redCircleDotIcon',
  'islands#darkOrangeCircleDotIcon',
  'islands#nightCircleDotIcon',
  'islands#darkBlueCircleDotIcon',
  'islands#pinkCircleDotIcon',
  'islands#grayCircleDotIcon',
  'islands#brownCircleDotIcon',
  'islands#darkGreenCircleDotIcon',
  'islands#violetCircleDotIcon',
  'islands#blackCircleDotIcon',
  'islands#yellowCircleDotIcon',
  'islands#greenCircleDotIcon',
  'islands#orangeCircleDotIcon',
  'islands#lightBlueCircleDotIcon',
  'islands#oliveCircleDotIcon'
]);


function getRandomIcon() {
  let index = Math.floor(Math.random() * (pointIcons.length - 1));
  return pointIcons[index];
};


async function getGeocoderData(yMaps, address, coords) {
  const inputData = address ? address : coords;
  const promiseGeocodeData = await yMaps.geocode(inputData, { results: 1 });
  const responseGeocodeData = await promiseGeocodeData;
  const geoObject = responseGeocodeData.geoObjects.get(0);
  const geoCoords = geoObject.geometry.getCoordinates();
  const id = nanoid(10);
  const geoAddress = geoObject.properties.get('text');

  return { id, coords: geoCoords, address: geoAddress };
}

function createPlacemark(yMaps, geoObject, setDragStart, setNewCoordinates) {
  const placemark = new yMaps.Placemark(geoObject.coords, {
    type: 'point',
    id: geoObject.id,
    iconContent: '',
    balloonContent: geoObject.address,
  }, {
    preset: getRandomIcon(),
    draggable: true
  });

  placemark.events.add('dragstart', (e) => {
    const currentTarget = e.get('target');
    const id = currentTarget.properties.get('id');
    setDragStart(id);
  });

  placemark.events.add('drag', (e) => {
    const currentTarget = e.get('target');
    const id = currentTarget.properties.get('id');
    const coords = currentTarget.geometry.getCoordinates();
    setNewCoordinates({ id, coords });
  });

  placemark.events.add('dragend', (e) => {
    setDragStart(null);
  });

  return placemark;
}


function CreatePolyline(yMaps, coordinates, properties) {

  try{
    const polyline = new yMaps.Polyline(
      coordinates,
      ...properties
    );
    return polyline;

  }catch(e){
    alert(e);
  }
}

function useYandexMap(refMap) {
  const [yMaps, setYMaps] = useState(null);
  const [yMapObject, setYMapObject] = useState(null);
  const language = useContext(LanguageContext);
  const [yMapIsAvailable,setYMapIsAvailable] = useState(false);


  const src = `https://api-maps.yandex.ru/2.1/?lang=${language}&ns=ymaps_${language}&apikey=${apikey}`;

  function createYMapObject(yMaps, refMapContainer) {
    const yMapObject = new yMaps.Map(refMapContainer,
      {
        center: [55.753994, 37.622093],
        controls: [],
        zoom: 9
      },
      {
        minZoom: 1,
        maxZoom: 11,
        autoFitToViewport: 'always'
      },
      {
        searchControlProvider: 'yandex#search',
      }
    );
    return yMapObject;
  }

  const connectYandexMap = useCallback(async () => {

    if (window[`ymaps_ru`]) delete window[`ymaps_ru`];
    if (window[`ymaps_en`]) delete window[`ymaps_en`];

    let propmise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.type = 'text/javascript';
      script.async = true;
      script.setAttribute('name', 'yandexMap');
      script.addEventListener('load', () => resolve(window[`ymaps_${language}`]));
      script.addEventListener('error', (e) => reject());
      document.head.append(script);
    });

    let yMaps = await propmise;
    return yMaps;
  }, [src, language]);


  useEffect(() => {
    setYMapIsAvailable(false);
    connectYandexMap().then(setYMaps).catch(alert);
  }, [connectYandexMap]);

  useEffect(() => {
    if (!yMaps) return;

    yMaps.ready(() => {
      setYMapObject((createYMapObject(yMaps, refMap)));
      setYMapIsAvailable(true);
    });

    return function cleanup() {
      yMaps.ready(() => {
        setYMapObject((yMapObject) => {
          if (yMapObject) yMapObject.destroy();
        })
      });
      setYMapIsAvailable(false);
    };

  }, [yMaps, refMap]);

  return { yMaps, yMapObject, setYMapObject, yMapIsAvailable};
}

export { useYandexMap, getGeocoderData, createPlacemark, CreatePolyline };