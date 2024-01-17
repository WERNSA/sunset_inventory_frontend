import React, { useEffect, useState } from "react";
import {
  useLoaderData,
  useOutletContext,
  useRevalidator,
} from 'react-router-dom';
import { notification } from 'antd';
import Actions from "./Actions";
import Table from "./Table";
import CategoryForm from './Form';
import { deleteCategory }  from '../../../api/catalog/category';

const Category = () => {
   const { setTitle } = useOutletContext();
   const loader = useLoaderData();
   const reloader = useRevalidator();
   const [filterData, setFilterData] = useState([]);
   const [showForm, setShowForm] = useState(false);
   const [api, contextHolder] = notification.useNotification();
   const [editData, setEditData] = useState({});

    const openNotification = (type) => {
      api[type]({
        message: type === 'success' ? 'Guardado!' : 'Error!',
        description:
          type === 'success'
            ? 'El registro se ha guardado con exito!'
            : 'Ha ocurrido un error!',
        placement: 'bottomRight',
      });
      if (type === 'success') reloader.revalidate();
    };
   
   
    useEffect(() => {setTitle('Categorías')}, []);

    useEffect(() => {
       if (loader?.data) {
      setFilterData(loader.data);
    }
    }, [loader]);

     const searchData = (name) => {
    if (!name) {
      setFilterData(loader.data);
    } else if (loader?.data) {
      const newSearch = loader.data.filter((f) =>
        f.name.toLowerCase().includes(name.toLowerCase())
      );
      setFilterData(newSearch);
    }
  };
  const edit = (obj) => {
    setEditData(obj);
    setShowForm(true);
  };

  const cancelEdit = () => {
    setShowForm(false);
    setEditData({});
  };

  const deleteRecord = (id) => {
    deleteCategory(id).then(() => openNotification('success'));
  };

    return (
      <div>
        {contextHolder}
        {!showForm ? (
          <>
            <Actions setShowForm={setShowForm} searchData={searchData} />
            <Table data={filterData} edit={edit} delete={deleteRecord} />
          </>
        ) : (
          <CategoryForm
            data={editData}
            cancel={cancelEdit}
            openNotification={openNotification}
          />
        )}
      </div>
    );
      
      
};

export default Category;