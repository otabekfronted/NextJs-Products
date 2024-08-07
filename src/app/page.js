import Link from "next/link";
import { Istok_Web } from "next/font/google";
const getDate = async () => {
    const req = await fetch("https://dummyjson.com/products");
    const data = await req.json();
    return { data };
};

async function Home() {
    const { data } = await getDate();
    return (
        <div className="p-8">
            <h1 className="text-3xl mb-10">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.products.map((prod) => (
                    <div
                        key={prod.id}
                        className="card bg-base-100 image-full shadow-xl"
                    >
                        <figure>
                            <img
                                src={prod.thumbnail}
                                alt={prod.title}
                                className="object-cover w-full h-48"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{prod.title}</h2>
                            <p>{prod.description.substring(0, 100)}...</p>
                            <div className="card-actions w-full text-center">
                                <Link
                                    className="inline-block py-2 px-4 bg-primary text-white rounded-xl hover:bg-primary-dark transition duration-300"
                                    href={`/singleProducts/${prod.id}`}
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
