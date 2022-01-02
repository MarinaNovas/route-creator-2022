import React from "react";
import { useRef, useEffect, useState, useCallback } from "react";

import { useYandexMap, getGeocoderData, createPlacemark, CreatePolyline } from "../useYandexMap";

import { drawerWidth, toolbarHeight,backgroundColorPrimary, toolbarHeightMin} from "./constants";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";

const Main=styled(Box, {shouldForwardProp: (prop)=>prop!=='open'})(
  ({theme,open})=>({
    height:`calc(100% - ${toolbarHeight}px)`,
    backgroundColor:backgroundColorPrimary,
    transition:theme.transitions.create('width,margin',{
      easing:theme.transitions.easing.sharp,
      duration:theme.transitions.duration.leavingScreen
    }),
    width:'100%',
    marginLeft:'auto',
    marginTop:toolbarHeight,
    ...(open && {
      transition:theme.transitions.create('width,margin',{
        easing:theme.transitions.easing.easeOut,
        duration:theme.transitions.duration.enteringScreen
      }),
      width:`calc(100% - ${drawerWidth}px)`,
    }),
    [theme.breakpoints.down('sm')]:{
      marginTop:toolbarHeightMin
    }
  })
);

const polylineProperties = [
  {
    // Описываем свойства геообъекта.
    // Содержимое балуна.
    type: 'polyline',
    balloonContent: "Ломаная линия"
  }, {
    // Задаем опции геообъекта.
    // Отключаем кнопку закрытия балуна.
    balloonCloseButton: false,
    // Цвет линии.
    strokeColor: "#000000",
    // Ширина линии.
    strokeWidth: 2,
    // Коэффициент прозрачности.
    strokeOpacity: 0.5
  }
];

const polylineProjectionProperties = [
  { type: 'polyline-projection' },
  {
    strokeColor: '#FF008888',
    strokeStyle: 'dash',
    strokeWidth: 1,
  }
];


function Map({ address, getAddressesList, addressesListChanged, addressDeleted, deleteAll, open}) {
  const refMapContainer = useRef(null);
  const { yMaps, yMapObject, setYMapObject, yMapIsAvailable } = useYandexMap(refMapContainer.current);
  const [polylineCoordinates, setPolylineCoordinates] = useState([]);
  const [newCoordinates, setNewCoordinates] = useState(null);
  const [dragStart, setDragStart] = useState(null);


  //put a new markPoint on the Map
  const updateYMapObject = useCallback(() => {

    if (!address) return;

    getGeocoderData(yMaps, address, false)
      .then(geoObjectData => {
        const placemark = createPlacemark(yMaps, geoObjectData, setDragStart, setNewCoordinates);
        setYMapObject(prevYMapObject => {
          prevYMapObject.geoObjects.add(placemark);
          prevYMapObject.setBounds(prevYMapObject.geoObjects.getBounds(), { checkZoomRange: true });
          return prevYMapObject;
        });
        setPolylineCoordinates((data) => [...data, geoObjectData]);
      }).catch(alert);

  }, [yMaps, address, setYMapObject]);

  //refresh a polyline and a state of addressList
  const updatePolyline = useCallback(() => {
    if (!yMapIsAvailable) return;

    getAddressesList(polylineCoordinates);

    setYMapObject(yMapObject => {
      yMapObject.geoObjects.each((geoObject) => {
        if (geoObject.properties.get('type') === 'polyline') {
          yMapObject.geoObjects.remove(geoObject);
        }
      });
      return yMapObject;
    });

    if (polylineCoordinates.length <= 1) return;

    const polyline = CreatePolyline(yMaps, [...polylineCoordinates.map(item => item.coords)], polylineProperties);

    setYMapObject(yMapObject => {

      yMapObject.geoObjects.add(polyline);
      return yMapObject;
    });
  }, [yMaps, polylineCoordinates, getAddressesList, setYMapObject, yMapIsAvailable]);

  //call updateYMapObject wich put a new markPoint on the Map
  useEffect(() => {
    if(!yMapIsAvailable) return;
    updateYMapObject();
  }, [yMaps,yMapIsAvailable,address, updateYMapObject]);

  //call updatePolyline wich refresh a polyline and a state of addressList
  useEffect(() => {
    updatePolyline();
  }, [yMaps, yMapObject, polylineCoordinates, updatePolyline]);

  //set a polyline projection, get a new address after drag a placeMark
  useEffect(() => {

    if (polylineCoordinates.length === 1) {
      if (newCoordinates && !dragStart) {
        getGeocoderData(yMaps, false, newCoordinates.coords)
          .then(geoObjectData => {
            setYMapObject((yMapObject) => {
              yMapObject.geoObjects.each((geoObject) => {
                geoObject.properties.set('id', geoObjectData.id);
                geoObject.properties.set('balloonContent', geoObjectData.address);
              });
              return yMapObject;
            });
            setPolylineCoordinates([{ id: geoObjectData.id, coords: newCoordinates.coords, address: geoObjectData.address }]);
            setNewCoordinates(null);
          })
          .catch(alert);
      }
      return
    };

    if (polylineCoordinates.length < 2) return;

    if (!newCoordinates && dragStart) {
      let index = polylineCoordinates.findIndex((item, index) => item.id === dragStart);

      let polylineProjectionCoordinates;

      if (index === 0) {

        polylineProjectionCoordinates = [polylineCoordinates[index + 1].coords, polylineCoordinates[index].coords];

      } else {

        if (index === polylineCoordinates.length - 1) {

          polylineProjectionCoordinates = [polylineCoordinates[index - 1].coords, polylineCoordinates[index].coords];

        } else {
          polylineProjectionCoordinates = [polylineCoordinates[index - 1].coords, polylineCoordinates[index].coords, polylineCoordinates[index + 1].coords];
        }
      }

      setYMapObject((yMapObject) => {
        const editPolyline = CreatePolyline(yMaps, polylineProjectionCoordinates, polylineProjectionProperties);
        yMapObject.geoObjects.add(editPolyline);
        return yMapObject;
      });
    }

    if (newCoordinates && dragStart) {
      setYMapObject((yMapObject) => {
        yMapObject.geoObjects.each((geoObject) => {
          if (geoObject.properties.get('type') === 'polyline-projection') {
            geoObject.geometry.set(1, newCoordinates.coords);
          }
        });
        return yMapObject;
      });
    }

    if (newCoordinates && !dragStart) {

      getGeocoderData(yMaps, false, newCoordinates.coords)
        .then(geoObjectData => {
          setYMapObject((yMapObject) => {
            yMapObject.geoObjects.each((geoObject) => {
              if (geoObject.properties.get('type') === 'polyline-projection') {
                yMapObject.geoObjects.remove(geoObject);
              }

              if (geoObject.properties.get('id') === newCoordinates.id) {

                geoObject.properties.set('id', geoObjectData.id);
                geoObject.properties.set('balloonContent', geoObjectData.address);
              }
            });
            return yMapObject;
          });
          setPolylineCoordinates((coordinatesPrev) => coordinatesPrev.map((item) => item.id === newCoordinates.id ? { id: geoObjectData.id, coords: newCoordinates.coords, address: geoObjectData.address } : item));
          setNewCoordinates(null);
        })
        .catch(alert);
    }

  }, [yMaps, yMapObject, polylineCoordinates, newCoordinates, dragStart, setYMapObject]);

  //shuffle PolylineCoordinates
  useEffect(() => {

    if (!addressesListChanged) return;
    setPolylineCoordinates(addressesListChanged);

  }, [addressesListChanged]);

  //delete one point and update PolylineCoordinates
  useEffect(() => {

    if (!addressDeleted) return;

    setPolylineCoordinates(prevPolylineCoordinates => {

      const newPolylineCoordinates = prevPolylineCoordinates.filter(item => item.id !== addressDeleted.id);
      return newPolylineCoordinates;
    });

    setYMapObject(YMapObject => {
      YMapObject.geoObjects.each(geoObject => {
        if (geoObject.properties.get('id') === addressDeleted.id) {

          YMapObject.geoObjects.remove(geoObject);
        }
      });
      return YMapObject;
    });

  }, [setYMapObject, addressDeleted]);

//update markplaces on the map after changing language
  useEffect(() => {

    if (!yMapIsAvailable) return;

    if (polylineCoordinates.length !== 0) {
      if (!yMapObject.geoObjects.get(0)) {
        polylineCoordinates.forEach((coords) => {
          const placemark = createPlacemark(yMaps, coords, setDragStart, setNewCoordinates);
          setYMapObject(prevYMapObject => {
            prevYMapObject.geoObjects.add(placemark);
            prevYMapObject.setBounds(prevYMapObject.geoObjects.getBounds(), { checkZoomRange: true });
            return prevYMapObject;
          });
        }); 
      }
    }
  });

  useEffect(()=>{
    if(!yMapIsAvailable) return;
    setYMapObject((YMapObject)=>{
      YMapObject.container.fitToViewport();
      return YMapObject;
    });
  },[open,setYMapObject,yMapIsAvailable]);

//remove all geoObjects and polylines
  useEffect(()=>{

    if(!deleteAll) return;

    setPolylineCoordinates([]);

    setYMapObject(yMapObject=>{
      yMapObject.geoObjects.removeAll();
      return yMapObject;
    });

  },[deleteAll,setYMapObject]);

  return (
    <Main ref={refMapContainer} open={open}/>
  );
}

export default Map;