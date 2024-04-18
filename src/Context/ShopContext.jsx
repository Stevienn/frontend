//shopcontext dipakai untuk menampilkan barang pada page khusus menampilkan barang tertentu

import React, { createContext } from 'react';
import all_product from '../Components/Assets/all_product';

//dengan menggunakan context, kita bisa menggunakannya di komponen yang berbeda beda
//karena context menggunakan sistem pewarisan
//jangan lupa untuk membungkus index.js dengan context yang telah dibuat

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const contextValue = {all_product};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
