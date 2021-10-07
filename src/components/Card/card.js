export const ProductCard = ({ description, category, price }) => {

    console.log(description, category, price)
    return <div style={{ backgroundColor: "blue", margin: 10, padding: 10 }}>
        <p>{description}</p>
        <p>{category}</p>
        <p>{price}</p>
    </div>
}