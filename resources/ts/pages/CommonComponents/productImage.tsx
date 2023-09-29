function productImage (props: {image: string, alt: string}) {

return (
    <div className="product-image">
        <div className="product-image__container">
        <img
                    src={
                      props.image
                        ? `/storage/productImages/${props.image}`
                        : "/storage/productImages/placeholder.jpg"
                    }
                    alt={props.alt}
                    className="object-cover w-40 h-40 rounded-sm"
                  />
        </div>
    </div>

)
}

export default productImage