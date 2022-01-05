import React from 'react';
import { render, waitFor,} from '@testing-library/react';

import Map from '../components/Map';
import { useYandexMap, getGeocoderData, createPlacemark} from '../useYandexMap';

const yMapsO={
  yMaps:{},
  yMapObject:{
    geoObjects:{
      get:(ind)=>{
        const arr=[0,1,2,3];
        return arr[ind];
      }
    }
  },
  setYMapObject:()=>{},
  yMapIsAvailable:true
}

const yMapsOO={
  yMaps:{},
  yMapObject:{
    geoObjects:{
      arrMain:[],
      get:(ind)=>{
        const arr=[0,1,2,3];
        return arr[ind];
      },
      add:(placemark)=>{
        this.arrMain.push(placemark);
      }
    }
  },
  setYMapObject:()=>{},
  yMapIsAvailable:false
}

jest.mock('../useYandexMap',()=>{
  return {
    getGeocoderData:jest.fn(),
    createPlacemark:jest.fn(),
    createPolyline:jest.fn(),
    useYandexMap:jest.fn()
  }
});

const defaultMapProps_1={
  address:'Химки',
  getAddressesList:jest.fn(),
  addressesListChanged:null,
  addressDeleted:null,
  deleteAll:false,
  open:true
}

const defaultMapProps_2={
  address:null,
  getAddressesList:jest.fn(),
  addressesListChanged:null,
  addressDeleted:null,
  deleteAll:false,
  open:true
}

const mockGetGeocoderData = Promise.resolve({id:'1',corrds:[55.753994, 37.622093],address:'Москва'});
const placemark = {};

describe('Map',()=>{

  it("Shouldrun createPlacemark", async ()=>{
    useYandexMap.mockImplementation(()=>yMapsOO);
    getGeocoderData.mockImplementation(()=>mockGetGeocoderData);

    const updatePolyline = jest.fn();

    render(<Map {...defaultMapProps_1}/>);
    await waitFor(()=>{
    expect(updatePolyline).toHaveBeenCalledTimes(0);
   });
  });

  it('Should run getGeocoderDat',async ()=>{
      useYandexMap.mockImplementation(()=>yMapsO);
      getGeocoderData.mockImplementation(()=>mockGetGeocoderData);

      render(<Map {...defaultMapProps_1}/>);
      await waitFor(()=>{
        expect(getGeocoderData).toHaveBeenCalledTimes(1);
      });
  });


  it("Shouldn't run getGeocoderDat", async ()=>{
    useYandexMap.mockImplementation(()=>yMapsO);
    getGeocoderData.mockImplementation(()=>mockGetGeocoderData);

    render(<Map {...defaultMapProps_2}/>);
    await waitFor(()=>{
      expect(getGeocoderData).toHaveBeenCalledTimes(0);
    });
  });


  it("Should run createPlacemark", async ()=>{
    useYandexMap.mockImplementation(()=>yMapsO);
    getGeocoderData.mockImplementation(()=>mockGetGeocoderData);
    createPlacemark.mockImplementation(()=>placemark);

    render(<Map {...defaultMapProps_1}/>);
    await waitFor(()=>{
    expect(getGeocoderData).toBeCalledTimes(1);
    expect(createPlacemark).toHaveBeenCalledTimes(2);
    expect(defaultMapProps_1.getAddressesList).toBeCalledTimes(2);
   });
  });


});
