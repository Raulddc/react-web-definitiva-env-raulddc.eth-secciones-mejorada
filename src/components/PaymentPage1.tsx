import { FC } from "react";
import { FaCcPaypal } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { requestTransaction } from "../shared/mmsk";
import { ProductSelection } from "../shared/ProductSelection";

const PaymentPage1: FC = () => {
const { numSelected, price1, price2, handleAddClick, handleRemoveClick, handleDiscountCode, handleDiscountCodeSubmit } = ProductSelection();
return (
  <>
    

    <div className="  pb-20  ">
        <h1 className=" text-center text-4xl mt-14 md:mt-28 mb-10">
        PROGRAMACIÓN HIPERTROFIA
        </h1>
        <div
            data-scroll
            data-scroll-speed="1"
            className="flex justify-center mx-[5vw] mt-8"
        >
        <div className=" w-full flex gap-10 flex-col md:flex-row">
        <div className="flex-1 ">

          
        <div className="flex-1 ">
            <div className="text-center text-xl mb-4">
            Paso 1: seleccionar el número de meses que quieres contratar.
            </div> 
            <div className=" flex justify-center mt-[25px] gap-[20px]">
            Fiat: {price1.toFixed(2)}€
            
            Crypto: {price2.toFixed(2)}€
            </div>
            <a className="flex justify-center mt-[25px] gap-[20px] w-full">
              El precio se reduce cuantos más meses cojas
              
              </a>
            <div className="flex justify-center mt-[25px] gap-[20px]">
                <button
                  className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px]"
                  style={{
                    border: '1px solid #ccc',
                    backgroundColor: 'transparent',
                  }}
                >
                  Meses: {numSelected}
                </button>
                <button onClick={handleAddClick} className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#191e25]">
                  + 1 mes
                </button>
                <button onClick={handleRemoveClick} className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#191e25]">
                  - 1 mes
                </button>
            </div>
            <form className="flex justify-center mt-[25px] gap-[20px]" onSubmit={handleDiscountCodeSubmit}>
              <input type="text" name="discountCode" placeholder="Código Descuento" />
              <button className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#191e25]" type="submit">Aplicar</button>
            </form>
          

           

            <div className="flex justify-center mt-[25px] gap-[20px]">
            <p data-scroll className="text-lg text-gray-200" id="story">
            Paso 2: Realiza el pago de la cantidad indicada.
            </p>
            </div>

            <div className="flex justify-center mt-[25px] gap-[20px]">
              <a
                href="https://www.paypal.me/raulddc2811"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#191e25]"
              >
                PayPal
                <FaCcPaypal size={25} />
                
              </a>
              <a
                onClick={() => requestTransaction(price2)}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#ff8000] hover:bg-[#2884e0]" 
              >
                Metamask
                <FaEthereum size={25} />
                
              </a>
            </div>
            <div className="flex justify-center mt-[25px] gap-[20px]">
            <p data-scroll className="text-lg text-gray-200" id="story ">
            Paso 3: Completa la información requerida.
            </p>
            </div>
            <p data-scroll className="text-lg text-gray-200" id="story">
              <br></br>
            </p>
            </div>
            <div className="flex justify-center mt-[25px] gap-[20px]">
            <iframe width="600" height="1015" src="https://ebc0809d.sibforms.com/serve/MUIEABWROJYsfmFRW8F79OG70N1P37LsE8hp4ElpRV7Yy7t9NBejA-vaixpjKFAyWvtSqqz6Jfuv4jCk8xBZyEXP22wOrCkZukOt8ExzPN3UNOZhhDvgZzMsLOj6ocwRV51BRJqmqQk8Qd8Bx5zSkTSZMn_M26wY7HwkreVQHxOsYJ41TqbbX_uTxg1R1ccptpmhsD7itQT0fvbb"></iframe>
            </div>

        </div>


        <div className="flex-1 justify-center" >
          
  
            <img
              style={{ 
                position: 'sticky', 
                top: 30,  
                width: '80%',
                objectFit: 'contain',
              }}
              data-scroll
              data-scroll-speed="2"
              className="rounded-12px"
              src="HI.jpg"
              alt=""
            />
            
  
          </div>

</div>
</div>
</div>

</>
);
};

export default PaymentPage1;