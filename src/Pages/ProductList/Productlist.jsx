import './Productlist.css'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Productrows } from "../../Dummydata";
import { Link } from "react-router-dom";
import { useState } from "react";


const Productlist = () => {
    const [data,setData]=useState(Productrows)
    const handeldelete = (id)=>{
        setData(data.filter(item=>item.id!==id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'product', width: 200,renderCell:(params)=>{
            return(
                <div className="productListItem">
                    <img className="productListimg" src={params.row.img} alt="" />
                    {params.row.name}
                </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
          field: 'Status',
          headerName: 'Status',

          width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
  
            width: 140,
          },
        {
            field: 'Action',
            headerName: 'Action',
  
            width: 93,
            renderCell:(params)=>{
                return(<>
                <Link to={"/product/" +params.row.id}>

                    <button className="productListEdit">
                    Edit
                    </button>
                </Link>
                    <DeleteOutlineIcon onClick={()=>handeldelete(params.row.id)}className="productListDelete"/>
                    </>)
            }
          },
      ];
      

  return (
    <div className='productList'>
             <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        checkboxSelection
        />
    </div>
  )
}

export default Productlist