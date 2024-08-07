import React from "react";
import "./style.css";

// `getDate` funksiyasini eksport qilmadingiz, shuning uchun u har doim `SingleProducts` ichida e'lon qilingan bo'lishi kerak
const getDate = async (id) => {
    const req = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await req.json();
    return { data };
};

async function SingleProducts({ params }) {
    const { data } = await getDate(params.id);

    return (
        <div>
            <div className="card">
                <div className="imgBox">
                    <img
                        src={data.thumbnail}
                        alt="mouse corsair"
                        className="mouse"
                    />
                </div>

                <div className="contentBox">
                    <h3>{data.title}</h3>
                    <h2 className="price">{data.price} $</h2>
                    <a href="#" className="buy">
                        Buy Now
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SingleProducts;
