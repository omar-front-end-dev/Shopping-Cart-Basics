import { PropTypes } from "prop-types"
import "./Cart_Item.css"
import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { removeFromCart } from "../../RTK/Slices/CartSlice"
import { FaRegTrashCan } from "react-icons/fa6";
import Swal from 'sweetalert2'

export default function Cart_Item({ item }) {
    const dispatch = useDispatch()


    const removeItemHandler = (id) =>{
        Swal.fire({
            position: "center",
            icon: "success",
            title: "The product has been deleted",
            showConfirmButton: true,
          });
        dispatch(removeFromCart(id))
    }

    console.log(item);
  return (
    <>
       <tr>
            <td className="text-center">
                <img className="cart-page__item-image" src={item.thumbnail} alt={item.title} />
            </td>
            <td className="text-center py-5 fw-bold">
                {item.title}
            </td>
            <td className="text-danger fw-bold text-center py-5">
                {item.price}
            </td>
            <td className="text-center py-5 fw-bold">
                {item.brand}
            </td>
            <td className="text-center py-5 fw-bold">
                {item.category}
            </td>
            <td className="text-center py-5 fw-bold">
                {item.qyt}
            </td>
            <td className="text-center py-5 fw-bold">
                {item.price * item.qyt}
            </td>
            <td className="text-center py-5 fw-bold">
                <Button onClick={() => removeItemHandler(item.id)} variant="danger">
                    Delete
                    <FaRegTrashCan className="ms-2"/>
                </Button>
            </td>
        </tr>
    </>
  )
}



Cart_Item.propTypes = {
    item : PropTypes.object,
}