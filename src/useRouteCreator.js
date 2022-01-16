import shuffle from 'lodash.shuffle';
import { useState, useCallback} from "react";

function useAddressList(){

  const [pointName, setPointName] = useState(null);
  const [addressesList, setAddressesList] = useState(null);
  const [addressesListChanged, setAddressesListChanged] = useState(null);
  const [addressDeleted, setAddressDeleted] = useState(null);
  const [deleteAll, setDeleteAll] = useState(false);

  function handleShuffleClick() {
    setAddressesListChanged(shuffle(addressesList));
  }

  function handleJumbledAddress(jumbledAddresses) {
    const newJumbledAddresses = jumbledAddresses.map((id) => {
      return addressesList.find((itemZ) => itemZ.id === id);
    });
    setAddressesListChanged(newJumbledAddresses)
  }

  function handleDelete(id) {
    setAddressDeleted(...addressesList.filter(item => item.id === id));
  }

  function handleDeleteAll() {
    setDeleteAll(true);
  }

  function handleSetPointName(newPointName) {
    setPointName(newPointName);
  }

  const getAddressesList = useCallback((addresses) => {
    setAddressesList(addresses);
    setPointName(null);
    setDeleteAll(false);
  }, [setAddressesList]);

  return {pointName, handleSetPointName, addressesList, getAddressesList, addressesListChanged, handleShuffleClick, handleJumbledAddress, addressDeleted, handleDelete, deleteAll, handleDeleteAll}
}

export default useAddressList;