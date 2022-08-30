import Item from "./Item"
import Item2 from "./Item2"
import ImgFeuc from "./ImgFeuc"
import ImgSEP from './ImgSEP'

const ItemsContainer = () => {
    return (
        <div>
            <div className="bg-blue-900 text-black p-20 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-40 sm:px-8 px-5 py-10">
                <Item />
                <ImgFeuc />
                <ImgSEP />
                <Item2 />
            </div>
            <div className="text-center ">
                <h1 className="text-center bg-blue-900 text-black p-6">© Derechos Reservados Universidad de Colima</h1>
            </div>
        </div>

    )
}

export default ItemsContainer