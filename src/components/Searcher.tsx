import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { RootState } from '../store';
import { setSearchText } from '../slices/uiSlice';

export const Searcher = () => {
  const searchText = useSelector((state: RootState) => state.ui.searchText);
  const dispatch = useDispatch<Dispatch<any>>();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(e.target.value));
  }

  return <Input.Search
    value={searchText}
    placeholder='Buscar...'
    style={{ marginBottom: '1rem'}}
    onChange={handleSearch}
  />;
};
